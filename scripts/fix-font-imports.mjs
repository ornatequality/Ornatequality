/** Replace duplicate next/font Inter/Playfair blocks with shared @/lib/fonts imports. */
import { readFile, writeFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.join(__dirname, "..", "src");

const INTER_DECL = /\r?\nconst inter = Inter\(\{[\s\S]*?\}\);\r?\n/g;
const PLAYFAIR_DECL = /\r?\nconst playfair = Playfair_Display\(\{[\s\S]*?\}\);\r?\n/g;
const INTER_IMPORT = /^import \{ Inter \} from "next\/font\/google";\r?\n/m;
const INTER_PLAYFAIR_IMPORT =
  /^import \{ Inter, Playfair_Display \} from "next\/font\/google";\r?\n/m;

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else if (/\.tsx?$/.test(entry.name) && !full.endsWith("fonts.ts")) files.push(full);
  }
  return files;
}

function patch(content) {
  if (!content.includes("const inter = Inter(")) return content;

  const hadPlayfair = content.includes("const playfair = Playfair_Display(");
  let next = content;

  next = next.replace(INTER_DECL, "\n");
  if (hadPlayfair) next = next.replace(PLAYFAIR_DECL, "\n");

  const fontImport = hadPlayfair
    ? 'import { inter, playfair } from "@/lib/fonts";\n'
    : 'import { inter } from "@/lib/fonts";\n';

  if (INTER_PLAYFAIR_IMPORT.test(next)) {
    next = next.replace(INTER_PLAYFAIR_IMPORT, fontImport);
  } else if (INTER_IMPORT.test(next)) {
    next = next.replace(INTER_IMPORT, fontImport);
  } else {
    next = fontImport + next;
  }

  return next;
}

async function main() {
  const files = await walk(srcDir);
  let count = 0;

  for (const file of files) {
    const content = await readFile(file, "utf8");
    const updated = patch(content);
    if (updated !== content) {
      await writeFile(file, updated, "utf8");
      count += 1;
      console.log(`✓ ${path.relative(srcDir, file)}`);
    }
  }

  console.log(`\nUpdated ${count} files.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
