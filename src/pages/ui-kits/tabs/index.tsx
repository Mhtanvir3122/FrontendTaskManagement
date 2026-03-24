import React from "react";
import { Container, Row } from "react-bootstrap";

import { Briefcase } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";
import BackgroundTabs from "@/components/ui-kits/tabs/BackgroundTab.tsx";
import { BasicTabsRB } from "@/components/ui-kits/tabs/BasicTabs.tsx";
import BottomTab from "@/components/ui-kits/tabs/BottomTab.tsx";
import TabsWithAvatars from "@/components/ui-kits/tabs/ImageTab.tsx";
import JustifyLightTabs from "@/components/ui-kits/tabs/JustifyTab.tsx";
import LightTab from "@/components/ui-kits/tabs/LightTab.tsx";
import OutlineTab from "@/components/ui-kits/tabs/OutlineTab.tsx";
import VerticalRightTab from "@/components/ui-kits/tabs/VerticalRightTab.tsx";
import VerticalTab from "@/components/ui-kits/tabs/VerticalTab.tsx";

const TabsPage: React.FC = () => {
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Tabs"
          title="Ui Kits"
          path={["Tabs"]}
          Icon={Briefcase}
        />
        <Row className="app-tabs-section">
          <BasicTabsRB />
          <OutlineTab />
          <LightTab />
          <BackgroundTabs />
          <TabsWithAvatars />
          <VerticalTab />
          <BottomTab />
          <JustifyLightTabs />
          <VerticalRightTab />
        </Row>
      </Container>
    </div>
  );
};

export default TabsPage;
