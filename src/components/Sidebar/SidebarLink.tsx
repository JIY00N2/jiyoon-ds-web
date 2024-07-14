"use client";

import Link from "next/link";
import styles from "./sidebar.module.css";
import { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";

const getClassName = (href: string, pathname: string) => {
  if (pathname.includes(href)) {
    return `${styles.link} ${styles.activeLink}`;
  }

  return `${styles.link}`;
};

export const SidebarLink = ({
  children,
  href,
}: PropsWithChildren<{
  href: string;
}>) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={getClassName(href, pathname)}
    >
      {children}
    </Link>
  );
};
