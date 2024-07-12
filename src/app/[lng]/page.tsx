import { useTranslation } from "@/src/i18n";
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
      <Link
        href={`/docs/overview/introduction`}
        className={styles.link}
      >
        {t("GET_STARTED")}
      </Link>
    </div>
  );
}
