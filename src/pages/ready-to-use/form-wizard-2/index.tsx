import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";
import Booking from "@/components/ready-to-use/form-wizard-2/Booking.tsx";
import Checkout from "@/components/ready-to-use/form-wizard-2/Checkout";
import Financial from "@/components/ready-to-use/form-wizard-2/Financial.tsx";
import { HandHeartIcon } from "@phosphor-icons/react";

const FormWizard2: React.FC = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Breadcrumbs
            mainTitle="Form wizard 2"
            title=" Ready to use "
            path={["Form wizard 2"]}
            Icon={HandHeartIcon}
          />
        </Row>
        <Row>
          <Col xs={12}>
            <Checkout />
          </Col>
          <Col xs={12}>
            <Financial />
          </Col>
          <Col xs={12}>
            <Booking />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FormWizard2;
