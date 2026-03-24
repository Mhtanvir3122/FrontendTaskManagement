import React, { useState } from "react";
import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";

interface FormData {
  fname: string;
  lname: string;
  contactNum: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface Errors {
  [key: string]: string;
}

const NumberWizard: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    fname: "",
    lname: "",
    contactNum: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (id: string, value: string) => {
    setFormData({ ...formData, [id]: value });
  };

  const validateStep = () => {
    const currentErrors: Errors = {};
    if (step === 1) {
      if (!formData.fname) currentErrors.fname = "First name is required";
      if (!formData.lname) currentErrors.lname = "Last name is required";
      if (!formData.contactNum)
        currentErrors.contactNum = "Contact number is required";
    } else if (step === 2) {
      if (!formData.address) currentErrors.address = "Address is required";
      if (!formData.city) currentErrors.city = "City is required";
      if (!formData.state) currentErrors.state = "State is required";
      if (!formData.zip || formData.zip.length !== 5)
        currentErrors.zip = "Zip must be 5 digits";
    } else if (step === 3) {
      if (!formData.email) currentErrors.email = "Email is required";
      if (!formData.password) currentErrors.password = "Password is required";
      if (formData.password !== formData.confirmPassword)
        currentErrors.confirmPassword = "Passwords must match";
    }
    setErrors(currentErrors);
    return Object.keys(currentErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) setStep(step + 1);
  };

  const handlePrev = () => setStep(step - 1);

  return (
    <Card className="p-4">
      <h5 className="mb-4 text-muted">Wizard With Number</h5>
      <div className="form-wizard">
        <div className="form-wizard-header mb-4">
          <ul className="form-wizard-steps d-flex gap-3 list-unstyled">
            <li
              className={`${step >= 1 ? "activated" : ""} ${step === 1 ? "active fw-bold" : ""}`}
            >
              <span className="wizard-steps">1</span>
            </li>
            <li
              className={`${step >= 2 ? "activated" : ""} ${step === 2 ? "active fw-bold" : ""}`}
            >
              <span className="wizard-steps">2</span>
            </li>
            <li
              className={`${step >= 3 ? "activated" : ""} ${step === 3 ? "active fw-bold" : ""}`}
            >
              <span className="wizard-steps">3</span>
            </li>
          </ul>
        </div>

        <Form className="app-form">
          <Row>
            {step === 1 && (
              <>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="fname">
                    <Form.Label>First Name*</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Martin"
                      value={formData.fname}
                      onChange={(e) => handleChange("fname", e.target.value)}
                      isInvalid={!!errors.fname}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.fname}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="lname">
                    <Form.Label>Last Name*</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Payne"
                      value={formData.lname}
                      onChange={(e) => handleChange("lname", e.target.value)}
                      isInvalid={!!errors.lname}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.lname}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={12}>
                  <Form.Group className="mb-3" controlId="contactNum">
                    <Form.Label>Contact*</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>+91</InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="**********"
                        value={formData.contactNum}
                        onChange={(e) =>
                          handleChange("contactNum", e.target.value)
                        }
                        isInvalid={!!errors.contactNum}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.contactNum}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Col>
              </>
            )}

            {step === 2 && (
              <>
                <Col md={12}>
                  <Form.Group className="mb-3" controlId="address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="2107 Deer Ridge Drive"
                      value={formData.address}
                      onChange={(e) => handleChange("address", e.target.value)}
                      isInvalid={!!errors.address}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.address}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3" controlId="city">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="US"
                      value={formData.city}
                      onChange={(e) => handleChange("city", e.target.value)}
                      isInvalid={!!errors.city}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.city}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3" controlId="state">
                    <Form.Label>State</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter State"
                      value={formData.state}
                      onChange={(e) => handleChange("state", e.target.value)}
                      isInvalid={!!errors.state}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.state}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3" controlId="zip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Zip"
                      maxLength={5}
                      value={formData.zip}
                      onChange={(e) => handleChange("zip", e.target.value)}
                      isInvalid={!!errors.zip}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.zip}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </>
            )}

            {step === 3 && (
              <>
                <Col md={12}>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email*</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="example@domain.com"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password*</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="******"
                      value={formData.password}
                      onChange={(e) => handleChange("password", e.target.value)}
                      isInvalid={!!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3" controlId="confirmPassword">
                    <Form.Label>Confirm Password*</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="******"
                      value={formData.confirmPassword}
                      onChange={(e) =>
                        handleChange("confirmPassword", e.target.value)
                      }
                      isInvalid={!!errors.confirmPassword}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.confirmPassword}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </>
            )}
          </Row>

          <div className="d-flex justify-content-end gap-2">
            {step > 1 && (
              <Button variant="secondary" onClick={handlePrev}>
                Previous
              </Button>
            )}
            {step <= 3 ? (
              <Button variant="primary" onClick={handleNext}>
                Next
              </Button>
            ) : (
              <Button variant="success" type="submit">
                Submit
              </Button>
            )}
          </div>
        </Form>
      </div>
    </Card>
  );
};

export default NumberWizard;
