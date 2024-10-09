import i18n from "@/i18n";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  const direction = i18n.language === "ar" ? "rtl" : "ltr";

  return (
    <section
      dir={direction}
      id="about"
      className="section flex flex-col items-center justify-center text-center"
    >
      <div className="section-title">{t("about.title")}</div>
      <div className="description max-w-2xl">{t("about.description1")}</div>
      <div className="description max-w-2xl">{t("about.description2")}</div>
    </section>
  );
}
