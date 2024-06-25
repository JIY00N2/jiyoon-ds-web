import Link from "next/link";
import GithubSvg from "@/public/images/github.svg";
import styles from "./header.module.css";
import Image from "next/image";

// TODO - dark mode

export const Header = () => {
  return (
    <header className={styles.layout}>
      <Link
        href={"/"}
        className={styles.homeLogo}
      >
        JY DS
      </Link>
      <section className={styles.navbar}>
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

        <Image
          src={"/images/dark-mode.svg"}
          alt="dark-mode"
          width={24}
          height={24}
        />
      </section>
    </header>
  );
};
