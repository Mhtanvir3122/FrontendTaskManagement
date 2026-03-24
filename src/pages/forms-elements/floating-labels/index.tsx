import React, { useState } from "react";
import {
  Card,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";

import { Cardholder } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const FloatingLabels = () => {
  const [form, setForm] = useState({
    name: "",
    password: "",
    email: "",
    comment: "",
    message: "",
    username: "",
    select: "2",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Container fluid>
      <Breadcrumbs
        mainTitle="Floating Labels"
        title="Forms elements"
        path={["Floating labels"]}
        Icon={Cardholder}
      />
      <Row>
        {/* Custom Floating Labels */}
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header>
              <h5>Custom Floating Labels</h5>
            </Card.Header>
            <Card.Body>
              <Form className="app-form">
                <FloatingLabel
                  controlId="floatingName"
                  label="Name"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Name"
                    required
                  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Password"
                    required
                  />
                </FloatingLabel>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Basic Floating Labels */}
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header>
              <h5>Basic Floating Label</h5>
            </Card.Header>
            <Card.Body>
              <Form className="app-form">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email address"
                  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword2" label="Password">
                  <Form.Control
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Password"
                  />
                </FloatingLabel>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Textarea Floating Labels */}
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header>
              <h5>Textareas Floating Labels</h5>
            </Card.Header>
            <Card.Body>
              <Form className="app-form">
                <FloatingLabel
                  controlId="floatingComment"
                  label="Comments"
                  className="mb-3"
                >
                  <Form.Control
                    as="textarea"
                    name="comment"
                    value={form.comment}
                    onChange={handleChange}
                    placeholder="Type a comment"
                    className="h-100px"
                  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingMessage" label="Message">
                  <Form.Control
                    as="textarea"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Type a message"
                    className="h-100px"
                  />
                </FloatingLabel>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Input Groups Floating Labels */}
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header>
              <h5>Input Groups Floating Labels</h5>
            </Card.Header>
            <Card.Body>
              <Form className="app-form">
                <div className="input-group mb-3">
                  <span className="input-group-text">@</span>
                  <FloatingLabel
                    controlId="floatingInputGroup1"
                    label="Username"
                  >
                    <Form.Control
                      type="text"
                      name="username"
                      value={form.username}
                      onChange={handleChange}
                      placeholder="Username"
                    />
                  </FloatingLabel>
                </div>
                <div className="input-group">
                  <span className="input-group-text">@</span>
                  <FloatingLabel
                    controlId="floatingInputGroup2"
                    label="Email Address"
                  >
                    <Form.Control
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                    />
                  </FloatingLabel>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Readonly Floating Labels */}
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header>
              <h5>Readonly Floating Labels</h5>
            </Card.Header>
            <Card.Body>
              <Form className="app-form">
                <FloatingLabel
                  controlId="floatingReadOnlyEmpty"
                  label="Empty input"
                  className="mb-3"
                >
                  <Form.Control
                    type="email"
                    readOnly
                    plaintext
                    placeholder="name@example.com"
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingReadOnlyValue"
                  label="Input with value"
                >
                  <Form.Control
                    type="email"
                    readOnly
                    plaintext
                    defaultValue="name@example.com"
                    placeholder="name@example.com"
                  />
                </FloatingLabel>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Floating Input Value */}
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header>
              <h5>Floating Input Value</h5>
            </Card.Header>
            <Card.Body>
              <Form className="app-form">
                <FloatingLabel
                  controlId="floatingInputVal"
                  label="Input with value"
                  className="mb-3"
                >
                  <Form.Control
                    type="email"
                    defaultValue="test@example.com"
                    placeholder="test@example.com"
                  />
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingInvalid"
                  label="Invalid input"
                >
                  <Form.Control
                    type="email"
                    defaultValue="test@example.com"
                    isInvalid
                    placeholder="Invalid"
                  />
                </FloatingLabel>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Select Floating Labels */}
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header>
              <h5>Select Floating Labels</h5>
            </Card.Header>
            <Card.Body>
              <Form className="app-form">
                <FloatingLabel
                  controlId="floatingSelect"
                  label="Works with selects"
                  className="mb-3"
                >
                  <Form.Select
                    name="select"
                    value={form.select}
                    onChange={handleChange}
                  >
                    <option value="">Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </FloatingLabel>
                <FloatingLabel
                  controlId="floatingSelectDisabled"
                  label="Disabled select"
                >
                  <Form.Select disabled defaultValue="2">
                    <option value="">Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </FloatingLabel>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Floating labels Layout */}
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header>
              <h5>Floating labels Layout</h5>
            </Card.Header>
            <Card.Body>
              <Form className="app-form">
                <Row className="g-2">
                  <Col md={6}>
                    <FloatingLabel
                      controlId="floatingGridInput"
                      label="Email address"
                    >
                      <Form.Control
                        type="email"
                        defaultValue="mdo@example.com"
                        placeholder="Email address"
                      />
                    </FloatingLabel>
                  </Col>
                  <Col md={6}>
                    <FloatingLabel
                      controlId="floatingGridSelect"
                      label="Works with selects"
                    >
                      <Form.Select defaultValue="2">
                        <option>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </FloatingLabel>
                  </Col>
                  <Col xs={12}>
                    <FloatingLabel
                      controlId="floatingPasswordGrid"
                      label="Password"
                    >
                      <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                  </Col>
                </Row>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default FloatingLabels;
