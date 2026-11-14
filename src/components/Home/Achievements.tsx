import { manrope, playfair } from "@/lib/fonts";
import styles from "../../styles/achievements.module.css";

function CertificateArt({
  tone,
  dashed,
}: {
  tone: "navy" | "green" | "orange" | "gold";
  dashed?: boolean;
}) {
  const stroke =
    tone === "navy"
      ? "#1e40af"
      : tone === "green"
        ? "#16a34a"
        : tone === "orange"
          ? "#ea580c"
          : "#ca8a04";
  const seal =
    tone === "navy"
      ? "#2563eb"
      : tone === "green"
        ? "#22c55e"
        : tone === "orange"
          ? "#f97316"
          : "#eab308";

  return (
    <svg viewBox="0 0 240 148" className={styles.art} aria-hidden="true">
      <rect
        x="32"
        y="20"
        width="176"
        height="108"
        rx="10"
        fill="#fff"
        stroke={stroke}
        strokeWidth="2.2"
        strokeDasharray={dashed ? "6 5" : undefined}
      />
      <rect x="52" y="40" width="86" height="5" rx="2.5" fill={stroke} />
      <rect x="52" y="54" width="136" height="3.5" rx="1.8" fill="#c5d0e3" />
      <rect x="52" y="64" width="128" height="3.5" rx="1.8" fill="#c5d0e3" />
      <rect x="52" y="74" width="112" height="3.5" rx="1.8" fill="#c5d0e3" />
      <path
        d="M52 100c10-7 22-5 26 3"
        fill="none"
        stroke="#94a3b8"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="172" cy="100" r="13" fill={seal} />
      <circle cx="172" cy="100" r="5.5" fill="#fff" />
    </svg>
  );
}

const ITEMS = [
  {
    tag: "BIS",
    title: "BIS Training Certificate",
    text: "Orientation programme for manufacturers and AIRs under FMCS.",
    tone: "navy" as const,
  },
  {
    tag: "NITS",
    title: "Laboratory Quality Management Training",
    text: "Training on laboratory quality management and internal audit.",
    tone: "green" as const,
  },
  {
    tag: "BIS",
    title: "Extended BIS Registration",
    text: "Extended registration certifying continued quality assurance.",
    tone: "orange" as const,
  },
  {
    tag: "ISO",
    title: "ISO Quality Systems Training",
    text: "Training on ISO quality systems, documentation and audit readiness.",
    tone: "gold" as const,
    dashed: true,
  },
];

export default function Achievements() {
  return (
    <section
      className={`${styles.section} ${manrope.className}`}
      aria-labelledby="home-achievements-heading"
    >
      <div className={styles.container}>
        <p className={styles.eyebrow}>Our achievements</p>
        <h2
          id="home-achievements-heading"
          className={`${styles.title} ${playfair.className}`}
        >
          Recognitions That Reflect Our
          <br />
          Commitment to <span className={styles.underline}>Excellence</span>
        </h2>
        <p className={styles.lead}>
          Training, registrations and recognitions earned by the Ornate team.
        </p>

        <div className={styles.grid}>
          {ITEMS.map((item) => (
            <article key={item.title} className={styles.card}>
              <div className={styles.preview}>
                <CertificateArt tone={item.tone} dashed={item.dashed} />
              </div>
              <div className={styles.body}>
                <p className={styles.tag}>{item.tag}</p>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.text}>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
