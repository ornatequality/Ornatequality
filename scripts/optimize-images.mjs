/**
 * Compresses and converts PNG/JPEG assets to WebP, then updates source imports.
 * Run: npm run optimize:images
 */
import { readdir, readFile, writeFile, unlink, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const assetsDir = path.join(root, "src/assests");
const srcDir = path.join(root, "src");

const IMAGE_EXT = /\.(png|jpe?g)$/i;

function getMaxWidth(filePath) {
  const rel = filePath.replace(/\\/g, "/").toLowerCase();
  if (rel.includes("/clientlogo/") || rel.includes("/clientslogo/")) return 280;
  // Full-width service banners live in /services/ (1600px). certi-img icons stay small.
  if (rel.includes("/certi-img/")) return 480;
  if (rel.endsWith("logo.png")) return 512;
  if (rel.includes("/services/")) return 1600;
  return 1920;
}

async function walk(dir, filter) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(full, filter)));
    } else if (!filter || filter(full)) {
      files.push(full);
    }
  }
  return files;
}

async function optimizeImage(filePath) {
  const { size: originalSize } = await stat(filePath);
  const webpPath = filePath.replace(IMAGE_EXT, ".webp");

  if (webpPath === filePath) return null;

  const maxWidth = getMaxWidth(filePath);
  const webpBuffer = await sharp(filePath)
    .rotate()
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality: 82, effort: 4 })
    .toBuffer();

  await writeFile(webpPath, webpBuffer);

  if (webpBuffer.length < originalSize) {
    await unlink(filePath);
    return {
      from: path.relative(root, filePath),
      to: path.relative(root, webpPath),
      savedKb: Math.round((originalSize - webpBuffer.length) / 1024),
      sizeKb: Math.round(webpBuffer.length / 1024),
    };
  }

  await unlink(webpPath);
  const optimized = await sharp(filePath)
    .rotate()
    .resize({ width: maxWidth, withoutEnlargement: true })
    .toBuffer();

  if (optimized.length < originalSize) {
    await writeFile(filePath, optimized);
    return {
      from: path.relative(root, filePath),
      to: path.relative(root, filePath),
      savedKb: Math.round((originalSize - optimized.length) / 1024),
      sizeKb: Math.round(optimized.length / 1024),
    };
  }

  return null;
}

async function updateSourceImports(conversions) {
  const sourceFiles = await walk(srcDir, (f) => /\.(tsx?|jsx?|mjs)$/.test(f));
  let updatedFiles = 0;

  for (const file of sourceFiles) {
    let content = await readFile(file, "utf8");
    const before = content;

    for (const { from, to } of conversions) {
      if (from === to) continue;
      const fromExt = path.basename(from);
      const toExt = path.basename(to);
      // Replace full import path segments to avoid wrong basename collisions.
      content = content.replaceAll(from.replace(/\\/g, "/"), to.replace(/\\/g, "/"));
      content = content.replaceAll(fromExt, toExt);
    }

    if (content !== before) {
      await writeFile(file, content, "utf8");
      updatedFiles += 1;
    }
  }

  return updatedFiles;
}

async function main() {
  const images = await walk(assetsDir, (f) => IMAGE_EXT.test(f));
  console.log(`Found ${images.length} PNG/JPEG files to optimize...\n`);

  const conversions = [];
  let totalSaved = 0;

  for (const file of images) {
    try {
      const result = await optimizeImage(file);
      if (result) {
        conversions.push(result);
        totalSaved += result.savedKb;
        console.log(`✓ ${result.from} → ${result.to} (−${result.savedKb} KB → ${result.sizeKb} KB)`);
      }
    } catch (err) {
      console.error(`✗ ${path.relative(root, file)}: ${err.message}`);
    }
  }

  const updated = await updateSourceImports(conversions);

  console.log(`\nOptimized ${conversions.length} images, saved ~${totalSaved} KB total.`);
  console.log(`Updated imports in ${updated} source files.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
