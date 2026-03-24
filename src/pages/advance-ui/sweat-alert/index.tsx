import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

import { sweetAlertData } from "@/data/advancedui/sweat-alert/SweatAlert.ts";
import { BriefcaseMetal } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb";

const SweetAlertPage: React.FC = () => {

  return (
    <Container fluid>
      <Breadcrumbs
        mainTitle="Sweet Alert"
        title="Advance Ui"
        path={["Sweet Alert"]}
        Icon={BriefcaseMetal}
      />
      <Row>
        {sweetAlertData.map((item, index) => (
          <Col sm="12" md="6" xl="4" key={index}>
            <Card className="equal-card">
              <Card.Header>
                <h5>{item.title}</h5>
                <p className="mb-0 text-secondary">
                  if you want to keep this sweet alert then you can keep it
                  using <span className="text-danger">{item.text}</span>
                </p>
              </Card.Header>
              <Card.Body>
                <Button variant={item.variant} onClick={item.onClick}>
                  Click Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SweetAlertPage;
