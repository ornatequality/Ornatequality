import React from "react";
import Image from "next/image";
import styles from "@/styles/aboutV2.module.css";

import handshakeImg from "@/assests/handshake.webp";

export function HandshakeCta() {
  return (
    <section className={styles.handshakeCta} aria-label="Ready to work with us">
      <div className={styles.handshakeMedia} aria-hidden="true">
        <Image src={handshakeImg} alt="" fill priority={false} sizes="100vw" className={styles.handshakeImg} />
      </div>

      <div className={styles.container}>
        <div className={styles.handshakeGrid}>
          <div className={styles.handshakeInner}>
            <h2 className={styles.handshakeTitle}>
              Ready To Work With India&apos;s
              <br />
              Most Trusted Compliance <span className={styles.handshakeAccent}>Experts?</span>
            </h2>
            <p className={styles.handshakeText}>
              Connect with us today and take the first step
              <br />
              towards stress-free compliance.
            </p>
          </div>

          <div className={styles.handshakeBtns} aria-label="Call to action">
            <a className={styles.handshakeBtnPrimary} href="#">
              SCHEDULE CONSULTATION <span aria-hidden="true">→</span>
            </a>
            <a className={styles.handshakeBtnSecondary} href="/contact">
              CONTACT US <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

