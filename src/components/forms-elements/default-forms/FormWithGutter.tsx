import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

import {
  IconLock,
  IconMail,
  IconPhoneCall,
  IconUser,
} from "@tabler/icons-react";

const FormWithGutter: React.FC = () => {
  return (
    <div>
      <Row>
        <Col lg={6}>
          <Card>
            <Card.Header>
              <h5>Form With Gutters</h5>
            </Card.Header>
            <Card.Body>
              <Form className="app-form">
                <Row className="g-1">
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="firstName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control placeholder="Your Name" />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control placeholder="Your Email" />
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <Form.Group className="mb-3" controlId="phone">
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        className="contact-input"
                        placeholder="Your Phone Number"
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
                      type="checkbox"
                      id="formCheck6"
                      label="Remember me"
                      className="mb-3"
                    />
                  </Col>
                  <Col xs={12} className="text-end">
                    <Button type="submit" variant="primary">
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
              <h5>Form With Gutters With Icon</h5>
            </Card.Header>
            <Card.Body>
              <Form className="app-form">
                <Row className="g-1">
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="firstNameIcon">
                      <Form.Label>First Name</Form.Label>
                      <div className="icon-form d-flex align-items-center gap-2">
                        <IconUser size={20} />
                        <Form.Control
                          placeholder="Your Name"
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
                      id="formCheck7"
                      label="Remember me"
                      className="mb-3"
                    />
                  </Col>
                  <Col xs={12} className="text-end">
                    <Button type="submit" variant="light">
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

export default FormWithGutter;
