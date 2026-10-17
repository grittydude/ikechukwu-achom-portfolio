import { useInView } from "../../hooks/useInView";

/**
 * Wraps any child with a scroll-triggered reveal animation.
 * @param {string} delay - CSS class like "delay-1", "delay-2", etc.
 * @param {string} as - element to render (default "div"), e.g. "li".
 */
export default function Reveal({ children, delay = "", className = "", style, as: Tag = "div" }) {
  const [ref, inView] = useInView();
  return (
    <Tag ref={ref} className={`reveal ${inView ? "visible" : ""} ${delay} ${className}`} style={style}>
      {children}
    </Tag>
  );
}
