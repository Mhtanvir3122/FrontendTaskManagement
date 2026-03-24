import React from "react";
import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";

import { IconCheck } from "@tabler/icons-react";
import { Cards } from "phosphor-react";

const PricingPlansSection: React.FC = () => {
  const pricingFeatures = [
    "6 Month support",
    "Single end product use",
    "Future upgrades included",
    "Free for use in end products",
  ];

  return (
    <section className="plans-section" id="Pricing">
      <Container>
        <div className="card-section-content section-lg-space-x">
          <Row>
            <Col xl={8}>
              <div className="landing-title">
                <Badge className="title-badge mb-3" bg="light-primary">
                  <Cards
                    size={14}
                    className="align-text-bottom me-1"
                    weight="fill"
                  />
                  Cards
                </Badge>
                <h2>
                  Purchase <span className="highlight-title">Plans</span>
                </h2>
                <p>
                  Include information on how users can navigate your platform,
                  select a plan, and complete the transaction.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            {/* Left Card - Basic Plan */}
            <Col md={7} xl={8}>
              <Card className="pricing-cards equal-card mb-0">
                <Card.Body>
                  <Row className="align-items-center">
                    <Col lg={5} xl={6}>
                      <img
                        alt="img"
                        className="w-120"
                        src="/images/landing/wallet.png"
                      />
                      <div>
                        <Badge bg="primary" className="f-s-16 mt-3">
                          Basic Plans
                        </Badge>
                        <h1 className="text-primary fw-bold mt-3">$14.00</h1>
                        <p className="text-secondary fw-medium f-s-16">
                          Essential features at the best value. Get started
                          today with our budget-friendly pricing!
                        </p>
                      </div>
                    </Col>
                    <Col lg={7} xl={6}>
                      <div className="pricing-details">
                        <div className="price-title">
                          <h3 className="text-dark fw-semibold">Basic Plans</h3>
                          <ul className="pricing-list-menu">
                            {pricingFeatures.map((item, idx) => (
                              <li key={idx} className="pricing-listitem">
                                <IconCheck
                                  size={16}
                                  className="text-success me-2"
                                />
                                {item}
                              </li>
                            ))}
                          </ul>
                          <div className="text-center price-btn">
                            <Button
                              size="lg"
                              variant="primary"
                              href="https://themeforest.net/user/la-themes"
                              target="_blank"
                            >
                              Buy Plans
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>

            {/* Right Card - Business Plan */}
            <Col md={5} xl={4}>
              <Card className="pricing-cards active mb-0">
                <Card.Body className="p-0">
                  <div className="pricing-details">
                    <div className="price-title">
                      <p className="text-white-600">Business Plans</p>
                      <h2>$499.00</h2>
                      <ul className="pricing-list-menu">
                        {pricingFeatures.map((item, idx) => (
                          <li
                            key={idx}
                            className="pricing-listitem text-white-800"
                          >
                            <IconCheck size={16} className="text-white me-2" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="text-center price-btn">
                        <Button
                          size="lg"
                          variant="light-white"
                          href="https://themeforest.net/user/la-themes"
                          target="_blank"
                        >
                          Buy Plans
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default PricingPlansSection;
