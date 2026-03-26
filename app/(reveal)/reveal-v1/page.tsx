"use client";

import styles from "../../../components/reveal/reveal.module.css";
import RevealTitle from "../../../components/reveal/RevealTitle";

export default function RixxHero() {
  return (
    <div className={styles.page}>
      {/* ── Navbar ── */}
      <nav className={styles.navbar}>
        <div className={styles.navLeft}>
          <div className={styles.logo}>
            rixx<span className={styles.logoAccent}>.dev</span>
          </div>
          <div className={styles.navLinks}>
            <a href="#" className={styles.navLink}>
              Products
            </a>
            <a href="#" className={styles.navLink}>
              API
            </a>
            <a href="#" className={styles.navLink}>
              Company
            </a>
            <a href="#" className={styles.navLink}>
              Careers
            </a>
            <a href="#" className={styles.navLink}>
              Blog
            </a>
            <a href="#" className={styles.navLink}>
              Docs
            </a>
          </div>
        </div>
        <button className={styles.tryBtn}>Try rixx.dev</button>
      </nav>

      {/* ── Hero center ── */}
      <div className={styles.heroCenter}>
        <RevealTitle />

        <div className={styles.searchBox}>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="What do you want to build?"
          />
          <button className={styles.searchSubmit} aria-label="Submit">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="5 12 12 5 19 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className={styles.bottomBar}>
        <div className={styles.scrollHint}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </svg>
        </div>

        <div className={styles.announcement}>
          <span className={styles.announcementText}>
            rixx.dev v2 is here: Smarter tools to ship faster than ever.
          </span>
          <button className={styles.announcementBtn}>Read Announcement</button>
        </div>
      </div>
    </div>
  );
}
