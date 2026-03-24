import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

import {
  IconLock,
  IconMail,
  IconPhoneCall,
  IconUser,
} from "@tabler/icons-react";

const FormWithGrid: React.FC = () => {
  return (
    <div>
      <Row>
        <Col lg={6}>
          <Card className="equal-card">
            <Card.Header>
              <h5>Form With Grid</h5>
            </Card.Header>
            <Card.Body>
              <Form className="app-form">
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="firstName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" placeholder="First Name" />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Your Email" />
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Form.Group className="mb-3" controlId="phone">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Your Phone Number"
                        className="contact-input"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={8}>
                    <Form.Group className="mb-3" controlId="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Your Password" />
                    </Form.Group>
                  </Col>

                  <Col md={4}>
                    <Form.Group className="mb-3" controlId="state">
                      <Form.Label>State</Form.Label>
                      <Form.Select>
                        <option>Choose...</option>
                        <option>...</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Form.Check
                      id="formCheck3"
                      type="checkbox"
                      label="Remember me"
                      className="mb-3"
                    />
                  </Col>

                  <Col xs={12} className="text-end">
                    <Button type="submit" variant="secondary">
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
              <h5>Form With Grid With Icon</h5>
            </Card.Header>
            <Card.Body>
              <Form className="app-form">
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="firstNameIcon">
                      <Form.Label>First Name</Form.Label>
                      <div className="icon-form d-flex align-items-center gap-2">
                        <IconUser size={20} />
                        <Form.Control
                          type="text"
                          placeholder="First Name"
                          className="pa-s-34"
                        />
                      </div>
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="emailIcon">
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
                  <Col xs={12}>
                    <Form.Group className="mb-3" controlId="phoneIcon">
                      <Form.Label>Phone Number</Form.Label>
                      <div className="icon-form d-flex align-items-center gap-2">
                        <IconPhoneCall size={20} />
                        <Form.Control
                          type="tel"
                          placeholder="Your Phone Number"
                          className="contact-input pa-s-34"
                        />
                      </div>
                    </Form.Group>
                  </Col>
                  <Col md={8}>
                    <Form.Group className="mb-3" controlId="passwordIcon">
                      <Form.Label>Password</Form.Label>
                      <div className="icon-form d-flex align-items-center gap-2">
                        <IconLock size={20} />
                        <Form.Control
                          type="password"
                          placeholder="Your Password"
                          className="pa-s-34"
                        />
                      </div>
                    </Form.Group>
                  </Col>
                  <Col md={4}>
                    <Form.Group className="mb-3" controlId="stateIcon">
                      <Form.Label>State</Form.Label>
                      <Form.Select>
                        <option>Choose...</option>
                        <option>...</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <Form.Check
                      type="checkbox"
                      id="formCheck4"
                      label="Remember me"
                      className="mb-3"
                    />
                  </Col>
                  <Col xs={12} className="text-end">
                    <Button type="submit" variant="dark">
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

export default FormWithGrid;
