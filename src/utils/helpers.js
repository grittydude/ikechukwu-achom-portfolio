/**
 * Smooth-scroll to a section by its id (e.g. "#about")
 */
export function scrollToSection(href) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/**
 * Conditionally join class names (no dependency needed)
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Open an external link safely
 */
export function openLink(url) {
  window.open(url, "_blank", "noopener,noreferrer");
}
