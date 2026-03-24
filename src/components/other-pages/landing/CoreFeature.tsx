import React from "react";
import { Badge, Col, Container, Row } from "react-bootstrap";

import { SquaresFour } from "phosphor-react";

const featureLogosGroup1 = Array.from(
  { length: 10 },
  (_, i) => `/images/landing/logo/${String(i + 1).padStart(2, "0")}.png`
);
const featureLogosGroup2 = Array.from(
  { length: 10 },
  (_, i) => `/images/landing/logo/${String(i + 11)}.png`
);
const CoreFeature: React.FC = () => {
  return (
      <section className="features-section" id="Features">
        <Container fluid>
          <div className="features-section-content section-lg-space-x">
            <Row>
              <Col xl={8} className="offset-xl-2">
                <div className="landing-title landing-title-light text-md-center">
                  <Badge className="title-badge mb-3 " bg="light-white">
                    <SquaresFour
                      size={18}
                      weight="fill"
                      className="align-text-bottom me-2"
                    />
                    features
                  </Badge>
                  <h2>
                    Core <span className="highlight-title">features</span>
                  </h2>
                  <p>
                    Admin features, developers can easily customize the
                    appearance and behavior of their applications, ensuring a
                    consistent and visually appealing experience across
                    different devices and screen sizes.
                  </p>
                </div>
              </Col>
            </Row>

            <Row>
              <Col xs={12}>
                {[featureLogosGroup1, featureLogosGroup2].map(
                  (group, groupIdx) => (
                    <ul className="features-box-list" key={groupIdx}>
                      {group.map((src, i) => (
                        <li className="d-flex-center" key={i}>
                          <img
                            src={src}
                            alt={`features-icon-${i + 1 + groupIdx * 10}`}
                            className="img-fluid"
                          />
                        </li>
                      ))}
                    </ul>
                  )
                )}
              </Col>
            </Row>
          </div>
        </Container>
      </section>
  );
};

export default CoreFeature;
