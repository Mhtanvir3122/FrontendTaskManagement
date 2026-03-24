
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FloatingLabel,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const  PasswordCreate: React.FC = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const fields = [
    {
      id: "newPassword",
      label: "New Password",
      placeholder: "Enter Your Password",
      value: formValues.newPassword,
    },
    {
      id: "confirmPassword",
      label: "Confirm Password",
      placeholder: "Enter Your Password",
      value: formValues.confirmPassword,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formValues.newPassword !== formValues.confirmPassword) {
      alert("Passwords do not match");
      return;
    }


    console.log("Password created:", formValues.newPassword);
    navigate("/auth-pages/sign-in");
  };

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
                      alt=""
                      className="img-fluid"
                    />
                  </span>
                </div>
                <div className="signup-bg-img">
                  <img
                    src="/images/login/05.png"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </Col>

            <Col lg={5} className="form-content-box">
              <div className="form-container">
                <Form className="app-form" onSubmit={handleSubmit}>
                  <Row>
                    <Col xs={12}>
                      <div className="mb-5 text-center text-lg-start">
                        <h2 className="text-white fw-bold">
                          Create <span className="text-dark">Password</span>
                        </h2>
                        <p>
                          Your new password must be different from previous used password
                        </p>
                      </div>
                    </Col>

                    {fields.map((field) => (
                      <Col lg={6} key={field.id}>
                        <FloatingLabel
                          controlId={field.id}
                          label={field.label}
                          className="mb-3"
                        >
                          <Form.Control
                            type="password"
                            placeholder={field.placeholder}
                            value={field.value}
                            onChange={(e) =>
                              handleChange(field.id, e.target.value)
                            }
                            required
                          />
                        </FloatingLabel>
                      </Col>
                    ))}

                    <Col xs={12} className="mt-3">
                      <Link
                        type="submit"
                        to="/auth-pages/sign-in"
                        className="btn btn-primary w-100 btn-lg"

                      >
                        Create Password
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

export default  PasswordCreate;
