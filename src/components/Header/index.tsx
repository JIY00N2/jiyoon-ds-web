"use client";

import Link from "next/link";
import GithubSvg from "@/public/images/github.svg";
import LightMode from "@/public/images/light-mode.svg";
import DarkMode from "@/public/images/dark-mode.svg";
import WebLogoSvg from "@/public/images/web-logo.svg";
import styles from "./header.module.css";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useThemeContext } from "@/src/contexts/ThemeContext";
import { useEffect } from "react";

// TODO - dark mode

export const Header = () => {
  // TODO - 훅으로 빼고, 드롭다운으로 바꾸기
  const pathname = usePathname();
  const router = useRouter();
  const { isDarkMode, handleClickDarkMode } = useThemeContext();

  const handleClickKorean = () => {
    const path = pathname.split("/").slice(2);
    const newPath = ["", "ko", ...path].join("/");
    router.push(newPath);
  };

  const handleClickEnglish = () => {
    const path = pathname.split("/").slice(2);
    const newPath = ["", "en", ...path].join("/");
    router.push(newPath);
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
        <button onClick={handleClickKorean}>한국어</button>
        <button onClick={handleClickEnglish}>영어</button>
        <Link
          href="https://github.com/JIY00N2/jiyoon-ds"
          aria-label="github"
        >
          <GithubSvg
            color="black"
            width={24}
            height={22}
          />
        </Link>
        <button onClick={handleClickDarkMode}>
          {isDarkMode ? (
            <LightMode
              color="white"
              width={24}
              height={22}
            />
          ) : (
            <DarkMode
              color="black"
              width={24}
              height={22}
            />
          )}
        </button>
      </section>
    </header>
  );
};
