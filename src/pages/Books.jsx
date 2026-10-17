import { Link } from "react-router-dom";
import { BOOK_LIST } from "../data/books";
import SectionHeader from "../components/ui/SectionHeader";
import Reveal from "../components/ui/Reveal";
import styles from "./Books.module.css";

function BookCard({ book, delay }) {
  const available = Boolean(book.buyHref);
  return (
    <Reveal delay={delay}>
      <Link to={`/books/${book.slug}`} className={styles.card} style={{ "--pillar-color": book.color }}>
        <div className={styles.coverWrap}>
          {book.cover ? (
            <img src={book.cover} alt={`${book.title} cover`} className={styles.cover} />
          ) : (
            <div className={styles.coverPlaceholder}>
              <span>{book.title}</span>
            </div>
          )}
        </div>
        <div className={styles.body}>
          <span className={styles.pillar}>{book.pillar}</span>
          <h3 className={styles.title}>{book.title}</h3>
          <p className={styles.subtitle}>{book.subtitle}</p>
          <p className={styles.blurb}>{book.blurb}</p>
          <span className={`${styles.status} ${available ? styles.statusLive : styles.statusSoon}`}>
            {available ? "Available Now" : "Coming Soon"}
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export default function Books() {
  return (
    <div className={styles.page}>
      <section className={styles.intro}>
        <div className="section-inner">
          <SectionHeader
            as="h1"
            tag="The Books"
            title="Mindset &"
            highlight="Discipline"
            sub="Two books, one idea followed all the way through: excellence is a decision you make, and then a practice you keep."
          />
        </div>
      </section>

      <section>
        <div className="section-inner" style={{ paddingTop: 0 }}>
          <div className={styles.grid}>
            {BOOK_LIST.map((book, i) => (
              <BookCard key={book.slug} book={book} delay={i > 0 ? `delay-${i}` : ""} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
