"use client";

import styles from "./sidebar.module.css";

export default function getLinkClassName(pathname: string, href: string) {
  return `${styles.link} ${pathname === href && styles.activeLink}`;
}
