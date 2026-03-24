import React from "react";
import { Container, Row } from "react-bootstrap";

import { Briefcase } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";
import ColumGrid from "@/components/grid/ColumGrid.tsx";
import NestingGrid from "@/components/grid/NestingGrid.tsx";
import OptionGrid from "@/components/grid/OptionGrid.tsx";

const TabsPage: React.FC = () => {
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Grid"
          title="Ui Kits"
          path={["Grid"]}
          Icon={Briefcase}
        />
        <Row className="app-tabs-section">
          <OptionGrid />
          <ColumGrid />
          <NestingGrid />
        </Row>
      </Container>
    </div>
  );
};

export default TabsPage;
