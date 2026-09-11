import { useState } from "react";
import styles from "./Newsletter.module.css";

// NOTE: this form doesn't send anywhere real yet — it only shows a success
// state locally. Wire it up to a real email service (Mailchimp, ConvertKit,
// Formspree, etc.) before relying on it to actually collect subscribers.
export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
  };

  return (
    <section id="newsletter" className={styles.section}>
      <div className="section-inner">
        <div className={styles.card}>
          <div className={styles.copy}>
            <h3 className={styles.title}>Get New Chapters &amp; Ships First</h3>
            <p className={styles.sub}>
              Grit365 updates, Dedline releases, and the occasional idea worth
              sharing — no spam, unsubscribe anytime.
            </p>
          </div>

          {sent ? (
            <p className={styles.success} role="status">
              ✓ You're on the list — thanks for signing up.
            </p>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email address"
              />
              <button type="submit" className="btn btn-primary">
                Subscribe →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
