import React, { ChangeEvent, useRef, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const Fileuploads: React.FC = () => {
  const [fileName, setFileName] = useState<string>("No file chosen, yet.");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleCustomFileUpload = (): void => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("No file chosen, yet.");
    }
  };

  return (
    <Card>
      <Card.Header>
        <h5>Basic File Upload</h5>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col sm={12} xl={6}>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label className="mt-2">File Upload</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
            </Form>
          </Col>

          <Col sm={12} xl={6}>
            <Form.Group className="mb-3">
              <Form.Label className="mt-2">Custom File Upload</Form.Label>
              <Form.Control
                type="file"
                ref={fileInputRef}
                hidden
                onChange={handleFileChange}
              />
              <div className="d-flex align-items-center gap-3">
                <Button
                  variant="primary"
                  onClick={handleCustomFileUpload}
                  className="flex-shrink-0"
                >
                  Add file
                </Button>
                <span>{fileName}</span>
              </div>
            </Form.Group>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Fileuploads;
