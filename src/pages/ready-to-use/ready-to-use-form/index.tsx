import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";
import AppointmentForm from "@/components/ready-to-use/ready-to-use-form/AppointmentForm.tsx";
import ClientRegistration from "@/components/ready-to-use/ready-to-use-form/ClientRegistration.tsx";
import DepartmentsForm from "@/components/ready-to-use/ready-to-use-form/DepartmentsForm.tsx";
import PaymentForm from "@/components/ready-to-use/ready-to-use-form/PaymentForm.tsx";
import StudentForm from "@/components/ready-to-use/ready-to-use-form/StudentForm.tsx";
import { HandHeartIcon } from "@phosphor-icons/react";

const ReadyToUseForm: React.FC = () => {
  return (
      <Container fluid>
        <Row>
          <Breadcrumbs
            mainTitle="Ready to use form"
            title=" Ready to use "
            path={["Ready to use form"]}
            Icon={HandHeartIcon}
          />
        </Row>
        <Row>
          <Col xs={12}>
            <AppointmentForm />
          </Col>

          <Col xs={12}>
            <PaymentForm />
          </Col>
          <Col xs={12}>
            <DepartmentsForm />
          </Col>
          <Col xs={12}>
            <StudentForm />
          </Col>
          <Col xs={12}>
            <ClientRegistration />
          </Col>
        </Row>
      </Container>
  );
};

export default ReadyToUseForm;
