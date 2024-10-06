import {
  Briefcase,
  Calculator,
  FileText,
  Globe,
  FileSignature,
} from "lucide-react";

interface ServiceItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  href: string;
}

export const servicesData: ServiceItem[] = [
  {
    icon: Calculator,
    title: "services.tax_efiling.title",
    description: "services.tax_efiling.description",
    href: "#",
  },
  {
    icon: FileText,
    title: "services.bookkeeping.title",
    description: "services.bookkeeping.description",
    href: "#",
  },
  {
    icon: Globe,
    title: "services.translation.title",
    description: "services.translation.description",
    href: "#",
  },
  {
    icon: Briefcase,
    title: "services.immigration.title",
    description: "services.immigration.description",
    href: "#",
  },
  {
    icon: FileSignature,
    title: "services.notary.title",
    description: "services.notary.description",
    href: "#",
  },
];
