import React from "react";
import Image, { type StaticImageData } from "next/image";
import styles from "@/styles/bisCrsRegistration.module.css";

type ServicePageBannerProps = {
  src: StaticImageData;
  alt: string;
  label: string;
};

export function ServicePageBanner({ src, alt, label }: ServicePageBannerProps) {
  return (
    <section className={styles.banner} aria-label={label}>
      <Image
        src={src}
        alt={alt}
        priority
        unoptimized
        quality={95}
        className={styles.bannerImg}
        sizes="100vw"
      />
    </section>
  );
}
