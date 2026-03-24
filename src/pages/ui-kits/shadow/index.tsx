import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Briefcase } from "phosphor-react";
import "prismjs/themes/prism.css";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const ShadowPage: React.FC = () => {
  const boxShadows = Array.from({ length: 24 }, (_, i) => i + 1);

  const themedShadows = [
    { name: "Primary", className: "box-shadow-primary" },
    { name: "Secondary", className: "box-shadow-secondary" },
    { name: "Success", className: "box-shadow-success" },
    { name: "Danger", className: "box-shadow-danger" },
    { name: "Warning", className: "box-shadow-warning text-dark" },
    { name: "Info", className: "box-shadow-info" },
    { name: "Light", className: "box-shadow-light text-dark" },
    { name: "Dark", className: "box-shadow-dark" },
  ];

  const handleBoxClick = (className: string) => {
    navigator.clipboard.writeText(className);
    Toastify({
      text: "Class name copied to the clipboard successfully",
      duration: 3000,
      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: { background: "rgba(var(--success),1)" },
    }).showToast();
  };

  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Shadow"
          title="Ui Kits"
          path={["Shadow"]}
          Icon={Briefcase}
        />

        <Row className="list-item">
          <Col xs={12}>
            <Card>
              <Card.Header>
                <h5>Box Shadow</h5>
              </Card.Header>
              <Card.Body>
                <Container fluid>
                  <Row>
                    {boxShadows.map((num) => {
                      const cls = `box-shadow-${num}`;
                      return (
                        <Col key={num} sm={4} lg={3} xxl={2} className="mb-4">
                          <div
                            className={`box-shadow-box ${cls} f-s-15`}
                            onClick={() => handleBoxClick(cls)}
                          >
                            Box-shadow-{num}
                          </div>
                        </Col>
                      );
                    })}
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12}>
            <Card>
              <Card.Header>
                <h5>Box Colour Shadow</h5>
              </Card.Header>
              <Card.Body>
                <div className="container-fluid shadow-box">
                  <Row>
                    {themedShadows.map(({ name, className }) => (
                      <Col key={name} sm={3} lg={2} className="mb-4">
                        <div
                          className={`box-shadow-box box-shadow-25 ${className}`}
                          onClick={() => handleBoxClick(className)}
                        >
                          {name}
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ShadowPage;
