import React from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";

import { Cardholder } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb";
import CustomSelect from "@/components/forms-elements/select2/MultiSelect";
import Select2Basic from "@/components/forms-elements/select2/Select2Basic.tsx";

export type OptionType = {
  value: string;
  label: string;
  isDisabled?: boolean;
};

const colourOptions: OptionType[] = [
  { value: "orange", label: "Orange" },
  { value: "purple", label: "Purple" },
  { value: "white", label: "White" },
];

const Index: React.FC = () => {
  return (
    <Container fluid>
      <Breadcrumbs
        mainTitle="Select2"
        title="Forms elements"
        path={["Select2"]}
        Icon={Cardholder}
      />
      <Row>
        <Col xs={12}>
          <Card>
            <Card.Header>
              <h5>Select2 With Color Tags</h5>
            </Card.Header>
            <Card.Body>
              <Row className="app-form">
                {[
                  {
                    label: "Select Primary",
                    id: "primary",
                    className: "select_primary",
                  },
                  {
                    label: "Select Success",
                    id: "success",
                    className: "select_success",
                  },
                  {
                    label: "Select Secondary",
                    id: "secondary",
                    className: "select_secondary mt-4",
                  },
                  {
                    label: "Select Danger",
                    id: "danger",
                    className: "select_danger mt-4",
                  },
                  {
                    label: "Select Warning",
                    id: "warning",
                    className: "select_warning mt-4",
                  },
                  {
                    label: "Select Info",
                    id: "info",
                    className: "select_info mt-4",
                  },
                  {
                    label: "Select Dark",
                    id: "dark",
                    className: "select_dark mt-4",
                  },
                ].map(({ label, id, className }) => (
                  <Col xl={6} key={id} className={className}>
                    <CustomSelect
                      label={label}
                      id={id}
                      options={colourOptions}
                      defaultValue={[{ value: "orange", label: "Orange" }]}
                    />
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Select2Basic />

        <Col xs={12}>
          <Card>
            <Card.Header>
              <h5>Default Select</h5>
            </Card.Header>
            <Card.Body>
              <Row className="main-select">
                <Col md={6} xl={4}>
                  <Form className="app-form my-3">
                    <Form.Select
                      defaultValue="1"
                      aria-label="Default select example"
                    >
                      <option>Select your Status</option>
                      <option value="1">Declined Payment</option>
                      <option value="2">Delivery Error</option>
                      <option value="3">Wrong Amount</option>
                    </Form.Select>
                  </Form>
                </Col>
                <Col md={6} xl={4}>
                  <Form className="app-form my-3">
                    <Form.Select
                      defaultValue="1"
                      aria-label="Default select example"
                      className="rounded-pill"
                    >
                      <option>Search for services</option>
                      <option value="1">Information Architecture</option>
                      <option value="2">UI/UX Design</option>
                      <option value="3">Back End Development</option>
                    </Form.Select>
                  </Form>
                </Col>
                <Col md={6} xl={4}>
                  <Form className="app-form my-3">
                    <Form.Select
                      disabled
                      defaultValue="1"
                      aria-label="Disabled select example"
                    >
                      <option>Open this select menu (Disabled)</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12}>
          <Card>
            <Card.Header>
              <h5>Menu Size</h5>
            </Card.Header>
            <Card.Body>
              <Row className="main-select">
                {/* Multiple select */}
                <Col md={6}>
                  <Form className="app-form">
                    <Form.Select
                      multiple
                      defaultValue={["1"]}
                      aria-label="multiple select example"
                    >
                      <option disabled>
                        Open this select menu (multiple select option)
                      </option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form>
                </Col>

                {/* Select with menu size */}
                <Col md={6}>
                  <Form className="app-form">
                    <Form.Select
                      size={3 as any}
                      aria-label="size 3 select example"
                      defaultValue="1"
                    >
                      <option>Open this select menu (select menu size)</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                      <option value="4">Four</option>
                      <option value="5">Five</option>
                    </Form.Select>
                  </Form>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col xs="12">
          <Card>
            <Card.Header>
              <h5>Select Size</h5>
            </Card.Header>
            <Card.Body>
              <Row className="app-form">
                <Col md={6} xl={4} className="mb-3">
                  <Form.Select
                    size="sm"
                    aria-label="Small select example"
                    defaultValue="1"
                  >
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>

                <Col md={6} xl={4} className="mb-3">
                  <Form.Select
                    aria-label="Default select example"
                    defaultValue="1"
                  >
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>

                <Col md={6} xl={4} className="mb-3">
                  <Form.Select
                    size="lg"
                    aria-label="Large select example"
                    defaultValue="1"
                  >
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Index;
