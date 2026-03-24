import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { Check, X } from "phosphor-react";

const ClientRegistration: React.FC = () => {
  const [hasApplied1, setHasApplied1] = useState("");
  const [hasApplied2, setHasApplied2] = useState("");

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "radiocheck1") setHasApplied1(value);
    if (name === "radiocheck2") setHasApplied2(value);
  };

  const formFields = [
    { label: "Company Name", type: "text", id: "companyName", placeholder: "Enter Company Name", col: 12 },
    { label: "First Name", type: "text", id: "firstName", placeholder: "Enter Your First Name", col: 6 },
    { label: "Last Name", type: "text", id: "lastName", placeholder: "Enter Your Last Name", col: 6 },
    { label: "Address", type: "textarea", id: "address", placeholder: "Enter Address", rows: 3, col: 6 },
    { label: "Company Address", type: "textarea", id: "companyAddress", placeholder: "Enter Company Address", rows: 3, col: 6 },
    { label: "City", type: "text", id: "city", placeholder: "Enter Your City", col: 4 },
    { label: "State", type: "text", id: "state", placeholder: "Enter Your State", col: 4 },
    { label: "Zip", type: "text", id: "zip", placeholder: "xxxxx", maxLength: 5, col: 4 },
    { label: "Email Address", type: "email", id: "email", placeholder: "Enter Your Email", col: 6 },
    { label: "LinkedIn/Online Profile URL", type: "url", id: "profileUrl", placeholder: "Enter Your URL", col: 6 },
    { label: "Specific Registration Requests/Details", type: "textarea", id: "registrationRequests", placeholder: "Enter Your Message", rows: 3, col: 12 },
  ];

  return (
    <Card>
      <Card.Header>
        <h5>Client Registration</h5>
      </Card.Header>
      <Card.Body>
        <Form className="app-form">
          <Row>
            {formFields.map((field, index) => (
              <Col key={index} md={field.col}>
                <Form.Group className="mb-3" controlId={field.id}>
                  <Form.Label>{field.label}</Form.Label>
                  {field.type === "textarea" ? (
                    <Form.Control as="textarea" placeholder={field.placeholder} rows={field.rows} />
                  ) : (
                    <Form.Control
                      type={field.type}
                      placeholder={field.placeholder}
                      maxLength={field.maxLength}
                      required={["email", "firstName", "lastName", "companyName"].includes(field.id)}
                    />
                  )}
                </Form.Group>
              </Col>
            ))}

            {/* Radio Group 1 */}
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Have you ever applied to our facility before?</Form.Label>
                <div className="d-flex gap-2">
                  <label
                    className={`d-flex align-items-center border rounded-2 px-3 py-2 ${
                      hasApplied1 === "yes" ? "border-primary text-primary fw-semibold" : "border-light text-secondary"
                    }`}
                  >
                    <input
                      type="radio"
                      name="radiocheck1"
                      value="yes"
                      checked={hasApplied1 === "yes"}
                      onChange={handleRadioChange}
                      className="d-none"
                    />
                    <Check size={16} className="me-1" weight="bold" />
                    Yes
                  </label>

                  <label
                    className={`d-flex align-items-center border rounded-2 px-3 py-2 ${
                      hasApplied1 === "no" ? "border-primary text-primary fw-semibold" : "border-light text-secondary"
                    }`}
                  >
                    <input
                      type="radio"
                      name="radiocheck1"
                      value="no"
                      checked={hasApplied1 === "no"}
                      onChange={handleRadioChange}
                      className="d-none"
                    />
                    <X size={16} className="me-1" weight="bold" />
                    No
                  </label>
                </div>
              </Form.Group>
            </Col>

            {/* Radio Group 2 */}
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Would you like to participate in client surveys?</Form.Label>
                <div className="d-flex gap-2">
                  <label
                    className={`d-flex align-items-center border rounded-2 px-3 py-2 ${
                      hasApplied2 === "yes" ? "border-primary text-primary fw-semibold" : "border-light text-secondary"
                    }`}
                  >
                    <input
                      type="radio"
                      name="radiocheck2"
                      value="yes"
                      checked={hasApplied2 === "yes"}
                      onChange={handleRadioChange}
                      className="d-none"
                    />
                    <Check size={16} className="me-1" weight="bold" />
                    Yes
                  </label>

                  <label
                    className={`d-flex align-items-center border rounded-2 px-3 py-2 ${
                      hasApplied2 === "no" ? "border-primary text-primary fw-semibold" : "border-light text-secondary"
                    }`}
                  >
                    <input
                      type="radio"
                      name="radiocheck2"
                      value="no"
                      checked={hasApplied2 === "no"}
                      onChange={handleRadioChange}
                      className="d-none"
                    />
                    <X size={16} className="me-1" weight="bold" />
                    No
                  </label>
                </div>
              </Form.Group>
            </Col>

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

export default ClientRegistration;
