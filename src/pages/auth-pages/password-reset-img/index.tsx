import React from "react";
import {
  Container,
  Row,
  Col,
  Form, FormControl, FormGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const PasswordResetImg: React.FC = () => {
  const fields = [
    {
      id: "currentPassword",
      label: "Current Password",
      placeholder: "Enter Your Password",
      type: "password",
    },
    {
      id: "newPassword",
      label: "New Password",
      placeholder: "Enter Your Password",
      type: "password",
    },
    {
      id: "confirmPassword",
      label: "Confirm Password",
      placeholder: "Enter Your Password",
      type: "password",
    },
  ];

  return (
    <Container fluid>
      <Row>
        <Col xs={12} className="p-0">
          <div className="login-form-container">
            <div className="mb-4 text-center">
              <Link className="logo" to="/dashboard/ecommerce">
                <img src="/images/logo/3.png" alt="logo" />
              </Link>
            </div>

            <div className="form_container">
              <Form className="app-form ">
                <div className="mb-3 text-center">
                  <h3 className="text-primary-dark">Reset Your Password</h3>
                  <p className="f-s-12 text-secondary">
                    Create a new password and sign in to admin
                  </p>
                </div>

                {fields.map((field) => (
                  <FormGroup className="mb-3 " controlId={field.id} key={field.id}>
                    <Form.Label>{field.label}</Form.Label>
                    <FormControl
                      type={field.type}
                      placeholder={field.placeholder}
                      required
                    />
                  </FormGroup>
                ))}

                <Link
                  to="/dashboard/ecommerce"
                  role="button"
                  className="btn btn-primary w-100"
                >
                  Reset Password
                </Link>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PasswordResetImg;
