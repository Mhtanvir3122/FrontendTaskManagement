import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import { ThemeProvider } from "@/contexts/ThemeContext.tsx";
import "animate.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "simplebar-react/dist/simplebar.min.css";

import Loader from "@/components/layouts/Loader.tsx";

import "./App.css";
import "./assets/scss/responsive.scss";
import "./assets/scss/style.scss";
import AppRoutes from "./routes/AppRoutes.tsx";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
