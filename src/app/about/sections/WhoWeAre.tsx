import React from "react";
import Image from "next/image";
import { manrope, playfair } from "@/lib/fonts";
import styles from "@/styles/aboutV2.module.css";

import aboutTopImg from "@/assests/about12.webp";

export function WhoWeAre() {
  return (
    <section className={`${styles.section} ${manrope.className}`} aria-label="Who we are">
      <div className={styles.container}>
        <div className={styles.whoShell}>
          <div className={styles.whoWrap}>
            <div className={styles.whoMedia} aria-hidden="true">
              <Image
                src={aboutTopImg}
                alt=""
                fill
                priority
                sizes="(max-width: 900px) 92vw, 420px"
                className={styles.whoImg}
              />
            </div>

            <div className={styles.whoKicker}>About company</div>
            <h2 className={`${styles.whoTitle} ${playfair.className}`}>
              Your{" "}
              <span className={styles.whoTitleAccent}>strategic compliance</span> partner
            </h2>

            <p className={styles.whoBody}>
              At <span className={styles.whoHighlight}>Ornate Quality Services</span>, we are a trusted
              name in regulatory compliance, product certification, testing, and quality assurance
              solutions, dedicated to helping businesses achieve seamless market access and regulatory
              success. Since our establishment in{" "}
              <span className={styles.whoHighlight}>2013</span>, we have been committed to simplifying
              complex certification processes and delivering reliable compliance solutions to
              manufacturers, importers, exporters, startups, SMEs, and global enterprises across diverse
              industries.
            </p>

            <p className={styles.whoBody}>
              With over <span className={styles.whoHighlight}>15 years of industry experience</span>, we
              have built a strong reputation for providing expert guidance in{" "}
              <span className={styles.whoHighlight}>
                BIS Certification, CRS Registration, ISI Certification, WPC Approval, TEC Certification,
                LMPC Registration
              </span>
              , testing coordination, technical documentation, and other regulatory services. Our deep
              understanding of national and international compliance frameworks enables us to support
              businesses in meeting quality standards, regulatory requirements, and market entry
              obligations with confidence and efficiency.
            </p>

            <p className={styles.whoBody}>
              <span className={styles.whoHighlight}>At Ornate</span>, we believe compliance is more than just
              meeting regulations
              {"\u2014"}it is about building trust, ensuring product credibility, and creating
              long-term business growth. Our team of experienced consultants, compliance specialists, and
              technical experts works closely with every client to understand their unique business goals,
              product requirements, and industry challenges. This allows us to deliver customized compliance
              strategies that reduce complexity, save valuable time, and accelerate certification approvals.
            </p>

            <p className={styles.whoBody}>
              What sets us apart is our commitment to{" "}
              <span className={styles.whoHighlight}>transparency, precision, and client success</span>. From
              initial consultation and documentation to testing coordination and final certification
              approval, we provide <span className={styles.whoHighlight}>end-to-end support</span> throughout
              the entire compliance journey. By combining industry expertise, innovative processes, and a
              customer-focused approach, we help businesses confidently expand in both domestic and
              international markets.
            </p>

            <p className={styles.whoBody}>
              As we continue to grow, our focus remains on delivering{" "}
              <span className={styles.whoHighlight}>world-class compliance solutions</span>, building
              long-term partnerships, and helping businesses achieve sustainable success in an increasingly
              regulated global marketplace.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
