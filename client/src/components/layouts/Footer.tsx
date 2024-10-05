import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { footerLinks } from "@/data/FooterLinks";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Map, { Marker } from "react-map-gl";

const Logo = () => (
  <Link to="/">
    <div className="flex cursor-pointer items-center justify-start gap-2">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold text-primary-foreground"
      >
        SamTax
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
}) => (
  <div>
    <p className="font-medium text-primary-foreground">{title}</p>
    <ul className="mt-6 space-y-4 text-sm">
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={link.href}
            className="flex items-center text-primary-foreground/65 transition hover:text-primary-foreground/75"
          >
            {link.name}
            {link.isLive && (
              <span className="relative ml-2 flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--headline)] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--headline)]"></span>
              </span>
            )}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const MapComponent = () => {
  const [viewState, setViewState] = React.useState({
    longitude: -75.1652,
    latitude: 39.9526,
    zoom: 12,
  });

  return (
    <Map
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
      style={{ width: "100%", height: "100%" }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken="pk.eyJ1IjoiZXhhbXBsZXVzZXIiLCJhIjoiY2t6YWV4YW1wbGV0b2tlbiJ9.dGhpc2lzYW5leGFtcGxldG9rZW4"
    >
      <Marker longitude={-75.1652} latitude={39.9526} color="red" />
    </Map>
  );
};

export default function Footer() {
  return (
    <footer className="bg-primary">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <Card className="border-none bg-transparent lg:order-last">
            <CardHeader>
              <CardTitle className="text-primary-foreground">
                Our Location
              </CardTitle>
            </CardHeader>
            <CardContent className="h-64 lg:h-96">
              <MapComponent />
            </CardContent>
          </Card>

          <div className="py-8 lg:py-16 lg:pe-16">
            <div className="hidden text-primary-foreground lg:block">
              <Logo />
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
              <FooterLinkSection
                title="Services"
                links={footerLinks.services}
              />
              <FooterLinkSection title="Company" links={footerLinks.company} />
              <FooterLinkSection
                title="Helpful Links"
                links={footerLinks.helpfulLinks}
              />
            </div>

            <div className="mt-8 pt-8">
              <ul className="flex flex-wrap gap-4 text-xs">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/60 transition hover:text-primary-foreground/75"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-xs text-primary-foreground/60">
                &copy; 2022. SamTax. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
