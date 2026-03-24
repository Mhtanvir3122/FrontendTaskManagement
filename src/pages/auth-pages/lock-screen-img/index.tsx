import React, { useState } from "react";
import {

  Col,
  Container,
  Form,
  FormCheck,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const LockScreenImg: React.FC = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const userInfo = {
    avatar: "/images/avatar/6.png",
    name: "Sunny Airey",
    subtitle: "Enter Your Password to View your Screen",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your password validation logic here
    console.log("Password:", password);
    console.log("Remember Me:", rememberMe);
    navigate("/"); // Navigate after unlock
  };

  const formFields = [
    {
      id: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter Your Password",
      value: password,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setPassword(e.target.value),
    },
  ];

  return (
    <div className="sign-in-bg">
      <Container fluid>
        <Row>
          <Col xs={12} className="p-0">
            <div className="login-form-container">
              <div className="mb-4 text-center">
                <Link to="/dashboard/ecommerce" className="logo">
                  <img alt="#" src="/images/logo/3.png" />
                </Link>
              </div>

              <div className="form_container">
                <Form
                  className="app-form p-3 rounded-control"
                  onSubmit={handleSubmit}
                >
                  <Row>
                    <Col xs={12}>
                      <div className="mb-3 text-center">
                        <h3 className="text-primary-dark">Lock Screen</h3>
                        <p>Hello, enter your password to unlock the screen</p>
                      </div>
                    </Col>

                    <Col xs={12}>
                      <div className="user-container mb-3 text-center">
                        <div className="h-80 w-80 d-flex-center b-r-16 overflow-hidden text-bg-primary mx-auto">
                          <img
                            src={userInfo.avatar}
                            alt="avatar"
                            className="img-fluid"
                          />
                        </div>
                        <h5 className="fw-semibold mt-2">{userInfo.name}</h5>
                        <p className="text-secondary">{userInfo.subtitle}</p>
                      </div>
                    </Col>

                    {formFields.map((field) => (
                      <Col xs={12} key={field.id}>
                        <FormGroup className="mb-3">
                          <FormLabel htmlFor={field.id}>{field.label}</FormLabel>
                          <FormControl
                            id={field.id}
                            type={field.type}
                            placeholder={field.placeholder}
                            value={field.value}
                            onChange={field.onChange}
                            required
                          />
                        </FormGroup>
                      </Col>
                    ))}

                    <Col xs={12}>
                      <FormCheck
                        className="mb-3"
                        type="checkbox"
                        id="rememberMe"
                        label="Remember me"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                      />
                    </Col>

                    <Col xs={12}>
                      <Link
                        type="submit"
                        to="/dashboard/ecommerce"
                        className="w-100 mb-3 btn btn-primary"
                      >
                        Unlock
                      </Link>
                    </Col>
                  </Row>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LockScreenImg;
