import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FloatingLabel,
  Button,
} from "react-bootstrap";
import {
  FacebookLogo,
  GoogleLogo,
  TwitterLogo,
} from "phosphor-react";
import { Link } from "react-router-dom";

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputFields = [
    {
      id: "username",
      label: "Username",
      placeholder: "Enter Your Username",
      type: "text",
    },
    {
      id: "email",
      label: "Email",
      placeholder: "Enter Your Email",
      type: "email",
    },
    {
      id: "password",
      label: "Password",
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

  const socialButtons = [
    { icon: <FacebookLogo size={20} weight="bold" />, className: "btn-light-white" },
    { icon: <GoogleLogo size={20} weight="bold" />, className: "btn-light-white" },
    { icon: <TwitterLogo size={20} weight="bold" />, className: "btn-light-white" },
  ];

  const handleChange = (id: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="app-wrapper d-block sign-in-bg">
      <div className="main-container">
        <Container className="main-container">
          <Row className="main-content-box">

            <Col lg={7} className="image-contentbox d-none d-lg-block">
              <div className="form-container">
                <div className="signup-content mt-4">
                  <span>
                  <img src="/images/logo/1.png" alt="Logo" className="img-fluid" />
                    </span>
                </div>
                <div className="signup-bg-img">
                  <img src="/images/login/02.png" alt="Background" className="img-fluid" />
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
                          Create <span className="text-dark">Account</span>
                        </h2>
                        <p>Get Started For Free Today!</p>
                      </div>
                    </Col>


                    {inputFields.slice(0, 2).map((field) => (
                      <Col xs={12} key={field.id}>
                        <FloatingLabel controlId={field.id} label={field.label} className="mb-3">
                          <Form.Control
                            type={field.type}
                            placeholder={field.placeholder}
                            value={(formData as any)[field.id]}
                            onChange={(e) => handleChange(field.id, e.target.value)}
                            required
                          />
                        </FloatingLabel>
                      </Col>
                    ))}


                    <Row>
                      {inputFields.slice(2).map((field) => (
                        <Col md={6} xs={12} key={field.id}>
                          <FloatingLabel controlId={field.id} label={field.label} className="mb-3">
                            <Form.Control
                              type={field.type}
                              placeholder={field.placeholder}
                              value={(formData as any)[field.id]}
                              onChange={(e) => handleChange(field.id, e.target.value)}
                              required
                            />
                          </FloatingLabel>
                        </Col>
                      ))}
                    </Row>


                    <Col xs={12}>
                      <Form.Check
                        type="checkbox"
                        id="checkDefault"
                        className="d-flex align-items-center gap-2 mb-3"
                        label={
                          <span className="text-white mt-2 f-s-16">
                            Accept Terms & Conditions
                          </span>
                        }
                      />
                    </Col>


                    <Col xs={12}>
                      <Link
                        type="submit"
                        to="/dashboard/ecommerce"
                        className="btn btn-primary w-100 mb-3"
                      >
                        Sign Up
                      </Link>
                    </Col>


                    <Col xs={12}>
                      <div className="text-center text-lg-start f-s-14 f-w-500">
                        Already Have An Account?{" "}
                        <Link
                          to="/auth-pages/sign-in"
                          className="link-white text-decoration-underline"
                        >
                          Sign in
                        </Link>
                      </div>
                    </Col>


                    <div className="app-divider-v light justify-content-center py-lg-5 py-3">
                      <p>OR</p>
                    </div>


                    <Col xs={12}>
                      <div className="d-flex gap-3 justify-content-center text-center">
                        {socialButtons.map((btn, idx) => (
                          <Button
                            key={idx}
                            type="button"
                            variant="btn-light-white"
                            className={`icon-btn w-45 h-45 b-r-15 ${btn.className}`}
                          >
                            {btn.icon}
                          </Button>
                        ))}
                      </div>
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

export default SignUp;
