import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";

export default function Banner() {
  const { t } = useTranslation(); 
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
        <Button
          className="h-12 w-1/4 max-md:h-12 max-md:w-full"
          variant={"default"}
        >
          {t("banner.getStarted")}{" "}
 
        </Button>
        <Button
          className="h-12 w-1/4 max-md:h-12 max-md:w-full"
          variant={"outline"}
        >
          {t("banner.aboutUs")}
        </Button>
      </motion.div>
    </section>
  );
}
