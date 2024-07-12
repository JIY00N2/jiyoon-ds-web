import { useTranslation } from "@/src/i18n";
import styles from "./sidebar.module.css";
import { SidebarLink } from "./SidebarLink";

export const Components = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng, "sidebar");

  return (
    <section className={styles.section}>
      <h4 className={styles.h4}>{t("COMPONENTS_TITLE")}</h4>
      <div className={styles.linkContainer}>
        <SidebarLink href={"/docs/components/modal"}>
          {t("COMPONENTS_MODAL")}
        </SidebarLink>
        <SidebarLink href={"/docs/components/tooltip"}>
          {" "}
          {t("COMPONENTS_TOOLTIP")}
        </SidebarLink>
      </div>
    </section>
  );
};
