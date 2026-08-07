import React from "react";
import Image from "next/image";
import Link from "next/link";
import { inter, playfair } from "@/lib/fonts";
import styles from "@/styles/aboutV2.module.css";

import manPng from "@/assests/man.webp";
import { IconLinkedIn } from "./icons";



const members = [
  { name: "Amit Sharma", role: "Founder & CEO" },
  { name: "Neha Verma", role: "Compliance Director" },
  { name: "Rohit Singh", role: "Technical Head" },
  { name: "Pooja Saxena", role: "Documentation Head" },
  { name: "Vikram Malhotra", role: "Operations Head" },
];

export function Team() {
  return (
    <section className={`${styles.teamBand} ${inter.className}`} aria-label="Meet our expert team">
      <div className={styles.container}>
        <div className={styles.teamHead}>
          <div className={styles.teamKicker}>Our team</div>
          <h2 className={`${styles.teamTitle} ${playfair.className}`}>Meet our expert team</h2>
        </div>

        <div className={styles.teamGrid} role="list">
          {members.map((m) => (
            <div className={styles.memberCard} role="listitem" key={m.name}>
              <div className={styles.memberPhoto} aria-hidden="true">
                <Image src={manPng} alt="" fill sizes="220px" className={styles.memberImg} />
              </div>
              <div className={styles.memberBody}>
                <div className={`${styles.memberName} ${playfair.className}`}>{m.name}</div>
                <div className={styles.memberRole}>{m.role}</div>
                <a
                  className={styles.linkedinBtn}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${m.name} LinkedIn`}
                >
                  <IconLinkedIn />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.teamCtaRow}>
          <Link className={styles.teamCtaBtn} href="#">
            View all team members →
          </Link>
        </div>
      </div>
    </section>
  );
}
