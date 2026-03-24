import React from "react";
import { Col, Container, Row } from "react-bootstrap";



import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";
import AccountWizard from "@/components/ready-to-use/form-wizard-1/AccountWizard.tsx";
import BusinessWizard from "@/components/ready-to-use/form-wizard-1/BusinessWizard.tsx";
import PaymentWizard from "@/components/ready-to-use/form-wizard-1/PaymentWizard.tsx";
import { HandHeartIcon } from "@phosphor-icons/react";

const FormWizard1: React.FC = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Breadcrumbs
            mainTitle="Form wizard 1"
            title=" Ready to use "
            path={["Form wizard 1"]}
            Icon={HandHeartIcon}
          />
        </Row>
        <Row>
          <Col xs={12}>
            <PaymentWizard />
          </Col>
          <Col xs={12}>
            <AccountWizard />
          </Col>
          <Col xs={12}>
            <BusinessWizard />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FormWizard1;
