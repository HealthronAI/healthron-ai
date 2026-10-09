"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, x: "-50%" }}
        animate={{ y: 0, x: "-50%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      >
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIconWrapper}>
            <Activity size={28} strokeWidth={2.5} />
          </div>
          <div className={styles.logoTextWrapper}>
            <span className={styles.logoTextHealthron}>Healthron</span>
            <span className={styles.logoTextAi}>AI</span>
          </div>
        </Link>

        <div className={styles.links}>
          <Link
            href="/services"
            className={pathname === "/services" ? styles.active : ""}
          >
            Services
          </Link>
          <Link
            href="/developers"
            className={pathname === "/developers" ? styles.active : ""}
          >
            For Developers
          </Link>
          <Link
            href="/providers"
            className={pathname === "/providers" ? styles.active : ""}
          >
            For Providers
          </Link>
          <Link
            href="/about"
            className={pathname === "/about" ? styles.active : ""}
          >
            Company
          </Link>
        </div>

        <div className={styles.actions}>
          <Link href="/contact" className={styles.buttonPrimary}>
            Contact Us
          </Link>
        </div>

        <button
          className={styles.hamburger}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={styles.mobileMenu}
          >
            <Link
              href="/services"
              className={pathname === "/services" ? styles.activeMobile : ""}
            >
              Services
            </Link>
            <Link
              href="/developers"
              className={pathname === "/developers" ? styles.activeMobile : ""}
            >
              For Developers
            </Link>
            <Link
              href="/providers"
              className={pathname === "/providers" ? styles.activeMobile : ""}
            >
              For Providers
            </Link>
            <Link
              href="/about"
              className={pathname === "/about" ? styles.activeMobile : ""}
            >
              Company
            </Link>
            <Link href="/contact" className={styles.mobileButtonPrimary}>
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
