import Link from "next/link";
import { manrope } from "@/lib/fonts";
import type { BlogCardData } from "@/lib/blog-defaults";
import styles from "../../styles/knowledgeHubGuides.module.css";

const TOPICS = [
  { id: "all", label: "All topics" },
  { id: "bis-certification", label: "BIS Certification", match: ["bis"] },
  { id: "isi-mark", label: "ISI Mark", match: ["isi"] },
  { id: "bis-crs", label: "BIS CRS", match: ["crs"] },
  { id: "epr", label: "EPR", match: ["epr"] },
  { id: "wpc-eta", label: "WPC ETA", match: ["wpc"] },
  { id: "bee", label: "BEE", match: ["bee"] },
  { id: "qco-updates", label: "QCO Updates", match: ["qco", "industry"] },
] as const;

const UPDATES = [
  {
    kicker: "CPCB · Battery EPR · 27 Aug 2026",
    title: "Battery EPR annual return deadline extended to 30 November 2026",
    href: "/news#epr-cpcb-categories",
  },
  {
    kicker: "CPCB · Plastic EPR · 28 Jun 2026",
    title: "Plastic packaging EPR filings and category-wise returns reminder",
    href: "/news#epr-cpcb-categories",
  },
];

const WHATSAPP_HREF =
  "https://wa.me/919266877738?text=" +
  encodeURIComponent("Hi, I would like help choosing the right certification for my product.");

type Tone = "blue" | "orange" | "green" | "navy";

function postHref(post: BlogCardData) {
  return post.href ?? `/blog/${post.slug}`;
}

function haystack(post: BlogCardData) {
  return `${post.topic ?? ""} ${post.category} ${post.title} ${post.excerpt}`.toLowerCase();
}

function matchesTopic(post: BlogCardData, topicId: string) {
  const topic = TOPICS.find((item) => item.id === topicId);
  if (!topic || topic.id === "all" || !("match" in topic)) return true;
  const text = haystack(post);
  return topic.match.some((token) => text.includes(token));
}

function toneFor(post: BlogCardData, index: number): Tone {
  const text = haystack(post);
  if (text.includes("epr")) return "green";
  if (text.includes("wpc")) return "navy";
  if (text.includes("bee") || text.includes("qco") || text.includes("isi")) return "orange";
  if (text.includes("bis")) return "blue";
  return (["blue", "orange", "green", "navy"] as Tone[])[index % 4];
}

function cardLabel(post: BlogCardData) {
  const text = haystack(post);
  if (text.includes("qco")) return "QCO Update";
  if (text.includes("wpc")) return "WPC ETA";
  if (text.includes("epr")) return "EPR";
  if (text.includes("crs")) return "BIS CRS";
  if (text.includes("isi")) return "ISI Mark";
  if (text.includes("bee")) return "BEE";
  if (text.includes("bis")) return "BIS Certification";
  return post.topic ?? post.category;
}

function watermark(post: BlogCardData) {
  const label = cardLabel(post);
  return label.split(" ")[0].slice(0, 4).toUpperCase();
}

function DocIcon() {
  return (
    <svg viewBox="0 0 48 48" className={styles.docIcon} aria-hidden="true">
      <rect x="8" y="6" width="32" height="36" rx="8" fill="#fff" />
      <path
        d="M18 25.5 22 29.5 31 19.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function hubHref(topic: string, q: string) {
  const params = new URLSearchParams();
  if (q) params.set("q", q);
  if (topic && topic !== "all") params.set("topic", topic);
  const query = params.toString();
  return query ? `/blog?${query}` : "/blog";
}

export default function KnowledgeHubGuides({
  posts,
  query = "",
  topic = "all",
}: {
  posts: BlogCardData[];
  query?: string;
  topic?: string;
}) {
  const active = TOPICS.some((item) => item.id === topic) ? topic : "all";
  const cards = posts.filter((post) => matchesTopic(post, active));

  return (
    <section
      className={`${styles.section} ${manrope.className}`}
      aria-labelledby="latest-guides-heading"
    >
      <div className={styles.container}>
        <ul className={styles.topics} aria-label="Guide topics">
          {TOPICS.map((item) => (
            <li key={item.id}>
              <Link
                href={hubHref(item.id, query)}
                className={`${styles.topic} ${active === item.id ? styles.topicActive : ""}`}
                aria-current={active === item.id ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.layout}>
          <div>
            <div className={styles.head}>
              <h2 id="latest-guides-heading" className={styles.heading}>
                Latest guides
              </h2>
              <p className={styles.count}>
                Showing {cards.length} of {posts.length} guides
              </p>
            </div>

            {cards.length ? (
              <div className={styles.grid}>
                {cards.map((post, index) => {
                  const tone = toneFor(post, index);
                  return (
                    <article
                      key={post.slug}
                      className={`${styles.card} ${styles[`tone_${tone}`]}`}
                    >
                      <div className={styles.cardTop}>
                        <span className={styles.mark} aria-hidden="true">
                          {watermark(post)}
                        </span>
                        <span className={styles.badge}>{cardLabel(post)}</span>
                        <span className={styles.docWrap}>
                          <DocIcon />
                        </span>
                      </div>
                      <div className={styles.cardBody}>
                        <p className={styles.meta}>
                          {post.readTime ?? "Guide"}
                        </p>
                        <h3 className={styles.cardTitle}>
                          <Link href={postHref(post)}>{post.title}</Link>
                        </h3>
                        <p className={styles.cardText}>{post.excerpt}</p>
                        <Link className={styles.read} href={postHref(post)}>
                          Read guide <span aria-hidden="true">→</span>
                        </Link>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <p className={styles.empty}>No guides in this topic yet.</p>
            )}
          </div>

          <aside className={styles.aside}>
            <div className={styles.expert}>
              <p className={styles.expertEyebrow}>Talk to an expert</p>
              <h3 className={styles.expertTitle}>
                Not sure which certification your product needs?
              </h3>
              <p className={styles.expertText}>
                Share the product name and HS code. We will confirm the approval,
                the test standard and the documents.
              </p>
              <Link className={styles.quote} href="/contact">
                Get a Quote
              </Link>
              <a className={styles.whatsapp} href={WHATSAPP_HREF} target="_blank" rel="noreferrer">
                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
                  />
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            <div className={styles.updates}>
              <div className={styles.updatesHead}>
                <p className={styles.updatesEyebrow}>Regulatory updates</p>
                <Link href="/news">View all</Link>
              </div>
              <ul>
                {UPDATES.map((item) => (
                  <li key={item.title}>
                    <Link href={item.href}>
                      <span className={styles.updateKicker}>{item.kicker}</span>
                      <span className={styles.updateTitle}>{item.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
