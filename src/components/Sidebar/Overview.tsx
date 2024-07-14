import { useTranslation } from "@/src/i18n";
import styles from "./sidebar.module.css";
import { SidebarLink } from "./SidebarLink";

export const Overview = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng, "sidebar");

  return (
    <section className={styles.section}>
      <h4 className={styles.h4}>{t("OVERVIEW_TITLE")}</h4>
      <div className={styles.linkContainer}>
        <SidebarLink href={"/overview/introduction"}>
          {t("OVERVIEW_INTRODUCTION")}
        </SidebarLink>
        <SidebarLink href={"/overview/getting-started"}>
          {t("OVERVIEW_GETTING_STARTED")}
        </SidebarLink>
      </div>
    </section>
  );
};
