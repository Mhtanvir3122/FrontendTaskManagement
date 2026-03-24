import React, { useState } from "react";
import { Button, Card, Col, Form, InputGroup } from "react-bootstrap";

const DefaultsValidation: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  return (
    <Col xs={12}>
      <Card>
        <Card.Header>
          <h5>Browser Defaults</h5>
          <p className="text-secondary">
            Not interested in custom validation feedback messages or writing
            JavaScript to change form behaviors? All good, you can use the
            browser defaults. Try submitting the form below. Depending on your
            browser and OS, you’ll see a slightly different style of feedback.
            While these feedback styles cannot be styled with CSS, you can still
            customize the feedback text through JavaScript.
          </p>
        </Card.Header>

        <Card.Body>
          <Form className="row g-3 app-form">
            <Col md={4}>
              <Form.Group controlId="validationDefault01">
                <Form.Label>First name</Form.Label>
                <Form.Control type="text" name="firstName" required />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group controlId="validationDefault02">
                <Form.Label>Last name</Form.Label>
                <Form.Control type="text" name="lastName" required />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group controlId="validationDefaultUsername">
                <Form.Label>Username</Form.Label>
                <InputGroup>
                  <InputGroup.Text id="inputGroupPrepend2">@</InputGroup.Text>
                  <Form.Control
                    type="text"
                    name="username"
                    aria-describedby="inputGroupPrepend2"
                    required
                  />
                </InputGroup>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="validationDefault03">
                <Form.Label>City</Form.Label>
                <Form.Control type="text" name="city" required />
              </Form.Group>
            </Col>

            <Col md={3}>
              <Form.Group controlId="validationDefault04">
                <Form.Label>State</Form.Label>
                <Form.Select name="state" defaultValue="" required>
                  <option value="" disabled>
                    Choose...
                  </option>
                  <option>New York</option>
                  <option>California</option>
                  <option>Texas</option>
                </Form.Select>
              </Form.Group>
            </Col>

            <Col md={3}>
              <Form.Group controlId="validationDefault05">
                <Form.Label>Zip</Form.Label>
                <Form.Control type="text" name="zip" required />
              </Form.Group>
            </Col>

            <Col md={12}>
              <Form.Group controlId="invalidCheck2" className="form-check">
                <Form.Check
                  type="checkbox"
                  name="termsAgreed"
                  label="Agree to terms and conditions"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  required
                />
              </Form.Group>
            </Col>

            <Col md={12} className="text-end">
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

export default DefaultsValidation;
