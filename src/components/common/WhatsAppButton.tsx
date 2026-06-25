"use client";

import { FaWhatsapp } from "react-icons/fa";
import styles from "@/styles/common/WhatsAppButton.module.css";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/9266877738"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappBtn}
    >
      <FaWhatsapp />
    </a>
  );
}