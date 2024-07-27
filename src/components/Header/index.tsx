"use client";

import Link from "next/link";
import GithubSvg from "@/public/images/github.svg";
import LightMode from "@/public/images/light-mode.svg";
import DarkMode from "@/public/images/dark-mode.svg";
import WebLogoSvg from "@/public/images/web-logo.svg";
import styles from "./header.module.css";
import { useThemeContext } from "@/src/contexts/ThemeContext";
import { TranslateDropdownMenu } from "@/src/components/Header/TranslateDropdownMenu";

export const Header = ({ lng }: { lng: string }) => {
  const { isDarkMode, handleClickDarkMode } = useThemeContext();

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
        <TranslateDropdownMenu lng={lng} />
        <Link
          href="https://github.com/JIY00N2/jiyoon-ds"
          aria-label="github"
        >
          <GithubSvg
            color="var(--title)"
            width={22}
            height={22}
          />
        </Link>
        <button onClick={handleClickDarkMode}>
          {isDarkMode ? (
            <LightMode
              color="var(--title)"
              width={24}
              height={24}
            />
          ) : (
            <DarkMode
              color="var(--title)"
              width={24}
              height={24}
            />
          )}
        </button>
      </section>
    </header>
  );
};
