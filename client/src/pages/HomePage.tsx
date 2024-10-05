import Navbar from "@/components/layouts/Navbar";
import Banner from "@/components/layouts/Banner";
import Services from "@/components/layouts/Services";
import About from "./About";
import Contact from "@/components/layouts/Contact";
import Footer from "@/components/layouts/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

export default function HomePage() {
  return (
    <div className="from-pastel-blue-50 to-pastel-purple-50 min-h-screen bg-gradient-to-br">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <ScrollToTop />
        <Banner />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
