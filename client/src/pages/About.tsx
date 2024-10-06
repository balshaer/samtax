import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="section">
      <div className="section-title">{t("about.title")}</div>
      <div className="description">{t("about.description1")}</div>
      <div className="description">{t("about.description2")}</div>
    </section>
  );
}
