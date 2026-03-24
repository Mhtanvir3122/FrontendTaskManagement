import React from "react";
import {
  Card,
  Col,
  Row,
  Form,
  Button,
  Tab,
  Nav,
} from "react-bootstrap";
import {
  UserCircle,
  Info,
  CreditCard,
  Checks,
} from "phosphor-react";

const PaymentWizard: React.FC = () => {
  return (
    <Card>
      <Card.Header>
        <h5>Payment Method Wizards</h5>
      </Card.Header>
      <Card.Body>
        <div className="form-wizard">
          <Tab.Container defaultActiveKey="account">
            <Row>
              <Col xl={3} className="mb-3">
                <Nav className="flex-column navstpes" role="tablist">
                  <Nav.Item className=" navstpes ">
                    <Nav.Link eventKey="account" className="nav-link d-flex align-items-center">
                      <UserCircle className="w-40 h-40 f-w-900" />
                      <span className="ms-3 fw-normal">Create Account</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="info" className="nav-link d-flex align-items-center">
                      <Info className="w-40 h-40 f-w-900"  />
                      <span className="ms-3 fw-normal">Personal Info</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="payment" className="nav-link d-flex align-items-center">
                      <CreditCard className="w-40 h-40 f-w-900" />
                      <span className="ms-3 fw-normal">Payment Method</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="confirm" className="nav-link d-flex align-items-center">
                      <Checks className="w-40 h-40 f-w-900" />
                      <span className="ms-3 fw-normal">Confirm order</span>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>

              <Col xl={9}>
                <Tab.Content>
                  <Tab.Pane eventKey="account">
                    <Form className="app-form">
                      <Row>
                        <Col xs={12}>
                          <Form.Group className="mb-3">
                            <Form.Label className="form-label f-w-500">Username</Form.Label>
                            <Form.Control type="text" placeholder="James" />
                          </Form.Group>
                        </Col>
                        <Col xs={12}>
                          <Form.Group className="mb-3">
                            <Form.Label className="form-label f-w-500">Email Address</Form.Label>
                            <Form.Control type="email" placeholder="@gmail.com" />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label className="form-label f-w-500">Password</Form.Label>
                            <Form.Control type="password" placeholder="******" />
                          </Form.Group>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Label className="form-label f-w-500">Confirm Password</Form.Label>
                            <Form.Control type="password" placeholder="******" />
                          </Form.Group>
                        </Col>
                      </Row>
                    </Form>
                  </Tab.Pane>

                  <Tab.Pane eventKey="info">
                    <Form className="app-form">
                      <Row>
                        <Col xs={12} className="mb-3">
                          <Form.Group>
                            <Form.Label className="form-label f-w-500">Contact Number</Form.Label>
                            <Form.Control type="text" placeholder="+91" />
                          </Form.Group>
                        </Col>
                        <Col xs={12} className="mb-3">
                          <Form.Group>
                            <Form.Label className="form-label f-w-500">Address</Form.Label>
                            <Form.Control type="text" placeholder="156/A ..." />
                          </Form.Group>
                        </Col>
                        <Col xs={12} className="mb-3">
                          <Form.Group>
                            <Form.Label className="form-label f-w-500">Address 2</Form.Label>
                            <Form.Control type="text" placeholder="Apartment, studio, or floor" />
                          </Form.Group>
                        </Col>
                        <Col md={6} className="mb-3">
                          <Form.Group>
                            <Form.Label className="form-label f-w-500">City</Form.Label>
                            <Form.Control type="text" placeholder="UK" />
                          </Form.Group>
                        </Col>
                        <Col md={4} className="mb-3">
                          <Form.Group>
                            <Form.Label className="form-label f-w-500">State</Form.Label>
                            <Form.Select>
                              <option>Choose...</option>
                              <option>1</option>
                              <option>2</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                        <Col md={2} className="mb-3">
                          <Form.Group>
                            <Form.Label className="form-label f-w-500">Zip</Form.Label>
                            <Form.Control type="text" maxLength={5} placeholder="xxxxx" />
                          </Form.Group>
                        </Col>
                        <Col xs={12} className="mb-3">
                          <Form.Check type="checkbox" label="Check me out" className="form-check-label f-w-500" />
                        </Col>
                      </Row>
                    </Form>
                  </Tab.Pane>

                  <Tab.Pane eventKey="payment">
                    <Row>
                      <Col xs={12}>
                        <Card className="shadow-none">
                          <Card.Body className="select-content">
                            <Form.Check
                              type="radio"
                              name="paymentType"
                              label="Credit / Debit Card"
                              className="check-box f-w-500"
                            />
                            <Form className="app-form mt-3">
                              <Row>
                                <Col xs={12}>
                                  <Form.Group className="mb-3">
                                    <Form.Label className="form-label f-w-500">Cardholder Name</Form.Label>
                                    <Form.Control type="text" placeholder="Olaf" />
                                  </Form.Group>
                                </Col>
                                <Col md={6}>
                                  <Form.Group className="mb-3">
                                    <Form.Label className="form-label f-w-500">Card Number</Form.Label>
                                    <Form.Control type="text" placeholder="xxxx-xxxx-xxxx-xxx" />
                                  </Form.Group>
                                </Col>
                                <Col md={3}>
                                  <Form.Group className="mb-3">
                                    <Form.Label className="form-label f-w-500">Expiration Date</Form.Label>
                                    <Form.Control type="text" placeholder="MM/YY" />
                                  </Form.Group>
                                </Col>
                                <Col md={3}>
                                  <Form.Group className="mb-3">
                                    <Form.Label className="form-label f-w-500">CVC code</Form.Label>
                                    <Form.Control type="text" placeholder="xxx" />
                                  </Form.Group>
                                </Col>
                                <Col xs={12}>
                                  <div className="text-end">
                                    <Button variant="primary">Submit</Button>
                                  </div>
                                </Col>
                              </Row>
                            </Form>
                          </Card.Body>
                        </Card>
                      </Col>

                      <Col md={6}>
                        <Card className="shadow-none">
                          <Card.Body className="select-content">
                            <div className="position-relative">
                            <Form.Check
                              type="radio"
                              name="paymentType"
                              className="radio-mark form-check "
                              label={
                                <div className="d-flex align-items-center mg-s-25">
                                  <img src="/images/checkbox-radio/logo1.png" alt="" className="w-30 h-30  " />
                                  <div className="ms-2">
                                    <div className="fs-6 f-w-500">Visa Card</div>
                                    <div className="text-secondary">Select Visa card payment method</div>
                                  </div>
                                </div>
                              }
                            />
                           </div>
                          </Card.Body>
                        </Card>
                      </Col>

                      <Col md={6}>
                        <Card className="shadow-none">
                          <Card.Body className="select-content">
                            <Form.Check
                              type="radio"
                              name="paymentType"
                              className="radio-mark form-check"
                              label={
                                <div className="d-flex align-items-center mg-s-25">
                                  <img src="/images/checkbox-radio/logo3.png" alt="" className="w-30 h-30" />
                                  <div className="ms-2">
                                    <div className="fs-6 f-w-500">Paypal</div>
                                    <div className="text-secondary">Select PayPal payment method</div>
                                  </div>
                                </div>
                              }
                            />
                          </Card.Body>
                        </Card>
                      </Col>
                    </Row>
                  </Tab.Pane>

                  <Tab.Pane eventKey="confirm">
                    <div className="completed-contents">
                      <div className="completbox text-center">
                        <img src="/images/form/done.png" alt="" />
                        <h6 className="mb-0">Thank You!</h6>
                        <p>
                          Successfully Completed your order process!
                          Confirmation will be sent to your email
                        </p>
                      </div>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PaymentWizard;
