import { cvFor } from "../../data/site";
import { IconDownload } from "../ui/Icons";

/** Downloads the CV mapped to a role in data/site.js (falls back to the master CV). */
export default function CvButton({ role, variant = "btn-outline", className = "", label }) {
  const cv = cvFor(role);
  return (
    <a href={cv.href} download={cv.fileName} className={`btn ${variant} ${className}`}>
      <IconDownload size={18} />
      {label ?? cv.label}
      <span className="visually-hidden"> (PDF)</span>
    </a>
  );
}
