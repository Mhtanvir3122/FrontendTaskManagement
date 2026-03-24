import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";
import IconWizard from "@/components/ready-to-use/form-wizards/IconWizards.tsx";
import NumberWizard from "@/components/ready-to-use/form-wizards/NumberWizard.tsx";
import VerticalIconWizards from "@/components/ready-to-use/form-wizards/VerticalIconWizards.tsx";
import VerticalNumberWizard from "@/components/ready-to-use/form-wizards/VerticalNumberWizard.tsx";
import { HandHeartIcon } from "@phosphor-icons/react";

const FormWizards: React.FC = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Breadcrumbs
            mainTitle="form wizards"
            title="Ready to use"
            path={["form wizards"]}
            Icon={HandHeartIcon}
          />
        </Row>
        <Row>
          <Col xs={12} lg={6}>
            <NumberWizard />
          </Col>
          <Col xs={12} lg={6}>
            <IconWizard />
          </Col>
          <Col xs={12} lg={6}>
            <VerticalNumberWizard />
          </Col>
          <Col xs={12} lg={6}>
            <VerticalIconWizards />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FormWizards;
