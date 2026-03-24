import React, { useState } from "react";
import {
  Card,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
} from "react-bootstrap";
import { Check, X } from "phosphor-react";

const AppointmentForm: React.FC = () => {
  const [hasApplied, setHasApplied] = useState(""); // <- fix here

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasApplied(e.target.value);
  };

  return (
    <Card>
      <Card.Header>
        <h5>Book Appointment Form</h5>
      </Card.Header>
      <Card.Body>
        <Form className="app-form">
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Your First Name" required />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Last Name" required />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              <Form.Group className="mb-3" controlId="dob">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter Your Email" required />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3" controlId="contact">
                <Form.Label>Contact</Form.Label>
                <InputGroup>
                  <InputGroup.Text>+91</InputGroup.Text>
                  <Form.Control type="text" placeholder="Enter Your Contact" required />
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={6} xl={4}>
              <Form.Group className="mb-3" controlId="gender">
                <Form.Label>Gender</Form.Label>
                <Form.Select>
                  <option>Select Gender</option>
                  <option value="1">Male</option>
                  <option value="2">Female</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={6} xl={8}>
              <Form.Group className="mb-3" controlId="appointmentType">
                <Form.Label>Appointment Type</Form.Label>
                <Form.Select>
                  <option>Select Your Appointment</option>
                  <option value="1">Medical Examination</option>
                  <option value="2">Doctor Check</option>
                  <option value="3">Result Analysis</option>
                  <option value="4">Check Up</option>
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={4}>
              <Form.Group className="mb-3" controlId="doctor">
                <Form.Label>Doctor</Form.Label>
                <Form.Select>
                  <option>Select Your Doctor</option>
                  <option value="1">Dr.Cedric Kelly</option>
                  <option value="2">Dr.Haley Kennedy</option>
                  <option value="3">Dr.Angelica Ramos</option>
                  <option value="4">Dr.Timothy Mooney</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3" controlId="appointmentDate">
                <Form.Label>Appointment Date</Form.Label>
                <Form.Control type="date" required />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3" controlId="appointmentTime">
                <Form.Label>Appointment Time</Form.Label>
                <Form.Control type="time" required />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <Form.Group className="mb-3" controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter Your Message" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <Form.Group className="mb-3 form-selectgroup">
                <Form.Label>Have you ever applied to our facility before?</Form.Label>
                <div className="d-flex gap-2">
                  {/* YES */}
                  <label
                    className={`d-flex align-items-center border rounded-2 px-3 py-2 ${
                      hasApplied === "yes"
                        ? "border-primary text-primary fw-semibold"
                        : "border-light text-secondary"
                    }`}
                  >
                    <input
                      type="radio"
                      name="radiocheck"
                      value="yes"
                      checked={hasApplied === "yes"}
                      onChange={handleRadioChange}
                      className="d-none"
                    />
                    <Check size={16} className="me-1" weight="bold" />
                    Yes
                  </label>

                  {/* NO */}
                  <label
                    className={`d-flex align-items-center border rounded-2 px-3 py-2 ${
                      hasApplied === "no"
                        ? "border-primary text-primary fw-semibold"
                        : "border-light text-secondary"
                    }`}
                  >
                    <input
                      type="radio"
                      name="radiocheck"
                      value="no"
                      checked={hasApplied === "no"}
                      onChange={handleRadioChange}
                      className="d-none"
                    />
                    <X size={16} className="me-1" weight="bold" />
                    No
                  </label>
                </div>
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col md={12} className="text-end">
              <Button type="submit" variant="primary" className="me-2">
                Submit
              </Button>
              <Button type="reset" variant="secondary">
                Reset
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default AppointmentForm;
