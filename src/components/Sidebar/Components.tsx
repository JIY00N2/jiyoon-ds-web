"use client";
import Link from "next/link";
import styles from "./sidebar.module.css";
import { usePathname } from "next/navigation";
import getLinkClassName from "./getLinkClassName";

export const Components = () => {
  const pathname = usePathname();

  return (
    <section className={styles.section}>
      <h4 className={styles.h4}>Components</h4>
      <div className={styles.linkContainer}>
        <Link
          href="/components/modal"
          className={getLinkClassName(pathname, "/components/modal")}
        >
          Modal
        </Link>
        <Link
          href="/components/tooltip"
          className={getLinkClassName(pathname, "/components/tooltip")}
        >
          Tooltip
        </Link>
      </div>
    </section>
  );
};
