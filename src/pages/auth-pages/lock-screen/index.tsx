import React, { useState } from "react";
import {
  Col,
  Container,
  Form,
  FormCheck,
  FormControl,
  FormFloating,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const LockScreen: React.FC = () => {
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Password:", password);
    console.log("Remember me:", remember);

  };

  return (

      <div className="sign-in-bg">
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
                    <img src="/images/login/06.png" alt="Background" className="img-fluid" />
                  </div>
                </div>
              </Col>

              <Col lg={5} className="form-content-box">
                <div className="form-container">
                  <Form className="app-form" onSubmit={handleUnlock}>
                    <Row>
                      <Col xs={12}>
                        <div className="mb-3 user-screen text-center">
                          <div className="w-90 h-90 b-r-15 d-flex-center overflow-hidden text-bg-primary">
                            <img
                              alt="avatar"
                              className="img-fluid"
                              src="/images/avatar/14.png"
                            />
                          </div>
                        </div>
                      </Col>

                      <Col xs={12}>
                        <div className="mb-5 text-center text-lg-start">
                          <h2 className="text-white fw-semibold">
                            Lock <span className="text-dark">Screen</span>
                          </h2>
                          <p>Hello, enter your password to unlock the screen</p>
                        </div>
                      </Col>

                      <Col xs={12}>
                        <FormFloating className="mb-3">
                          <FormControl
                            type="password"
                            placeholder="Enter Your Password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                          <label htmlFor="password">Password</label>
                          <p className="text-white f-s-14 mt-2 f-w-400">
                            Enter Your Password to View your Screen
                          </p>
                        </FormFloating>
                      </Col>

                      <Col xs={12}>
                        <FormCheck
                          className="d-flex text-white align-items-center gap-2 mb-3"
                          type="checkbox"
                          id="checkDefault"
                          label="Remember me"
                          checked={remember}
                          onChange={(e) => setRemember(e.target.checked)}
                        />
                      </Col>

                      <Col xs={12} className="mt-3">
                        <Link
                          to="/dashboard/ecommerce"
                          type="submit"
                          className="w-100 btn btn-primary"
                        >
                          Unlock
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

export default LockScreen;
