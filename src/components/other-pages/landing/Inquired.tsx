import React from "react";
import { Accordion, Badge, Card, Col, Container, Row } from "react-bootstrap";

import { ArrowUpRightIcon, SealQuestionIcon } from "@phosphor-icons/react";
import { Headphones } from "phosphor-react";

const faqItems = [
  {
    id: "faq1",
    question: "What is the role of an admin?",
    answer:
      "Admins are responsible for managing and overseeing the smooth operation of a system, platform, or organization.",
  },
  {
    id: "faq2",
    question: "How do I add or remove users?",
    answer:
      'Depending on the system, user management can usually be done through the admin dashboard. Look for the "User Management" or "Admin Settings" section, where you can add or remove users and assign roles.',
  },
  {
    id: "faq3",
    question: "What security measures should I implement?",
    answer:
      "Admins should prioritize security by enforcing strong password policies, implementing two-factor authentication, regularly updating software, and monitoring system logs for any suspicious activities.",
  },
  {
    id: "faq4",
    question: "How can I troubleshoot common issues?",
    answer:
      "Document and follow a systematic approach to troubleshooting. Check error logs, consult documentation, and involve relevant stakeholders if needed.",
  },
  {
    id: "faq5",
    question: "How do I handle user access permissions?",
    answer:
      "Website design projects can vary depending on their scale and complexity—making it hard to generalize about project timelines. Ideally, a typical website design project should take between 6 and 12 weeks.",
  },
];

const Inquired: React.FC = () => {
  return (
      <section className="faq-section section-lg-space-x" id="faq">
        <Container>
          <Row>
            <Col xl={8}>
              <div className="landing-title">
                <Badge className="title-badge mb-3" bg="light-primary">
                  <SealQuestionIcon
                    size={16}
                    className="align-text-bottom me-1"
                    weight="fill"
                  />
                  FAQ
                </Badge>
                <h2>
                  Inquired <span className="highlight-title">Queries</span>
                </h2>
                <p>
                  After reading the instructions, I had a few inquired queries
                  about the process and decided to reach out to customer support
                  for clarification.
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col lg={4}>
              <Row className="g-3">
                <Col lg={12} sm={6}>
                  <Card className="card-primary">
                    <Card.Body className="bg-card-box">
                      <div className="bg-card-img mb-3">
                        <img
                          src="/images/landing/card-image.png"
                          alt="Card Visual"
                        />
                      </div>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <h2 className="m-0">Digitize Your Documents</h2>
                        <a
                          className="btn btn-white icon-btn flex-shrink-0 w-45 h-45 rounded-circle"
                          href="https://phpstack-1384472-5121645.cloudwaysapps.com/document/react-ts/ki-admin/index.html"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <ArrowUpRightIcon
                            size={18}
                            color={"dark"}
                            weight="bold"
                          />
                        </a>
                      </div>
                      <p className="f-s-18">Efficiently Arranged and Current</p>
                    </Card.Body>
                  </Card>
                </Col>

                <Col lg={12} sm={6}>
                  <Card>
                    <Card.Body className="bg-card-box">
                      <div className="mb-3">
                        <div className="bg-light-primary h-60 w-60 d-flex-center b-r-6 mb-3">
                          <Headphones size={28} weight="bold" />
                        </div>
                        <h3 className="text-primary">Dedicated Support</h3>
                        <p className="f-s-18">
                          Require assistance? Send us a ticket. We're here to
                          help!
                        </p>
                      </div>
                      <a
                        className="btn btn-primary"
                        href="mailto:teqlathemes@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Get Support
                      </a>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>

            <Col lg={7} className="offset-lg-1">
              <div className="landing-accordion">
                <Accordion
                  defaultActiveKey="faq1"
                  className="app-accordion accordion-flush accordion-light-dark app-accordion-plus"
                >
                  {faqItems.map(({ id, question, answer }) => (
                    <Accordion.Item eventKey={id} key={id}>
                      <Accordion.Header>
                        <SealQuestionIcon
                          size={18}
                          weight="fill"
                          className="me-2 align-text-bottom"
                        />
                        {question}
                      </Accordion.Header>
                      <Accordion.Body>
                        <p dangerouslySetInnerHTML={{ __html: answer }} />
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
  );
};

export default Inquired;
