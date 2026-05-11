import { useState } from "react";
import { PERSONAL } from "../../data/personal";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";
import { IconEmail, IconWhatsApp, IconGitHub } from "../ui/Icons";
import styles from "./Contact.module.css";

const CONTACT_ITEMS = [
  {
    href: `mailto:${PERSONAL.email}`,
    target: null,
    icon: <IconEmail size={22} />,
    iconClass: styles.iconEmail,
    label: "Email",
    value: PERSONAL.email,
  },
  {
    href: PERSONAL.whatsappHref,
    target: "_blank",
    icon: <IconWhatsApp size={22} />,
    iconClass: styles.iconWa,
    label: "WhatsApp",
    value: PERSONAL.whatsapp,
  },
  {
    href: PERSONAL.github,
    target: "_blank",
    icon: <IconGitHub size={22} />,
    iconClass: styles.iconGh,
    label: "GitHub",
    value: PERSONAL.githubHandle,
  },
];

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1400);
  };

  return (
    <div className={styles.form}>
      <h3 className={styles.formTitle}>Send a Message</h3>
      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.formRow}>
          <div className={styles.group}>
            <label htmlFor="name">Your Name</label>
            <input id="name" type="text" placeholder="John Doe" required />
          </div>
          <div className={styles.group}>
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" placeholder="hello@example.com" required />
          </div>
        </div>
        <div className={styles.group}>
          <label htmlFor="project">Project Type</label>
          <input id="project" type="text" placeholder="e.g. Flutter App, Consultation, Full-time Role" />
        </div>
        <div className={styles.group}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows={5}
            placeholder="Tell me about your project, goals, or opportunity..."
            required
          />
        </div>
        <button
          type="submit"
          className={`btn btn-primary ${styles.submit}`}
          disabled={loading || sent}
        >
          {loading ? "Sending…" : sent ? "Message Sent ✓" : "Send Message →"}
        </button>
        {sent && (
          <p className={styles.success} role="alert">
            ✅ Message received! I'll get back to you within 24 hours.
          </p>
        )}
      </form>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact">
      <div className="section-inner">
        <SectionHeader
          tag="Get In Touch"
          title="Let's Build Something"
          highlight="Great"
          sub="Open to remote freelance projects, full-time opportunities, and technical collaborations worldwide."
        />
        <div className={styles.grid}>
          <Reveal className={styles.info}>
            {CONTACT_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.target}
                rel={item.target ? "noopener noreferrer" : undefined}
                className={styles.contactCard}
              >
                <div className={`${styles.iconBox} ${item.iconClass}`}>
                  {item.icon}
                </div>
                <div>
                  <div className={styles.contactLabel}>{item.label}</div>
                  <div className={styles.contactValue}>{item.value}</div>
                </div>
              </a>
            ))}

            <div className={styles.responseBox}>
              <div className={styles.responseTitle}>⚡ Response Time</div>
              <div className={styles.responseVal}>Typically within 24 hours</div>
              <div className={styles.responseSub}>Available for remote projects worldwide</div>
            </div>
          </Reveal>

          <Reveal delay="delay-2">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
