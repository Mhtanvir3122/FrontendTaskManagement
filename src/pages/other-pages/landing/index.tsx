import React from "react";

import BannerSection from "@/components/other-pages/landing/BannerSection.tsx";
import CoreFeature from "@/components/other-pages/landing/CoreFeature.tsx";
import CustomizationSection from "@/components/other-pages/landing/CustomizationSection.tsx";
import DarkMode from "@/components/other-pages/landing/DarkMode.tsx";
import ElementsCard from "@/components/other-pages/landing/ElementsCard.tsx";
import FooterSection from "@/components/other-pages/landing/FooterSection.tsx";
import Inquired from "@/components/other-pages/landing/Inquired.tsx";
import PurchasePlan from "@/components/other-pages/landing/PurchasePlan.tsx";
import SophisticatedCard from "@/components/other-pages/landing/SophisticatedCard.tsx";
import TabPages from "@/components/other-pages/landing/TabPages.tsx";

const Index: React.FC = () => {
  return (
      <div className="bg-white landing-page">
        <div className="app-wrapper flex-column">
          <BannerSection />
          <TabPages />
          <CoreFeature />
          <Inquired />
          <SophisticatedCard />
          <ElementsCard />
          <DarkMode />
          <PurchasePlan />
          <CustomizationSection />
          <FooterSection />
        </div>
      </div>
  );
};

export default Index;
