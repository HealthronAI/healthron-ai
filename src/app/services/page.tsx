"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Database,
  Edit3,
  ClipboardCheck,
  ShieldAlert,
  FlaskConical,
  FileText,
  ArrowRight,
  Fingerprint,
} from "lucide-react";
import styles from "./services.module.css";
import Link from "next/link";

const SERVICES = [
  {
    id: "collection",
    title: "Healthcare Data Collection",
    icon: Database,
    color: "#0ea5e9", // Blue
    description:
      "We source high-fidelity, diverse medical data from our global network of partnered hospitals and clinics. From high-resolution radiology scans to complex genomic sequences, we aggregate the exact data modalities your AI models require to achieve clinical-grade accuracy.",
    features: [
      "Access to 200+ hospital networks",
      "Custom cohort generation",
      "Rare disease data sourcing",
      "Longitudinal patient histories",
    ],
  },
  {
    id: "annotation",
    title: "Healthcare Data Annotation",
    icon: Edit3,
    color: "#10b981", // Emerald
    description:
      "Raw data is useless without context. Our platform provides pixel-perfect medical annotation, including bounding boxes for tumors, polygon segmentation for organs, and structured NLP tagging for clinical text—all tailored exactly to your schema.",
    features: [
      "Pixel-perfect image segmentation",
      "NLP entity extraction",
      "DICOM metadata tagging",
      "Custom annotation ontologies",
    ],
  },
  {
    id: "qa",
    title: "Expert Review (QA)",
    icon: ClipboardCheck,
    color: "#f59e0b", // Amber
    description:
      "Machine learning in healthcare demands zero margin for error. Every dataset can be routed through our exclusive network of board-certified clinicians (radiologists, oncologists, cardiologists) for rigorous quality assurance and label verification.",
    features: [
      "Board-certified specialist review",
      "Multi-reader consensus",
      "Gold-standard ground truth creation",
      "Continuous quality monitoring",
    ],
  },
  {
    id: "deid",
    title: "De-identification",
    icon: ShieldAlert,
    color: "#ef4444", // Red
    description:
      "Patient privacy is mathematically guaranteed. Our proprietary NLP and computer vision pipelines scrub all 18 HIPAA Safe Harbor identifiers from structured EHRs, clinical notes, and burned-in pixels on radiological scans before the data ever leaves the hospital firewall.",
    features: [
      "Pixel-level OCR redaction",
      "NLP text scrubbing",
      "HIPAA Safe Harbor compliant",
      "Local-first processing",
    ],
  },
  {
    id: "synthetic",
    title: "Synthetic Data Creation",
    icon: FlaskConical,
    color: "#8b5cf6", // Violet
    description:
      "When real-world data is scarce or privacy constraints are too tight, we utilize advanced Generative Adversarial Networks (GANs) and diffusion models to generate highly realistic, statistically identical synthetic medical cohorts that carry zero privacy risk.",
    features: [
      "Statistically identical twin datasets",
      "GAN-powered medical imaging",
      "Zero PHI risk",
      "Augmenting rare pathology sets",
    ],
  },
  {
    id: "coding",
    title: "Medical Coding & Transcription",
    icon: FileText,
    color: "#ec4899", // Pink
    description:
      "We convert messy, unstructured audio dictations and handwritten clinical notes into pristine, structured formats mapped precisely to standard medical ontologies (ICD-10, SNOMED CT, LOINC), making the data instantly ready for machine ingestion.",
    features: [
      "ICD-10 / SNOMED CT mapping",
      "High-accuracy audio transcription",
      "Unstructured to structured conversion",
      "Ontology standardization",
    ],
  },
];

export default function ServicesPage() {
  const [activeServiceId, setActiveServiceId] = useState(SERVICES[0].id);
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(1);

  const activeService =
    SERVICES.find((s) => s.id === activeServiceId) || SERVICES[0];
  const ActiveIcon = activeService.icon;

  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.heroContent}
        >
          <div className={styles.badge}>Our Capabilities</div>
          <h1 className={styles.title}>
            End-to-End <br />
            <span className={styles.highlightBlue}>Medical Data</span> Services
          </h1>
          <p className={styles.subtitle}>
            From raw hospital extraction to AI-ready gold standard datasets. We
            handle the complexity of medical data so you can focus on building
            life-saving models.
          </p>
        </motion.div>
      </header>

      <section className={styles.interactiveShowcase}>
        <div className={styles.showcaseLayout}>
          {/* Sidebar Navigation */}
          <div className={styles.serviceNav}>
            {SERVICES.map((service) => {
              const Icon = service.icon;
              const isActive = activeServiceId === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`${styles.navItem} ${isActive ? styles.navItemActive : ""}`}
                  style={
                    { "--hover-color": service.color } as React.CSSProperties
                  }
                >
                  <div
                    className={styles.navIconWrapper}
                    style={{
                      backgroundColor: isActive ? service.color : "transparent",
                      color: isActive ? "white" : "var(--foreground-muted)",
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <span className={styles.navTitle}>{service.title}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className={styles.activeIndicator}
                      style={{ backgroundColor: service.color }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Dynamic Content Area */}
          <div className={styles.contentArea}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={styles.contentCard}
                style={{ borderTop: `4px solid ${activeService.color}` }}
              >
                <div className={styles.cardHeader}>
                  <div
                    className={styles.largeIconWrapper}
                    style={{
                      color: activeService.color,
                      backgroundColor: `${activeService.color}15`,
                    }}
                  >
                    <ActiveIcon size={48} strokeWidth={1.5} />
                  </div>
                  <h2>{activeService.title}</h2>
                </div>

                <p className={styles.description}>
                  {activeService.description}
                </p>

                <div className={styles.featuresList}>
                  <h3>Key Capabilities</h3>
                  <ul>
                    {activeService.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + idx * 0.1 }}
                      >
                        <div
                          className={styles.checkIcon}
                          style={{ color: activeService.color }}
                        >
                          ✓
                        </div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className={styles.cardAction}>
                  <Link
                    href="/contact"
                    className={styles.actionBtn}
                    style={{ backgroundColor: activeService.color }}
                  >
                    Request this Service <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* NEW: Ultra-Premium Interactive Workflow */}
      <section className={styles.workflowSection}>
        <div className={styles.workflowHeader}>
          <h2>Engagement Workflow</h2>
          <p>
            A frictionless, transparent path from initial contact to project
            kickoff.
          </p>
        </div>

        <div className={styles.verticalTimeline}>
          <div className={styles.timelineLine}></div>
          {[
            {
              step: "01",
              title: "Project Discovery",
              desc: "Initial alignment on goals, data requirements, and feasibility.",
            },
            {
              step: "02",
              title: "Mutual NDA",
              desc: "Strict non-disclosure agreements to protect your intellectual property instantly.",
            },
            {
              step: "03",
              title: "Deep Dive",
              desc: "Detailed understanding of schemas, modalities, and edge-case pathologies.",
            },
            {
              step: "04",
              title: "Pricing & Sample",
              desc: "Transparent, flat-rate quoting alongside a sample data delivery.",
            },
            {
              step: "05",
              title: "Proof of Concept",
              desc: "Validate our data on your own infrastructure before any full commitment.",
            },
            {
              step: "06",
              title: "Project Kickoff",
              desc: "Full-scale deployment and continuous, live data streaming.",
            },
          ].map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`${styles.timelineRow} ${isEven ? styles.rowLeft : styles.rowRight}`}
              >
                <div className={styles.timelineCard}>
                  <div className={styles.timelineStepNumber}>{item.step}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                <div className={styles.timelineDot}></div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Security & Compliance Section */}
      <section className={styles.securitySection}>
        <div className={styles.securityHeader}>
          <h2>Enterprise-Grade Security Standards</h2>
          <p>
            Our data services are built on top of military-grade infrastructure.
          </p>
        </div>
        <div className={styles.securityGrid}>
          <motion.div whileHover={{ y: -10 }} className={styles.securityCard}>
            <div className={styles.securityIcon}>
              <ShieldAlert size={32} />
            </div>
            <h3>HIPAA, GDPR & ISO Compliant</h3>
            <p>
              Automated removal of all 18 PHI identifiers and full adherence to
              global data privacy laws.
            </p>
          </motion.div>
          <motion.div whileHover={{ y: -10 }} className={styles.securityCard}>
            <div className={styles.securityIcon}>
              <Database size={32} />
            </div>
            <h3>Zero-Knowledge Architecture</h3>
            <p>
              End-to-end encryption means even we cannot read your raw patient
              data in transit.
            </p>
          </motion.div>
          <motion.div whileHover={{ y: -10 }} className={styles.securityCard}>
            <div className={styles.securityIcon}>
              <Fingerprint size={32} />
            </div>
            <h3>Immutable Audit Trails</h3>
            <p>
              Cryptographically secured, tamper-proof logs tracking every single
              data access and transfer event.
            </p>
          </motion.div>
        </div>
      </section>

      <div className={styles.ctaWrapper}>
        <section className={styles.cta}>
          <div className={styles.ctaInner}>
            <h2>Need a custom data pipeline?</h2>
            <p>
              Our engineers can build bespoke workflows connecting your
              infrastructure directly to our scrubbers.
            </p>
            <Link href="/contact" className={styles.ctaButton}>
              Talk to an Architect
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
