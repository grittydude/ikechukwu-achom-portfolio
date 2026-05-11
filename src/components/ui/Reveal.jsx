import { useInView } from "../../hooks/useInView";

/**
 * Wraps any child with a scroll-triggered reveal animation.
 * @param {string} delay - CSS class like "delay-1", "delay-2", etc.
 */
export default function Reveal({ children, delay = "", className = "", style }) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "visible" : ""} ${delay} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}
