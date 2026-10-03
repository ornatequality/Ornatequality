import React from "react";
import type { StaticImageData } from "next/image";
import styles from "@/styles/bisCrsRegistration.module.css";

type ServicePageBannerProps = {
  src: StaticImageData;
  alt: string;
  label: string;
};

export function ServicePageBanner({ src, alt, label }: ServicePageBannerProps) {
  return (
    <section className={styles.banner} aria-label={label}>
      <img
        src={src.src}
        alt={alt}
        width={src.width}
        height={src.height}
        className={styles.bannerImg}
        decoding="async"
        fetchPriority="high"
      />
    </section>
  );
}
