import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { IconCopy, IconCut } from "@tabler/icons-react";
import { Cardholder } from "phosphor-react";
import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const ClipboardPage: React.FC = () => {

  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [paragraphValue] = useState(
    "I'd be happy to help you copy a paragraph, but I need a bit more context or the text..."
  );
  const [spanValue] = useState("i am going to copy");

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  const handleCut = async (
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>
  ) => {
    await handleCopy(value);
    setValue("");
  };

  return (
    <Container fluid>
      <Breadcrumbs
        mainTitle="Clipboard"
        title="Forms elements"
        path={["Clipboard"]}
        Icon={Cardholder}
      />
      <Row>
        {/* Copy to Text Input */}
        <Col lg={6}>
          <Card>
            <Card.Header>
              <h5>Copy to Text Input</h5>
            </Card.Header>
            <Card.Body>
              <div className="bg-light-secondary p-3 rounded">
                <Form.Control
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Some text to be copied"
                />
                <div className="mt-3">
                  <Button
                    variant="primary"
                    onClick={() => handleCopy(inputValue)}
                    className="me-2"
                  >
                    <IconCopy size={18} /> Copy Input
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleCut(inputValue, setInputValue)}
                  >
                    <IconCut size={18} /> Cut Input
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Copy to Textarea */}
        <Col lg={6}>
          <Card>
            <Card.Header>
              <h5>Copy to Textarea</h5>
            </Card.Header>
            <Card.Body>
              <div className="bg-light-secondary p-3 rounded">
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={textareaValue}
                  onChange={(e) => setTextareaValue(e.target.value)}
                  placeholder="Enter Your Text"
                />
                <div className="mt-3">
                  <Button
                    variant="info"
                    onClick={() => handleCopy(textareaValue)}
                    className="me-2"
                  >
                    <IconCopy size={18} /> Copy Input
                  </Button>
                  <Button
                    variant="warning"
                    onClick={() => handleCut(textareaValue, setTextareaValue)}
                  >
                    <IconCut size={18} /> Cut Input
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Copy Highlighted Text */}
        <Col lg={6}>
          <Card>
            <Card.Header>
              <h5>Copy to Highlighted Text</h5>
            </Card.Header>
            <Card.Body>
              <div className="bg-light-secondary p-3 rounded">
                <p className="form-control mb-3">
                  For text that you can{" "}
                  <span className="bg-primary text-white px-2 rounded">
                    {spanValue}
                  </span>
                </p>
                <Button variant="success" onClick={() => handleCopy(spanValue)}>
                  <IconCopy size={18} /> Copy Text
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Copy to Paragraph */}
        <Col lg={6}>
          <Card>
            <Card.Header>
              <h5>Copy to Paragraph</h5>
            </Card.Header>
            <Card.Body>
              <div className="bg-light-secondary p-3 rounded">
                <p className="form-control">{paragraphValue}</p>
                <Button
                  variant="dark"
                  className="mt-3"
                  onClick={() => handleCopy(paragraphValue)}
                >
                  <IconCopy size={18} /> Copy Paragraph
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Paste Area */}
        <Col lg={12}>
          <Card>
            <Card.Header>
              <h5>Paste</h5>
            </Card.Header>
            <Card.Body>
              <div className="rounded">
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Paste your copied content here"
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ClipboardPage;
