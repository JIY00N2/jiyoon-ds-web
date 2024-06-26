"use client";
import Link from "next/link";
import styles from "./sidebar.module.css";
import getLinkClassName from "./getLinkClassName";
import { usePathname } from "next/navigation";

export const Overview = () => {
  const pathname = usePathname();

  return (
    <section className={styles.section}>
      <h4 className={styles.h4}>Overview</h4>
      <div className={styles.linkContainer}>
        <Link
          href="/overview/introduction"
          className={getLinkClassName(pathname, "/overview/introduction")}
        >
          Introduction
        </Link>
        <Link
          href="/overview/getting-started"
          className={getLinkClassName(pathname, "/overview/getting-started")}
        >
          Getting started
        </Link>
      </div>
    </section>
  );
};
