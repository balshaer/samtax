import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Banner() {
  const { t } = useTranslation();

  const styles = {
    buttonDefault:
      "h-12 w-1/4 max-md:h-12 max-md:w-full  gap-1 flex  capitalize font-bold items-center hover:shadow-xl justify-center rounded-full cursor-pointer px-6 py-3 transition duration-100 transform bg-[var(--button)] border-2 border-[var(--button-border)] text-[var(--button-text)] hoverd hover:bg-[var(--button-hover)] hover:text-[var(--button-text-hover)]",
    buttonOutline:
      "h-12 w-1/4 max-md:h-12 max-md:w-full gap-1 flex  capitalize font-bold items-center justify-center  bg-transparent rounded-full cursor-pointer px-6 py-3 transition duration-100 transform  border-2 border-[var(--button-border)] text-[var(--outline-button-text)] hoverd hover:bg-[var(--button-hover)] hover:text-[var(--button-text-hover)]",
  };

  return (
    <section className="m-auto mb-16 max-w-4xl text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="section-title s text-4xl"
      >
        {t("banner.title")}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="description pb-6"
      >
        {t("banner.description")}{" "}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex w-full items-center justify-center gap-4 max-md:flex-col"
      >
        <a href={"#contact"} className={styles.buttonDefault}>
          {t("banner.getStarted")}
        </a>

        <a href={"#about"} className={styles.buttonOutline}>
          {t("banner.aboutUs")}
        </a>
      </motion.div>
    </section>
  );
}
