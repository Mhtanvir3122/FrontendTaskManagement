import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

import {
  IconArticle,
  IconLock,
  IconMail,
  IconPhoneCall,
  IconUser,
} from "@tabler/icons-react";

const VerticalForm: React.FC = () => {
  return (
    <div>
      <Row>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <h5>Vertical Form</h5>
            </Card.Header>
            <Card.Body>
              <Form className="app-form">
                <Row>
                  <Col sm={12}>
                    <Form.Group controlId="fullName" className="mb-3">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control type="text" placeholder="Your Name" />
                    </Form.Group>
                  </Col>

                  <Col sm={12}>
                    <Form.Group controlId="email" className="mb-3">
                      <Form.Label>Email Address</Form.Label>
                      <Form.Control type="email" placeholder="Your Email" />
                    </Form.Group>
                  </Col>

                  <Col sm={6}>
                    <Form.Group controlId="password" className="mb-3">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Type password"
                      />
                    </Form.Group>
                  </Col>

                  <Col sm={6}>
                    <Form.Group controlId="phone" className="mb-3">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="tel"
                        placeholder="123-45-678"
                        className="contact-input"
                      />
                    </Form.Group>
                  </Col>

                  <Col sm={6}>
                    <Form.Group controlId="state" className="mb-3">
                      <Form.Label>State</Form.Label>
                      <Form.Select>
                        <option>Choose...</option>
                        <option>...</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col sm={6}>
                    <Form.Group controlId="zipCode" className="mb-3">
                      <Form.Label>Zip Code</Form.Label>
                      <Form.Control type="text" placeholder="Type a code" />
                    </Form.Group>
                  </Col>

                  <Col sm={12}>
                    <Form.Check
                      type="checkbox"
                      id="formCheck3"
                      label="Agree to terms and conditions"
                      className="mb-3"
                    />
                  </Col>

                  <Col sm={12} className="text-end">
                    <Button type="submit" variant="success">
                      Submit
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6}>
          <Card>
            <Card.Header>
              <h5>Vertical Form With Icon</h5>
            </Card.Header>
            <Card.Body>
              <Form className="app-form">
                <Row>
                  <Col sm={12}>
                    <Form.Group className="mb-3" controlId="fullName">
                      <Form.Label>Full Name</Form.Label>
                      <div className="icon-form d-flex align-items-center gap-2">
                        <IconUser size={20} />
                        <Form.Control
                          type="text"
                          placeholder="Your Name"
                          className="pa-s-34"
                        />
                      </div>
                    </Form.Group>
                  </Col>

                  <Col sm={12}>
                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label>Email address</Form.Label>
                      <div className="icon-form d-flex align-items-center gap-2">
                        <IconMail size={20} />
                        <Form.Control
                          type="email"
                          placeholder="Your Email"
                          className="pa-s-34"
                        />
                      </div>
                    </Form.Group>
                  </Col>

                  <Col sm={6}>
                    <Form.Group className="mb-3" controlId="password">
                      <Form.Label>Password</Form.Label>
                      <div className="icon-form d-flex align-items-center gap-2">
                        <IconLock size={20} />
                        <Form.Control
                          type="password"
                          placeholder="Type password"
                          className="pa-s-34"
                        />
                      </div>
                    </Form.Group>
                  </Col>

                  <Col sm={6}>
                    <Form.Group className="mb-3" controlId="phone">
                      <Form.Label>Phone Number</Form.Label>
                      <div className="icon-form d-flex align-items-center gap-2">
                        <IconPhoneCall size={20} />
                        <Form.Control
                          type="tel"
                          placeholder="123-45-678"
                          className="pa-s-34 contact-input"
                        />
                      </div>
                    </Form.Group>
                  </Col>

                  <Col sm={6}>
                    <Form.Group className="mb-3" controlId="state">
                      <Form.Label>State</Form.Label>
                      <Form.Select>
                        <option>Choose...</option>
                        <option>...</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col sm={6}>
                    <Form.Group className="mb-3" controlId="zipCode">
                      <Form.Label>Zip Code</Form.Label>
                      <div className="icon-form d-flex align-items-center gap-2">
                        <IconArticle size={20} />
                        <Form.Control
                          type="text"
                          placeholder="Type a code"
                          className="pa-s-34"
                        />
                      </div>
                    </Form.Group>
                  </Col>

                  <Col sm={12}>
                    <Form.Check
                      id="formCheck5"
                      type="checkbox"
                      label="Agree to terms and conditions"
                      className="mb-3"
                    />
                  </Col>

                  <Col sm={12} className="text-end">
                    <Button type="submit" variant="primary">
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

export default VerticalForm;
