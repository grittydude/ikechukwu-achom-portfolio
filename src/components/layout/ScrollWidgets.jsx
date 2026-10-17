import { useEffect, useState } from "react";
import { useScrollProgress } from "../../hooks/useScrollProgress";
import { IconArrowUp } from "../ui/Icons";
import styles from "./ScrollWidgets.module.css";

export function ScrollProgressBar() {
  const progress = useScrollProgress();
  return (
    <div
      className={styles.progressBar}
      style={{ transform: `scaleX(${progress})` }}
      aria-hidden="true"
    />
  );
}

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      className={`${styles.backTop} ${visible ? styles.visible : ""}`}
      onClick={handleClick}
      aria-label="Back to top"
    >
      <IconArrowUp size={20} />
    </button>
  );
}
