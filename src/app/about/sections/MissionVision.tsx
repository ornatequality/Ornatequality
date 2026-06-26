import React from "react";
import { manrope, playfair } from "@/lib/fonts";
import styles from "@/styles/aboutV2.module.css";
import { IconEye, IconTarget } from "./icons";

export function MissionVision() {
  return (
    <section
      className={`${styles.mvBand} ${manrope.className}`}
      lang="en"
      aria-label="Mission and vision"
    >
      <div className={`${styles.container} ${styles.mvContainer}`}>
        <div className={styles.mvGrid}>
          <article className={`${styles.mvCard} ${styles.mvCardMission}`}>
            <div className={styles.mvKicker}>Our mission</div>
            <div className={styles.mvBlockHead}>
              <div className={`${styles.mvIcon} ${styles.mvIconMission}`} aria-hidden="true">
                <IconTarget />
              </div>
              <h2 className={`${styles.mvBlockTitle} ${playfair.className}`}>Mission</h2>
            </div>
            <div className={styles.mvDivider} aria-hidden="true" />
            <p className={styles.mvBody}>
              At <span className={styles.mvHighlight}>Ornate Quality Services</span>, our mission is to
              empower businesses with reliable, efficient, and result-driven{" "}
              <span className={styles.mvHighlight}>regulatory compliance</span>, product certification,
              testing, and quality assurance solutions. We are committed to helping manufacturers,
              importers, exporters, and global brands navigate complex compliance requirements with
              confidence and accuracy. Through our expertise in{" "}
              <span className={styles.mvHighlight}>
                BIS Certification, CRS Registration, ISI Mark Certification, WPC Approval, TEC
                Certification, LMPC Registration
              </span>
              , and other regulatory services, we simplify the certification journey from documentation to
              final approval. Our focus is to deliver transparent processes, faster approvals, and
              customized compliance strategies that help businesses achieve seamless market access, build
              customer trust, and maintain long-term business growth. With innovation, integrity, and
              industry expertise, we aim to make compliance simpler, smarter, and more accessible for
              every organization.
            </p>
          </article>

          <article className={`${styles.mvCard} ${styles.mvCardVision}`}>
            <div className={styles.mvKicker}>Our vision</div>
            <div className={styles.mvBlockHead}>
              <div className={`${styles.mvIcon} ${styles.mvIconVision}`} aria-hidden="true">
                <IconEye />
              </div>
              <h2 className={`${styles.mvBlockTitle} ${playfair.className}`}>Vision</h2>
            </div>
            <div className={styles.mvDivider} aria-hidden="true" />
            <p className={styles.mvBody}>
              At <span className={styles.mvHighlight}>Ornate Quality Services</span>, our vision is to
              become a globally recognized leader in regulatory compliance, product certification,
              testing, and quality assurance solutions. We aspire to empower manufacturers, importers,
              exporters, and global brands by providing seamless compliance support that simplifies
              market entry across international boundaries. Through our expertise in{" "}
              <span className={styles.mvHighlight}>
                BIS Certification, CRS Registration, ISI Certification, WPC Approval, TEC Certification,
                LMPC Registration
              </span>
              , and <span className={styles.mvHighlight}>global regulatory services</span>, we aim to
              build a strong international presence based on trust, innovation, and operational
              excellence. Our long-term goal is to create a world where businesses can expand confidently
              into global markets with reliable compliance support, faster certifications, and sustainable
              business growth.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
