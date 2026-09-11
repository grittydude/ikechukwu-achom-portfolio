import { useState } from "react";
import styles from "./Faq.module.css";

export default function Faq({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (!items || items.length === 0) return null;

  return (
    <div className={styles.list}>
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div className={styles.item} key={item.q}>
            <button
              className={styles.question}
              onClick={() => setOpenIndex(open ? -1 : i)}
              aria-expanded={open}
            >
              {item.q}
              <span className={`${styles.icon} ${open ? styles.iconOpen : ""}`}>+</span>
            </button>
            <div className={`${styles.answer} ${open ? styles.answerOpen : ""}`}>
              <p className={styles.answerInner}>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
