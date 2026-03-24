import { useState, ChangeEvent } from "react";
import {
  Card,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
} from "react-bootstrap";
import { IconPhotoHeart } from "@tabler/icons-react";

const StudentForm: React.FC = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const fields = [
    { label: "Surname", type: "text", placeholder: "Enter Surname", col: { md: 4 } },
    { label: "Student Name", type: "text", placeholder: "Enter Name", col: { md: 4 } },
    { label: "Parent Name", type: "text", placeholder: "Enter Parent Name", col: { md: 4 } },
    { label: "Date of Birth", type: "date", placeholder: "", col: { md: 6, xl: 3 } },
    {
      label: "Gender",
      type: "select",
      options: ["Select Gender", "Male", "Female"],
      col: { md: 6, xl: 3 },
    },
    {
      label: "Email Address",
      type: "email-group",
      placeholder: "Email Address",
      col: { xl: 6 },
    },
    { label: "Father Contact", type: "text", placeholder: "xxx-xxxx-xxx", col: { md: 6 } },
    { label: "Mother Contact", type: "text", placeholder: "xxx-xxxx-xxx", col: { md: 6 } },
    {
      label: "Address",
      type: "textarea",
      placeholder: "Enter Your Address",
      col: { xl: 6 },
    },
    { label: "City", type: "text", placeholder: "Enter Your City", col: { md: 6, xl: 3 } },
    { label: "Zip", type: "text", placeholder: "xxxxx", maxLength: 5, col: { md: 6, xl: 3 } },
  ];

  return (
    <Card>
      <Card.Header>
        <h5>Student Details Form</h5>
      </Card.Header>
      <Card.Body>
        <Form className="app-form">
          <Row className="justify-content-center">
            <Col xs={12} className="text-center mb-3">
              <div className="d-flex justify-content-center mb-3">
                <div className="avatar-upload">
                  <div className="avatar-edit">
                    <Form.Control
                      type="file"
                      id="imageUpload"
                      accept=".png, .jpg, .jpeg"
                      onChange={handleImageUpload}
                      hidden
                    />
                    <Form.Label htmlFor="imageUpload" className="m-0">
                      <IconPhotoHeart />
                    </Form.Label>
                  </div>
                  <div className="avatar-preview">
                    <div id="imgPreview"
                      style={{
                        backgroundImage: imagePreview
                          ? `url('${imagePreview}')`
                          : undefined,
                      }}
                    />
                  </div>
                </div>
              </div>
            </Col>

            {fields.map((field, index) => (
              <Col key={index} {...field.col} className="mb-3">
                <Form.Label>{field.label}</Form.Label>
                {field.type === "select" ? (
                  <Form.Select>
                    {field.options?.map((option, i) => (
                      <option key={i}>{option}</option>
                    ))}
                  </Form.Select>
                ) : field.type === "textarea" ? (
                  <Form.Control
                    as="textarea"
                    placeholder={field.placeholder}
                    rows={1}
                  />
                ) : field.type === "email-group" ? (
                  <InputGroup>
                    <InputGroup.Text>@</InputGroup.Text>
                    <Form.Control type="email" placeholder={field.placeholder} />
                  </InputGroup>
                ) : (
                  <Form.Control
                    type={field.type}
                    placeholder={field.placeholder}
                    maxLength={field.maxLength}
                  />
                )}
              </Col>
            ))}

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

export default StudentForm;
