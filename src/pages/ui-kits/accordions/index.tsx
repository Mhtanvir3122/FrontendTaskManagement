import React from "react";
import { Container, Row } from "react-bootstrap";

import { Briefcase } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";
import IconAccordian from "@/components/ui-kits/accordions/IconAccordian.tsx";
import NestedAccordian from "@/components/ui-kits/accordions/NestedAccordian.tsx";
import OutlineAccordian from "@/components/ui-kits/accordions/OutlineAccordian.tsx";
import SimpleAccordian from "@/components/ui-kits/accordions/SimpleAccordian.tsx";

const AccordianPage: React.FC = () => {
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Accordions"
          title="Ui Kits"
          path={["Accordions"]}
          Icon={Briefcase}
        />
        <Row className=" accordions-rtl">
          <SimpleAccordian />
          <OutlineAccordian />
          <IconAccordian />
          <NestedAccordian />
        </Row>
      </Container>
    </div>
  );
};

export default AccordianPage;
