
import { useState } from "react";
import {
  Card,
  Form,
  Row,
  Col,
  Button
} from "react-bootstrap";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";


const DepartmentsForm = () => {
  registerPlugin(FilePondPluginFileValidateType, FilePondPluginImagePreview);
  const [files, setFiles] = useState<(Blob | File | string)[]>([]);

  return (
    <Card>
      <Card.Header>
        <h5>Add Departments Form</h5>
      </Card.Header>
      <Card.Body>
        <Form className="app-form">
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Department Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Department" />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="@department.com" />
              </Form.Group>
            </Col>

            <Col md={8}>
              <Form.Group className="mb-3">
                <Form.Label>Department Head</Form.Label>
                <Form.Control type="text" placeholder="Enter Department Head" />
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Add Employee</Form.Label>
                <Form.Select>
                  <option value="">Select Employee</option>
                  <option value="1">Cedric Kelly</option>
                  <option value="2">Haley Kennedy</option>
                  <option value="3">Angelica Ramos</option>
                  <option value="4">Ashton Cox</option>
                  <option value="5">Timothy Mooney</option>
                  <option value="6">Brenden Wagner</option>
                </Form.Select>
              </Form.Group>
            </Col>

            <Col xs={12}>
              <Form.Group className="mb-3">
                <Form.Label>
                  Upload Files
                </Form.Label>
                <FilePond
                  className="filepond-1"
                  files={files}
                  onupdatefiles={(fileItems) =>
                    setFiles(fileItems.map((fileItem) => fileItem.file))
                  }
                  allowMultiple
                  maxFiles={5}
                  labelIdle='<i class="ti ti-cloud-upload fs-4"></i> <div class="filepond--label-action text-decoration-none">Upload Your Department Images</div>'
                />
              </Form.Group>
            </Col>

            <Col xs={12}>
              <Form.Group className="mb-3">
                <Form.Label>Department Bio</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter Department Bio" />
              </Form.Group>
            </Col>

            <Col xs={12} className="text-end">
              <Button variant="primary" type="submit" className="me-2">
                Add
              </Button>
              <Button variant="secondary" type="reset">
                Reset
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default DepartmentsForm;
