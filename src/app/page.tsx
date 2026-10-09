"use client";
import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  ArrowRight,
  Shield,
  Database,
  TrendingUp,
  Activity,
  Lock,
  Edit3,
  ClipboardCheck,
  ShieldAlert,
  FlaskConical,
  FileText,
} from "lucide-react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import styles from "./page.module.css";

const ThreeScene = dynamic(() => import("@/components/ThreeScene"), {
  ssr: false,
});

const DATA_STREAM = [
  {
    id: 1,
    icon: Activity,
    iconClass: styles.iconBlue,
    category: "RADIOLOGY",
    highlight: "High-Volume",
    text: "High-res MRIs & CTs",
  },
  {
    id: 2,
    icon: Lock,
    iconClass: styles.iconGreen,
    category: "ONCOLOGY",
    highlight: "Clinical-Grade",
    text: "Annotated Histopathology",
  },
  {
    id: 3,
    icon: TrendingUp,
    iconClass: styles.iconEmerald,
    category: "CARDIOLOGY",
    highlight: "Curated",
    text: "12-lead waveform data",
  },
  {
    id: 4,
    icon: Database,
    iconClass: styles.iconPurple,
    category: "CLINICAL",
    highlight: "Extensive",
    text: "Longitudinal EHR timelines",
  },
];

const MINI_SERVICES = [
  { id: "collection", title: "Data Collection", icon: Database, desc: "Global hospital network sourcing and custom cohort generation." },
  { id: "annotation", title: "Data Annotation", icon: Edit3, desc: "Pixel-perfect medical labeling and DICOM metadata tagging." },
  { id: "qa", title: "Expert Review (QA)", icon: ClipboardCheck, desc: "Rigorous verification by board-certified clinicians." },
  { id: "deid", title: "De-identification", icon: ShieldAlert, desc: "HIPAA Safe Harbor anonymization and pixel-level OCR redaction." },
  { id: "synthetic", title: "Synthetic Data", icon: FlaskConical, desc: "Zero-PHI GAN-powered medical data generation." },
  { id: "coding", title: "Medical Coding", icon: FileText, desc: "Automated mapping to standard ontologies like ICD-10 and SNOMED CT." },
];

const PIPELINE_STEPS = [
  {
    id: 1,
    icon: Shield,
    nodeClass: styles.stepNode,
    title: "100% HIPAA Compliant Scrubbing",
    desc: "Our automated pipelines scrub all Personally Identifiable Information (PII) before it ever enters the inventory using advanced NLP models deployed directly on-premise.",
  },
  {
    id: 2,
    icon: Database,
    nodeClass: styles.stepNodeBlue,
    title: "Curated Quality & Metadata",
    desc: "Developers get access to rich JSONL metadata and visual samples to ensure the data perfectly fits their exact model architecture before purchasing.",
  },
  {
    id: 3,
    icon: TrendingUp,
    nodeClass: styles.stepNodeGreen,
    title: "Accelerate Model Training",
    desc: "Instantly download high-quality, pre-processed datasets directly into your training pipeline to achieve clinical-grade accuracy faster.",
  },
];

const INTEGRATION_STACKS = [
  {
    id: 1,
    tag: "Data Science Stack",
    tagClass: styles.integrationTagProviderDark,
    title: "Ready-to-Use Formats",
    desc: "We deliver data in standardized formats optimized for machine learning workflows.",
    pills: ["JSONL", "DICOM", "NIfTI", "Parquet"],
  },
  {
    id: 2,
    tag: "AI Stack",
    tagClass: styles.integrationTagDeveloperDark,
    title: "Framework Agnostic",
    desc: "Export anonymized datasets directly into your favorite training environments.",
    pills: ["PyTorch", "TensorFlow", "Hugging Face", "AWS SageMaker"],
  },
];

const MODALITIES = [
  {
    id: 1,
    type: "Radiology",
    containerClass: `${styles.bentoItem} ${styles.bentoLarge}`,
    bgIcon: Activity,
    title: "X-Rays, CT Scans & MRIs",
    desc: "Millions of annotated scans with paired radiological reports.",
  },
  {
    id: 2,
    type: "Cardiology",
    containerClass: `${styles.bentoItem} ${styles.bentoMedium1}`,
    bgIcon: null,
    title: "12-Lead ECGs",
    desc: "High-frequency waveform data linked to patient outcomes.",
  },
  {
    id: 3,
    type: "Oncology",
    containerClass: `${styles.bentoItem} ${styles.bentoMedium2}`,
    bgIcon: null,
    title: "Histopathology Slides",
    desc: "High-resolution gigapixel WSIs (Whole Slide Images).",
  },
  {
    id: 4,
    type: "Clinical",
    containerClass: `${styles.bentoItem} ${styles.bentoWide}`,
    bgIcon: null,
    title: "EHR & Lab Results",
    desc: "Structured JSON data representing complete patient timelines.",
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Absolute 3D Canvas Layer */}
      <div className={styles.threeCanvasWrapper}>
        <ThreeScene />
      </div>

      {/* Ultimate Hero Overhaul */}
      <section className={styles.heroUltimate}>
        <div className={styles.heroLayout}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className={styles.heroTextColumn}
          >
            <div className={styles.heroBadgeUltimate}>
              <Shield
                size={14}
                style={{ color: "#0ea5e9", marginRight: "6px" }}
              />{" "}
              Enterprise Medical Data Exchange
            </div>

            <h1 className={styles.titleUltimate}>
              Discover <br />
              <span className={styles.textOutline}>Medical Data.</span>
              <br />
              <span className={styles.highlightGradient}>Train AI.</span>
            </h1>

            <p className={styles.subtitleUltimate}>
              The ultimate infrastructure bridging healthcare and artificial
              intelligence. Access a <strong>diverse global network</strong> of
              clinical data with a <strong>quick turnaround time</strong>.
              Acquire the highest-quality, HIPAA-compliant medical inventory on
              the planet to build clinical-grade AI models.
            </p>

            <div className={styles.heroActionsUltimate}>
              <Link href="/developers" className={styles.primaryButtonUltimate}>
                Access Inventory <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className={styles.secondaryButtonUltimate}>
                Talk to Sales
              </Link>
            </div>

            <div className={styles.trustMetrics}>
              <div className={styles.metric}>
                <strong>5,000+</strong>
                <span>Doctors</span>
              </div>
              <div className={styles.metricDivider}></div>
              <div className={styles.metric}>
                <strong>200+</strong>
                <span>Hospitals</span>
              </div>
              <div className={styles.metricDivider}></div>
              <div className={styles.metric}>
                <strong>15+</strong>
                <span>Years Experience</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className={styles.heroVisualColumn}
          >
            {/* Floating UI Elements overlapping the 3D Object */}
            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05}>
              <div className={`${styles.floatingUiPanel} ${styles.uiPanel1}`}>
                <Activity className={styles.uiIcon} size={24} />
                <div>
                  <span className={styles.uiLabel}>Network Status</span>
                  <span className={styles.uiValue}>Processing X-Rays...</span>
                </div>
              </div>
            </Tilt>

            <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05}>
              <div className={`${styles.floatingUiPanel} ${styles.uiPanel2}`}>
                <Lock className={styles.uiIconGreen} size={24} />
                <div>
                  <span className={styles.uiLabel}>Anonymization</span>
                  <span className={styles.uiValue}>HIPAA Secured</span>
                </div>
              </div>
            </Tilt>
          </motion.div>
        </div>
      </section>

      {/* Premium Data Stream */}
      <div className={styles.streamWrapper}>
        <div className={styles.streamHeader}>
          <Database size={16} color="var(--foreground-muted)" />
          <span>Available Data Modalities</span>
        </div>
        <div className={styles.streamContainer}>
          <div className={styles.streamTrack}>
            {[...DATA_STREAM, ...DATA_STREAM].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={`${item.id}-${index}`}
                  className={styles.activityCard}
                >
                  <Icon size={20} className={item.iconClass} />
                  <div className={styles.activityContent}>
                    <span className={styles.activityTime}>{item.category}</span>
                    <p>
                      <strong>{item.highlight}</strong> {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 1. Features Section - Vertical Pipeline */}
      <motion.section className={styles.pipelineSection}>
        <div className={styles.pipelineHeader}>
          <h2>Accelerate Your AI</h2>
          <p>
            End-to-end encryption and curation from hospital server to model
            training.
          </p>
        </div>
        <div className={styles.pipeline}>
          {PIPELINE_STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <React.Fragment key={step.id}>
                <div className={styles.pipelineStep}>
                  <div className={step.nodeClass}>
                    <Icon size={32} />
                  </div>
                  <div className={styles.stepContent}>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
                {index < PIPELINE_STEPS.length - 1 && (
                  <div className={styles.pipelineLine}></div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </motion.section>

      {/* Premium Solutions Grid */}
      <section className={styles.premiumSolutionsWrapper}>
        <div className={styles.premiumSolutionsHeader}>
          <h2 className={styles.premiumSolutionsTitle}>The Complete AI Lifecycle</h2>
          <p className={styles.premiumSolutionsSubtitle}>
            Our infrastructure handles the entire medical data pipeline from hospital extraction to model-ready ingestion.
          </p>
        </div>
        <div className={styles.premiumSolutionsGrid}>
          {MINI_SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className={styles.premiumSolutionCell}>
                <div className={styles.premiumSolutionIconWrapper}>
                  <Icon size={26} strokeWidth={2.2} className={styles.premiumSolutionIcon} />
                </div>
                <div className={styles.premiumSolutionContent}>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 2. Integrations Section - Dark Terminal Mode */}
      <motion.section className={styles.integrationsDarkWrapper}>
        <div className={styles.integrationsDark}>
          <div className={styles.integrationsHeaderDark}>
            <h2>Zero Friction. Infinite Compatibility.</h2>
            <p>
              Healthron AI natively integrates with the tools your AI
              engineering team already uses.
            </p>
          </div>

          <div className={styles.integrationGridDark}>
            {INTEGRATION_STACKS.map((stack) => (
              <div key={stack.id} className={styles.integrationCardDark}>
                <div className={stack.tagClass}>{stack.tag}</div>
                <h3>{stack.title}</h3>
                <p>{stack.desc}</p>
                <div className={styles.pillContainerDark}>
                  {stack.pills.map((pill, idx) => (
                    <span key={idx} className={styles.pillDark}>
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 3. Supported Modalities - Bento Box Grid */}
      <motion.section className={styles.modalitiesBento}>
        <div className={styles.modalitiesHeader}>
          <h2>The World's Most Diverse Medical Inventory</h2>
          <p>
            Access high-fidelity, anonymized datasets across every major medical
            discipline.
          </p>
        </div>
        <div className={styles.bentoGrid}>
          {MODALITIES.map((modality) => {
            const BgIcon = modality.bgIcon;
            return (
              <div key={modality.id} className={modality.containerClass}>
                {BgIcon && <BgIcon className={styles.bentoIconBg} size={150} />}
                <div className={styles.modalityTagBento}>{modality.type}</div>
                <h3>{modality.title}</h3>
                <p>{modality.desc}</p>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* CTA Section */}
      <div className={styles.ctaWrapper}>
        <section className={styles.cta}>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={styles.ctaInner}
          >
            <h2>Ready to transform healthcare?</h2>
            <p>Join the premier network of medical data exchange.</p>
            <Link href="/contact" className={styles.ctaButton}>
              Contact our Team
            </Link>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
