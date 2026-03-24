import React, { useState } from "react";
import { Button, Card, Col, Form, InputGroup } from "react-bootstrap";

interface FormData {
  firstName: string;
  lastName: string;
  username: string;
  city: string;
  state: string;
  zip: string;
  termsAgreed: boolean;
}

const CustomValidation: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "Mark",
    lastName: "Otto",
    username: "",
    city: "",
    state: "",
    zip: "",
    termsAgreed: false,
  });

  const [validated, setValidated] = useState(false);

  type FormControlElement =
    | HTMLInputElement
    | HTMLTextAreaElement
    | HTMLSelectElement;

  const handleChange = (e: React.ChangeEvent<FormControlElement>) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      e.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Col xs={12}>
      <Card>
        <Card.Header className="d-flex flex-column gap-2">
          <h5>Custom Styles</h5>
          <div>
            <p className="text-secondary">
              For custom Bootstrap form validation messages, you’ll need to add
              the <span className="text-danger">novalidate </span>boolean
              attribute to your form. This disables the browser default
              feedback tooltips but still provides access to the form validation
              APIs in JavaScript.
            </p>
          </div>
        </Card.Header>

        <Card.Body>
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            className="row g-3 app-form"
          >
            <Col md={4}>
              <Form.Group controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="valid">
                  Looks good!
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="valid">
                  Looks good!
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group controlId="validationCustomUsername">
                <Form.Label>Username</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text>@</InputGroup.Text>
                  <Form.Control
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please choose a username.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="validationCustom03">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid city.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={3}>
              <Form.Group controlId="validationCustom04">
                <Form.Label>State</Form.Label>
                <Form.Select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choose...</option>
                  <option value="NY">New York</option>
                  <option value="CA">California</option>
                  <option value="TX">Texas</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please select a valid state.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={3}>
              <Form.Group controlId="validationCustom05">
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid zip.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={12}>
              <Form.Group className="d-flex gap-2">
                <Form.Check
                  required
                  type="checkbox"
                  name="termsAgreed"
                  checked={formData.termsAgreed}
                  onChange={handleChange}
                  label="Agree to terms and conditions"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                  id="invalidCheck"
                />
              </Form.Group>
            </Col>

            <Col md={12}>
              <Button type="submit" variant="primary">
                Submit form
              </Button>
            </Col>
          </Form>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CustomValidation;
