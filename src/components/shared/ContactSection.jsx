import { useState } from "react";
import { PERSONAL } from "../../data/personal";
import CvButton from "./CvButton";
import SocialLinks from "./SocialLinks";
import { IconArrowUpRight, IconBurst } from "../ui/Icons";
import styles from "./ContactSection.module.css";

// Existing Formspree form from the previous site.
const FORM_ENDPOINT = "https://formspree.io/f/xqenwpke";

function ContactForm() {
  // idle | sending | sent | error
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="cf-name">Name</label>
          <input id="cf-name" name="name" type="text" autoComplete="name" required />
        </div>
        <div className={styles.field}>
          <label htmlFor="cf-email">Email</label>
          <input id="cf-email" name="email" type="email" autoComplete="email" required />
        </div>
      </div>
      <div className={styles.field}>
        <label htmlFor="cf-message">Message</label>
        <textarea id="cf-message" name="message" rows="4" required />
      </div>
      <button type="submit" className="btn btn-accent" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      <p className={styles.status} role="status" aria-live="polite">
        {status === "sent" && "Thanks — your message is on its way. I'll reply by email."}
        {status === "error" && (
          <>
            That didn't send. Please email me directly at{" "}
            <a href={`mailto:${PERSONAL.email}`}>{PERSONAL.email}</a>.
          </>
        )}
      </p>
    </form>
  );
}

/** Closing contact band, rendered once per page by the app layout (#contact). */
export default function ContactSection() {
  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-title">
      <div className={styles.panel}>
        <div className={styles.copy}>
          <p className={styles.tag}>Get in touch</p>
          <h2 id="contact-title" className={styles.title}>
            Hiring, or building{" "}
            <span>
              something?
              <IconBurst className="spark" />
            </span>
          </h2>
          <p className={styles.lead}>
            I'm open to roles in mobile and web development, product design, technical leadership and product
            management. Email is the fastest way to reach me.
          </p>
          <a href={`mailto:${PERSONAL.email}`} className={styles.email}>
            {PERSONAL.email}
            <IconArrowUpRight size={20} />
          </a>
          <div className={styles.actions}>
            <CvButton variant="btn-outline" className={styles.cv} />
            <SocialLinks className={styles.socials} />
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
