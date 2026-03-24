import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";

import { StackIcon } from "@phosphor-icons/react";

import FileUploader from "@/components/apps/profile/FileUploader.tsx";
import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";
import TextEditor from "@/components/editor/TextEditor.tsx";

const AddBlogPage: React.FC = () => {
  return (
    <Container fluid>
      <Breadcrumbs
        mainTitle="Add Blog"
        title="Apps"
        path={["Blog Page", "Add Blog"]}
        Icon={StackIcon}
      />

      <Row>
        <Col xl={12}>
          <Card className="add-blog p-4">
            <Form className="app-form">
              <Row>
                <Col md={6}>
                  <FloatingLabel
                    controlId="blogTitle"
                    label="Blog Title"
                    className="mb-3"
                  >
                    <Form.Control type="text" placeholder="Blog Title" />
                  </FloatingLabel>

                  <FloatingLabel
                    controlId="blogCategory"
                    label="Works with selects"
                    className="mb-3"
                  >
                    <Form.Select aria-label="Floating label select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </FloatingLabel>

                  <FloatingLabel
                    controlId="blogDescription"
                    label="Blog Description"
                    className="mb-3"
                  >
                    <Form.Control
                      as="textarea"
                      placeholder="Type a comment here"
                      className="h-100px"
                    />
                  </FloatingLabel>

                  <FloatingLabel
                    controlId="blogDate"
                    label="Blog Date"
                    className="mb-3"
                  >
                    <Form.Control type="date" placeholder="Blog Date" />
                  </FloatingLabel>
                </Col>

                <Col md={6}>
                  <FileUploader />
                </Col>

                <Col xl={12} className="editor-details mb-3">
                  <TextEditor />
                </Col>

                <Col xs={12} className="mt-3">
                  <div className="text-end">
                    <Button type="submit" variant="primary">
                      Add Blog
                    </Button>
                    <Button
                      variant="outline-primary"
                      type="button"
                      className="ms-2"
                    >
                      Cancel
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddBlogPage;
