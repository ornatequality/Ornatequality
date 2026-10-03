/**
 * Build 2560px masters so 1920 CSS banners stay sharp on Windows scaling / DPR.
 */
import { readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const assetsDir =
  "C:/Users/khush/.cursor/projects/d-ornateproject-Ornatequality/assets";
const destDir = path.resolve("src/assests/services");
const TARGET_W = 2560;

const jobs = [
  { match: /Bis_certification-/, dest: "bis-certification-banner.jpg" },
  { match: /BIS_ISI_certification-/, dest: "bis-isi-certification-banner.jpg" },
  { match: /ISO_certifictaion-/, dest: "iso-certification-banner.jpg" },
  { match: /CE_certification-/, dest: "ce-certification-banner.jpg" },
  { match: /FMCS_Certification-/, dest: "fmcs-certification-banner.jpg" },
  { match: /CCOE_PESO_Certificatio-/, dest: "peso-ccoe-certification-banner.jpg" },
  { match: /CDSCO_Certification-/, dest: "cdsco-certification-banner.jpg" },
];

const files = await readdir(assetsDir);
for (const job of jobs) {
  const name = files.find((f) => job.match.test(f));
  if (!name) {
    console.error(`Missing original for ${job.dest}`);
    continue;
  }
  const info = await sharp(path.join(assetsDir, name))
    .rotate()
    .resize({ width: TARGET_W, kernel: "mks2021" })
    .sharpen({ sigma: 0.8, m1: 1.0, m2: 0.3 })
    .jpeg({
      quality: 96,
      chromaSubsampling: "4:4:4",
      mozjpeg: true,
      trellisQuantisation: true,
      overshootDeringing: true,
    })
    .toFile(path.join(destDir, job.dest));
  console.log(
    `${job.dest} ${info.width}x${info.height} ${(info.size / 1024).toFixed(0)} KB`
  );
}
