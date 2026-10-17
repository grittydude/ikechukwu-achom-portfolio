import { PERSONAL } from "../../data/personal";
import { publicUrl } from "../../data/site";
import styles from "./Portrait.module.css";

/** Contour lines inside the orange shape — the reference's topographic swirl. */
function Contours() {
  return (
    <svg className={styles.contours} viewBox="0 0 400 400" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      {[40, 70, 100, 130, 160, 190, 220].map((r, i) => (
        <path
          key={r}
          d={`M ${200 - r} 230 C ${200 - r} ${150 - i * 6}, ${200 + r * 0.6} ${110 - i * 8}, ${200 + r} 200 S ${200 + r * 0.3} ${330 + i * 4}, ${200 - r} 230`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      ))}
    </svg>
  );
}

/**
 * Orange arch with the owner's cut-out portrait. Until a photo is supplied
 * (PERSONAL.photo), it shows an initials monogram instead of a stock image.
 */
export default function Portrait({ variant = "hero", children, priority = false }) {
  return (
    <div className={`${styles.wrap} ${styles[variant]}`}>
      <div className={styles.shape}>
        <Contours />
      </div>
      {PERSONAL.photo ? (
        <img
          className={styles.photo}
          src={publicUrl(PERSONAL.photo)}
          alt={`Portrait of ${PERSONAL.name}`}
          width="329"
          height="405"
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : undefined}
          decoding="async"
        />
      ) : (
        <div className={styles.monogram} role="img" aria-label={`${PERSONAL.name} monogram`}>
          {PERSONAL.initials}
        </div>
      )}
      {children}
    </div>
  );
}
