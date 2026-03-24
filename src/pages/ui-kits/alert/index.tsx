import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { Briefcase } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";
import AlertBorder from "@/components/ui-kits/alert/AlertBorder.tsx";
import AlertContent from "@/components/ui-kits/alert/AlertContent.tsx";
import BasicAlert from "@/components/ui-kits/alert/BasicAlert.tsx";
import CustomAlert from "@/components/ui-kits/alert/CustomAlert.tsx";
import LabelIcon from "@/components/ui-kits/alert/LabelIcon.tsx";
import LeftBorderIcon from "@/components/ui-kits/alert/LightAlert.tsx";
import LiveAlert from "@/components/ui-kits/alert/LiveAlert.tsx";
import OutlineAlert from "@/components/ui-kits/alert/OutlineAlert.tsx";
import WithIcon from "@/components/ui-kits/alert/WithIcon.tsx";

const Alert: React.FC = () => {
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Alert"
          title="Ui Kits"
          path={["Alert"]}
          Icon={Briefcase}
        />
        <Row>
          <Col lg={6}>
            <BasicAlert />
          </Col>
          <Col lg={6}>
            <OutlineAlert />
          </Col>
          <Col lg={6}>
            <LeftBorderIcon />
          </Col>
          <Col lg={6}>
            <WithIcon />
          </Col>
          <Col lg={6}>
            <AlertBorder />
          </Col>
          <Col lg={6}>
            <LabelIcon />
          </Col>
          <Col lg={6}>
            <CustomAlert />
          </Col>
          <Col lg={6}>
            <AlertContent />
          </Col>
          <Col>
            <LiveAlert />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Alert;
