import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import { Cardholder } from "phosphor-react";
import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const BaseInputPage: React.FC = () => {

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    city: "0",
    phone: "",
    address: "",
    readonly: "Readonly content",
    checkboxDefault: false,
  });


  const [roundedFormData, setRoundedFormData] = useState({
    roundedUsername: "",
    roundedPassword: "",
    roundedCity: "0",
    roundedPhone: "",
    roundedTextarea: "",
    roundedReadonly: "Readonly rounded content",
    roundedCheck: false,
  });


  const [sizingData, setSizingData] = useState({
    largeInput: "",
    defaultInput: "",
    smallInput: "",
  });


  const [htmlInputData, setHtmlInputData] = useState({
    defaultInput: "",
    emailInput: "",
    passwordInput: "",
    urlInput: "",
    telInput: "",
    numberInput: "",
    maxLengthInput: "",
    dateTimeInput: "",
    dateInput: "",
    timeInput: "",
    monthInput: "",
    weekInput: "",
    colorInput: "#4fc9da",
    fileInput: null,
    searchInput: "",
    textareaInput: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };


  const handleRoundedInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setRoundedFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSizingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSizingData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleHtmlInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setHtmlInputData(prev => ({
      ...prev,
      [name]: type === 'file' ? (e.target as HTMLInputElement).files?.[0] : value
    }));
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    console.log("Rounded Form Data:", roundedFormData);
    console.log("Sizing Data:", sizingData);
    console.log("HTML Input Data:", htmlInputData);

  };

  return (
    <Container fluid>
      <Breadcrumbs
        mainTitle="Base Input"
        title="Form Elements"
        path={["Base Input"]}
        Icon={Cardholder}
      />

      <Row>
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header>
              <h5>Basic Form Controls</h5>
            </Card.Header>
            <Card.Body>
              <Form className="app-form" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="username">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    placeholder="Enter Your Username"
                    value={formData.username}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter Your Password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="citySelect">
                  <Form.Label>City</Form.Label>
                  <Form.Select
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                  >
                    <option value="0">Select Your City</option>
                    <option value="1">UK</option>
                    <option value="2">US</option>
                    <option value="3">Italy</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="phone">
                  <Form.Label>Content</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>+91</InputGroup.Text>
                    <Form.Control
                      name="phone"
                      placeholder="xxx-xxxxx-xxx"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3" controlId="address">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="address"
                    placeholder="Enter Your Address"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="readonly">
                  <Form.Control
                    type="text"
                    name="readonly"
                    placeholder="Only Readable input ..."
                    readOnly
                    value={formData.readonly}
                  />
                </Form.Group>

                <Form.Group
                  className="form-check mb-3"
                  controlId="checkboxDefault"
                >
                  <Form.Check
                    type="checkbox"
                    name="checkboxDefault"
                    label="Default checkbox"
                    checked={formData.checkboxDefault}
                    onChange={handleInputChange}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="mb-4">
            <Card.Header>
              <h5>Rounded Form Control</h5>
            </Card.Header>
            <Card.Body>
              <Form className="app-form" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="roundedUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    name="roundedUsername"
                    placeholder="Enter Your Username"
                    className="rounded-pill"
                    value={roundedFormData.roundedUsername}
                    onChange={handleRoundedInputChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="roundedPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="roundedPassword"
                    placeholder="Enter Your Password"
                    className="rounded-pill"
                    value={roundedFormData.roundedPassword}
                    onChange={handleRoundedInputChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="roundedCity">
                  <Form.Label>City</Form.Label>
                  <Form.Select
                    name="roundedCity"
                    className="rounded-pill"
                    value={roundedFormData.roundedCity}
                    onChange={handleRoundedInputChange}
                  >
                    <option value="0">Select Your City</option>
                    <option value="1">UK</option>
                    <option value="2">US</option>
                    <option value="3">Italy</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="roundedPhone">
                  <Form.Label>Content</Form.Label>
                  <InputGroup className="rounded-pill overflow-hidden">
                    <InputGroup.Text>+91</InputGroup.Text>
                    <Form.Control
                      name="roundedPhone"
                      placeholder="xxx-xxxxx-xxx"
                      value={roundedFormData.roundedPhone}
                      onChange={handleRoundedInputChange}
                    />
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3" controlId="roundedTextarea">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="roundedTextarea"
                    placeholder="Enter Your Address"
                    className="rounded"
                    value={roundedFormData.roundedTextarea}
                    onChange={handleRoundedInputChange}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="roundedReadonly">
                  <Form.Control
                    type="text"
                    name="roundedReadonly"
                    placeholder="Only Readable input ..."
                    readOnly
                    className="rounded"
                    value={roundedFormData.roundedReadonly}
                  />
                </Form.Group>

                <Form.Group className="form-check mb-3" controlId="roundedCheck">
                  <Form.Check
                    type="checkbox"
                    name="roundedCheck"
                    label="Default checkbox"
                    className="rounded"
                    checked={roundedFormData.roundedCheck}
                    onChange={handleRoundedInputChange}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">Submit</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12}>
          <Card className="mb-4">
            <Card.Header>
              <h5>Input Sizing</h5>
            </Card.Header>
            <Card.Body>
              <Form className="app-form" onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Control
                    size="lg"
                    name="largeInput"
                    placeholder=".form-control-lg"
                    value={sizingData.largeInput}
                    onChange={handleSizingChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    name="defaultInput"
                    placeholder="Default input"
                    value={sizingData.defaultInput}
                    onChange={handleSizingChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    size="sm"
                    name="smallInput"
                    placeholder=".form-control-sm"
                    value={sizingData.smallInput}
                    onChange={handleSizingChange}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12}>
          <Card>
            <Card.Header>
              <h5>Basic HTML Input Control</h5>
            </Card.Header>
            <Card.Body>
              <Form className="app-form" onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="defaultInput">
                      <Form.Label>Default Input</Form.Label>
                      <Form.Control
                        name="defaultInput"
                        placeholder="Default Input"
                        value={htmlInputData.defaultInput}
                        onChange={handleHtmlInputChange}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="staticText">
                      <Form.Label>Static Text</Form.Label>
                      <div className="form-control-plaintext">
                        Hello !... This is static text
                      </div>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="emailInput">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="emailInput"
                        placeholder="Email Input"
                        value={htmlInputData.emailInput}
                        onChange={handleHtmlInputChange}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="passwordInput">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="passwordInput"
                        placeholder="Password Input"
                        value={htmlInputData.passwordInput}
                        onChange={handleHtmlInputChange}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="urlInput">
                      <Form.Label>URL</Form.Label>
                      <Form.Control
                        type="url"
                        name="urlInput"
                        placeholder="URL Input"
                        value={htmlInputData.urlInput}
                        onChange={handleHtmlInputChange}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="telInput">
                      <Form.Label>Telephone</Form.Label>
                      <Form.Control
                        type="tel"
                        name="telInput"
                        placeholder="+91 (999)-999-999"
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        value={htmlInputData.telInput}
                        onChange={handleHtmlInputChange}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="numberInput">
                      <Form.Label>Number</Form.Label>
                      <Form.Control
                        type="number"
                        name="numberInput"
                        placeholder="Enter Number"
                        value={htmlInputData.numberInput}
                        onChange={handleHtmlInputChange}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="maxLengthInput">
                      <Form.Label>Maximum Length</Form.Label>
                      <Form.Control
                        name="maxLengthInput"
                        maxLength={6}
                        placeholder="Enter Your Zip code"
                        value={htmlInputData.maxLengthInput}
                        onChange={handleHtmlInputChange}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={4}>
                    <Form.Group className="mb-3" controlId="dateTimeInput">
                      <Form.Label>Date & Time</Form.Label>
                      <Form.Control
                        type="datetime-local"
                        name="dateTimeInput"
                        value={htmlInputData.dateTimeInput}
                        onChange={handleHtmlInputChange}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={4}>
                    <Form.Group className="mb-3" controlId="dateInput">
                      <Form.Label>Date</Form.Label>
                      <Form.Control
                        type="date"
                        name="dateInput"
                        value={htmlInputData.dateInput}
                        onChange={handleHtmlInputChange}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={4}>
                    <Form.Group className="mb-3" controlId="timeInput">
                      <Form.Label>Time</Form.Label>
                      <Form.Control
                        type="time"
                        name="timeInput"
                        value={htmlInputData.timeInput}
                        onChange={handleHtmlInputChange}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={5}>
                    <Form.Group className="mb-3" controlId="monthInput">
                      <Form.Label>Month</Form.Label>
                      <Form.Control
                        type="month"
                        name="monthInput"
                        value={htmlInputData.monthInput}
                        onChange={handleHtmlInputChange}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={5}>
                    <Form.Group className="mb-3" controlId="weekInput">
                      <Form.Label>Week</Form.Label>
                      <Form.Control
                        type="week"
                        name="weekInput"
                        value={htmlInputData.weekInput}
                        onChange={handleHtmlInputChange}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={2}>
                    <Form.Group className="mb-3" controlId="colorInput">
                      <Form.Label>Color</Form.Label>
                      <Form.Control
                        type="color"
                        name="colorInput"
                        value={htmlInputData.colorInput}
                        onChange={handleHtmlInputChange}
                      />
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Form.Group className="mb-3" controlId="fileInput">
                      <Form.Label>File</Form.Label>
                      <Form.Control
                        type="file"
                        name="fileInput"
                        onChange={handleHtmlInputChange}
                      />
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Form.Group className="mb-3" controlId="searchInput">
                      <Form.Label>Search</Form.Label>
                      <Form.Control
                        type="search"
                        name="searchInput"
                        placeholder="Search..."
                        value={htmlInputData.searchInput}
                        onChange={handleHtmlInputChange}
                      />
                    </Form.Group>
                  </Col>

                  <Col xs={12}>
                    <Form.Group className="mb-3" controlId="textareaInput">
                      <Form.Label>Textarea</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        name="textareaInput"
                        placeholder="Default textarea"
                        value={htmlInputData.textareaInput}
                        onChange={handleHtmlInputChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <div className="text-end">
                  <Button variant="primary" type="submit">Submit</Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BaseInputPage;