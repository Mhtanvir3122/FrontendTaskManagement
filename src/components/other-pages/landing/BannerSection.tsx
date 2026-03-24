import React, { useEffect, useState } from "react";
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const words = [
  "Management",
  "Analytics",
  "Performance",
  "Dashboard",
  "Insights",
];
const BannerSection: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(false); // remove animation class

      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(true); // re-add animation class
      }, 50);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);
  return (
    <>
      <div className="landing-wrapper">
        <div
          className={`navbar navbar-expand-lg sticky-top landing-navbar px-3 position-fixed  ${
            isScrolled ? "landing-navbar-active" : ""
          }`}
        >
          <Navbar expand="lg" sticky="top" className={`landing-navbar px-3 position-fixed ${isScrolled ? "landing-navbar-active" : ""}`}>
            <Container fluid className="landing-navbar-container">
              <Navbar.Brand href="#home" className="logo">
                <img src="/images/logo/1.png" alt="Logo" className="w-200" />
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="landing_nav" />
              <Navbar.Collapse id="landing_nav">
                <Nav className="flex-grow-1 justify-content-center">
                  <Nav.Link href="#Demo" className="active">Demo</Nav.Link>
                  <Nav.Link href="#Cards">Cards</Nav.Link>
                  <Nav.Link href="#Features">Features</Nav.Link>
                  <Nav.Link href="https://phpstack-1384472-5121645.cloudwaysapps.com/document/react-ts/ki-admin/index.html" target="_blank" rel="noopener noreferrer">Document</Nav.Link>
                  <Nav.Link href="#Pricing">Pricing</Nav.Link>
                </Nav>

                <div className="d-flex">
                  <Button variant="white" href="https://themeforest.net/user/la-themes" target="_blank" className="me-2">
                    Buy Now
                  </Button>
                  <Button variant="outline-white" href="https://forms.gle/q7wFQQRtS2fLDZWbA" target="_blank">
                    Hire Us
                  </Button>
                </div>
              </Navbar.Collapse>
            </Container>
          </Navbar>

        </div>
        <section className="landing-section" id="home">
          <Container fluid>
            <ul className="home-bg-icon">
              {[
                "star-bg.png",
                "arrow-bg.png",
                "circle.png",
                "circle.png",
                "arrow-bg.png",
                "star-bg.png",
                "arrow-bg.png",
              ].map((file, index) => (
                <li key={index}>
                  <img
                    src={`/images/landing/${file}`}
                    alt=""
                    className={
                      file === "circle.png" || file === "star-bg.png"
                        ? "rounded-animation"
                        : "floating-img"
                    }
                  />
                </li>
              ))}
            </ul>
            <Row className="landing-content">
              <Col
                xxl={{ span: 8, offset: 2 }}
                className="text-center position-relative"
              >
                <div className="landing-heading">
                  <h1>
                    Your Ultimate Admin <br />
                    Solution for{" "}
                    <span className={`highlight-text ${isAnimating ? "animate" : ""}`}>
                         {words[currentWordIndex]}
                    </span>
                  </h1>
                  <p>
                    Unlock premium features, advanced analytics, and priority
                    support. Subscribe today and take full control of your admin
                    dashboard.
                  </p>
                </div>
                <div className="d-flex gap-3 justify-content-center my-5">
                  <Link
                    className="btn btn-danger f-s-16 px-4 py-2 text-white"
                    to="/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Check Now
                  </Link>
                  <Link
                    className="btn btn-light-white px-4 py-2 f-s-16"
                    to="https://phpstack-1384472-5121645.cloudwaysapps.com/document/react-ts/ki-admin/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Document
                  </Link>
                </div>
              </Col>
              <Col xs={12} className="text-center position-relative">
                <img
                  src="/images/landing/home-banner.png"
                  alt="banner"
                  className="img-fluid main-banner-img"
                />
                <div className="left-side-banner">
                  <img
                    src="/images/landing/left-banner.gif"
                    alt="left banner"
                    className="img-fluid"
                  />
                </div>
                <div className="right-side-banner">
                  <img
                    src="/images/landing/right-banner.gif"
                    alt="right banner"
                    className="img-fluid"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
      <section className="p-0 overflow-visible">
        <Container fluid className="p-0">
          <div className="language-box">
            <div className="language-box-item">
              <Link
                to="/dashboard/ecommerce"
                className="primary-box bg-primary h-60 w-60 d-flex-center b-r-50"
              >
                <img
                  src="/images/landing/logo/react.png"
                  className="w-35"
                  alt="lang"
                />
              </Link>
            </div>
            <div className="language-box-item">
              <Link
                to="https://www.figma.com/design/kddmeMApQ3vBq6iQBgF7pP/Ki-admin-figma?node-id=0-1&p=f&t=ZQjbMYTVjrYVwBpg-0"
                className="danger-box bg-danger h-60 w-60 d-flex-center b-r-50"
                title="Figma"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/images/landing/logo/figma.png"
                  className="w-35"
                  alt="lang"
                />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default BannerSection;
