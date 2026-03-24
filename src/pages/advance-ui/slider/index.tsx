import React, { useRef, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";

import { BriefcaseMetal } from "phosphor-react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const SliderPage: React.FC = () => {
  const multipleItems = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const centerItems = {
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 2,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 567,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1,
        },
      },
    ],
  };

  const responsiveItems = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const variableItems = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
  };

  const [slides, setSlides] = useState<number[]>([1, 2, 3]);
  const sliderRef = useRef<Slider | null>(null);

  const handleAddSlide = () => {
    setSlides((prev) => [...prev, prev.length + 1]);
  };

  const handleRemoveSlide = () => {
    setSlides((prev) => (prev.length > 1 ? prev.slice(0, -1) : prev));
  };

  const addRemoveSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <Container fluid>
      <Breadcrumbs
        mainTitle="Slider"
        title="Advance Ui"
        path={["Slider"]}
        Icon={BriefcaseMetal}
      />
      <Row className="app-slick-sliders">
        <Col lg={6}>
          <Card className="equal-card">
            <Card.Header>
              <h5>Multiple Items</h5>
            </Card.Header>
            <Card.Body>
              <Slider className="multiple-items app-arrow" {...multipleItems}>
                {[
                  "/images/slick/09.jpg",
                  "/images/slick/23.jpg",
                  "/images/slick/25.jpg",
                  "/images/slick/24.jpg",
                  "/images/slick/26.jpg",
                  "/images/slick/27.jpg",
                ].map((src, index) => (
                  <div className="item px-2" key={index}>
                    <img
                      src={src}
                      className="img-fluid rounded w-100"
                      alt={`image-${index}`}
                    />
                  </div>
                ))}
              </Slider>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6}>
          <Card className="equal-card">
            <Card.Header>
              <h5>Center Mode</h5>
            </Card.Header>
            <Card.Body>
              <Slider className="center-mode app-arrow" {...centerItems}>
                {[
                  "/images/slick/04.jpg",
                  "/images/slick/03.jpg",
                  "/images/slick/04.jpg",
                  "/images/slick/05.jpg",
                  "/images/slick/06.jpg",
                  "/images/slick/07.jpg",
                ].map((src, index) => (
                  <div className="item px-2" key={index}>
                    <img
                      src={src}
                      className="img-fluid rounded w-100"
                      alt={`image-${index}`}
                    />
                  </div>
                ))}
              </Slider>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6}>
          <Card className="equal-card">
            <Card.Header>
              <h5>Responsive Display</h5>
            </Card.Header>
            <Card.Body>
              <Slider className="responsive app-arrow" {...responsiveItems}>
                {[
                  "/images/slick/10.jpg",
                  "/images/slick/23.jpg",
                  "/images/slick/05.jpg",
                  "/images/slick/25.jpg",
                  "/images/slick/06.jpg",
                  "/images/slick/03.jpg",
                ].map((src, index) => (
                  <div className="item px-2" key={index}>
                    <img
                      src={src}
                      className="img-fluid rounded w-100"
                      alt={`image-${index}`}
                    />
                  </div>
                ))}
              </Slider>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6}>
          <Card className="equal-card py-3">
            <Card.Header>
              <h5>Variable Width</h5>
            </Card.Header>
            <Card.Body>
              <Slider className="variable-width app-arrow" {...variableItems}>
                {[
                  "slider_width_1",
                  "slider_width_2",
                  "slider_width_3",
                  "slider_width_4",
                  "slider_width_5",
                  "slider_width_6",
                ].map((className, index) => (
                  <div className={`${className} variable-slider`} key={index}></div>
                ))}
              </Slider>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6}>
          <Card className="equal-card">
            <Card.Header>
              <h5>Add & Remove</h5>
            </Card.Header>
            <Card.Body>
              <Slider
                ref={sliderRef}
                className="slider add-remove app-arrow"
                {...addRemoveSettings}
              >
                {slides.map((slide, index) => (
                  <div key={index} className="item px-2">
                    <img
                      src="/images/slick/12.jpg"
                      alt={`Slide ${slide}`}
                      className="img-fluid rounded w-100"
                    />
                  </div>
                ))}
              </Slider>

              <div className="text-center add-remove-btn mt-4">
                <Button
                  variant="light-primary"
                  className="me-2"
                  onClick={handleAddSlide}
                >
                  Add Slide
                </Button>
                <Button variant="light-danger" onClick={handleRemoveSlide}>
                  Remove Slide
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SliderPage;
