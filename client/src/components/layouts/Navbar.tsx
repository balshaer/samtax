import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Logo from "@/components/ui/Logo";
import { NavigationMenuDemo } from "./NavigationMenuDemo";
import i18n from "@/i18n";
import { useTranslation } from "react-i18next";
import { toast } from "@/hooks/use-toast";
import Mode from "./Mode";

interface Language {
  code: string;
  name: string;
  flag: string;
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { t } = useTranslation();

  const [selectedLang, setSelectedLang] = useState<Language>({
    code: t("navbar.language"),
    name: t("navbar.language"),
    flag: "",
  });

  const changeLanguage = (lang: Language) => {
    i18n.changeLanguage(lang.code);
    localStorage.setItem("selectedLanguage", lang.code);
    document.documentElement.lang = lang.code;
    document.documentElement.dir = lang.code === "ar" ? "rtl" : "ltr";
    setSelectedLang(lang);
    toast({
      title: t("navbar.languageToast"),
    });
    setIsMenuOpen(false);
  };

  const languages: Language[] = [
    { code: "en", name: "English", flag: "" },
    { code: "ar", name: "العربية", flag: "" },
    { code: "fr", name: "Français", flag: "" },
  ];

  const MobileNavItem: React.FC<{
    to: string;
    onClick: () => void;
    children: React.ReactNode;
  }> = ({ to, onClick, children }) => {
    return (
      <motion.li whileTap={{ scale: 0.95 }} className="block py-2">
        <a
          href={to}
          onClick={onClick}
          className="block px-4 py-2 transition-colors duration-200 hover:text-[var(--headline)]"
        >
          {children}
        </a>
      </motion.li>
    );
  };

  return (
    <nav
      dir="ltr"
      className="sticky top-0 z-50 bg-[var(--background)] shadow-sm"
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Logo />

        <div className="hidden md:block">
          <ul className="flex space-x-6">
            <NavigationMenuDemo />
          </ul>
        </div>

        <div className="flex items-center space-x-4">
          {/* Display Mode component */}
          <Mode />
          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 py-3 md:hidden">
            <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X className="h-6 w-6 text-[var(--headline)]" />
              ) : (
                <Menu className="h-6 w-6 text-[var(--headline)]" />
              )}
            </div>
          </div>

          {/* Language Selector for Desktop */}
          <DropdownMenu>
            <DropdownMenuTrigger className="m-0" asChild>
              <Button className="m-0 flex cursor-pointer items-center justify-center gap-1 rounded-full border-2 bg-[#0000000f] px-4 py-2 text-sm font-bold text-[var(--headline)] hover:border-[#0000006c] max-md:hidden">
                <span className="m-0">
                  {selectedLang.flag} {selectedLang.name}
                </span>
                <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[140px]">
              {languages.map((lang) => (
                <DropdownMenuItem
                  key={lang.code}
                  onClick={() => changeLanguage(lang)}
                  className="cursor-pointer"
                >
                  <span className="mr-2">{lang.flag}</span>
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-[var(--card-background)] text-[var(--headline)] shadow-md md:hidden"
        >
          <ul className="py-4">
            <MobileNavItem to="#services" onClick={() => setIsMenuOpen(false)}>
              {t("navbar.services")}
            </MobileNavItem>
            <MobileNavItem to="#about" onClick={() => setIsMenuOpen(false)}>
              {t("navbar.about")}
            </MobileNavItem>
            <MobileNavItem to="#contact" onClick={() => setIsMenuOpen(false)}>
              {t("navbar.contact")}
            </MobileNavItem>

            {/* Language Selector for Mobile */}
            <li className="block py-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="m-auto flex w-[95%] items-center justify-between rounded-sm border-[#00000053] bg-[var(--background)] px-4 py-2 text-left text-[var(--hedline)]">
                    <span>
                      {selectedLang.flag} {selectedLang.name}
                    </span>
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[140px]">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => changeLanguage(lang)}
                      className="cursor-pointer"
                    >
                      <span className="mr-2">{lang.flag}</span>
                      {lang.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          </ul>
        </motion.nav>
      )}
    </nav>
  );
}
