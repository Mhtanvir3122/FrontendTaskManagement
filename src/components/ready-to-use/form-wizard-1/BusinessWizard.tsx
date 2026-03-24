import { useState } from "react";
import {
  Card,
  Nav,
  Tab,
  Form,
  Row,
  Col,
  Button,

} from "react-bootstrap";
import {
  UserCirclePlus,
  UserSwitch,
  CreditCard,
} from "phosphor-react";

const BusinessAccountWizard: React.FC = () => {
  const [key, setKey] = useState<string>("details");

  return (
    <Col xs={12}>
      <Card>
        <Card.Header>
          <h5>Business Account Wizards</h5>
        </Card.Header>
        <Card.Body>
          <Tab.Container activeKey={key} onSelect={(k) => setKey(k || "details")}>
            <Nav variant="tabs" className="business-nav d-flex mb-3">
              <Nav.Item className="flex-grow-1 text-center">
                <Nav.Link eventKey="details">
                  <UserCirclePlus size={20} className="me-2" weight="duotone" />
                  <span className="f-s-18 f-w-500">Create account</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="flex-grow-1 text-center">
                <Nav.Link eventKey="personal">
                  <UserSwitch size={20} className="me-2" weight="duotone" />
                  <span className="f-s-18 f-w-500">Personal account</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item className="flex-grow-1 text-center">
                <Nav.Link eventKey="payment">
                  <CreditCard size={20} className="me-2" weight="duotone" />
                  <span className="f-s-18 f-w-500">Payment method</span>
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content>
              <Tab.Pane eventKey="details">
                <Form className="app-form">
                  <Row>
                    <Col xs={12} className="mb-3">
                      <Form.Label className="f-w-500">Username</Form.Label>
                      <Form.Control type="text" placeholder="James" />
                    </Col>
                    <Col xs={12} className="mb-3">
                      <Form.Label className="f-w-500">Email Address</Form.Label>
                      <Form.Control type="email" placeholder="@gmail.com" />
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Label className="f-w-500">Password</Form.Label>
                      <Form.Control type="password" placeholder="******" />
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Label className="f-w-500">Confirm Password</Form.Label>
                      <Form.Control type="password" placeholder="******" />
                    </Col>
                  </Row>
                </Form>
              </Tab.Pane>

              <Tab.Pane eventKey="personal">
                <Form className="app-form">
                  <Row>
                    <Col xs={12} className="mb-3">
                      <Form.Label className="f-w-500">Contact Number</Form.Label>
                      <Form.Control type="text" placeholder="+91" />
                    </Col>
                    <Col xs={12} className="mb-3">
                      <Form.Label className="f-w-500">Address</Form.Label>
                      <Form.Control type="text" placeholder="156/A ..." />
                    </Col>
                    <Col xs={12} className="mb-3">
                      <Form.Label className="f-w-500">Address 2</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Apartment, studio, or floor"
                      />
                    </Col>
                    <Col md={6} className="mb-3">
                      <Form.Label className="f-w-500">City</Form.Label>
                      <Form.Control type="text" placeholder="UK" />
                    </Col>
                    <Col md={4} className="mb-3">
                      <Form.Label className="f-w-500">State</Form.Label>
                      <Form.Select>
                        <option>Choose...</option>
                        <option>...</option>
                      </Form.Select>
                    </Col>
                    <Col md={2} className="mb-3">
                      <Form.Label className="f-w-500">Zip</Form.Label>
                      <Form.Control type="text" maxLength={5} placeholder="xxxxx" />
                    </Col>
                    <Col xs={12} className="mb-3">
                      <Form.Check
                        type="checkbox"
                        label="Check me out"
                      />
                    </Col>
                  </Row>
                </Form>
              </Tab.Pane>

              <Tab.Pane eventKey="payment">
                <Form className="app-form">
                  <Row>
                    <Col xs={12} className="mb-3">
                      <Form.Check
                        type="radio"
                        label="Credit / Debit Card"
                        name="payment"
                        className="mb-3"
                      />
                      <Form.Label className="f-w-500">Cardholder Name</Form.Label>
                      <Form.Control type="text" placeholder="Olaf" className="mb-3" />
                      <Form.Label className="f-w-500">Card Number</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="xxxx-xxxx-xxxx-xxxx"
                        className="mb-3"
                      />
                      <Form.Label className="f-w-500">Expiration Date</Form.Label>
                      <Form.Control type="text" placeholder="MM/YY" className="mb-3" />
                      <Form.Label className="f-w-500">CVC code</Form.Label>
                      <Form.Control type="text" placeholder="xxx" className="mb-3" />
                    </Col>
                    <Col xs={12} className="text-end">
                      <Button variant="primary">Submit</Button>
                    </Col>
                  </Row>
                </Form>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BusinessAccountWizard;
