import "animate.css";
import "../app/css/globals.css";
import AppRoutes from "@/routes/__routes";
import { inject } from "@vercel/analytics";
import { useTranslation } from "react-i18next";
import LoadingPage from "./pages/LoadingPage";
import { useEffect, useState } from "react";
import { Toaster } from "./components/ui/toaster";
import { ScrollToTop } from "./components/ui/ScrollToTop";

const App: React.FC = () => {
  inject();
  useTranslation();
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div dir="ltr" className="App z-40">
      <ScrollToTop />
      <Toaster />
      {isloading && <LoadingPage />}
      <AppRoutes />
    </div>
  );
};

export default App;
