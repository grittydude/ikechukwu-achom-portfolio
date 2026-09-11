import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { PERSONAL } from "../../data/personal";
import { BOOKS } from "../../data/books";
import { DEDLINE } from "../../data/dedlineProduct";
import PhoneFrame from "../ui/PhoneFrame";
import styles from "./Hero.module.css";

const cover = BOOKS["fans-of-excellence"].cover;
const AUTOPLAY_MS = 6500;

function PersonalVisual() {
  return (
    <div className={styles.personalVisual}>
      <div className={styles.monogram}>
        <span>{PERSONAL.initials}</span>
      </div>
      <div className={styles.chipRow}>
        {PERSONAL.stats.slice(0, 3).map((s) => (
          <span className={styles.statChip} key={s.label}>
            <strong>{s.num}</strong> {s.label}
          </span>
        ))}
      </div>
    </div>
  );
}

function BookVisual() {
  return (
    <div className={styles.visual}>
      <div className={styles.coverGlow} aria-hidden="true" />
      <div className={styles.coverCard}>
        <span className={styles.newBadge}>New Release</span>
        <img src={cover} alt="Fans Of Excellence book cover" className={styles.cover} />
      </div>
      <div className={styles.chipRow}>
        <span className={styles.chip}>Author</span>
        <span className={styles.chip}>Flutter Developer</span>
        <span className={styles.chip}>Systems Builder</span>
      </div>
    </div>
  );
}

function DedlineVisual() {
  return (
    <div className={styles.dedlineVisual}>
      <PhoneFrame />
    </div>
  );
}

const SLIDES = [
  {
    id: "personal",
    badge: "Flutter Developer · Author",
    title: (
      <>
        Building Software.
        <br />
        Writing Books.
        <br />
        <span className={styles.editorial}>Same Standard.</span>
      </>
    ),
    sub: `${PERSONAL.name} is a Flutter Developer who writes about the same thing he builds software for: closing the gap between admiring excellence and actually practicing it.`,
    primary: { label: "More About Me →", to: "/about" },
    secondary: { label: "See My Work", to: "/about#projects" },
    Visual: PersonalVisual,
  },
  {
    id: "book",
    badge: "Mindset · Discipline · Execution",
    title: (
      <>
        From Fan of Excellence
        <br />
        to <span className={styles.editorial}>Evidence</span> of It.
      </>
    ),
    sub: "Ikechukwu Achom writes about becoming excellent — and builds the software that helps you stay that way. One book, one habit, one shipped feature at a time.",
    primary: { label: "Read Fans of Excellence →", to: "/books/fans-of-excellence" },
    secondary: { label: "Explore the Books", to: "/books" },
    Visual: BookVisual,
  },
  {
    id: "dedline",
    badge: `${DEDLINE.platform} · ${DEDLINE.status}`,
    title: (
      <>
        Stop Letting Deadlines
        <br />
        <span className={styles.editorial}>Become Emergencies.</span>
      </>
    ),
    sub: DEDLINE.subheadline,
    primary: { label: "Explore Dedline →", to: "/dedline" },
    secondary: { label: "Try the Live Demo", href: DEDLINE.demoUrl },
    Visual: DedlineVisual,
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);
  const touchStartX = useRef(null);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const goTo = useCallback((i) => {
    setIndex(((i % SLIDES.length) + SLIDES.length) % SLIDES.length);
  }, []);

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (paused || prefersReducedMotion) return undefined;
    timerRef.current = setTimeout(() => setIndex((i) => (i + 1) % SLIDES.length), AUTOPLAY_MS);
    return () => clearTimeout(timerRef.current);
  }, [index, paused, prefersReducedMotion]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      delta < 0 ? next() : prev();
    }
    touchStartX.current = null;
  };

  return (
    <section
      id="home-hero"
      className={styles.hero}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className={styles.bg} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />

      <div
        className={styles.track}
        style={{ transform: `translateX(-${index * (100 / SLIDES.length)}%)` }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {SLIDES.map((slide) => (
          <div className={styles.slide} key={slide.id} aria-hidden={SLIDES[index].id !== slide.id}>
            <div className={styles.inner}>
              <div className={styles.content}>
                <div className={styles.badge}>
                  <span className={styles.dot} />
                  {slide.badge}
                </div>

                <h1 className={styles.h1}>{slide.title}</h1>
                <p className={styles.sub}>{slide.sub}</p>

                <div className={styles.buttons}>
                  <Link to={slide.primary.to} className="btn btn-primary">
                    {slide.primary.label}
                  </Link>
                  {slide.secondary.href ? (
                    <a href={slide.secondary.href} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                      {slide.secondary.label}
                    </a>
                  ) : (
                    <Link to={slide.secondary.to} className="btn btn-outline">
                      {slide.secondary.label}
                    </Link>
                  )}
                </div>
              </div>

              <slide.Visual />
            </div>
          </div>
        ))}
      </div>

      <button className={`${styles.arrow} ${styles.arrowPrev}`} onClick={prev} aria-label="Previous slide">
        ‹
      </button>
      <button className={`${styles.arrow} ${styles.arrowNext}`} onClick={next} aria-label="Next slide">
        ›
      </button>

      <div className={styles.dots} role="tablist" aria-label="Hero slides">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.id}
            className={`${styles.dotBtn} ${i === index ? styles.dotActive : ""}`}
            onClick={() => goTo(i)}
            role="tab"
            aria-selected={i === index}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
