import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { DEFAULT_META, metaFor } from "../../data/routes";
import { absoluteUrl, publicUrl, SITE_ORIGIN } from "../../data/site";

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.rel = "canonical";
    document.head.appendChild(el);
  }
  el.href = href;
}

/**
 * Keeps <title>, description, canonical and social tags in sync with the
 * route during client-side navigation. The first paint already has the right
 * tags from the per-route HTML written by scripts/generate-route-html.mjs.
 * Pass `title`/`description` to override for routes not in data/seo.js.
 */
export default function Seo({ title, description, noindex = false }) {
  const { pathname } = useLocation();

  useEffect(() => {
    const path = pathname.replace(/\/+$/, "") || "/";
    const meta = metaFor(path) ?? {};
    const t = title ?? meta.title ?? DEFAULT_META.title;
    const d = description ?? meta.description ?? DEFAULT_META.description;
    const url = absoluteUrl(path);

    document.title = t;
    setMeta("name", "description", d);
    setMeta("name", "robots", noindex ? "noindex" : "index, follow");
    setMeta("property", "og:title", t);
    setMeta("property", "og:description", d);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", SITE_ORIGIN + publicUrl(DEFAULT_META.image));
    setMeta("name", "twitter:title", t);
    setMeta("name", "twitter:description", d);
    setCanonical(url);
  }, [pathname, title, description, noindex]);

  return null;
}
