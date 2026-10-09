"use client";
import { motion } from "framer-motion";
import styles from "../legal.module.css";

export default function TermsOfService() {
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.title}
        >
          Terms of Service
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={styles.subtitle}
        >
          The legal framework that governs the exchange of high-fidelity medical
          datasets on Healthron AI.
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

          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the Healthron AI platform ("Platform"), you
            agree to be bound by these Terms of Service. If you are accepting
            these terms on behalf of a hospital, clinic, or corporate entity,
            you represent that you have the authority to bind that entity to
            these Terms.
          </p>

          <h2>2. Description of Services</h2>
          <p>
            Healthron AI acts as a secure, decentralized data broker. We provide
            a marketplace for healthcare providers ("Providers") to monetize
            anonymized medical data and for artificial intelligence researchers
            ("Developers") to license this data for machine learning training.
          </p>

          <h2>3. Provider Obligations</h2>
          <p>
            Providers agree that any data uploaded to or accessed via the
            Platform must be legally obtained and must strictly conform to local
            and international privacy standards (including HIPAA in the US and
            GDPR in Europe). Providers must use our proprietary on-premise
            scrubbing tools to ensure all Protected Health Information (PHI) is
            removed prior to transmission.
          </p>

          <h2>4. Developer Usage Restrictions</h2>
          <p>
            Developers licensing data through Healthron AI are granted a
            non-exclusive, non-transferable license to use the datasets strictly
            for the purpose of training machine learning models.
          </p>
          <ul>
            <li>
              Developers are strictly prohibited from attempting to re-identify
              any individuals within the datasets.
            </li>
            <li>
              Datasets may not be resold, redistributed, or shared outside of
              the Developer's immediate organization.
            </li>
            <li>
              Models trained on this data must not be used for malicious
              purposes, insurance denial, or discriminatory profiling.
            </li>
          </ul>

          <h2>5. Limitation of Liability</h2>
          <p>
            While Healthron AI implements strict validation and sanitization
            pipelines, we provide access to datasets "as is." We do not
            guarantee the clinical accuracy of the annotations, and the data is
            not intended to be used as a substitute for professional medical
            judgment.
          </p>

          <h2>6. Modifications to the Service</h2>
          <p>
            Healthron AI reserves the right to modify or discontinue,
            temporarily or permanently, the Service with or without notice. We
            shall not be liable to you or to any third party for any
            modification, price change, suspension, or discontinuance of the
            Service.
          </p>
        </motion.div>
      </main>
    </div>
  );
}
