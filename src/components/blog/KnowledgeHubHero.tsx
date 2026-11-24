import Link from "next/link";
import { manrope } from "@/lib/fonts";
import type { BlogCardData } from "@/lib/blog-defaults";
import styles from "../../styles/knowledgeHubHero.module.css";

const POPULAR = [
  "BIS for toys",
  "CRS registration",
  "EPR plastic",
  "WPC ETA",
  "BEE star rating",
];

function postHref(post: BlogCardData) {
  return post.href ?? `/blog/${post.slug}`;
}

function topicPill(post: BlogCardData) {
  const source = `${post.topic ?? ""} ${post.category} ${post.title}`;
  if (/toy/i.test(source)) return "BIS · TOYS";
  return (post.topic ?? post.category).toUpperCase();
}

function watermark(title: string) {
  const match = title.match(/(\d+)/);
  return match?.[1] ?? "";
}

function FeaturedArt({ mark }: { mark: string }) {
  return (
    <div className={styles.art} aria-hidden="true">
      {mark ? <span className={styles.watermark}>{mark}</span> : null}
      <div className={styles.artRow}>
        <div className={styles.shieldCard}>
          <svg viewBox="0 0 64 64" className={styles.shield}>
            <rect x="8" y="8" width="48" height="48" rx="14" fill="#e8f1ff" />
            <path
              d="M32 14 46 19v13c0 10-6.4 16.6-14 19.4C24.4 48.6 18 42 18 32V19l14-5Z"
              fill="#3b82f6"
            />
            <path
              d="M32 16.4 43.2 20.6V32c0 8.2-5.1 13.6-11.2 16.1C25.9 45.6 20.8 40.2 20.8 32V20.6L32 16.4Z"
              fill="#60a5fa"
            />
            <path
              d="M26.5 32.2 30.2 36l7.4-8.4"
              fill="none"
              stroke="#fff"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className={styles.listCard}>
          <span className={`${styles.dot} ${styles.dotGreen}`} />
          <span className={styles.line} />
          <span className={`${styles.dot} ${styles.dotBlue}`} />
          <span className={styles.line} />
          <span className={`${styles.dot} ${styles.dotOrange}`} />
          <span className={styles.lineShort} />
        </div>
      </div>
    </div>
  );
}

export default function KnowledgeHubHero({
  featured,
  query = "",
}: {
  featured: BlogCardData;
  query?: string;
}) {
  const href = postHref(featured);

  return (
    <section
      className={`${styles.section} ${manrope.className}`}
      aria-labelledby="knowledge-hub-heading"
    >
      <div className={styles.container}>
        <nav className={styles.crumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span>Knowledge Hub</span>
        </nav>

        <div className={styles.layout}>
          <div className={styles.copy}>
            <p className={styles.eyebrow}>Ornate Knowledge Hub</p>
            <h1 id="knowledge-hub-heading" className={styles.title}>
              BIS, EPR and WPC Certification Guides for Indian Compliance
            </h1>
            <p className={styles.lead}>
              Practical guides, Quality Control Order updates and step-by-step
              checklists from the team that files BIS, EPR, WPC and BEE
              applications for manufacturers and importers.
            </p>

            <form className={styles.search} action="/blog" method="get" role="search">
              <span className={styles.searchIcon} aria-hidden="true">
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <circle
                    cx="11"
                    cy="11"
                    r="6.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M16 16.5 20 20.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <input
                className={styles.input}
                type="search"
                name="q"
                defaultValue={query}
                placeholder="Search guides, e.g. BIS for toys, CRS, EPR plastic"
                aria-label="Search guides"
              />
              <button className={styles.searchBtn} type="submit">
                Search
              </button>
            </form>

            <div className={styles.popular}>
              <span className={styles.popularLabel}>Popular:</span>
              <ul>
                {POPULAR.map((item) => (
                  <li key={item}>
                    <Link href={`/blog?q=${encodeURIComponent(item)}`}>{item}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <article className={styles.card}>
            <div className={styles.cardTop}>
              <div className={styles.badges}>
                <span className={styles.featuredPill}>Featured guide</span>
                <span className={styles.topicPill}>{topicPill(featured)}</span>
              </div>
              <FeaturedArt mark={watermark(featured.title)} />
            </div>

            <div className={styles.cardBody}>
              <p className={styles.meta}>
                12 Nov 2026
                {featured.readTime ? ` · ${featured.readTime}` : ""}
              </p>
              <h2 className={styles.cardTitle}>
                <Link href={href}>{featured.title}</Link>
              </h2>
              <p className={styles.cardText}>{featured.excerpt}</p>
              <div className={styles.cardFoot}>
                <span className={styles.author}>
                  <span className={styles.avatar} aria-hidden="true">
                    OQ
                  </span>
                  Ornate Compliance Team
                </span>
                <Link className={styles.read} href={href}>
                  Read guide <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
