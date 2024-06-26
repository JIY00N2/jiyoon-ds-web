"use client";

import styles from "./sidebar.module.css";
import { SidebarLink } from "./SidebarLink";

export const Components = () => {
  return (
    <section className={styles.section}>
      <h4 className={styles.h4}>Components</h4>
      <div className={styles.linkContainer}>
        <SidebarLink href={"/components/modal"}>Modal</SidebarLink>
        <SidebarLink href={"/components/tooltip"}>Tooltip</SidebarLink>
      </div>
    </section>
  );
};
