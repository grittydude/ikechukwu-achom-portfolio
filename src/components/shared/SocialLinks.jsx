import { SOCIAL_LINKS } from "../../data/personal";
import { IconLinkedIn, IconGitHub, IconEmail, IconWhatsApp } from "../ui/Icons";

const ICONS = {
  linkedin: IconLinkedIn,
  github: IconGitHub,
  email: IconEmail,
  whatsapp: IconWhatsApp,
};

/** Round icon links to the verified profiles in data/personal.js. */
export default function SocialLinks({ className = "", only, size = 16 }) {
  const links = only ? SOCIAL_LINKS.filter((l) => only.includes(l.id)) : SOCIAL_LINKS;
  return (
    <ul className={className} style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
      {links.map(({ id, label, href }) => {
        const Icon = ICONS[id];
        const external = href.startsWith("http");
        return (
          <li key={id}>
            <a
              href={href}
              className="social-btn"
              aria-label={label}
              title={label}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <Icon size={size} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
