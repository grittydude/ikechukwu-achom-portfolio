import styles from "./ProjectMockup.module.css";

export default function ProjectMockup({ theme, isConfidential }) {
  return (
    <div className={`${styles.mockup} ${styles[theme]}`}>
      {isConfidential && (
        <div className={styles.badge}>
          {theme === "client" ? "NDA Protected" : "Confidential"}
        </div>
      )}
      <MockupContent theme={theme} />
    </div>
  );
}

function MockupContent({ theme }) {
  if (theme?.startsWith("web-")) {
    return (
      <div className={`${styles.browserWrap} ${styles[theme]}`}>
        <div className={styles.browserBar}>
          <span className={styles.dotRed} />
          <span className={styles.dotYellow} />
          <span className={styles.dotGreen} />
          <div className={styles.urlPill} />
        </div>
        <div className={styles.browserBody}>
          <div className={styles.webNav}>
            <div className={styles.webLogo} />
            <div className={styles.webNavLink} />
            <div className={styles.webNavLink} />
            <div className={styles.webNavLink} />
          </div>
          <div className={styles.webHero} />
          <div className={styles.webCards}>
            <div className={styles.webCard} />
            <div className={styles.webCard} />
            <div className={styles.webCard} />
          </div>
        </div>
      </div>
    );
  }

  if (theme === "client") {
    return (
      <div className={styles.confidentialCenter}>
        <div className={styles.lockIcon}>🔒</div>
        <div className={styles.lockLabel}>Confidential</div>
        <div className={styles.lockDivider} />
        <div className={styles.lockSub}>Details shared under NDA</div>
      </div>
    );
  }

  if (theme === "chat") {
    return (
      <div className={styles.screenWrap}>
        <div className={styles.screen}>
          <div className={styles.chatBubbles}>
            <div className={styles.bubbleLeft} />
            <div className={styles.bubbleRight} />
            <div className={styles.bubbleLeft} style={{ width: "80%" }} />
            <div className={styles.bubbleRight} style={{ width: "50%" }} />
          </div>
        </div>
        <div className={styles.screenBehind} />
      </div>
    );
  }

  return (
    <div className={styles.screenWrap}>
      <div className={styles.screenBehind} />
      <div className={styles.screen}>
        {theme === "health" && (
          <div className={styles.healthTop} />
        )}
        {theme === "edtech" && (
          <div className={styles.edtechCenter}>
            <div className={styles.edtechCircle} />
          </div>
        )}
        <div className={styles.barAccent} />
        <div className={styles.barNeutral} style={{ width: "80%" }} />
        <div className={styles.barAccent2} style={{ width: "50%" }} />
        <div className={styles.screenCard} />
      </div>
    </div>
  );
}
