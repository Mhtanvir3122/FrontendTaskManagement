import React from "react";
import { Card, Carousel, Col, Container, Image, Row } from "react-bootstrap";

import { BriefcaseMetal } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const BootstrapSlider: React.FC = () => {
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Bootstrap Slider"
          title="Advance Ui"
          path={["Bootstrap Slider"]}
          Icon={BriefcaseMetal}
        />
        <Row>
          <Col md={6} xl={4}>
            <Card>
              <Card.Header>
                <h5 className="text-center mt-2">Simple Slider</h5>
              </Card.Header>
              <Card.Body>
                <Carousel indicators={false}>
                  <Carousel.Item>
                    <Image
                      src="/images/bootstrapslider/01.jpg"
                      className="w-100 d-block"
                      alt="..."
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      src="/images/bootstrapslider/07.jpg"
                      className="w-100 d-block"
                      alt="..."
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      src="/images/bootstrapslider/08.jpg"
                      className="w-100 d-block"
                      alt="..."
                    />
                  </Carousel.Item>
                </Carousel>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={4}>
            <Card>
              <Card.Header>
                <h5 className="text-center mt-2">Indicator Slider</h5>
              </Card.Header>
              <Card.Body>
                <Carousel>
                  <Carousel.Item>
                    <Image
                      src="/images/bootstrapslider/02.jpg"
                      className="w-100 d-block"
                      alt="..."
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      src="/images/bootstrapslider/07.jpg"
                      className="w-100 d-block"
                      alt="..."
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      src="/images/bootstrapslider/08.jpg"
                      className="w-100 d-block"
                      alt="..."
                    />
                  </Carousel.Item>
                </Carousel>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={4}>
            <Card>
              <Card.Header>
                <h5 className="text-center mt-2">Slider With Captions</h5>
              </Card.Header>
              <Card.Body>
                <Carousel>
                  <Carousel.Item>
                    <Image
                      src="/images/bootstrapslider/01.jpg"
                      className="w-100 d-block"
                      alt="..."
                    />
                    <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      src="/images/bootstrapslider/07.jpg"
                      className="w-100 d-block"
                      alt="..."
                    />
                    <Carousel.Caption>
                      <h3>Second slide label</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      src="/images/bootstrapslider/08.jpg"
                      className="w-100 d-block"
                      alt="..."
                    />
                    <Carousel.Caption>
                      <h3>Third slide label</h3>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={4}>
            <Card>
              <Card.Header>
                <h5 className="text-center mt-2">Fade Slider</h5>
              </Card.Header>
              <Card.Body>
                <Carousel fade>
                  <Carousel.Item>
                    <img
                      src="/images/bootstrapslider/04.jpg"
                      className="w-100 d-block"
                      alt="..."
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src="/images/bootstrapslider/07.jpg"
                      className="w-100 d-block"
                      alt="..."
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src="/images/bootstrapslider/08.jpg"
                      className="w-100 d-block"
                      alt="..."
                    />
                  </Carousel.Item>
                </Carousel>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={4}>
            <Card>
              <Card.Header>
                <h5 className="text-center mt-2">
                  Fade slider without indicator
                </h5>
              </Card.Header>
              <Card.Body>
                <Carousel fade controls={false} indicators={false}>
                  <Carousel.Item interval={1000}>
                    <img
                      src="/images/bootstrapslider/04.jpg"
                      className="w-100 d-block"
                      alt="..."
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={500}>
                    <img
                      src="/images/bootstrapslider/07.jpg"
                      className="w-100 d-block"
                      alt="..."
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src="/images/bootstrapslider/08.jpg"
                      className="w-100 d-block"
                      alt="..."
                    />
                  </Carousel.Item>
                </Carousel>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={4}>
            <Card>
              <Card.Header>
                <h5 className="text-center mt-2">No transition animation</h5>
              </Card.Header>
              <Card.Body>
                <Carousel slide={false}>
                  <Carousel.Item interval={1000}>
                    <img
                      src="/images/bootstrapslider/04.jpg"
                      className="w-100 d-block"
                      alt="..."
                    />
                  </Carousel.Item>
                  <Carousel.Item interval={500}>
                    <img
                      src="/images/bootstrapslider/07.jpg"
                      className="w-100 d-block"
                      alt="..."
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      src="/images/bootstrapslider/08.jpg"
                      className="w-100 d-block"
                      alt="..."
                    />
                  </Carousel.Item>
                </Carousel>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BootstrapSlider;
