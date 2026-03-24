import React, { useState } from "react";
import { Button, Card, Col, Collapse, Container, Row } from "react-bootstrap";

import { Briefcase } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const CollapsePage: React.FC = () => {
  type CollapseTypes = "basic" | "horizontal" | "multi1" | "multi2";

  const [isOpen, setIsOpen] = useState<Record<CollapseTypes, boolean>>({
    basic: false,
    horizontal: false,
    multi1: false,
    multi2: false,
  });

  const toggle = (key: CollapseTypes) => {
    setIsOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Collapse"
          title="Ui Kits"
          path={["Collapse"]}
          Icon={Briefcase}
        />

        <Row className="list-item">
          <Col xs={12}>
            <Card>
              <Card.Header>
                <h5>Basic Collapse</h5>
              </Card.Header>
              <Card.Body>
                <Button color="light-primary" onClick={() => toggle("basic")}>
                  Toggle Collapse
                </Button>
                <Collapse in={isOpen.basic}>
                  <Card.Body className=" card card-body dashed-1-secondary rounded mt-3">
                    Some placeholder content for the collapse component.
                  </Card.Body>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12}>
            <Card>
              <Card.Header>
                <h5>Horizontal Collapse</h5>
              </Card.Header>
              <Card.Body>
                <Button
                  color="light-primary"
                  onClick={() => toggle("horizontal")}
                >
                  Toggle width collapse
                </Button>
                <Collapse in={isOpen.horizontal}>
                  <Card.Body className="card card-body dashed-1-secondary rounded mt-3 w-280">
                    Horizontal collapse content.
                  </Card.Body>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12}>
            <Card>
              <Card.Header>
                <h5>Multiple Toggles and Targets</h5>
              </Card.Header>
              <Card.Body>
                <p className="d-inline-flex flex-wrap gap-1">
                  <Button
                    color="light-primary"
                    onClick={() => toggle("multi1")}
                  >
                    Toggle first element
                  </Button>
                  <Button
                    color="light-primary"
                    onClick={() => toggle("multi2")}
                  >
                    Toggle second element
                  </Button>
                  <Button
                    color="light-primary"
                    onClick={() =>
                      setIsOpen((prev) => ({
                        ...prev,
                        multi1: !prev.multi1,
                        multi2: !prev.multi2,
                      }))
                    }
                  >
                    Toggle both elements
                  </Button>
                </p>
                <Row>
                  <Col xs={12} sm={6}>
                    <Collapse in={isOpen.multi1}>
                      <Card.Body className="dashed-1-secondary rounded mt-3">
                        First collapse content.
                      </Card.Body>
                    </Collapse>
                  </Col>
                  <Col xs={12} sm={6}>
                    <Collapse in={isOpen.multi2}>
                      <Card.Body className="dashed-1-secondary rounded mt-3">
                        Second collapse content.
                      </Card.Body>
                    </Collapse>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CollapsePage;
