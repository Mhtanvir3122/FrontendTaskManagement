import React from "react";
import { Container, Row } from "react-bootstrap";

import { Briefcase } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";
import HelperColor from "@/components/ui-kits/helper-classes/HelperColor.tsx";
import HelperPaddingMargin from "@/components/ui-kits/helper-classes/HelperPaddingMargin.tsx";
import HelperRadiusBorder from "@/components/ui-kits/helper-classes/HelperRadiusBorder.tsx";
import HelperTextFont from "@/components/ui-kits/helper-classes/HelperTextFont.tsx";

const HelperClass: React.FC = () => {
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Helper Classes"
          title="Ui Kits"
          path={["Helper Classes"]}
          Icon={Briefcase}
        />

        <Row>
          <HelperColor />
          <HelperTextFont />
          <HelperPaddingMargin />
          <HelperRadiusBorder />
        </Row>
      </Container>
    </div>
  );
};

export default HelperClass;
