import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Form,
  Row,
  Tab,
  Nav,
} from "react-bootstrap";
import {
  UserCircle,
  CreditCard,
  FileText,
  Checks,
} from "phosphor-react";

const AccountWizard: React.FC = () => {
  const [activeKey, setActiveKey] = useState<string>("step1");

  return (
    <Card>
      <Card.Header>
        <h5>Create Account Wizard</h5>
      </Card.Header>
      <Card.Body className="card-body">
        <Tab.Container activeKey={activeKey} onSelect={(k) => setActiveKey(k || "step1")}>
          <Row>
            <Col md={12}>
              <Nav
                variant="pills"
                className="nav custom-navstpes d-flex justify-content-between flex-row mb-4"
              >
                <Nav.Item className="flex-grow-1 text-center">
                  <Nav.Link eventKey="step1">
                    <span className="d-flex align-items-center">
                      <UserCircle className="w-40 h-40" />
                      <span className="text-start ms-3 custom-title d-flex flex-column">
                        <span className="f-w-500 f-s-16">Personal info</span>
                        <span className="f-s-14 text-secondary">Enter step 1 details</span>
                      </span>
                    </span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="flex-grow-1 text-center">
                  <Nav.Link eventKey="step2">
                    <span className="d-flex align-items-center">
                      <CreditCard className="w-40 h-40" />
                      <span className="text-start ms-3 custom-title d-flex flex-column">
                        <span className="f-w-500 f-s-16">Billing Information</span>
                        <span className="f-s-14 text-secondary">Enter step 2 details</span>
                      </span>
                    </span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="flex-grow-1 text-center">
                  <Nav.Link eventKey="step3">
                    <span className="d-flex align-items-center">
                      <FileText className="w-40 h-40" />
                      <span className="text-start ms-3 custom-title d-flex flex-column">
                        <span className="f-w-500 f-s-16">Review Order</span>
                        <span className="f-s-14 text-secondary">Enter step 3 details</span>
                      </span>
                    </span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="flex-grow-1 text-center">
                  <Nav.Link eventKey="step4">
                    <span className="d-flex align-items-center">
                      <Checks className="w-40 h-40" />
                      <span className="text-start ms-3 custom-title d-flex flex-column">
                        <span className="f-w-500 f-s-16">Order Confirmation</span>
                        <span className="f-s-14 text-secondary">Enter step 4 details</span>
                      </span>
                    </span>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>

            <Col md={12}>
              <Tab.Content>
                <Tab.Pane eventKey="step1">
                  <Form className="app-form">
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Cardholder Name</Form.Label>
                          <Form.Control type="text" placeholder="Enter Cardholder Name" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control type="text" placeholder="Enter Last Name" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control type="text" placeholder="Enter Phone Number" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Email Address</Form.Label>
                          <Form.Control type="email" placeholder="Enter Email" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Country</Form.Label>
                          <Form.Select>
                            <option>Select Country</option>
                            <option>UK</option>
                            <option>US</option>
                            <option>Italy</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Language</Form.Label>
                          <Form.Select>
                            <option>Select Language</option>
                            <option>English</option>
                            <option>Italian</option>
                            <option>Spanish</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>
                    <div className="text-end">
                      <Button onClick={() => setActiveKey("step2")}>Next</Button>
                    </div>
                  </Form>
                </Tab.Pane>

                <Tab.Pane eventKey="step2">
                  <Form className="app-form">
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Username</Form.Label>
                          <Form.Control type="text" placeholder="Enter Username" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Credit/Debit Card Number</Form.Label>
                          <Form.Control type="text" placeholder="Enter Card Number" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>ZIP Code</Form.Label>
                          <Form.Control type="text" placeholder="ZIP Code" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <div className="text-end">
                      <Button variant="secondary" className="me-2" onClick={() => setActiveKey("step1")}>Previous</Button>
                      <Button onClick={() => setActiveKey("step3")}>Next</Button>
                    </div>
                  </Form>
                </Tab.Pane>

                <Tab.Pane eventKey="step3">
                  <Form className="app-form">
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Product Name</Form.Label>
                          <Form.Control type="text" placeholder="Enter Product Name" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Quantity</Form.Label>
                          <Form.Control type="number" placeholder="Quantity" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Price per Unit</Form.Label>
                          <Form.Control type="text" placeholder="Price per Unit" />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label>Billing Address</Form.Label>
                          <Form.Control type="text" placeholder="Billing Address" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <div className="text-end">
                      <Button variant="secondary" className="me-2" onClick={() => setActiveKey("step2")}>Previous</Button>
                      <Button onClick={() => setActiveKey("step4")}>Next</Button>
                    </div>
                  </Form>
                </Tab.Pane>

                <Tab.Pane eventKey="step4">
                  <div className="text-center">
                    <img src="/images/form/done.png" alt="Completed" />
                    <h6 className="mt-3 mb-0">Thank You!</h6>
                    <p className="mb-0">Your booking is completed.</p>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Card.Body>
    </Card>
  );
};

export default AccountWizard;
