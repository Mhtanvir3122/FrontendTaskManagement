import React, { ReactNode, useState } from "react";

import Footer from "@/components/layouts/Footer.tsx";
import ScrollToTop from "@/components/layouts/ScrollToTop.tsx";
import WelcomeModal from "@/components/layouts/WelcomeModal.tsx";
import Customizer from "@/components/layouts/customizer";
import Header from "@/components/layouts/header/Header.tsx";
import Sidebar from "@/components/layouts/sidebar/Sidebar.tsx";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  return (
    <div className="app-wrapper">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="app-content">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>{children}</main>
      </div>
      <Footer />
      <ScrollToTop />
      <Customizer />
      <WelcomeModal />
    </div>
  );
};

export default MainLayout;
