import React, { useState, ChangeEvent } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const OTP_LENGTH = 5;

const TwoStepVerification: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const [activeIndex, setActiveIndex] = useState(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value.replace(/[^0-9]/g, "").slice(0, 1);
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < OTP_LENGTH - 1) {
      setActiveIndex(index + 1);
    } else if (!value && index > 0) {
      setActiveIndex(index - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("OTP Submitted:", otp.join(""));
  };

  return (
    <div className="sign-in-bg">
      <div className="main-container">
        <Container>
          <div className="sign-in-content-bg">
            <Row className="main-content-box">
              <Col lg={7} className="image-contentbox d-none d-lg-block">
                <div className="form-container">
                  <div className="signup-content mt-4">
                    <span>
                      <img
                        alt="logo"
                        className="img-fluid"
                        src="/images/logo/1.png"
                      />
                    </span>
                  </div>
                  <div className="signup-bg-img">
                    <img
                      alt="background"
                      className="img-fluid"
                      src="/images/login/04.png"
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
                          <h2 className="text-white">
                            Verify <span className="text-dark">OTP</span>
                          </h2>
                          <p>Enter the 5 digit code sent to your registered email</p>
                        </div>
                      </Col>

                      <Col xs={12}>
                        <div className="verification-box d-flex gap-2 justify-content-lg-start mb-3">
                          {otp.map((digit, index) => (
                            <input
                              key={index}
                              type="text"
                              maxLength={1}
                              value={digit}
                              onChange={(e) => handleChange(e, index)}
                              autoFocus={activeIndex === index}
                              className="form-control h-60 w-60 text-center"
                            />
                          ))}
                        </div>
                      </Col>

                      <Col xs={12} className="mb-3">
                        <p>
                          Didn’t receive a code{" "}
                          <a className="link-white text-decoration-underline" href="#">
                            Resend!
                          </a>
                        </p>
                      </Col>

                      <Col xs={12}>
                        <Button type="submit" variant="primary" size="lg" className="w-100">
                          Verify
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default TwoStepVerification;
