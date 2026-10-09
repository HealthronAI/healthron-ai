"use client";
import Link from "next/link";
import { useState } from "react";
import {
  DollarSign,
  UploadCloud,
  ShieldCheck,
  BarChart,
  ChevronRight,
} from "lucide-react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import styles from "./providers.module.css";

const PROCESS_STEPS = [
  {
    id: 1,
    icon: UploadCloud,
    iconClass: "",
    title: "1. Secure Upload",
    desc: "Upload your raw X-Rays, MRIs, or records to our secure, encrypted staging environment using our enterprise API.",
  },
  {
    id: 2,
    icon: ShieldCheck,
    iconClass: "",
    title: "2. Anonymization",
    desc: "Our proprietary pipeline scrubs all Personally Identifiable Information (PII) automatically before it touches the marketplace.",
  },
  {
    id: 3,
    icon: BarChart,
    iconClass: styles.iconGreen,
    title: "3. Global Impact",
    desc: "AI Developers utilize the anonymized data to train life-saving models. You accelerate global medical research and improve patient outcomes.",
  },
];

const COMPLIANCE_ITEMS = [
  { id: 1, title: "HIPAA Certified:", desc: "Full BAA compliance." },
  {
    id: 2,
    title: "SOC 2 Type II:",
    desc: "Audited and secured infrastructure.",
  },
  {
    id: 3,
    title: "Zero-Trust Architecture:",
    desc: "Data is encrypted at rest and in transit.",
  },
  {
    id: 4,
    title: "Local De-Identification:",
    desc: "PII is stripped locally before reaching the cloud.",
  },
];

export default function ProvidersPage() {
  const [fileCount, setFileCount] = useState(1000);

  const modelsAccelerated = Math.max(
    1,
    Math.floor(fileCount / 125),
  ).toLocaleString();

  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className={`fade-in ${styles.heroContent}`}
        >
          <div className={styles.badge}>For Healthcare Providers</div>
          <h1 className={styles.title}>
            Turn Dormant Data into{" "}
            <span className={styles.highlightGreen}>Global Impact</span>
          </h1>
          <p className={styles.subtitle}>
            Your unused medical imaging and records are exactly what AI
            developers need. Upload securely, we strip the PII, and you empower
            life-saving AI research globally.
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            Share Your Data
          </Link>
        </motion.div>
      </header>

      <section className={styles.calculatorSection}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`glass-panel ${styles.calculator}`}
        >
          <div className={styles.calcHeader}>
            <h2>Calculate Your Potential Impact</h2>
            <p>
              Estimate how many AI models and research studies your data could
              accelerate.
            </p>
          </div>

          <div className={styles.calcBody}>
            <div className={styles.sliderWrapper}>
              <div className={styles.sliderLabels}>
                <span>100 records</span>
                <span>Data Volume</span>
                <span>100k+ records</span>
              </div>
              <input
                type="range"
                min="100"
                max="100000"
                step="100"
                value={fileCount}
                onChange={(e) => setFileCount(Number(e.target.value))}
                className={styles.slider}
              />
              <div className={styles.currentVolume}>
                {fileCount.toLocaleString()} Anonymized Records
              </div>
            </div>

            <div className={styles.calcResult}>
              <div className={styles.resultLabel}>AI Models Accelerated</div>
              <motion.div
                key={modelsAccelerated}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className={styles.resultValue}
              >
                {modelsAccelerated}
              </motion.div>
              <p className={styles.resultDisclaimer}>
                *Based on average dataset requirements for training
                clinical-grade ML models.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={styles.process}
      >
        <h2 className={styles.sectionTitle}>The Zero-Risk Pipeline</h2>
        <div className={styles.stepsGrid}>
          {PROCESS_STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <Tilt
                key={step.id}
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                scale={1.02}
                transitionSpeed={1000}
              >
                <div className={styles.stepCard}>
                  <div className={styles.stepIcon}>
                    <Icon size={32} className={step.iconClass} />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </Tilt>
            );
          })}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={styles.complianceSection}
      >
        <div className={styles.complianceContent}>
          <h2>Military-Grade Compliance</h2>
          <p>
            You are sharing sensitive patient data. We treat it like nuclear
            material. Our platform operates under strict compliance with global
            healthcare regulations, ensuring your hospital is never exposed to
            legal risk.
          </p>
          <ul className={styles.complianceList}>
            {COMPLIANCE_ITEMS.map((item) => (
              <li key={item.id}>
                <strong>{item.title}</strong> {item.desc}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.testimonialCard}>
          <p className={styles.quote}>
            "Healthron AI allowed us to safely monetize 5 years of dormant MRI
            data. The passive revenue now entirely funds our new research
            department."
          </p>
          <div className={styles.author}>
            <div className={styles.avatar}></div>
            <div>
              <strong>Dr. Sarah Jenkins</strong>
              <span>Chief of Radiology, Memorial Healthcare</span>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
