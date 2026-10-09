"use client";
import { motion } from "framer-motion";
import styles from "../legal.module.css";

export default function PrivacyPolicy() {
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.title}
        >
          Privacy Policy
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={styles.subtitle}
        >
          How we protect your data, guarantee anonymity, and maintain absolute
          transparency.
        </motion.p>
      </header>

      <main className={styles.contentWrapper}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.document}
        >
          <span className={styles.lastUpdated}>Last Updated: October 2026</span>

          <h2>1. Introduction</h2>
          <p>
            Healthron AI operates at the critical intersection of patient
            privacy and artificial intelligence. This Privacy Policy explains
            how we collect, use, process, and protect data. Our core operating
            principle is <strong>Zero-Knowledge Medical Data Transfer</strong>.
            We do not want, nor do we retain, access to Protected Health
            Information (PHI) or Personally Identifiable Information (PII) that
            can be linked back to individual patients.
          </p>

          <h2>2. Data De-Identification & Anonymization</h2>
          <p>
            Any medical data (such as MRI scans, clinical notes, or pathology
            slides) provided by our hospital partners undergoes a rigorous,
            multi-stage de-identification process on-premise at the hospital
            <strong>before</strong> it ever reaches Healthron AI servers.
          </p>
          <ul>
            <li>
              We utilize state-of-the-art NLP models to detect and redact names,
              dates, and locations.
            </li>
            <li>We strip all DICOM headers of 18 HIPAA-defined identifiers.</li>
            <li>
              Synthetic noise is injected to prevent re-identification via
              metadata analysis.
            </li>
          </ul>

          <h2>3. Information We Collect from Users</h2>
          <p>
            For users of our website (Providers and AI Developers), we collect
            standard account information necessary to provide our services,
            facilitate billing, and manage API keys. This includes:
          </p>
          <ul>
            <li>Name and professional email address.</li>
            <li>Hospital or Corporate affiliation.</li>
            <li>Usage metrics related to API requests and data downloads.</li>
          </ul>

          <h2>4. Security Measures</h2>
          <p>
            We implement military-grade encryption (AES-256 for data at rest and
            TLS 1.3 for data in transit). Our infrastructure is audited
            quarterly by independent security researchers and is fully compliant
            with HIPAA, GDPR, and ISO 27001 standards.
          </p>

          <h2>5. Contact Us</h2>
          <p>
            If you have questions about your privacy or our data processing
            practices, please reach out to our Data Protection Officer directly
            at <strong>connect@healthronai.com</strong>.
          </p>
        </motion.div>
      </main>
    </div>
  );
}
