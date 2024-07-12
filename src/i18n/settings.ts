export const fallbackLng = "en";
export const languages = [fallbackLng, "ko"];
export const defaultNS = "common"; // default namespace
export const cookieName = "i18next";

export function getOptions(
  lng = fallbackLng,
  ns: string | string[] = defaultNS,
) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
