import Reveal from "./Reveal";
import { IconBurst } from "./Icons";

/**
 * Reference-style heading: "— eyebrow", then a title with an italic orange
 * highlight and the small burst mark. `before`/`after` wrap the highlight so
 * it can sit anywhere in the sentence ("My {Education} & Work").
 */
/** Keeps the burst mark glued to the last word so it never wraps alone. */
export function WithBurst({ text }) {
  const i = text.lastIndexOf(" ");
  const head = i === -1 ? "" : text.slice(0, i + 1);
  const last = i === -1 ? text : text.slice(i + 1);
  return (
    <>
      {head}
      <span className="nb">
        {last}
        <IconBurst className="spark" />
      </span>
    </>
  );
}

export function Heading({ as: Tag = "h2", title, highlight, after, className = "", id }) {
  return (
    <Tag className={`section-title ${className}`} id={id}>
      {title}
      {title && highlight ? " " : null}
      {highlight && <span>{after ? highlight : <WithBurst text={highlight} />}</span>}
      {after ? (
        <>
          {" "}
          <WithBurst text={after} />
        </>
      ) : null}
      {!highlight && !after && <IconBurst className="spark" />}
    </Tag>
  );
}

export default function SectionHeader({
  tag,
  title,
  highlight,
  after,
  sub,
  subStyle,
  aside,
  action,
  center = false,
  as,
  id,
}) {
  // Split layout: heading on the left, a short note or CTA on the right.
  if (aside || action) {
    return (
      <Reveal className={`section-head ${center ? "section-head--center" : ""}`}>
        <div>
          {tag && <p className="section-tag">{tag}</p>}
          <Heading as={as} title={title} highlight={highlight} after={after} id={id} />
        </div>
        {aside && <p className="section-head__aside">{aside}</p>}
        {action}
      </Reveal>
    );
  }

  return (
    <Reveal className={center ? "section-head section-head--center" : undefined}>
      {tag && <p className="section-tag">{tag}</p>}
      <Heading as={as} title={title} highlight={highlight} after={after} id={id} />
      {sub && (
        <p className="section-sub" style={subStyle}>
          {sub}
        </p>
      )}
    </Reveal>
  );
}
