"use client";

import styles from "./sidebar.module.css";
import { SidebarLink } from "./SidebarLink";

export const Overview = () => {
  return (
    <section className={styles.section}>
      <h4 className={styles.h4}>Overview</h4>
      <div className={styles.linkContainer}>
        <SidebarLink href={"/overview/introduction"}>Introduction</SidebarLink>
        <SidebarLink href={"/overview/getting-started"}>
          Getting started
        </SidebarLink>
      </div>
    </section>
  );
};
