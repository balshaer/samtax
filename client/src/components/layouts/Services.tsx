import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Briefcase, Calculator, FileText, Globe } from "lucide-react";

export default function Services() {
  function ServiceCard({
    icon,
    title,
    description,
  }: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        className="h-full"
      >
        <Card className="h-full bg-white bg-opacity-50 shadow-md backdrop-blur-lg transition-all duration-300 hover:shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              {icon}
              <span className="text-pastel-blue-900 text-xl font-semibold">
                {title}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-pastel-blue-700">
              {description}
            </CardDescription>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <section id="services" className="mb-16">
      <h3 className="section-title text-center">Our Services</h3>
      <div className="grid h-max grid-cols-1 items-center gap-6 md:grid-cols-2 lg:grid-cols-4">
        <ServiceCard
          icon={<Calculator className="text-pastel-blue-500 h-8 w-8" />}
          title="Tax Preparation"
          description="Expert tax preparation services for small businesses and individuals, ensuring compliance and maximizing returns."
        />
        <ServiceCard
          icon={<FileText className="text-pastel-green-500 h-8 w-8" />}
          title="Bookkeeping"
          description="Comprehensive bookkeeping services to keep your finances in order, providing clear insights into your business's financial health."
        />
        <ServiceCard
          icon={<Briefcase className="text-pastel-yellow-500 h-8 w-8" />}
          title="Company Setup"
          description="Guidance and support for setting up your new business venture, navigating legal requirements and optimizing your business structure."
        />
        <ServiceCard
          icon={<Globe className="text-pastel-purple-500 h-8 w-8" />}
          title="Translation Services"
          description="Professional translation between English, Arabic, and French, ensuring accurate and culturally appropriate communication for your business needs."
        />
      </div>
    </section>
  );
}
