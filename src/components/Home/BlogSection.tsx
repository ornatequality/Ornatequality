import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { manrope, playfair } from "@/lib/fonts";
import styles from "../../styles/blog.module.css";

import blog1 from "../../assests/image.png";
import blog2 from "../../assests/blog-2.webp";
import blog3 from "../../assests/blog-3.webp";

type TagTone = "green" | "blue" | "gold";

export type BlogCardData = {
  slug: string;
  href?: string;
  title: string;
  excerpt: string;
  category: string;
  topic?: string;
  tone?: TagTone;
  image: string | StaticImageData;
  readTime?: string;
};

type LatestBlogsProps = {
  posts?: BlogCardData[];
};

const DEFAULT_POSTS: BlogCardData[] = [
  {
    slug: "bis-toy-certification-mistakes",
    title: "Top 10 Common Mistakes Manufacturers Make During BIS Toy Certification",
    excerpt:
      "Learn how to get BIS certification for your products and ensure compliance with Indian standards.",
    category: "BIS certification for toys",
    topic: "BIS",
    image: blog1,
    readTime: "7 min read",
  },
  {
    slug: "future-of-epr",
    title: "The Future of EPR: Why It Matters and How It Will Revolutionise Industries",
    excerpt:
      "Understand Extended Producer Responsibility and how it impacts compliance, sustainability, and your brand's growth.",
    category: "EPR",
    tone: "green",
    image: blog2,
    readTime: "5 min read",
  },
  {
    slug: "wpc-eta-approval-frequency-bands",
    title: "WPC ETA Approval in India: Frequency Bands and Device Compliance Guide",
    excerpt:
      "A practical guide to WPC ETA, from frequency selection to documentation, so you can launch wireless products in India with ease.",
    category: "WPC-ETA",
    tone: "blue",
    image: blog3,
    readTime: "6 min read",
  },
];

const TOPICS = [
  "BIS",
  "ISI Mark",
  "WPC-ETA",
  "EPR",
  "BEE",
  "CRS",
  "LMPC",
  "Quality Inspection",
  "Industry Updates",
];

const postHref = (post: BlogCardData) => post.href ?? "/blog";

const TONE_CLASS: Record<TagTone, string> = {
  green: styles.tagGreen,
  blue: styles.tagBlue,
  gold: styles.tagGold,
};

const ClockIcon = () => (
  <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
    <circle
      cx="12"
      cy="12"
      r="9"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <path
      d="M12 7v5l3 2"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8-4.3-4.1 5.9-.9z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

const Arrow = () => (
  <span className={styles.arrow} aria-hidden="true">
    →
  </span>
);

const LatestBlogs = ({ posts = DEFAULT_POSTS }: LatestBlogsProps) => {
  const [featured, ...rest] = posts.slice(0, 3);

  if (!featured) return null;

  return (
    <section
      className={`${styles.blogs} ${manrope.className}`}
      aria-label="Latest blogs"
    >
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <div className={styles.headerText}>
            <p className={styles.eyebrow}>Our blogs</p>
            <h2 className={`${styles.heading} ${playfair.className}`}>
              Explore our latest blogs
            </h2>
            <p className={styles.subheading}>
              Insights, updates and expert guidance on certifications,
              registrations, testing and quality compliance.
            </p>
          </div>

          <Link className={styles.viewAll} href="/blog">
            View all blogs <Arrow />
          </Link>
        </div>

        <ul className={styles.topics} aria-label="Blog topics">
          <li>
            <Link
              className={`${styles.topic} ${styles.topicActive}`}
              href="/blog"
              aria-current="page"
            >
              All Topics
            </Link>
          </li>
          {TOPICS.map((topic) => (
            <li key={topic}>
              <Link className={styles.topic} href="/blog">
                {topic}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.grid}>
          <article className={styles.featured}>
            <div className={styles.featuredBody}>
              <span className={styles.featuredBadge}>
                <span className={styles.starDot}>
                  <StarIcon />
                </span>
                Featured article
              </span>

              <h3 className={`${styles.featuredTitle} ${playfair.className}`}>
                <Link href={postHref(featured)}>{featured.title}</Link>
              </h3>

              <span className={styles.goldRule} aria-hidden="true" />

              <p className={styles.featuredDesc}>{featured.excerpt}</p>

              <Link className={styles.primaryBtn} href={postHref(featured)}>
                Read article <Arrow />
                <span className={styles.srOnly}>: {featured.title}</span>
              </Link>

              <p className={styles.featuredMeta}>
                {featured.readTime && (
                  <span className={styles.metaItem}>
                    <ClockIcon />
                    {featured.readTime}
                  </span>
                )}
                {featured.readTime && (
                  <span className={styles.metaDivider} aria-hidden="true" />
                )}
                <span>{featured.topic ?? featured.category}</span>
              </p>
            </div>

            <Link
              className={styles.featuredMedia}
              href={postHref(featured)}
              tabIndex={-1}
              aria-hidden="true"
            >
              <span className={styles.featuredImageClip}>
                <Image
                  src={featured.image}
                  alt=""
                  fill
                  priority={false}
                  sizes="(max-width: 900px) 100vw, 520px"
                  className={styles.image}
                />
              </span>
            </Link>
          </article>

          {rest.length > 0 && (
            <div className={styles.sideList}>
              {rest.map((post) => (
                <article key={post.slug} className={styles.row}>
                  <Link
                    className={styles.rowMedia}
                    href={postHref(post)}
                    tabIndex={-1}
                    aria-hidden="true"
                  >
                    <Image
                      src={post.image}
                      alt=""
                      fill
                      sizes="(max-width: 600px) 100vw, 300px"
                      className={styles.image}
                    />
                  </Link>

                  <div className={styles.rowBody}>
                    <span
                      className={`${styles.tag} ${
                        TONE_CLASS[post.tone ?? "green"]
                      }`}
                    >
                      {post.category}
                    </span>

                    <h3 className={`${styles.rowTitle} ${playfair.className}`}>
                      <Link href={postHref(post)}>{post.title}</Link>
                    </h3>

                    <p className={styles.rowDesc}>{post.excerpt}</p>

                    <div className={styles.rowFooter}>
                      {post.readTime ? (
                        <span className={styles.metaItem}>
                          <ClockIcon />
                          {post.readTime}
                        </span>
                      ) : (
                        <span />
                      )}

                      <Link className={styles.textLink} href={postHref(post)}>
                        Read article <Arrow />
                        <span className={styles.srOnly}>: {post.title}</span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
