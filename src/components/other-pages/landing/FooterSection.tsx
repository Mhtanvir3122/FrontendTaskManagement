import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const LandingFooter: React.FC = () => {
  return (
    <section className="landing-footer section-lg-space-x">
      <Container>
        <Row>
          <Col>
            <div className="footer-content text-center">
              <span className="bg-white h-90 w-90 d-flex-center b-r-50 m-auto footer-section-logo">
                <img src="/images/logo/3.png" alt="Ki Admin Logo" />
              </span>

              <h1 className="mt-4">Your journey starts here</h1>
              <p className="text-white-800 txt-ellipsis-3 mt-3 mb-4">
                Purchase The Ki-Admin & Craft Your Site Super Faster And
                Powerful. Discover the Ki-Admin Admin Theme. If you enjoy our
                template, please take a moment to rate us.
              </p>

              <div className="footer-btn d-flex justify-content-center gap-3 flex-wrap">
                <Button
                  variant="primary"
                  size="lg"
                  href="https://themeforest.net/user/la-themes"
                  target="_blank"
                >
                  Buy Now
                </Button>
                <Button
                  variant="danger"
                  size="lg"
                  href="mailto:teqlathemes@gmail.com"
                  target="_blank"
                >
                  Need Help ?
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LandingFooter;
