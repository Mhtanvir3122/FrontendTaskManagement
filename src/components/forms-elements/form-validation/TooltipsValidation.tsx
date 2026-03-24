import React, { useState } from "react";
import { Button, Card, Col, Form } from "react-bootstrap";

interface FormErrors {
  userName: string;
  email: string;
  password: string;
  address: string;
  address2: string;
  city: string;
  zipCode: string;
}

const TooltipsValidation: React.FC = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    address: "",
    address2: "",
    city: "",
    zipCode: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    userName: "",
    email: "",
    password: "",
    address: "",
    address2: "",
    city: "",
    zipCode: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors: FormErrors = {
      userName: formData.userName ? "" : "User Name is required",
      email: formData.email ? "" : "Email is required",
      password: formData.password ? "" : "Password is required",
      address: formData.address ? "" : "Address is required",
      address2: "",
      city: formData.city ? "" : "City is required",
      zipCode: formData.zipCode ? "" : "Zip Code is required",
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((err) => err === "");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validate()) {
      console.log("Form submitted successfully:", formData);
    }
  };

  return (
    <Col xs={12}>
      <Card>
        <Card.Header>
          <h5>Tooltips</h5>
          <p className="text-secondary">
            If your form layout allows it, you can swap the{" "}
            <code>.valid|invalid-feedback</code> classes for{" "}
            <code>.valid|invalid-tooltip</code> classes to display validation
            feedback in a styled tooltip. Ensure the parent has{" "}
            <code>position: relative</code> for tooltip positioning.
          </p>
        </Card.Header>

        <Card.Body>
          <Form
            className="needs-validation app-form row g-3"
            noValidate
            onSubmit={handleSubmit}
          >
            <Col md={6}>
              <Form.Group controlId="userName" className="position-relative">
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  type="text"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                  isInvalid={!!errors.userName}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.userName}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="email" className="position-relative">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="password" className="position-relative">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="address" className="position-relative">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  placeholder="1234 Main St"
                  value={formData.address}
                  onChange={handleChange}
                  isInvalid={!!errors.address}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.address}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={5}>
              <Form.Group controlId="address2" className="position-relative">
                <Form.Label>Address 2</Form.Label>
                <Form.Control
                  type="text"
                  name="address2"
                  placeholder="Apartment, studio, or floor"
                  value={formData.address2}
                  onChange={handleChange}
                  isInvalid={!!errors.address2}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.address2}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={5}>
              <Form.Group controlId="city" className="position-relative">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  isInvalid={!!errors.city}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.city}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={2}>
              <Form.Group controlId="zipCode" className="position-relative">
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  isInvalid={!!errors.zipCode}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.zipCode}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col xs={12}>
              <Form.Check type="checkbox" id="gridCheck" label="Check me out" />
            </Col>

            <Col xs={12}>
              <Button type="submit" variant="primary" className="mt-3">
                Submit form
              </Button>
            </Col>
          </Form>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default TooltipsValidation;
