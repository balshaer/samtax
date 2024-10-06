import "animate.css";
import "../app/css/globals.css";
import AppRoutes from "@/routes/__routes";
import { Toaster } from "@/components/ui/sonner";
import { inject } from "@vercel/analytics";
import { useTranslation } from "react-i18next";
import LoadingPage from "./pages/LoadingPage";
import { useEffect, useState } from "react";

const App: React.FC = () => {
  inject();
  useTranslation();
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div dir="ltr" className="App">
      <Toaster className="hidden max-md:block" position="top-center" />
      <Toaster className="hidden min-[768px]:block" />

      {isloading && <LoadingPage />}
      <AppRoutes />
    </div>
  );
};

export default App;
