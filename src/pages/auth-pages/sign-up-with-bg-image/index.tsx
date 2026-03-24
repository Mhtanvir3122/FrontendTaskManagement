import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button, FormGroup,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FacebookLogo,
  GoogleLogo,
  GithubLogo,
} from "phosphor-react";

const SignBgImg: React.FC = () => {
  const fields = [
    {
      label: "Username",
      type: "text",
      placeholder: "Enter Your Username",
      controlId: "username",
    },
    {
      label: "Email",
      type: "email",
      placeholder: "Enter Your Email",
      controlId: "email",
    },
    {
      label: "Password",
      type: "password",
      placeholder: "Enter Your Password",
      controlId: "password",
    },
  ];

  const socialButtons = [
    {
      icon: <FacebookLogo size={18} color="white" weight="bold"/>,
      variant: "primary",
    },
    {
      icon: <GoogleLogo size={18} color="white" weight="bold"/>,
      variant: "danger",
    },
    {
      icon: <GithubLogo size={18} color="white" weight="bold"/>,
      variant: "dark",
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
                  <Form className="app-form p-3">
                    <div className="mb-3 text-center">
                      <h3>Create Account</h3>
                      <p className="f-s-12 text-secondary">
                        Get started For Free Today.
                      </p>
                    </div>

                    {fields.map((field) => (
                      <FormGroup className="mb-3" controlId={field.controlId} key={field.controlId}>
                        <Form.Label>{field.label}</Form.Label>
                        <Form.Control
                          type={field.type}
                          placeholder={field.placeholder}
                          required
                        />
                      </FormGroup>
                    ))}

                    <FormGroup className="mb-3" controlId="formCheck1">
                      <Form.Check type="checkbox" label="Remember me" />
                    </FormGroup>

                    <Link to="/dashboard/ecommerce" className="btn btn-primary w-100 mb-3">
                      Submit
                    </Link>

                    <div className="app-divider-v justify-content-center">
                      <p>OR</p>
                    </div>

                    <div className="text-center mb-3">
                      {socialButtons.map((btn, idx) => (
                        <Button key={idx} variant={btn.variant} className="icon-btn b-r-5 m-1">
                          {btn.icon}
                        </Button>
                      ))}
                    </div>

                    <div className="text-center">
                      <Link
                        to="/other-pages/terms-condition"
                        className="text-secondary text-decoration-underline"
                      >
                        Terms of use & Conditions
                      </Link>
                    </div>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
  );
};

export default SignBgImg;
