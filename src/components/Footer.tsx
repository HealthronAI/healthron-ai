import Link from "next/link";
import { Activity } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <Activity className={styles.logoIcon} />
            <span>Healthron AI</span>
          </Link>
          <p className={styles.description}>
            Bridging the gap between secure medical data curation and
            next-generation AI development.
          </p>
          <div className={styles.locations}>
            <div className={styles.locationPill}>
              <div className={styles.pulseDot}></div>
              <span>Dubai, UAE</span>
            </div>
            <div className={styles.locationPill}>
              <div className={styles.pulseDot}></div>
              <span>Mumbai, IND</span>
            </div>
          </div>
        </div>
        <div className={styles.linksSection}>
          <div className={styles.column}>
            <h4>Platform</h4>
            <Link href="/providers">For Providers</Link>
            <Link href="/developers">For Developers</Link>
          </div>
          <div className={styles.column}>
            <h4>Company</h4>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className={styles.column}>
            <h4>Legal</h4>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <p>&copy; 2026 Healthron AI. All rights reserved.</p>
      </div>
    </footer>
  );
}
