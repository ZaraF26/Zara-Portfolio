import styles from "./page.module.css";
import cabinetStyles from "./cabinet.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.opening}>
      <section className={styles.note} aria-labelledby="introduction">
        <h1 id="introduction" className={styles.heading}>Hi, I&apos;m Zara.</h1>
        <p className={styles.description}>
          I build things, investigate problems, organise messy information and
          occasionally turn ideas into apps.
        </p>
        <p className={styles.invitation}>Come have a look ↓</p>
      </section>
      </div>
      <section className={cabinetStyles.section} aria-label="Empty collector’s cabinet prototype">
        <div className={cabinetStyles.cabinet} aria-hidden="true">
          <div className={`${cabinetStyles.module} ${cabinetStyles.topLeft}`}><div className={cabinetStyles.back} /></div>
          <div className={`${cabinetStyles.module} ${cabinetStyles.topLink}`}><div className={cabinetStyles.back} /></div>
          <div className={`${cabinetStyles.module} ${cabinetStyles.topArch}`}><div className={cabinetStyles.back} /></div>
          <div className={`${cabinetStyles.module} ${cabinetStyles.topRight}`}><div className={cabinetStyles.back} /></div>
          <div className={`${cabinetStyles.module} ${cabinetStyles.circle}`}><div className={cabinetStyles.back} /></div>
          <div className={`${cabinetStyles.module} ${cabinetStyles.middle}`}><div className={cabinetStyles.back} /></div>
          <div className={`${cabinetStyles.module} ${cabinetStyles.middleLink}`}><div className={cabinetStyles.back} /></div>
          <div className={`${cabinetStyles.module} ${cabinetStyles.rightArch}`}><div className={cabinetStyles.back} /></div>
          <div className={`${cabinetStyles.module} ${cabinetStyles.bottomLeft}`}><div className={cabinetStyles.back} /></div>
          <div className={`${cabinetStyles.module} ${cabinetStyles.bottomCenter}`}><div className={cabinetStyles.back} /></div>
          <div className={`${cabinetStyles.module} ${cabinetStyles.bottomRight}`}><div className={cabinetStyles.back} /></div>
          <div className={`${cabinetStyles.rail} ${cabinetStyles.upperRail}`} />
          <div className={`${cabinetStyles.rail} ${cabinetStyles.lowerRail}`} />
        </div>
      </section>
    </main>
  );
}
