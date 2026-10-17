import { PERSONAL } from "../../data/personal";
import { cvFor } from "../../data/site";
import Portrait from "../shared/Portrait";
import SocialLinks from "../shared/SocialLinks";
import SmartLink from "../shared/SmartLink";
import { IconArrowRight, IconArrowUpRight, IconSpark } from "../ui/Icons";
import { WithBurst } from "../ui/SectionHeader";
import styles from "./Hero.module.css";

const PILLS = [
  { label: "Flutter", tone: "dark" },
  { label: "Kotlin", tone: "accent" },
  { spark: true },
  { label: "React Native", tone: "dark" },
  { label: "Product Design", tone: "accent" },
  { label: "Program Management", tone: "dark" },
];

/** Circular "Download CV" badge — the reference's rotating "Hire Me" seal. */
function CvBadge() {
  const cv = cvFor();
  const text = "DOWNLOAD CV ✦ DOWNLOAD CV ✦ ";
  return (
    <a href={cv.href} download={cv.fileName} className={styles.badge} aria-label="Download CV (PDF)">
      <svg viewBox="0 0 100 100" className={styles.badgeRing} aria-hidden="true">
        <defs>
          <path id="cv-ring" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" />
        </defs>
        <text>
          <textPath href="#cv-ring" textLength="224">
            {text}
          </textPath>
        </text>
      </svg>
      <span className={styles.badgeCore}>
        <IconArrowUpRight size={20} />
      </span>
    </a>
  );
}

export default function Hero() {
  const [lead, tail] = PERSONAL.headline.split(" and ");
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.head}>
          <p className={styles.hello}>Hello there!</p>
          <h1 id="hero-title" className={styles.title}>
            I'm{" "}
            <span className={styles.name}>
              <WithBurst text={PERSONAL.name} />
            </span>
          </h1>
          <p className={styles.role}>
            {lead} <span aria-hidden="true">·</span> {tail}
          </p>
        </div>
        <CvBadge />

        <div className={styles.stage}>
          <div className={styles.left}>
            <p className={styles.kicker}>Currently</p>
            <p className={styles.current}>
              {PERSONAL.currentRole} and {PERSONAL.alsoRole} at {PERSONAL.currentCompany}
            </p>
            <p className={styles.intro}>{PERSONAL.intro}</p>

            <div className={styles.proof}>
              <p className={styles.proofNum}>
                10,000+ <span>participants</span>
              </p>
              <p className={styles.proofLabel}>across 7 bootcamps in the KodeCamp program I manage</p>
            </div>
          </div>

          <div className={styles.center}>
            <Portrait variant="hero" priority />
            <div className={styles.ctas}>
              <SmartLink to="/projects" className={styles.ctaDark}>
                View Work
                <span className={styles.ctaDot}>
                  <IconArrowRight size={16} />
                </span>
              </SmartLink>
              <a href="#contact" className={styles.ctaLight}>
                Hire Me
              </a>
            </div>
          </div>

          <div className={styles.right}>
            <ul className={styles.pills} aria-label="Core skills">
              {PILLS.map((p, i) =>
                p.spark ? (
                  <li key={i} className={styles.sparkPill} aria-hidden="true">
                    <IconSpark size={14} />
                  </li>
                ) : (
                  <li key={p.label} className={`pill ${p.tone === "dark" ? "pill--dark" : "pill--accent"}`}>
                    {p.label}
                  </li>
                )
              )}
            </ul>
            <div className={styles.follow}>
              <p>Find me on</p>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
