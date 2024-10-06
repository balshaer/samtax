import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { servicesData } from "@/data/ServicesData";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" className="section">
      <h2 className="section-title text-center text-3xl font-bold">
        {t("services.title")}
      </h2>
      <p className="section-subtitle pb-14 text-center max-md:pb-4">
        {t("services.subtitle")}
      </p>
      <div className="grid w-full gap-8 md:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} {...service} t={t} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  description,
  t,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  t: (key: string) => string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <Card className="h-full transition-shadow hover:shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Icon className="h-8 w-8 text-primary" /> <span>{t(title)}</span>{" "}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{t(description)}</CardDescription>{" "}
        </CardContent>
      </Card>
    </motion.div>
  );
}
