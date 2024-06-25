import Link from "next/link";
import styles from "./sidebar.module.css";

export const Overview = () => {
  return (
    <section className={styles.section}>
      <h4 className={styles.h4}>Overview</h4>
      <div className={styles.linkContainer}>
        <Link
          href="/overview/introduction"
          className={styles.link}
        >
          Introduction
        </Link>
        <Link
          href="/overview/getting-started"
          className={styles.link}
        >
          Getting started
        </Link>
      </div>
    </section>
  );
};
