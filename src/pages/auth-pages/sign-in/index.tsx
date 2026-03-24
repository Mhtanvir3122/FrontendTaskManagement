import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FloatingLabel,
  Button,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  FacebookLogo,
  GoogleLogo,
 TwitterLogo,
} from "phosphor-react";

const SignInPage: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    remember: false,
  });

  const navigate = useNavigate();

  const inputFields = [
    {
      id: "username",
      label: "Username",
      placeholder: "Enter your username",
      type: "text",
    },
    {
      id: "password",
      label: "Password",
      placeholder: "Enter your password",
      type: "password",
      forgotLink: "/auth-pages/password-reset",
    },
  ];

  const socialButtons = [
    {
      icon: <FacebookLogo size={18} weight="bold" />,
      variant: "btn-light-white",
    },
    {
      icon: <GoogleLogo size={18} weight="bold" />,
      variant: "btn-light-white",
    },
    {
      icon:<TwitterLogo size={18} weight="bold"/>,
      variant: "btn-light-white",
    },
  ];

  const handleChange = (id: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.username && formData.password) {
      navigate("/dashboard/ecommerce");
    }
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
                    <img src="/images/logo/1.png" alt="Logo" className="img-fluid" />
                  </span>
                </div>
                <div className="signup-bg-img">
                  <img src="/images/login/01.png" alt="Background" className="img-fluid" />
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
                          Welcome To <span className="text-dark">ki-admin!</span>
                        </h2>
                        <p>Sign in with your credentials</p>
                      </div>
                    </Col>


                    {inputFields.map((field) => (
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
                        {field.forgotLink && (
                          <div className="mb-3 text-end">
                            <Link to={field.forgotLink} className="text-dark-50 f-w-500 text-decoration-underline">
                              Forgot Password?
                            </Link>
                          </div>
                        )}
                      </Col>
                    ))}


                    <Col xs={12}>
                      <Form.Check
                        type="checkbox"
                        id="remember"
                        className="d-flex align-items-center gap-2 mb-3"
                        label={<span className="text-white mt-2 f-s-16">Remember me</span>}
                        checked={formData.remember}
                        onChange={(e) => handleChange("remember", e.target.checked)}
                      />
                    </Col>


                    <Col xs={12}>
                      <Link  to="/dashboard/ecommerce" type="submit"  className="btn btn-primary w-100 mb-3" >
                        Sign In
                      </Link>
                    </Col>


                    <Col xs={12}>
                      <div className="text-center text-lg-start f-s-14 f-w-500">
                        Don&apos;t Have An Account yet?{" "}
                        <Link
                          to="/auth-pages/sign-up"
                          className="text-white-800 f-w-500 f-s-14 text-decoration-underline"
                        >
                          Sign up
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
                            className={`icon-btn w-45 h-45 b-r-15 ${btn.variant}`}
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

export default SignInPage;
