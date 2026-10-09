"use client";
import Link from "next/link";
import { Search, FileJson, Download, Lock } from "lucide-react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import styles from "./developers.module.css";

const HERO_STATS = [
  { id: 1, num: "50M+", label: "Clinical EHR Timelines" },
  { id: 2, num: "10M+", label: "12-Lead ECGs" },
  { id: 3, num: "5.2M+", label: "Radiology Scans" },
  { id: 4, num: "2.1M+", label: "Pathology Slides" },
];

const WORKFLOW_STEPS = [
  {
    id: 1,
    icon: Search,
    title: "1. Explore Diverse Modalities",
    desc: "Query our massive database across X-Rays, MRIs, ECGs, and EHRs using precise metadata filters like pathology, age group, or equipment.",
  },
  {
    id: 2,
    icon: FileJson,
    title: "2. Verify Annotated Quality",
    desc: "Review comprehensive JSONL metadata, radiologist annotations, and mini-samples to ensure the dataset perfectly aligns with your model's architecture.",
  },
  {
    id: 3,
    icon: Download,
    title: "3. Train Life-Saving Models",
    desc: "Securely download ready-to-train datasets in formats like DICOM, NIfTI, and Parquet. Rapidly prototype and deploy clinical-grade AI.",
  },
];

const API_FEATURES = [
  { id: 1, title: "GraphQL Support", desc: "Query exact fields." },
  { id: 2, title: "Python SDK", desc: "pip install healthron-ai" },
];

export default function DevelopersPage() {
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.heroContent}
        >
          <div className={styles.badge}>For AI Developers</div>
          <h1 className={styles.title}>
            Train on the World's Most{" "}
            <span className={styles.highlightBlue}>Diverse</span> Medical Data
          </h1>
          <p className={styles.subtitle}>
            Stop scraping the web. Get instant access to the largest, most
            diverse repository of 100% anonymized medical data spanning
            radiology, oncology, cardiology, and more. Train foundational
            models, accelerate clinical breakthroughs, and improve healthcare
            outcomes globally.
          </p>
          <div className={styles.heroStats}>
            {HERO_STATS.map((stat) => (
              <Tilt
                key={stat.id}
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                scale={1.02}
              >
                <div className={styles.stat}>
                  <span className={styles.statNum}>{stat.num}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              </Tilt>
            ))}
          </div>
          <Link href="/contact" className={styles.ctaButton}>
            Request Access
          </Link>
        </motion.div>
      </header>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={styles.workflow}
      >
        <h2 className={styles.sectionTitle}>The frictionless data pipeline</h2>
        <div className={styles.grid}>
          {WORKFLOW_STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <Tilt
                key={step.id}
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                scale={1.02}
              >
                <div className={styles.card}>
                  <div className={styles.iconWrapper}>
                    <Icon size={32} />
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
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={styles.apiPreview}
      >
        <div className={styles.apiText}>
          <h2>Built by AI Engineers, For AI Engineers</h2>
          <p>
            No clunky UIs. Query the Healthron network directly via our REST
            API. Filter diverse datasets by modality, patient demographics, or
            specific pathologies to fuel your next healthcare breakthrough.
          </p>
          <div className={styles.apiFeatures}>
            {API_FEATURES.map((feature) => (
              <div key={feature.id} className={styles.feature}>
                <strong>{feature.title}</strong>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.codeBlock}>
          <div className={styles.codeHeader}>
            <span className={styles.dotRed}></span>
            <span className={styles.dotYellow}></span>
            <span className={styles.dotGreen}></span>
            <span className={styles.codeTitle}>query.py</span>
            <button
              className={styles.copyBtn}
              onClick={() =>
                navigator.clipboard.writeText(
                  `import healthron\n\nclient = healthron.Client(api_key="your_key")\n\ndataset = client.datasets.search(\n    modality="CT_SCAN",\n    pathology="Pulmonary_Nodule",\n    min_resolution="512x512",\n    limit=10000\n)\n\nprint(f"Found {dataset.count} scans.")\ndataset.download(destination="./training_data")`,
                )
              }
            >
              Copy
            </button>
          </div>
          <pre>
            <code>
              <span className={styles.codeKeyword}>import</span> healthron{"\n"}
              {"\n"}
              <span className={styles.codeComment}># Initialize client</span>
              {"\n"}
              client = healthron.<span className={styles.codeFunc}>Client</span>
              (api_key=<span className={styles.codeString}>"your_key"</span>)
              {"\n"}
              {"\n"}
              <span className={styles.codeComment}>
                # Query specific inventory
              </span>
              {"\n"}
              dataset = client.datasets.
              <span className={styles.codeFunc}>search</span>({"\n"}
              modality=<span className={styles.codeString}>"CT_SCAN"</span>,
              {"\n"}
              pathology=
              <span className={styles.codeString}>"Pulmonary_Nodule"</span>,
              {"\n"}
              min_resolution=
              <span className={styles.codeString}>"512x512"</span>,{"\n"}
              limit=<span className={styles.codeNum}>10000</span>
              {"\n"}){"\n"}
              {"\n"}
              <span className={styles.codeFunc}>print</span>(f
              <span className={styles.codeString}>"Found</span> {"{"}
              dataset.count{"}"}{" "}
              <span className={styles.codeString}>scans."</span>){"\n"}
              dataset.<span className={styles.codeFunc}>download</span>
              (destination=
              <span className={styles.codeString}>"./training_data"</span>)
            </code>
          </pre>
        </div>
      </motion.section>
    </div>
  );
}
