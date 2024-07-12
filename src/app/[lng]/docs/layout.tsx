import { Sidebar } from "@/src/components/Sidebar";
import { PropsWithChildren } from "react";
import styles from "./docs.module.css";

export default function DocsLayout({
  children,
  params: { lng },
}: PropsWithChildren<{ params: { lng: string } }>) {
  return (
    <>
      <Sidebar lng={lng} />
      <section className={styles.container}>{children}</section>
    </>
  );
}
