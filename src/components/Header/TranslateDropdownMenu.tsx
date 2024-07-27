"use client";

import { DropdownMenu } from "jiyoon-ds";
import { useTranslation } from "@/src/i18n/client";
import { usePathname, useRouter } from "next/navigation";
import LanguageSvg from "@/public/images/langauge.svg";
import { ClientBoundary } from "@/src/components/ClientBoundary";
import styles from "./header.module.css";

export const TranslateDropdownMenu = ({ lng }: { lng: string }) => {
  const pathname = usePathname();
  const router = useRouter();
  const { t } = useTranslation(lng, "header");

  const handleTranslationClick = (lang: string) => {
    const path = pathname.split("/").slice(2);
    const newPath = ["", `${lang}`, ...path].join("/");
    router.push(newPath);
    router.refresh();
  };

  // TODO: className이 inline css보다 우선순위가 낮아짐..
  return (
    <ClientBoundary>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <LanguageSvg
            color="var(--title)"
            width={24}
            height={24}
            style={{ cursor: "pointer" }}
          />
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            // style={{
            //   display: "flex",
            //   gap: "5px",
            //   top: "50px",
            //   borderRadius: " 5px",
            //   padding: "10px",
            //   backgroundColor: " var(--homeStartedButton)",
            // }}
            className={styles.dropdownContent}
          >
            <button
              onClick={() => handleTranslationClick("ko")}
              style={{
                width: "100%",
                color: "var(--homeStartedFont)",
              }}
            >
              {t("LANGUAGE_KOREAN")}
            </button>
            <DropdownMenu.Separator
              style={{ backgroundColor: "var(--homeStartedFont)" }}
            />
            <button
              onClick={() => handleTranslationClick("en")}
              style={{
                width: "100%",
                color: "var(--homeStartedFont)",
              }}
            >
              {t("LANGUAGE_ENGLISH")}
            </button>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </ClientBoundary>
  );
};
