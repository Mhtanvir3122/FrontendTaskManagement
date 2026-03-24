import React, { useState } from "react";
import {
  Card,
  Row,
  Col,
  Nav,
  NavItem,
  Tab,
  Form,
  InputGroup,
  Button, Accordion,
} from "react-bootstrap";
import {
  UserCircle,
  Disc,
  UserPlus,
  CurrencyDollar, CreditCard,
} from "phosphor-react";

interface Step {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  { id: "tab-1", title: "About", subtitle: "Step 1", icon: <UserCircle size={20} weight="bold" /> },
  { id: "tab-2", title: "Account", subtitle: "Step 2", icon: <Disc size={20} weight="bold" /> },
  { id: "tab-3", title: "Ownership", subtitle: "Step 3", icon: <UserPlus size={20} weight="bold" /> },
  { id: "tab-4", title: "Financing", subtitle: "Step 4", icon: <CurrencyDollar size={20} weight="bold" /> },
  { id: "tab-5", title: "Finish", subtitle: "Step 5", icon: <Disc size={20} weight="bold" /> },
];

interface FormField {
  label: string;
  id: string;
  name: string;
  type: string;
  placeholder?: string;
  isGrouped?: boolean;
  rows?: number;
  required?: boolean;
}

const formFields: FormField[] = [
  { label: "First Name", id: "firstName", name: "firstName", type: "text" },
  { label: "Last Name", id: "lastName", name: "lastName", type: "text" },
  { label: "Date of Birth", id: "dob", name: "dob", type: "date" },
  {
    label: "Email Address",
    id: "email",
    name: "email",
    type: "email",
    placeholder: "Enter Your Email",
    required: true,
  },
  {
    label: "Contact",
    id: "contact",
    name: "contact",
    type: "text",
    placeholder: "Enter Your Contact",
    isGrouped: true,
  },
  {
    label: "Address",
    id: "address",
    name: "address",
    type: "textarea",
    placeholder: "Enter Your Address",
    rows: 3,
  },
];

const accountFormFields: FormField[] = [
  {
    label: "Email",
    id: "email",
    name: "email",
    type: "email",
    placeholder: "Enter your email",
    required: true,
  },
  {
    label: "Password*",
    id: "password",
    name: "password",
    type: "password",
    placeholder: "Enter your password",
    required: true,
  },
  {
    label: "Confirm Password*",
    id: "confirmPassword",
    name: "confirmPassword",
    type: "password",
    placeholder: "Re-enter your password",
    required: true,
  },
];

const accountOptions = [
  { label: "I already have an account.", value: "existing" },
  { label: "I'm a newbie", value: "newbie" },
];

const ownershipRoles = [
  {
    value: "manager",
    label: "Manager",
    image: "/images/form/15.png",
  },
  {
    value: "employee",
    label: "Employee",
    image: "/images/form/13.png",
  },
  {
    value: "director",
    label: "Director",
    image: "/images/form/14.png",
  },
];
const financingOptions = [
  { value: "marketing", label: "Marketing", img: "/images/form/16.png", desc: "Identifying a company’s target market." },
  { value: "finance", label: "Finance", img: "/images/form/17.png", desc: "Researching the business’s target market and customer base." },
  { value: "it-support", label: "IT Support", img: "/images/form/18.png", desc: "Creating digital and/or print content to generate brand." },
];

const accordionRadios = [
  {
    title: "Buy Inventory",
    options: [
      { value: "yes-inventory", label: "YES", img: "/images/form/yes.png" },
      { value: "no-inventory", label: "NO", img: "/images/form/no.png" },
    ],
  },
  {
    title: "Do you have existing business financing?",
    options: [
      { value: "yes-financing", label: "YES", img: "/images/form/yes.png" },
      { value: "no-financing", label: "NO", img: "/images/form/no.png" },
    ],
  },
];
const Financial = () => {
  const [activeTab, setActiveTab] = useState("tab-1");
  const [accountType, setAccountType] = useState("existing");
  const [selectedRole, setSelectedRole] = useState("manager");
  const [selectedFinancingRole, setSelectedFinancingRole] = useState("marketing");

  const handleAccountTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccountType(e.target.value);
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRole(e.target.value);
  };

  return (
    <Card>
      <Card.Header className="card-header">
        <h5>Financial Wizard</h5>
      </Card.Header>
      <Card.Body>
        <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k || "tab-1")}>
          <Row>
            <Col xs={12}>
              <Nav className="tabs-step">
                {steps.map((step) => (
                  <NavItem key={step.id} className="tab d-flex">
                    <div
                      className={`tab d-flex ${activeTab === step.id ? "current" : ""}`}
                      role="button"
                      onClick={() => setActiveTab(step.id)}
                    >
                      <div className="step">{step.icon}</div>
                      <div className="px-2">
                        <h6 className="mb-0">{step.title}</h6>
                        <span className="text-secondary">{step.subtitle}</span>
                      </div>
                    </div>
                  </NavItem>
                ))}
              </Nav>
            </Col>
          </Row>

          <Row className="my-3">
            <Col xs={12}>
              <Tab.Content className=" tab-contents-list">
                <Tab.Pane eventKey="tab-1">
                  <Form className="app-form">
                    <Row>
                      {formFields.map((field) => {
                        const colProps =
                          field.id === "address"
                            ? { xs: 12 }
                            : ["dob", "email", "contact"].includes(field.id)
                              ? { md: 6, xl: 4 }
                              : { md: 6 };

                        return (
                          <Col {...colProps} key={field.id}>
                            <Form.Group className="mb-3">
                              <Form.Label htmlFor={field.id}>{field.label}</Form.Label>
                              {field.isGrouped ? (
                                <InputGroup>
                                  <InputGroup.Text>+91</InputGroup.Text>
                                  <Form.Control
                                    type="text"
                                    id={field.id}
                                    name={field.name}
                                    placeholder={field.placeholder}
                                    required
                                  />
                                </InputGroup>
                              ) : field.type === "textarea" ? (
                                <Form.Control
                                  as="textarea"
                                  id={field.id}
                                  name={field.name}
                                  rows={field.rows}
                                  placeholder={field.placeholder}
                                />
                              ) : (
                                <Form.Control
                                  type={field.type}
                                  id={field.id}
                                  name={field.name}
                                  placeholder={field.placeholder}
                                  required={field.required}
                                />
                              )}
                            </Form.Group>
                          </Col>
                        );
                      })}
                    </Row>
                  </Form>
                </Tab.Pane>

                <Tab.Pane eventKey="tab-2">
                  <Form className="app-form">
                    <Row>
                      <Col xs={12}>
                        <h6 className="tab-heading mb-3">Do you have an account?</h6>
                      </Col>
                      {accountOptions.map((option) => (
                        <Col md={6} xl={4} key={option.value}>
                          <Card className="shadow-none">
                            <Card.Body className="select-content">
                              <Form.Check
                                type="radio"
                                id={option.value}
                                name="accountType"
                                value={option.value}
                                label={option.label}
                                checked={accountType === option.value}
                                onChange={handleAccountTypeChange}
                              />
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}

                      {accountFormFields.map((field) => (
                        <Col
                          key={field.id}
                          xs={12}
                          md={field.id === "email" ? 12 : 6}
                        >
                          <Form.Group className="mb-3" controlId={field.id}>
                            <Form.Label>{field.label}</Form.Label>
                            <Form.Control
                              type={field.type}
                              name={field.name}
                              placeholder={field.placeholder}
                              required={field.required}
                            />
                          </Form.Group>
                        </Col>
                      ))}

                      <Col xs={12}>
                        <div className="text-end">
                          <Button type="submit" variant="primary">
                            Sign in
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </Form>
                </Tab.Pane>

                <Tab.Pane eventKey="tab-3">
                  <Form className="app-form">
                    <Row>
                      {ownershipRoles.map((role) => (
                        <Col lg={4} key={role.value}>
                          <Card className="shadow-none">
                            <Card.Body className="select-content">
                              <div className="position-relative">
                                <Form.Check
                                  type="radio"
                                  name="ownershipRole"
                                  id={role.value}
                                  value={role.value}
                                  checked={selectedRole === role.value}
                                  onChange={handleRoleChange}
                                  label={
                                    <span className="d-flex align-items-center">
                                      <img src={role.image} alt={role.label} />
                                      <span className="ms-2 fs-6 tab-heading">{role.label}</span>
                                    </span>
                                  }
                                />
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}

                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="username">
                          <Form.Label>Username</Form.Label>
                          <Form.Control type="text" name="username" required />
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="password">
                          <Form.Label>Password*</Form.Label>
                          <Form.Control type="password" name="password" required />
                        </Form.Group>
                      </Col>

                      <Col xs={12}>
                        <div className="text-end">
                          <Button variant="primary" type="submit">
                            Submit
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </Form>
                </Tab.Pane>

                <Tab.Pane eventKey="tab-4">
                  <Form className="app-form">
                    <Row className="custome-radio-list">
                      {financingOptions.map((opt) => (
                        <Col md={6} xl={4} key={opt.value}>
                          <Card className="shadow-none">
                            <Card.Body className="address-content">
                              <Form.Check
                                type="radio"
                                name="financingRole"
                                id={opt.value}
                                value={opt.value}
                                checked={selectedFinancingRole === opt.value}
                                onChange={(e) => setSelectedFinancingRole(e.target.value)}
                                label={<div className="text-center"><img src={opt.img} alt={opt.label} /><h6 className="tab-heading">{opt.label}</h6><p className="text-muted">{opt.desc}</p></div>}
                              />
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>

                    <Accordion flush className="mt-4">
                      {accordionRadios.map((section, idx) => (
                        <Accordion.Item eventKey={String(idx)} key={section.title}>
                          <Accordion.Header>{section.title}</Accordion.Header>
                          <Accordion.Body>
                            <Row className="custome-radio-list">
                              {section.options.map((opt) => (
                                <Col md={6} xl={4} key={opt.value}>
                                  <Card className="shadow-none">
                                    <Card.Body className="address-content text-center">
                                      <Form.Check
                                        type="radio"
                                        name={`radio-${section.title}`}
                                        id={opt.value}
                                        value={opt.value}
                                        label={<><img src={opt.img} alt={opt.label} /><p>{opt.label}</p><p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></>}
                                      />
                                    </Card.Body>
                                  </Card>
                                </Col>
                              ))}
                            </Row>
                          </Accordion.Body>
                        </Accordion.Item>
                      ))}

                      <Accordion.Item eventKey="balance-form">
                        <Accordion.Header>Existing Balance</Accordion.Header>
                        <Accordion.Body>
                          <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={2}>Business</Form.Label>
                            <Col sm={10}><Form.Control type="text" /></Col>
                          </Form.Group>
                          <Form.Group as={Row} className="mb-3">
                            <Form.Label column sm={2}>Current Balance</Form.Label>
                            <Col sm={10}>
                              <InputGroup>
                                <InputGroup.Text><CreditCard size={20} weight="fill" className="text-info" /></InputGroup.Text>
                                <Form.Control type="text" />
                              </InputGroup>
                            </Col>
                          </Form.Group>
                          <div className="text-end">
                            <Button type="submit" variant="primary">Submit</Button>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Form>
                </Tab.Pane>

                  <Tab.Pane eventKey="tab-5">
                    <div className="completed-contents">
                      <div className="completbox text-center">
                        <img src="/images/form/done.png" alt="image" />
                        <h6 className="mb-0">Thank You !</h6>
                        <p> your booking is completed</p>
                      </div>
                    </div>
                  </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Card.Body>
    </Card>
  );
};

export default Financial;