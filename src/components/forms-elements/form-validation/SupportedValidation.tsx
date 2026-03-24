import React, { useState } from "react";
import { Button, Card, Col, Form } from "react-bootstrap";

interface FormData {
  textarea: string;
  checkbox: boolean;
  radio: boolean;
  select: string;
  file: File | null;
}

const SupportedValidation: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    textarea: "",
    checkbox: false,
    radio: false,
    select: "",
    file: null,
  });

  // Allow change events from input, textarea, or select
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, type, value, checked, files } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" || type === "radio"
          ? checked
          : type === "file"
            ? files && files[0]
            : value,
    }));
  };

  return (
    <Col xs={12}>
      <Card>
        <Card.Header>
          <h5>Supported Elements</h5>
          <p className="text-secondary">
            Use the browser’s built‑in validation UI. Just add{" "}
            <code>was-validated</code> to your form, and supported controls (
            <code>&lt;textarea&gt;</code>, <code>&lt;select&gt;</code>,{" "}
            <code>&lt;input&gt;</code> types) will display default feedback.
          </p>
        </Card.Header>

        <Card.Body>
          <Form className="was-validated" noValidate>
            {/* Textarea */}
            <Form.Group className="mb-3" controlId="validationTextarea">
              <Form.Label>Textarea</Form.Label>
              <Form.Control
                as="textarea"
                name="textarea"
                value={formData.textarea}
                onChange={handleChange}
                isInvalid={!formData.textarea}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter a message in the textarea.
              </Form.Control.Feedback>
            </Form.Group>

            {/* Checkbox */}
            <Form.Group
              className="form-check mb-3"
              controlId="validationFormCheck1"
            >
              <Form.Check
                type="checkbox"
                label="Check this checkbox"
                name="checkbox"
                checked={formData.checkbox}
                onChange={handleChange}
                isInvalid={!formData.checkbox}
                feedback="Example invalid feedback text"
                feedbackType="invalid"
                required
              />
            </Form.Group>

            {/* Radio */}
            <Form.Group
              className="form-check mb-3"
              controlId="validationFormCheck3"
            >
              <Form.Check
                type="radio"
                label="Or toggle this other radio"
                name="radio"
                checked={formData.radio}
                onChange={handleChange}
                isInvalid={!formData.radio}
                feedback="More example invalid feedback text"
                feedbackType="invalid"
                required
              />
            </Form.Group>

            {/* Select */}
            <Form.Group className="mb-3" controlId="validationSelect">
              <Form.Select
                name="select"
                value={formData.select}
                onChange={handleChange}
                isInvalid={!formData.select}
                required
              >
                <option value="">Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid">
                Example invalid select feedback
              </Form.Control.Feedback>
            </Form.Group>

            {/* File */}
            <Form.Group className="mb-3" controlId="validationFile">
              <Form.Control
                type="file"
                name="file"
                onChange={handleChange}
                isInvalid={!formData.file}
                required
              />
              <Form.Control.Feedback type="invalid">
                Example invalid form file feedback
              </Form.Control.Feedback>
            </Form.Group>

            <div className="text-end">
              <Button variant="primary" type="submit">
                Submit form
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SupportedValidation;
