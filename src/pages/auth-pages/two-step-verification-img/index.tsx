import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const OTP_LENGTH = 5;

const TwoStepVerificationImg: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(""));
  const [activeIndex, setActiveIndex] = useState(0);

  const handleChange = (value: string, index: number) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < OTP_LENGTH - 1) {
      setActiveIndex(index + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace") {
      if (otp[index]) {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        setActiveIndex(index - 1);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("OTP Submitted:", otp.join(""));
  };

  return (
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
              <form className="app-form rounded-control" onSubmit={handleSubmit}>
                <Row>
                  <Col xs={12}>
                    <div className="mb-5 text-center">
                      <h2 className="text-primary">Verify OTP</h2>
                      <p>Enter the 5 digit code sent to the registered email Id</p>
                    </div>
                  </Col>

                  <Col xs={12}>
                    <div className="verification-box d-flex gap-3 justify-content-center mb-3">
                      {otp.map((digit, index) => (
                        <input
                          key={index}
                          type="text"
                          maxLength={1}
                          value={digit}
                          onChange={(e) => handleChange(e.target.value, index)}
                          onKeyDown={(e) => handleKeyDown(e, index)}
                          autoFocus={activeIndex === index}
                          className="form-control h-60 w-60 text-center"
                        />
                      ))}
                    </div>
                  </Col>

                  <Col xs={12}>
                    <p>
                      Didn’t receive a code?{" "}
                      <Link to="#">
                        <span className="link-primary text-decoration-underline">Resend!</span>
                      </Link>
                    </p>
                  </Col>

                  <Col xs={12}>
                    <div className="mb-3">
                      <Button type="submit" variant="primary" className="w-100">
                        Verify
                      </Button>
                    </div>
                  </Col>
                </Row>
              </form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TwoStepVerificationImg;
