"use client";
import { useState } from "react";
import { Shield, Building2, Zap } from "lucide-react";
import styles from "./contact.module.css";

const TRUST_BADGES = [
  { id: 1, icon: Shield, label: "HIPAA Compliant" },
  { id: 2, icon: Building2, label: "200+ Hospital Partners" },
  { id: 3, icon: Zap, label: "24hr Onboarding" },
];

export default function ContactPage() {
  const [persona, setPersona] = useState("provider");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);

    const formData = new FormData(e.currentTarget);
    const data = {
      persona,
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      dataTypes: formData.get("dataTypes"),
      details: formData.get("details"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send");
      setSuccess(true);
      e.currentTarget.reset();
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.infoColumn}>
        <h1 className={styles.infoTitle}>
          Let's Build the Future of Medical AI
        </h1>
        <p className={styles.infoSubtitle}>
          Fill out the form and our onboarding team will reach out within 24
          hours to schedule an introductory meeting.
        </p>
        <div className={styles.trustBadges}>
          {TRUST_BADGES.map((badge) => {
            const Icon = badge.icon;
            return (
              <div key={badge.id} className={styles.trustItem}>
                <Icon size={20} />
                <span>{badge.label}</span>
              </div>
            );
          })}
        </div>
        <div className={styles.contactDirect}>
          <p>
            <strong>Email:</strong> connect@healthronai.com
          </p>
        </div>
      </div>

      <div className={styles.formWrapper}>
        <div className={styles.personaToggle}>
          <button
            className={`${styles.toggleBtn} ${persona === "provider" ? styles.active : ""}`}
            onClick={() => setPersona("provider")}
          >
            I am a Data Provider
          </button>
          <button
            className={`${styles.toggleBtn} ${persona === "developer" ? styles.active : ""}`}
            onClick={() => setPersona("developer")}
          >
            I am an AI Developer
          </button>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label>Full Name</label>
            <input name="name" type="text" placeholder="Dr. John Smith" required />
          </div>

          <div className={styles.inputGroup}>
            <label>Work Email</label>
            <input
              name="email"
              type="email"
              placeholder={
                persona === "provider"
                  ? "john@hospital.org"
                  : "john@tech-ai.org"
              }
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label>
              {persona === "provider"
                ? "Hospital / Clinic Name"
                : "Company Name"}
            </label>
            <input
              name="company"
              type="text"
              placeholder={
                persona === "provider" ? "General Hospital" : "Tech AI Labs"
              }
              required
            />
          </div>

          {persona === "provider" && (
            <div className={styles.inputGroup}>
              <label>What type of data do you have?</label>
              <select name="dataTypes" required>
                <option value="">Select data type...</option>
                <option value="xray">X-Rays / Imaging</option>
                <option value="ehr">Electronic Health Records (EHR)</option>
                <option value="genomics">Genomic Data</option>
                <option value="other">Other</option>
              </select>
            </div>
          )}

          {persona === "developer" && (
            <div className={styles.inputGroup}>
              <label>What are you building?</label>
              <textarea
                name="details"
                placeholder="Tell us about your AI models and data requirements..."
                rows={4}
                required
              ></textarea>
            </div>
          )}

          <button type="submit" className={styles.submitBtn} disabled={loading}>
            {loading ? (
              <span className={styles.loadingState}>
                <span className={styles.spinner}></span>
                Submitting...
              </span>
            ) : success ? (
              "Message Sent!"
            ) : (
              "Request Access"
            )}
          </button>
          {error && <p style={{ color: '#ef4444', fontSize: '14px', marginTop: '10px', textAlign: 'center' }}>Failed to send message. Please try again.</p>}
        </form>
      </div>
    </div>
  );
}
