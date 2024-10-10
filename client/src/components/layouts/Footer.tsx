import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { footerLinks } from "@/data/FooterLinks";
import { useTranslation } from "react-i18next";
import { iFrameLink } from "@/data/Links";
import { Skeleton } from "../ui/skeleton";
import { useState } from "react";
import i18n from "@/i18n";

const Logo = () => (
  <Link to="/">
    <div className="flex cursor-pointer items-center justify-start gap-2">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold text-primary-foreground"
      >
        Mahmoud.S
      </motion.h1>
    </div>
  </Link>
);

const FooterLinkSection = ({
  title,
  links,
}: {
  title: string;
  links: Array<{ href: string; name: string; isLive?: boolean }>;
}) => {
  const { t } = useTranslation();

  return (
    <div>
      <p className="font-medium text-primary-foreground">{t(title)}</p>
      <ul className="mt-6 space-y-4 text-sm">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="flex items-center text-primary-foreground/65 transition hover:text-primary-foreground/75"
            >
              {t(link.name)}
              {link.isLive && (
                <span className="relative ml-2 flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-100 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400"></span>
                </span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const MapComponent = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);

  const handleMapLoad = () => {
    setLoading(false);
  };

  setTimeout(() => {
    setLoading(false);
  }, 5000);

  const direction = i18n.language === "ar" ? "rtl" : "ltr";

  return (
    <div
      dir={direction}
      className="flex h-full w-full items-center justify-center border-2 border-[var(--horder-color)]"
    >
      <iframe
        src={iFrameLink}
        width="100%"
        height="100%"
        style={{ border: 0, display: loading ? "none" : "block" }}
        allowFullScreen={false}
        loading="lazy"
        className="m-0 p-0"
        referrerPolicy="no-referrer-when-downgrade"
        onLoad={handleMapLoad}
      ></iframe>

      {loading && (
        <Skeleton className="flex h-full w-full items-center justify-center">
          <p className="text-sm">{t("app.loading")}</p>
        </Skeleton>
      )}
    </div>
  );
};
export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[var(--footer-background)]">
      <div className="container mx-auto px-4 py-12">
        <div className="lg:grid lg:grid-cols-2">
          <Card className="border-none bg-transparent lg:order-last">
            <CardHeader className="px-0">
              <CardTitle className="m-0 p-0 )]  text-primary-foreground">
                {t("footer.locationTitle")}
              </CardTitle>
            </CardHeader>
            <CardContent className="h-64 p-0 lg:h-96">
              <MapComponent />
            </CardContent>
          </Card>

          <div className="w-full pe-16 max-md:p-0">
            <div className="hidden text-primary-foreground lg:block">
              <Logo />
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
              <FooterLinkSection
                title={t("footer.services")}
                links={footerLinks.services}
              />

              <FooterLinkSection
                title={t("footer.company")}
                links={footerLinks.company}
              />
              {/* <FooterLinkSection
                title={t("footer.helpfulLinks")}
                links={footerLinks.helpfulLinks}
              /> */}
            </div>

            <div className="mt-8 space-y-4 text-sm text-primary-foreground/80">
              <p className="flex max-w-md items-center gap-2">
                <MapPin size={16} />
                {t("footer.address")}
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} />
                {t("footer.phone")}
              </p>

              <Link
                to={"mailto:" + t("footer.email")}
                className="flex items-center gap-2"
              >
                <Mail size={16} />
                {t("footer.email")}
              </Link>
            </div>

            {/* <p className="mt-4 text-sm text-primary-foreground/80">
              {t("footer.contactMessage")}
            </p> */}

            <div className="mt-8 border-t border-primary-foreground/10 pt-8">
              {/* <ul className="flex flex-wrap gap-4 text-xs">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-primary-foreground/60 transition hover:text-primary-foreground/75"
                    >
                      {t(link.name)}
                    </Link>
                  </li>
                ))}
              </ul> */}

              <p className="mt-8 text-xs text-primary-foreground/60">
                {t("footer.copyright", { year: new Date().getFullYear() })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
