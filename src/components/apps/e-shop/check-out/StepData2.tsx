import { useState } from "react";
import {
  Alert,
  Button,
  Card,
  Col,
  Form,
  FormCheck,
  FormControl,
  FormGroup,
  FormLabel,
  Modal,
  Row,
} from "react-bootstrap";

import { IconInfoCircle, IconPlus } from "@tabler/icons-react";

const StepData2 = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState("home");
  const [selectedDelivery, setSelectedDelivery] = useState("economy");
  const [showAlert, setShowAlert] = useState(true);

  const toggleModal = () => setModalOpen(!modalOpen);

  return (
    <div>
      <Row>
        <Col md={12}>
          <h5 className="mb-3">Your Address</h5>
        </Col>

        <Col md={6} xl={4}>
          <Card className="shadow-none">
            <Card.Body className="address-content">
              <FormGroup className="mb-2">
                <FormCheck
                  type="radio"
                  name="address"
                  id="homeAddress"
                  label="Home Address"
                  checked={selectedAddress === "home"}
                  onChange={() => setSelectedAddress("home")}
                />
              </FormGroup>
              <p className="text-muted mb-1">
                260 Zulma Stravenue, Wisozkton, KY 44193-0738
              </p>
              <p className="text-muted mb-1">collins@stroman.net</p>
              <p className="mb-0">+1 828-726-3669</p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} xl={4}>
          <Card className="shadow-none">
            <Card.Body className="address-content">
              <FormGroup className="mb-2">
                <FormCheck
                  type="radio"
                  name="address"
                  id="officeAddress"
                  label="Office Address"
                  checked={selectedAddress === "office"}
                  onChange={() => setSelectedAddress("office")}
                />
              </FormGroup>
              <p className="text-muted mb-1">
                90897 Franecki Haven, West Maximo, KY 40770-5993
              </p>
              <p className="text-muted mb-1">bjast@hotmail.com</p>
              <p className="mb-0">+1 863-422-2979</p>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} xl={4}>
          <Card className="equal-card shadow-none">
            <Card.Body className="added-content">
              <Button
                variant="primary-link"
                className="text-decoration-none"
                onClick={toggleModal}
              >
                <IconPlus size={18} className="me-1" />
                Add A New Address
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Modal show={modalOpen} onHide={toggleModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Address</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Row>
                <Col md={12}>
                  <FormGroup className="mb-3">
                    <FormLabel>Address</FormLabel>
                    <FormControl type="text" placeholder="Enter address" />
                  </FormGroup>
                </Col>
                <Col md={12}>
                  <FormGroup className="mb-3">
                    <FormLabel>Address 2</FormLabel>
                    <FormControl type="text" placeholder="Additional info" />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup className="mb-3">
                    <FormLabel>City</FormLabel>
                    <FormControl type="text" placeholder="Enter city" />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup className="mb-3">
                    <FormLabel>State</FormLabel>
                    <Form.Select>
                      <option>Choose...</option>
                      <option>NY</option>
                      <option>CA</option>
                    </Form.Select>
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup className="mb-3">
                    <FormLabel>Zip</FormLabel>
                    <FormControl type="text" placeholder="Zip code" />
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={toggleModal}>
              Close
            </Button>
            <Button variant="primary">Add</Button>
          </Modal.Footer>
        </Modal>

        <Col md={12}>
          <h5 className="mb-3">Delivery Method</h5>
        </Col>

        <Col md={6}>
          <Card className="shadow-none">
            <Card.Body className="select-content">
              <FormCheck
                type="radio"
                name="delivery"
                id="economyShipping"
                label={
                  <>
                    <span className="d-block">Economy Shipping - FREE</span>
                    <small className="text-muted">5 to 10 business days</small>
                  </>
                }
                checked={selectedDelivery === "economy"}
                onChange={() => setSelectedDelivery("economy")}
              />
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="shadow-none">
            <Card.Body className="select-content">
              <FormCheck
                type="radio"
                name="delivery"
                id="priorityShipping"
                label={
                  <>
                    <span className="d-block">Priority Overnight - $18.50</span>
                    <small className="text-muted">
                      Based on chosen delivery date
                    </small>
                  </>
                }
                checked={selectedDelivery === "priority"}
                onChange={() => setSelectedDelivery("priority")}
              />
            </Card.Body>
          </Card>
        </Col>

        {showAlert && (
          <Col md={12}>
            <Alert
              variant="light-info"
              className="alert-border-info"
              dismissible
              onClose={() => setShowAlert(false)}
            >
              <p className="d-flex align-items-center mb-2">
                <IconInfoCircle size={18} className="me-2" />
                Expected delivery <strong>date</strong> is not guaranteed. If
                you're ordering for an event, we suggest allowing 1 extra day.
              </p>
              <div className="text-end">
                <Button
                  variant="link"
                  className="p-0 me-2"
                  onClick={() => setShowAlert(false)}
                >
                  Don't allow
                </Button>
                <Button variant="link" className="p-0">
                  Allow
                </Button>
              </div>
            </Alert>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default StepData2;
