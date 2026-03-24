import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FloatingLabel,

} from "react-bootstrap";
import { Link } from "react-router-dom";

const PasswordReset: React.FC = () => {
  const floatingFields = [
    {
      id: "password",
      label: "Current Password",
      placeholder: "Enter Your Password",
    },
    {
      id: "password01",
      label: "New Password",
      placeholder: "Enter Your Password",
    },
    {
      id: "password02",
      label: "Confirm Password",
      placeholder: "Enter Your Password",
    },
  ];

  return (
    <div className="app-wrapper d-block sign-in-bg">
      <div className="main-container">
        <Container>
          <Row className="main-content-box">
            <Col lg={7} className="image-contentbox d-none d-lg-block">
              <div className="form-container">
                <div className="signup-content mt-4">
                  <span>
                    <img
                      src="/images/logo/1.png"
                      alt="Logo"
                      className="img-fluid"
                    />
                  </span>
                </div>
                <div className="signup-bg-img">
                  <img
                    src="/images/login/03.png"
                    alt="Background"
                    className="img-fluid"
                  />
                </div>
              </div>
            </Col>

            <Col lg={5} className="form-content-box">
              <div className="form-container">
                <Form className="app-form">
                  <Row>
                    <Col xs={12}>
                      <div className="mb-5 text-center text-lg-start">
                        <h2 className="text-white fw-bold">
                          Reset Your <span className="text-dark">Password</span>
                        </h2>
                        <p>Create a new password and sign in to admin</p>
                      </div>
                    </Col>

                    {/* Current Password - Full width */}
                    <Col xs={12}>
                      <FloatingLabel
                        controlId="password"
                        label="Current Password"
                        className="mb-3"
                      >
                        <Form.Control
                          type="password"
                          placeholder="Enter Your Password"
                          required
                        />
                      </FloatingLabel>
                    </Col>

                    {/* New & Confirm Password - Side by side */}
                    {floatingFields.slice(1).map((field) => (
                      <Col lg={6} key={field.id}>
                        <FloatingLabel
                          controlId={field.id}
                          label={field.label}
                          className="mb-3"
                        >
                          <Form.Control
                            type="password"
                            placeholder={field.placeholder}
                            required
                          />
                        </FloatingLabel>
                      </Col>
                    ))}

                    <Col xs={12} className="mt-3">
                      <Link
                        to="/auth-pages/sign-in"
                        className="btn btn-primary btn-lg w-100"
                        role="button"
                      >
                        Reset Password
                      </Link>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default PasswordReset;
