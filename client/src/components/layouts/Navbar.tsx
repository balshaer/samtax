import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "../ui/button";
import { Calendar, Menu, X } from "lucide-react";
import Logo from "../ui/Logo";
import { NavigationMenuDemo } from "./NavigationMenuDemo";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function MobileNavItem({
    href,
    onClick,
    children,
  }: {
    href: string;
    onClick: () => void;
    children: React.ReactNode;
  }) {
    return (
      <motion.li whileTap={{ scale: 0.95 }} className="block py-2">
        <a
          href={href}
          onClick={onClick}
          className="block px-4 py-2 text-[var(--paragraph)] transition-colors duration-200 hover:text-[var(--headline)]"
        >
          {children}
        </a>
      </motion.li>
    );
  }

  return (
    <nav className="sticky top-0 z-50 bg-white bg-opacity-70 shadow-sm backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Logo />
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <NavigationMenuDemo />
          </ul>
        </nav>

        <Link
          to={"#"}
          className="backdrop-blur-2 hoverd flex cursor-pointer items-center justify-center gap-1 rounded-full border-2 bg-[#0000000f] px-4 py-2 text-sm font-bold hover:border-[#0000006c] max-md:hidden"
        >
          <span>Book a bar</span>
          <span>
            <Calendar className="h-4 w-4" />
          </span>
        </Link>

        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-white shadow-md md:hidden"
        >
          <ul className="py-4">
            <MobileNavItem
              href="#services"
              onClick={() => setIsMenuOpen(false)}
            >
              Our services
            </MobileNavItem>
            <MobileNavItem href="#about" onClick={() => setIsMenuOpen(false)}>
              About
            </MobileNavItem>
            <MobileNavItem href="#contact" onClick={() => setIsMenuOpen(false)}>
              Contact us
            </MobileNavItem>

            <MobileNavItem href="#contact" onClick={() => setIsMenuOpen(false)}>
              Book a bar
            </MobileNavItem>
          </ul>
        </motion.nav>
      )}
    </nav>
  );
}
