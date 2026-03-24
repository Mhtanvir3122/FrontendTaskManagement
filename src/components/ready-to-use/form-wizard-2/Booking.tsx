import React, { useState } from "react";
import {
  Row,
  Col,
  Form,
  Card,
  Accordion
} from "react-bootstrap";
import {
  GearSix,
  CalendarBlank,
  Notebook,
  CheckSquare,
} from "phosphor-react";

const Booking: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("tabs-1");

  const toggleTab = (tab: string): void => {
    setActiveTab(tab);
  };

  const steps = [
    {
      id: "tabs-1",
      title: "Service",
      subtitle: "Step 1",
      icon: <GearSix size={20} />,
    },
    {
      id: "tabs-2",
      title: "Date & Time",
      subtitle: "Step 2",
      icon: <CalendarBlank size={20} />,
    },
    {
      id: "tabs-3",
      title: "Booking Summary",
      subtitle: "Step 3",
      icon: <Notebook size={20} />,
    },
    {
      id: "tabs-4",
      title: "Completed",
      subtitle: "Step 4",
      icon: <CheckSquare size={20} />,
    },
  ];

  return (
    <Card>
      <Card.Header>
        <h5>Booking Wizard</h5>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col lg={4} className="mb-3">
            <div className="vertical-tabs">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`tab ${activeTab === step.id ? "current-tab" : ""}`}
                  onClick={() => toggleTab(step.id)}
                >
                  <div className="d-flex">
                    <div className="step ms-2">{step.icon}</div>
                    <div className="ps-3">
                      <h5>{step.title}</h5>
                      <span className="text-secondary">Step {index + 1}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>

          <Col lg={8}>
            <div className="tab-contents-list">
              {activeTab === "tabs-1" && (
                <Card.Body>
                  <Form className="app-form">
                    <Row>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Company Name</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Service</Form.Label>
                          <Form.Control type="text" />
                        </Form.Group>
                      </Col>
                      <Col md={12}>
                        <Form.Group>
                          <Form.Label>Company Address</Form.Label>
                          <Form.Control as="textarea" rows={2} />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Additional Persons</Form.Label>
                          <Form.Control type="number" defaultValue={2} />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Email</Form.Label>
                          <Form.Control plaintext readOnly defaultValue="email@gmail.com" />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              )}

              {activeTab === "tabs-2" && (
                <Form className="app-form">
                <Card.Body>
                  <Row>
                    <Col md={6} xl={4}>
                      <Card className="shadow-none">
                        <Card.Body>
                          <Form.Check type="radio" name="radio-group1" label="">
                          </Form.Check>
                          <div className="text-center">
                            <img src="/images/form/19.png" alt="Location 1" />
                            <h6 className="tab-heading">Location 1</h6>
                            <p className="text-muted">
                              A Global Positioning System, or GPS, satellites orbiting Earth.
                            </p>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>

                    <Col md={6} xl={4}>
                      <Card className="shadow-none">
                        <Card.Body>
                          <Form.Check type="radio" name="radio-group1" label="">
                          </Form.Check>
                          <div className="text-center">
                            <img src="/images/form/20.png" alt="Location 2" />
                            <h6 className="tab-heading">Location 2</h6>
                            <p className="text-muted">
                              Traditionally, those are the three important factors in buying.
                            </p>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>

                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="datetime-local" />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label>Time</Form.Label>
                        <Form.Control type="text" placeholder="10:00" readOnly />
                      </Form.Group>
                    </Col>
                  </Row>
                </Card.Body>
                </Form>
              )}

              {activeTab === "tabs-3" && (
                <Card.Body>
                  <Accordion defaultActiveKey="0"  className="accordion  app-accordion accordion-light-primary">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Company Details</Accordion.Header>
                      <Accordion.Body>
                        <p className="fw-bold">
                          <i className="ti ti-building-skyscraper"></i> AR info
                        </p>
                        <address>
                          120 Silver Point , <br /> Myriam Estate South Carolina, <br /> india
                        </address>
                        <p>Zip: 456730</p>
                        <p>Service : Application</p>
                        <p>Email : ar12@gmail.com</p>
                        <p>+91 6926578398</p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Meeting time Details</Accordion.Header>
                      <Accordion.Body>
                        <p><i className="ti ti-calendar-minus me-2"></i>2024-10-1</p>
                        <p><i className="ti ti-clock-hour-1 me-2"></i>10:00 am</p>
                        <p><i className="ti ti-map-pin me-2"></i>Location 1-(office)</p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Card.Body>
              )}

              {activeTab === "tabs-4" && (
                <Card.Body className="text-center">
                  <img src="/images/form/done.png" alt="Completed" />
                  <h6>Thank You!</h6>
                  <p>Your booking is completed.</p>
                </Card.Body>
              )}

            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Booking;
