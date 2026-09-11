import { useParams, Navigate } from "react-router-dom";
import { BOOKS } from "../data/books";
import { PERSONAL } from "../data/personal";
import Reveal from "../components/ui/Reveal";
import Faq from "../components/shared/Faq";
import CrossLink from "../components/shared/CrossLink";
import styles from "./BookDetail.module.css";

function ComingSoon({ label = "Coming soon" }) {
  return <p className={styles.comingSoon}>{label} — this will be filled in with real content.</p>;
}

export default function BookDetail() {
  const { slug } = useParams();
  const book = BOOKS[slug];

  if (!book) return <Navigate to="/books" replace />;

  const accent = book.color;

  return (
    <div className={styles.page}>
      {/* ── Hero ── */}
      <section className={styles.hero} style={{ "--pillar-color": accent }}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={`section-inner ${styles.heroInner}`}>
          <Reveal className={styles.heroCopy}>
            <span className={styles.pillarTag}>{book.pillar} · {book.subtitle === "Coming soon" ? "Coming Soon" : "Book"}</span>
            <h1 className={styles.h1}>
              {book.headline} <span style={{ color: accent }}>{book.headlineHighlight}</span>
            </h1>
            <p className={styles.blurb}>{book.blurb}</p>
            <div className={styles.actions}>
              {book.buyHref ? (
                <a href={book.buyHref} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ background: `linear-gradient(135deg, ${accent}, ${accent})` }}>
                  {book.buyLabel} →
                </a>
              ) : (
                <a href={`mailto:${PERSONAL.email}?subject=Notify me — ${book.title}`} className="btn btn-primary">
                  {book.buyLabel} →
                </a>
              )}
              {book.previewHref && (
                <a href={book.previewHref} className="btn btn-outline">
                  Read a Preview
                </a>
              )}
            </div>
          </Reveal>

          <Reveal delay="delay-2" className={styles.heroVisual}>
            {book.cover ? (
              <img src={book.cover} alt={`${book.title} cover`} className={styles.cover} />
            ) : (
              <div className={styles.coverPlaceholder} style={{ borderColor: accent }}>
                <span>{book.title}</span>
                <span className={styles.coverSoon}>Cover coming soon</span>
              </div>
            )}
          </Reveal>
        </div>
      </section>

      {/* ── Problem / Core Idea ── */}
      <section>
        <div className="section-inner">
          <div className={styles.twoCol}>
            <Reveal>
              <h2 className={styles.h2}>The Problem</h2>
              <p className={styles.body}>{book.problem}</p>
            </Reveal>
            <Reveal delay="delay-1">
              <h2 className={styles.h2}>The Core Idea</h2>
              {book.coreIdea ? <p className={styles.body}>{book.coreIdea}</p> : <ComingSoon />}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Transformation ── */}
      {book.transformation && (
        <section className={styles.altSection}>
          <div className="section-inner">
            <h2 className={styles.h2Center}>The Shift</h2>
            <div className={styles.transformGrid}>
              <div className={styles.transformCard}>
                <span className={styles.transformLabel}>Before</span>
                <p className={styles.body}>{book.transformation.before}</p>
              </div>
              <div className={styles.arrow} style={{ color: accent }} aria-hidden="true">→</div>
              <div className={styles.transformCard} style={{ borderColor: accent }}>
                <span className={styles.transformLabel} style={{ color: accent }}>After</span>
                <p className={styles.body}>{book.transformation.after}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Framework ── */}
      {book.framework && (
        <section>
          <div className="section-inner">
            <h2 className={styles.h2Center}>{book.framework.name}</h2>
            <div className={styles.frameworkGrid}>
              {book.framework.steps.map((step) => (
                <div key={step.letter} className={styles.frameworkCard}>
                  <span className={styles.frameworkLetter} style={{ color: accent }}>{step.letter}</span>
                  <h3 className={styles.frameworkTitle}>{step.title}</h3>
                  <p className={styles.body}>{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── What's Inside / Who For / Why ── */}
      <section className={styles.altSection}>
        <div className="section-inner">
          <div className={styles.threeCol}>
            <div>
              <h3 className={styles.h3}>What's Inside</h3>
              {book.whatsInside ? <p className={styles.body}>{book.whatsInside}</p> : <ComingSoon />}
            </div>
            <div>
              <h3 className={styles.h3}>Who It's For</h3>
              {book.whoFor ? <p className={styles.body}>{book.whoFor}</p> : <ComingSoon />}
            </div>
            <div>
              <h3 className={styles.h3}>Why I Wrote It</h3>
              {book.whyThisBook ? <p className={styles.body}>{book.whyThisBook}</p> : <ComingSoon />}
            </div>
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section>
        <div className="section-inner">
          <h2 className={styles.h2Center}>Reader Reviews</h2>
          {book.reviews && book.reviews.length > 0 ? (
            <div className={styles.reviewGrid}>
              {book.reviews.map((r) => (
                <blockquote key={r.name} className={styles.reviewCard}>
                  <p>&ldquo;{r.text}&rdquo;</p>
                  <cite>{r.name}</cite>
                </blockquote>
              ))}
            </div>
          ) : (
            <p className={styles.comingSoonCenter}>No reviews yet — real reader reviews will appear here.</p>
          )}
        </div>
      </section>

      {/* ── FAQ ── */}
      {book.faqs && book.faqs.length > 0 && (
        <section>
          <div className="section-inner">
            <h2 className={styles.h2}>Frequently Asked</h2>
            <Faq items={book.faqs} />
          </div>
        </section>
      )}

      {/* ── Cross-link ── */}
      {book.crossLink && (
        <section>
          <div className="section-inner">
            <CrossLink {...book.crossLink} color={accent} />
          </div>
        </section>
      )}
    </div>
  );
}
