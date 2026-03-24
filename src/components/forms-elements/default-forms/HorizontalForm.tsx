import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

import {
  IconArticle,
  IconLock,
  IconMail,
  IconPhoneCall,
  IconUser,
} from "@tabler/icons-react";

const HorizontalForm: React.FC = () => {
  return (
    <div>
      <Row>
        <Col lg={6}>
          <Card className="equal-card">
            <Card.Header>
              <h5>Horizontal Form</h5>
            </Card.Header>
            <Card.Body>
              <Form className="app-form">
                <Row className="mb-3">
                  <Col md={3}>
                    <Form.Label htmlFor="fullName">Full Name</Form.Label>
                  </Col>
                  <Col md={9}>
                    <Form.Control
                      type="text"
                      id="fullName"
                      placeholder="Your Name"
                    />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={3}>
                    <Form.Label htmlFor="email">Email Address</Form.Label>
                  </Col>
                  <Col md={9}>
                    <Form.Control
                      type="email"
                      id="email"
                      placeholder="Your Email"
                    />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={3}>
                    <Form.Label htmlFor="password">Password</Form.Label>
                  </Col>
                  <Col md={9}>
                    <Form.Control
                      type="password"
                      id="password"
                      placeholder="Type password"
                    />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={3}>
                    <Form.Label htmlFor="phone">Phone Number</Form.Label>
                  </Col>
                  <Col md={9}>
                    <Form.Control
                      type="tel"
                      id="phone"
                      placeholder="123-45-678"
                      className="contact-input"
                    />
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={3}>
                    <Form.Label htmlFor="state">State</Form.Label>
                  </Col>
                  <Col md={9}>
                    <Form.Select id="state">
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Select>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={3}>
                    <Form.Label htmlFor="zipCode">Zip Code</Form.Label>
                  </Col>
                  <Col md={9}>
                    <Form.Control
                      type="text"
                      id="zipCode"
                      placeholder="Type a code"
                      className="mb-3"
                    />
                    <Form.Check
                      id="formCheck2"
                      type="checkbox"
                      label="Agree to terms and conditions"
                    />
                  </Col>
                </Row>

                <Row>
                  <Col className="text-end">
                    <Button type="submit" variant="warning">
                      Submit
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6}>
          <Card className="equal-card">
            <Card.Header>
              <h5>Horizontal Form</h5>
            </Card.Header>
            <Card.Body>
              <Form className="app-form">
                <Row className="mb-3">
                  <Col md={3}>
                    <Form.Label htmlFor="fullName">Full Name</Form.Label>
                  </Col>
                  <Col md={9}>
                    <div className="icon-form d-flex align-items-center gap-2">
                      <IconUser size={20} />
                      <Form.Control
                        type="text"
                        id="fullName"
                        placeholder="Your Name"
                        className="pa-s-34"
                      />
                    </div>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={3}>
                    <Form.Label htmlFor="email">Email Address</Form.Label>
                  </Col>
                  <Col md={9}>
                    <div className="icon-form d-flex align-items-center gap-2">
                      <IconMail size={20} />
                      <Form.Control
                        type="email"
                        id="email"
                        placeholder="Your Email"
                        className="pa-s-34"
                      />
                    </div>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={3}>
                    <Form.Label htmlFor="password">Password</Form.Label>
                  </Col>
                  <Col md={9}>
                    <div className="icon-form d-flex align-items-center gap-2">
                      <IconLock size={20} />
                      <Form.Control
                        type="password"
                        id="password"
                        placeholder="Type password"
                        className="pa-s-34"
                      />
                    </div>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={3}>
                    <Form.Label htmlFor="phone">Phone Number</Form.Label>
                  </Col>
                  <Col md={9}>
                    <div className="icon-form d-flex align-items-center gap-2">
                      <IconPhoneCall size={20} />
                      <Form.Control
                        type="tel"
                        id="phone"
                        placeholder="123-45-678"
                        className="pa-s-34"
                      />
                    </div>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={3}>
                    <Form.Label htmlFor="state">State</Form.Label>
                  </Col>
                  <Col md={9}>
                    <Form.Select id="state">
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Select>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={3}>
                    <Form.Label htmlFor="zipCode">Zip Code</Form.Label>
                  </Col>
                  <Col md={9}>
                    <div className="icon-form d-flex align-items-center gap-2 mb-3">
                      <IconArticle size={20} />
                      <Form.Control
                        type="text"
                        id="zipCode"
                        placeholder="Type a code"
                        className="pa-s-34"
                      />
                    </div>

                    <Form.Check
                      id="formCheck1"
                      type="checkbox"
                      label="Agree to terms and conditions"
                    />
                  </Col>
                </Row>

                <Row>
                  <Col className="text-end">
                    <Button type="submit" variant="info">
                      Submit
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default HorizontalForm;
