import { useInView } from "../../hooks/useInView";

export default function SectionHeader({ tag, title, highlight, sub, subStyle }) {
  const [tagRef, tagVisible] = useInView();
  const [titleRef, titleVisible] = useInView();
  const [subRef, subVisible] = useInView();

  return (
    <>
      <p ref={tagRef} className={`section-tag reveal ${tagVisible ? "visible" : ""}`}>
        {tag}
      </p>
      <h2 ref={titleRef} className={`section-title reveal delay-1 ${titleVisible ? "visible" : ""}`}>
        {title} {highlight && <span>{highlight}</span>}
      </h2>
      {sub && (
        <p
          ref={subRef}
          className={`section-sub reveal delay-2 ${subVisible ? "visible" : ""}`}
          style={subStyle}
        >
          {sub}
        </p>
      )}
    </>
  );
}
