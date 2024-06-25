import Link from "next/link";
import styles from "./sidebar.module.css";

export const Components = () => {
  return (
    <section className={styles.section}>
      <h4 className={styles.h4}>Components</h4>
      <div className={styles.linkContainer}>
        <Link
          href="/components/modal"
          className={styles.link}
        >
          Modal
        </Link>
        <Link
          href="/components/tooltip"
          className={styles.link}
        >
          Tooltip
        </Link>
      </div>
    </section>
  );
};
