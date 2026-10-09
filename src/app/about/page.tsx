"use client";
import Link from "next/link";
import { Target, Users, Zap, Building2 } from "lucide-react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import styles from "./about.module.css";

const MISSION_STATS = [
  { id: 1, icon: Building2, value: "200+", label: "Partner Hospitals" },
  { id: 2, icon: Zap, value: "10M+", label: "Scrubbed Records" },
];

const LEADERSHIP_TEAM = [
  {
    id: 1,
    name: "Dr. Arthur Pendelton",
    role: "Chief Executive Officer",
    bio: "Former Chief Medical Officer at Mount Sinai. Led national healthcare data initiatives.",
  },
  {
    id: 2,
    name: "Elena Rostova, PhD",
    role: "Chief AI Scientist",
    bio: "Ex-DeepMind. Author of foundational papers on privacy-preserving machine learning.",
  },
  {
    id: 3,
    name: "Marcus Vance",
    role: "Chief Security Officer",
    bio: "20 years in defense-grade cybersecurity. Architect of our zero-trust pipeline.",
  },
];

const PHILOSOPHY_ITEMS = [
  {
    id: 1,
    icon: Target,
    title: "Privacy First, Always.",
    desc: "We believe patient privacy is a fundamental human right. Our local de-identification engine ensures that raw PHI never leaves the hospital firewall.",
  },
  {
    id: 2,
    icon: Users,
    title: "Fair Value Exchange",
    desc: "Hospitals create the data; they deserve to be compensated for it. We provide a transparent, passive revenue stream to fund future research.",
  },
];

const INVESTORS = ["Sequoia", "A16Z", "Y Combinator", "Google Ventures"];

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className={styles.heroContent}
        >
          <h1 className={styles.title}>
            The Future of <br />
            <span className={styles.highlight}>Medical AI</span> Starts Here
          </h1>
          <p className={styles.subtitle}>
            We are a team of healthcare veterans, AI engineers, and security
            experts on a mission to solve the biggest bottleneck in medical
            innovation: Data Accessibility.
          </p>
        </motion.div>
      </header>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={styles.mission}
      >
        <div className={styles.missionGrid}>
          <div className={styles.missionText}>
            <h2>Our Mission</h2>
            <p>
              For decades, life-saving medical data has sat siloed in hospital
              servers, blocked by complex privacy laws. Meanwhile, AI developers
              have struggled to find diverse, real-world data to train their
              models.
            </p>
            <p>
              Healthron AI was built to create a frictionless, zero-risk bridge.
              We enable hospitals to easily monetize their dormant data while
              ensuring patient privacy is mathematically guaranteed and
              delivering <strong>high quality</strong> datasets.
            </p>
          </div>
          <div className={`glass-panel ${styles.missionStats}`}>
            {MISSION_STATS.map((stat) => {
              const Icon = stat.icon;
              return (
                <Tilt
                  key={stat.id}
                  tiltMaxAngleX={5}
                  tiltMaxAngleY={5}
                  scale={1.02}
                >
                  <div className={styles.statBox}>
                    <div className={styles.statIcon}>
                      <Icon size={24} />
                    </div>
                    <h3>{stat.value}</h3>
                    <span>{stat.label}</span>
                  </div>
                </Tilt>
              );
            })}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={styles.leadership}
      >
        <div className={styles.leadershipHeader}>
          <h2>Meet the Leadership</h2>
          <p>
            Built by pioneers in healthcare infrastructure and artificial
            intelligence.
          </p>
        </div>
        <div className={styles.teamGrid}>
          {LEADERSHIP_TEAM.map((member) => (
            <div key={member.id} className={styles.teamCard}>
              <div className={styles.avatarLarge}></div>
              <h3>{member.name}</h3>
              <span>{member.role}</span>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <section className={styles.philosophy}>
        <div className={styles.philosophyGrid}>
          {PHILOSOPHY_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className={styles.philosophyCard}>
                <div className={styles.iconCircle}>
                  <Icon size={28} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className={styles.investors}>
        <h2>Backed By Visionaries</h2>
        <div className={styles.logos}>
          {INVESTORS.map((investor, idx) => (
            <Tilt key={idx} scale={1.05} tiltMaxAngleX={5} tiltMaxAngleY={5}>
              <div className={styles.logoPlaceholder}>{investor}</div>
            </Tilt>
          ))}
        </div>
      </section>
    </div>
  );
}
