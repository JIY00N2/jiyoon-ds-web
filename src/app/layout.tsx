import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "../components/Header";
import styles from "./page.module.css";
import "./globals.css";
import "./reset.css";
import { Sidebar } from "../components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JY DS",
  description: "JiYoon Design System Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.className} ${styles.layout}`}>
        <Header />
        <div className={styles.container}>
          <Sidebar />
          <main className={styles.main}>{children}</main>
        </div>
      </body>
    </html>
  );
}
