import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "../../components/Header";
import styles from "./home.module.css";
import { languages } from "../../i18n/settings";
import { ThemeProvider } from "@/src/contexts/ThemeContext";
import "../globals.css";
import "../reset.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JY DS",
  description: "JiYoon Design System Web",
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

// export async function generateMetadata({
//   params: { lng },
// }: {
//   params: {
//     lng: string;
//   };
// }) {
//   if (languages.indexOf(lng) < 0) lng = fallbackLng;
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   const { t } = await useTranslation(lng);
//   return {
//     title: t("title"),
//     content:
//       "A playground to explore new Next.js 13/14 app directory features such as nested layouts, instant loading states, streaming, and component level data fetching.",
//   };
// }

const themeInitializerScript = `
  const currTheme = localStorage.getItem("theme");
  document.documentElement.setAttribute("data-theme", currTheme);
`;

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  return (
    <html
      lang={lng}
      suppressHydrationWarning
    >
      <body className={`${inter.className} ${styles.body}`}>
        <script dangerouslySetInnerHTML={{ __html: themeInitializerScript }} />
        <ThemeProvider>
          <Header />
          <main className={styles.main}>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
