import {
  Button,
  Col,
  Form,
  FormCheck,
  FormControl,
  FormGroup,
  FormLabel,
  InputGroup,
  Row,
} from "react-bootstrap";

import { PhoneCall } from "phosphor-react";

const StepData1 = () => {
  return (
    <Form className="app-form">
      <Row>
        <Col md={6}>
          <FormGroup className="mb-3">
            <FormLabel>First Name</FormLabel>
            <FormControl type="text" name="firstName" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup className="mb-3">
            <FormLabel>Last Name</FormLabel>
            <FormControl type="text" name="lastName" />
          </FormGroup>
        </Col>
        <Col xs={12}>
          <FormGroup className="mb-3">
            <FormLabel>Email address</FormLabel>
            <FormControl type="email" name="email" />
            <Form.Text muted>
              We'll never share your email with anyone else.
            </Form.Text>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup className="mb-3">
            <FormLabel>Contact</FormLabel>
            <InputGroup>
              <FormControl
                type="text"
                name="contact"
                aria-label="Contact number"
              />
              <InputGroup.Text>
                <PhoneCall className="me-2 fs-5" />
              </InputGroup.Text>
            </InputGroup>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup className="mb-3">
            <FormLabel>Telephone</FormLabel>
            <FormControl
              type="tel"
              name="telephone"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            />
          </FormGroup>
        </Col>
        <Col md={8}>
          <FormGroup className="mb-3">
            <FormLabel>City</FormLabel>
            <FormControl type="text" name="city" />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup className="mb-3">
            <FormLabel>State</FormLabel>
            <Form.Select name="state">
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </FormGroup>
        </Col>
        <Col xs={12}>
          <FormGroup className="mb-3">
            <FormCheck
              type="checkbox"
              id="rememberMe"
              label="Remember me"
              name="rememberMe"
            />
          </FormGroup>
        </Col>
        <Col xs={12}>
          <div className="text-end">
            <Button variant="primary" className="rounded">
              Submit
            </Button>
          </div>
        </Col>
      </Row>
    </Form>
  );
};

export default StepData1;
