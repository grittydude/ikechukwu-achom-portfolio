import { useEffect, useState } from "react";
import { PERSONAL } from "../../data/personal";
import styles from "./Loader.module.css";

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${styles.loader} ${hidden ? styles.hidden : ""}`} aria-hidden={hidden}>
      <div className={styles.inner}>
        <div className={styles.ring} />
        <span className={styles.name}>{PERSONAL.name}</span>
      </div>
    </div>
  );
}
