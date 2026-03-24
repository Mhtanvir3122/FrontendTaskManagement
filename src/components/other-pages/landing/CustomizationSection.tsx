import React from "react";
import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";

import { IconSettings } from "@tabler/icons-react";

const CustomizationSection: React.FC = () => {
  return (
    <section className="options-section section-lg-space-x" id="Customization">
      <Container>
        <Row>
          <Col xl={8} className="offset-xl-2">
            <div className="landing-title text-md-center">
              <Badge className="title-badge mb-3" bg="light-primary">
                <IconSettings size={14} className="align-text-bottom me-1" />
                Customization
              </Badge>
              <h2>
                <span className="highlight-title">Customization</span> and
                preview
              </h2>
              <p>
                Allow users to personalize settings or design elements in
                real-time, providing an instant preview of the changes before
                finalizing, ensuring a seamless and tailored experience.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="g-4">
          <Col lg={7}>
            <Card className="sidebar-option-card">
              <Card.Body>
                <div className="text-center">
                  <h2 className="mb-5 fw-semibold">
                    Sidebar Customization Made Simple
                  </h2>
                  <img
                    src="/images/landing/sidebar.png"
                    alt="Sidebar Customization"
                    className="img-fluid"
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={6} lg={5}>
            <Card className="equal-card color-hint-card">
              <Card.Body>
                <h3 className="text-primary text-center">
                  Perfect Your Style with Color Variants!
                </h3>
                <img
                  src="/images/landing/coour-theme.png"
                  alt="Color Variants"
                  className="img-fluid"
                />
                <div className="text-center mt-3">
                  <Button
                    href="https://themeforest.net/user/la-themes"
                    target="_blank"
                    variant="primary"
                  >
                    Buy Now
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={6} lg={4}>
            <Card className="layout-option-card">
              <Card.Body className="text-center">
                <h3 className="text-dark mb-3">
                  One-Click and change your{" "}
                  <span className="text-primary">Layout.</span>
                </h3>
                <img
                  src="/images/landing/layout.png"
                  alt="Layout Options"
                  className="img-fluid"
                />
              </Card.Body>
            </Card>
          </Col>

          <Col sm={6} lg={4}>
            <Card className="equal-card layout-option-card">
              <Card.Body>
                <div className="text-center">
                  <img
                    src="/images/landing/typography.png"
                    alt="Typography"
                    className="img-fluid"
                  />
                </div>
                <div className="p-3 text-center">
                  <h4 className="text-primary fw-semibold">
                    Verified Our Typography
                  </h4>
                  <p className="f-s-16 text-dark mt-2">
                    Experience perfectly crafted fonts that enhance your design!
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={6} lg={4}>
            <Card className="equal-card speed-performance-card">
              <Card.Body>
                <div className="speed-rocket">
                  <img
                    src="/images/landing/speed-bg.png"
                    alt="Speed Background"
                    className="w-200"
                  />
                </div>
                <div className="w-100 position-relative">
                  <div className="performance-content text-center">
                    <h5>
                      <span>A</span> Grade
                    </h5>
                    <div className="my-3">
                      <h1 className="text-success fw-bold">97%</h1>
                    </div>
                    <p className="text-dark fw-medium txt-ellipsis-1">
                      page loading speed
                    </p>
                  </div>
                  <div className="speedometer-img">
                    <img
                      src="/images/landing/speed-bg-2.png"
                      alt="Speedometer"
                    />
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CustomizationSection;
