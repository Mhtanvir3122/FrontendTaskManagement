import React from "react";
import { Container } from "react-bootstrap";

import { BriefcaseMetal } from "phosphor-react";

import BackdropOffcanvas from "@/components/advancedui/offcanvas-toggle/BackdropOffcanvas.tsx";
import LiveDemoOffcanvas from "@/components/advancedui/offcanvas-toggle/LiveDemoOffcanvas.tsx";
import PlacementOffcanvas from "@/components/advancedui/offcanvas-toggle/PlacementOffcanvas.tsx";
import ScrollingOffcanvas from "@/components/advancedui/offcanvas-toggle/ScrollingOffcanvas.tsx";
import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const OffcanvasDemo: React.FC = () => {
  return (
    <Container fluid>
      <Breadcrumbs
        mainTitle="Offcanvas"
        title="Advance UI "
        path={["Offcanvas"]}
        Icon={BriefcaseMetal}
      />
      <LiveDemoOffcanvas />
      <PlacementOffcanvas />
      <BackdropOffcanvas />
      <ScrollingOffcanvas />
    </Container>
  );
};

export default OffcanvasDemo;
