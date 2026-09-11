import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Runs on every route change. Plain navigation ("/dedline") jumps to the
 * top of the new page; a link with a hash ("/about#contact") scrolls to
 * that element instead, once it's had a tick to render.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const scrollToHash = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return true;
        }
        return false;
      };
      // The target section may not be mounted yet on the first paint.
      if (!scrollToHash()) {
        const timer = setTimeout(scrollToHash, 60);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" in window ? "instant" : "auto" });
    }
  }, [pathname, hash]);

  return null;
}
