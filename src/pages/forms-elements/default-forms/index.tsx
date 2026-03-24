import React from "react";
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
import FormWithGrid from "@/components/forms-elements/default-forms/FormWithGrid.tsx";
import FormWithGutter from "@/components/forms-elements/default-forms/FormWithGutter.tsx";
import HorizontalForm from "@/components/forms-elements/default-forms/HorizontalForm.tsx";
import VerticalForm from "@/components/forms-elements/default-forms/VerticalForm.tsx";

const DefaultForms: React.FC = () => {
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Default Forms"
          title="Forms elements"
          path={["Default forms"]}
          Icon={Cardholder}
        />
        <Row>
          <VerticalForm />

          <HorizontalForm />

          <FormWithGrid />

          <FormWithGutter />

          <Col xs={12}>
            <Card>
              <Card.Header>
                <h5>Inline Forms</h5>
              </Card.Header>
              <Card.Body>
                <Form className="app-form inline-form">
                  <Row className="row-cols-lg-auto g-2 align-items-center">
                    <Col xs="12">
                      <Form.Label htmlFor="username" visuallyHidden>
                        Username
                      </Form.Label>
                      <InputGroup>
                        <InputGroup.Text>@</InputGroup.Text>
                        <Form.Control
                          type="text"
                          id="username"
                          placeholder="Username"
                        />
                      </InputGroup>
                    </Col>

                    <Col xs="12" className="form-preference-width">
                      <Form.Label htmlFor="preference" visuallyHidden>
                        Preference
                      </Form.Label>
                      <Form.Select id="preference" defaultValue="1">
                        <option>Choose...</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </Form.Select>
                    </Col>

                    <Col
                      xs="12"
                      className="form-check-width d-flex align-items-center"
                    >
                      <Form.Check
                        type="checkbox"
                        id="formCheck9"
                        label="Remember me"
                        className="mb-0"
                      />
                    </Col>

                    <Col xs="12" className="text-end">
                      <Button type="submit" variant="primary">
                        Submit
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DefaultForms;
