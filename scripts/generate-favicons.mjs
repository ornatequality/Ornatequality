import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import toIco from "to-ico";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const source = path.join(root, "src/assests/logo.webp");
const publicDir = path.join(root, "public");
const appDir = path.join(root, "src/app");

/** Crop only the ORNATE "O" mark (top-left square), without wordmark text */
async function getMarkPipeline() {
  const markSize = 95;

  return sharp(source).extract({
    left: 0,
    top: 0,
    width: markSize,
    height: markSize,
  });
}

async function resizePng(pipeline, size) {
  return pipeline
    .clone()
    .resize(size, size, {
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    })
    .png()
    .toBuffer();
}

async function main() {
  await mkdir(publicDir, { recursive: true });
  await mkdir(appDir, { recursive: true });

  const mark = await getMarkPipeline();

  const sizes = {
    16: "favicon-16x16.png",
    32: "favicon-32x32.png",
    180: "apple-touch-icon.png",
    192: "android-chrome-192x192.png",
    512: "android-chrome-512x512.png",
  };

  const pngBuffers = {};

  for (const [size, filename] of Object.entries(sizes)) {
    const px = Number(size);
    const buffer = await resizePng(mark, px);
    pngBuffers[px] = buffer;
    await writeFile(path.join(publicDir, filename), buffer);
  }

  const icoSizes = [16, 32, 48];
  const icoBuffers = await Promise.all(
    icoSizes.map((size) => resizePng(mark, size))
  );
  const ico = await toIco(icoBuffers);
  await writeFile(path.join(publicDir, "favicon.ico"), ico);
  // Next.js prioritizes src/app/favicon.ico over public/ and metadata.icons
  await writeFile(path.join(appDir, "favicon.ico"), ico);

  await writeFile(path.join(appDir, "icon.png"), pngBuffers[32]);
  await writeFile(path.join(appDir, "apple-icon.png"), pngBuffers[180]);

  const manifest = {
    name: "Ornate Quality Services",
    short_name: "Ornate",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    theme_color: "#0A2540",
    background_color: "#ffffff",
    display: "standalone",
  };

  await writeFile(
    path.join(publicDir, "site.webmanifest"),
    JSON.stringify(manifest, null, 2)
  );

  console.log("Favicons generated in public/ and src/app/");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
