import { AUTHOR } from "../../data/author";
import SectionHeader from "../ui/SectionHeader";
import Reveal from "../ui/Reveal";
import styles from "./Author.module.css";

export default function Author() {
  return (
    <section id="author">
      <div className="section-inner">
        <div className={styles.grid}>
          <div>
            <SectionHeader
              tag={AUTHOR.tag}
              title={AUTHOR.title}
              highlight={AUTHOR.highlight}
            />
            <div className={styles.bio}>
              {AUTHOR.bio.map((para, i) => (
                <Reveal key={i} delay={`delay-${i + 2}`}>
                  <p>{para}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className={styles.highlights}>
            {AUTHOR.books.map((book, i) => (
              <Reveal key={book.title} delay={`delay-${i + 1}`}>
                <div className={styles.card}>
                  {book.coverImage ? (
                    <img
                      className={styles.cover}
                      src={book.coverImage}
                      alt={`${book.title} book cover`}
                    />
                  ) : (
                    <span className={styles.icon}>{book.cover}</span>
                  )}
                  <div>
                    <h4 className={styles.cardTitle}>{book.title}</h4>
                    {book.subtitle && (
                      <p className={styles.cardSubtitle}>{book.subtitle}</p>
                    )}
                    <p className={styles.cardBody}>{book.blurb}</p>
                    <a
                      href={book.buyHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`btn btn-primary btn-sm ${styles.buyBtn}`}
                    >
                      {book.buyLabel}
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
