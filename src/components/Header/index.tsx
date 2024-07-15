"use client";

import Link from "next/link";
import GithubSvg from "@/public/images/github.svg";
import LightMode from "@/public/images/light-mode.svg";
import DarkMode from "@/public/images/dark-mode.svg";
import WebLogoSvg from "@/public/images/web-logo.svg";
import styles from "./header.module.css";
import { usePathname } from "next/navigation";
import { useThemeContext } from "@/src/contexts/ThemeContext";
import { useCookies } from "react-cookie";

// TODO - dark mode

export const Header = () => {
  // TODO - 훅으로 빼고, 드롭다운으로 바꾸기
  const pathname = usePathname();
  const { isDarkMode, handleClickDarkMode } = useThemeContext();
  const path = pathname.split("/").slice(2);
  const [, setCookie] = useCookies(["i18next"]);

  // 임시 쿠키 변경
  const handleClickKorean = () => {
    setCookie("i18next", "ko");
  };

  const handleClickEnglish = () => {
    setCookie("i18next", "en");
  };

  return (
    <header className={styles.layout}>
      <Link
        href={"/"}
        className={styles.homeLogo}
      >
        <WebLogoSvg
          width={96}
          height={24}
        />
      </Link>
      <section className={styles.navbar}>
        <Link
          href={`${["", "ko", ...path].join("/")}`}
          onClick={handleClickKorean}
          style={{ color: "var(--title)" }}
        >
          한국어
        </Link>
        <Link
          href={`${["", "en", ...path].join("/")}`}
          onClick={handleClickEnglish}
          style={{ color: "var(--title)" }}
        >
          영어
        </Link>
        <Link
          href="https://github.com/JIY00N2/jiyoon-ds"
          aria-label="github"
        >
          <GithubSvg
            color="var(--title)"
            width={24}
            height={22}
          />
        </Link>
        <button onClick={handleClickDarkMode}>
          {isDarkMode ? (
            <LightMode
              color="var(--title)"
              width={24}
              height={22}
            />
          ) : (
            <DarkMode
              color="var(--title)"
              width={24}
              height={22}
            />
          )}
        </button>
      </section>
    </header>
  );
};
