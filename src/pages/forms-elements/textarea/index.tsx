import React, { ChangeEvent, FormEvent, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";

import { Cardholder } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const TextareaPage: React.FC = () => {
  const [writeText, setWriteText] = useState<string>("");
  const [customTextarea, setCustomTextarea] = useState<string>("");
  const [customOutput, setCustomOutput] = useState<string>("");

  const handleWriteTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setWriteText(e.target.value);
  };

  const handleCustomTextareaSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCustomOutput(customTextarea);
  };

  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Textarea"
          title="Forms Elements"
          path={["Textarea"]}
          Icon={Cardholder}
        />

        <Row>
          <Col md={12}>
            <Card>
              <Card.Header>
                <h5>Basic Textarea</h5>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3" controlId="textareaexample">
                      <Form.Label>Simple Textarea</Form.Label>
                      <Form.Control
                        as="textarea"
                        placeholder="Some text..."
                        rows={2}
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <FloatingLabel
                        controlId="floatingTextarea2"
                        label="Address"
                      >
                        <Form.Control
                          as="textarea"
                          placeholder="Type Your Address"
                          className="h-100px"
                        />
                      </FloatingLabel>
                    </Form.Group>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col md={12}>
            <Card>
              <Card.Header>
                <h5>Textarea Formatter</h5>
              </Card.Header>
              <Card.Body>
                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    placeholder="Write some text.."
                    value={writeText}
                    onChange={handleWriteTextChange}
                  />
                </Form.Group>
                <div className="form-control h-40" id="code-output">
                  {writeText}
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={12}>
            <Card>
              <Card.Header>
                <h5>Custom Textarea Formatter</h5>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleCustomTextareaSubmit}>
                  <Form.Group className="mb-3" controlId="myTextarea">
                    <Form.Control
                      as="textarea"
                      placeholder="Write some text..."
                      value={customTextarea}
                      onChange={(e) => setCustomTextarea(e.target.value)}
                    />
                  </Form.Group>

                  <div className="mb-3">
                    <Button id="submitBtn" type="submit" variant="primary">
                      Submit Code
                    </Button>
                  </div>

                  <div className="form-control h-40" id="output">
                    {customOutput}
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TextareaPage;
