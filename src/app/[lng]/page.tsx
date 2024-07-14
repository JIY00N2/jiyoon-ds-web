import { useTranslation } from "@/src/i18n";
import LogoSvg from "@/public/images/logo.svg";
import HomeLogoSvg from "@/public/images/home-logo.svg";
import Link from "next/link";
import styles from "./home.module.css";

export default async function Home({
  params: { lng },
}: {
  params: { lng: string };
}) {
  const { t } = await useTranslation(lng, "home");

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <LogoSvg className={styles.square} />
        <HomeLogoSvg
          width={200}
          height={60}
        />
      </div>
      <div className={styles.contents}>{t("DESCRIPTION")}</div>
      <Link
        href={`/overview/introduction`}
        className={styles.link}
      >
        {t("GET_STARTED")}
      </Link>
    </div>
  );
}
