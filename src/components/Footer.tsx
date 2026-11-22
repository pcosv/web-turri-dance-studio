import Image from "next/image";
import Link from "next/link";
import { footerExplore, footerHelp, studio } from "@/lib/site";
import { FacebookIcon, InstagramIcon } from "./icons";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <div className={styles.brand}>
              <Image
                src="/images/logo-symbol.png"
                alt=""
                width={64}
                height={64}
                className={styles.symbol}
              />
              <div>
                <p className={styles.name}>Turri Dance Studio</p>
                <p className={styles.tagline}>DANCE · CONNECT · BLOOM</p>
              </div>
            </div>
            <div className={styles.social}>
              <a href={studio.instagram} aria-label="Instagram" className={styles.socialLink}>
                <InstagramIcon />
              </a>
              <a href={studio.facebook} aria-label="Facebook" className={styles.socialLink}>
                <FacebookIcon />
              </a>
            </div>
          </div>

          <nav aria-label="Explore" className={styles.col}>
            <span className={styles.colTitle}>Explore</span>
            {footerExplore.map((l) =>
              l.external ? (
                <a key={l.label} href={l.href}>
                  {l.label}
                </a>
              ) : (
                <Link key={l.label} href={l.href}>
                  {l.label}
                </Link>
              ),
            )}
          </nav>

          <nav aria-label="Help" className={styles.col}>
            <span className={styles.colTitle}>Help</span>
            {footerHelp.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>

          <div className={`${styles.col} ${styles.visit}`}>
            <span className={styles.colTitle}>Visit</span>
            <span>
              {studio.addressLines[0]}
              <br />
              {studio.addressLines[1]}
            </span>
            <a href={studio.phoneHref}>{studio.phoneDisplay}</a>
            <span className={styles.hours}>
              {studio.hours.map((h, i) => (
                <span key={h.days}>
                  {i > 0 && <br />}
                  {h.days} {h.time}
                </span>
              ))}
            </span>
          </div>
        </div>

        <p className={styles.legal}>
          © 2026 Turri Dance Studio · Petite Performers [area] franchise
        </p>
      </div>
    </footer>
  );
}
