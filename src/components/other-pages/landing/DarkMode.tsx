import React from "react";
import { Badge, Button, Col, Container, Row } from "react-bootstrap";

import { IconChevronsRight } from "@tabler/icons-react";
import { SquaresFour } from "phosphor-react";

const DarkMode: React.FC = () => {
  return (
      <section className="dark-section">
        <Container fluid>
          <div className="dark-section-content section-lg-space-x">
            <Row>
              <Col xl={8} className="offset-xl-2 z-1">
                <div className="landing-title landing-title-light text-md-center">
                  <Badge className="title-badge mb-3" bg="light-white">
                    <SquaresFour
                      size={14}
                      className="align-text-bottom me-1"
                      weight="fill"
                    />
                    Dark Layout
                  </Badge>
                  <h2>
                    Discover Our{" "}
                    <span className="highlight-title">Dark Layout</span>
                  </h2>
                  <p className="text-light">
                    Embrace the elegance of the dark layout, where simplicity
                    meets sophistication. <br />
                    Navigate effortlessly through your admin tasks with style.
                  </p>
                  <Button
                    variant="white"
                    size="lg"
                    className="mt-3 px-4 py-2"
                    id="darkDemoBtn"
                    onClick={() => {
                      localStorage.setItem("theme-mode", "dark");
                      window.location.href = "/dashboard/ecommerce";
                    }}
                  >
                    Check Now <IconChevronsRight size={20} className="ms-2" />
                  </Button>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
  );
};

export default DarkMode;
