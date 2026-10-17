import { Link } from "react-router-dom";

/**
 * Internal paths use the router; http(s) links open in a new tab with safe
 * rel attributes; everything else (mailto:, file downloads) is a plain <a>.
 */
export default function SmartLink({ to, children, download, ...rest }) {
  if (!to) return null;
  if (/^https?:\/\//.test(to)) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    );
  }
  if (to.startsWith("/") && !download) {
    return (
      <Link to={to} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={to} download={download} {...rest}>
      {children}
    </a>
  );
}
