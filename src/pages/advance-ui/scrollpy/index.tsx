import React from "react";
import { Container, Row } from "react-bootstrap";

import { BriefcaseMetal } from "phosphor-react";

import ScrollpyAnchors from "@/components/advancedui/scrollpy/ScrollpyAnchors.tsx";
import ScrollpyGroup from "@/components/advancedui/scrollpy/ScrollpyGroup.tsx";
import ScrollpyNav from "@/components/advancedui/scrollpy/ScrollpyNav.tsx";
import ScrollpyNested from "@/components/advancedui/scrollpy/ScrollpyNested.tsx";
import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const Scrollpy: React.FC = () => {
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Scrollpy"
          title="Advance Ui"
          path={["Scrollpy"]}
          Icon={BriefcaseMetal}
        />
        <Row>
          <ScrollpyNav />
          <ScrollpyNested />
          <ScrollpyGroup />
          <ScrollpyAnchors />
        </Row>
      </Container>
    </div>
  );
};

export default Scrollpy;
