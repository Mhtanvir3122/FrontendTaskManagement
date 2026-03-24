import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

import { animationCategories } from "@/data/advancedui/animation/Animation.ts";
import {
  IconBellRinging,
  IconChevronsRight,
  IconDownload,
  IconMessageCircle,
  IconTrash,
  IconUpload,
} from "@tabler/icons-react";
import { BriefcaseMetal } from "phosphor-react";

import AnimateUse from "@/components/advancedui/animation/Animation.tsx";
import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const AnimatedHover: React.FC<{
  ani: string;
  children: React.ReactNode;
  className?: string;
}> = ({ ani, children, className }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleMouseEnter = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
  };

  return (
    <a
      href="#"
      onMouseEnter={handleMouseEnter}
      className={`${className || ""} ${
        isAnimating ? `animate__animated animate__1 animate__${ani}` : ""
      }`}
    >
      {children}
    </a>
  );
};

const AnimationPage: React.FC = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    (async () => {
      const MasonryModule = await import("masonry-layout");
      const Masonry = MasonryModule.default;
      new Masonry(".animation-blocks", {
        percentPosition: true,
      });

      const Prism = (await import("prismjs")).default;
      Prism.highlightAll();
    })();
  }, []);

  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Animation"
          title="Advance Ui"
          path={["Animation"]}
          Icon={BriefcaseMetal}
        />

        <Row>
          <Col xs={12}>
            <Card>
              <Card.Header>
                <h5>Where can use? some example ..!</h5>
              </Card.Header>
              <Card.Body>
                <div>
                  <Row>
                    <Col xs={12}>
                      <div className="d-flex flex-wrap gap-3">
                        <div className="h-45 w-45 d-flex-center b-r-50 overflow-hidden text-bg-primary">
                          <img
                            src="/images/avatar/2.png"
                            alt=""
                            className="img-fluid animate__pulse animate__animated animate__infinite animate__faster"
                          />
                        </div>
                        <span className="bg-secondary h-45 w-45 d-flex-center b-r-50 position-relative">
                          <img
                            src="/images/avatar/1.png"
                            alt=""
                            className="img-fluid b-r-50"
                          />
                          <span className="position-absolute top-0 end-0 p-1 bg-success border border-light rounded-circle animate__animated animate__zoomIn animate__infinite animate__fast"></span>
                        </span>
                        <span className="bg-secondary h-45 w-45 d-flex-center b-r-50 position-relative">
                          <img
                            src="/images/avatar/6.png"
                            alt=""
                            className="img-fluid b-r-50"
                          />
                          <span className="position-absolute top-10 start-40 translate-middle d-flex-center bg-danger border border-light rounded-circle text-center h-20 w-20 f-s-10">
                            <IconMessageCircle
                              size={10}
                              className="animate__animated animate__heartBeat animate__infinite animate__fast"
                            />
                          </span>
                        </span>
                        <span className="text-outline-primary h-45 w-45 d-flex-center b-r-50">
                          <IconBellRinging
                            size={24}
                            className="animate__animated animate__rubberBand animate__infinite animate__fast"
                          />
                        </span>
                        <Button variant="success" size="lg">
                          Submit
                          <IconChevronsRight
                            size={24}
                            className="animate__animated animate__fadeOutRight animate__infinite animate__fast"
                          />
                        </Button>
                        <Button variant="danger" size="lg">
                          <IconTrash
                            size={24}
                            className="animate__animated animate__bounceIn animate__infinite animate__fast"
                          />
                          Delete
                        </Button>
                        <Button variant="primary" size="lg">
                          <IconDownload
                            size={24}
                            className="animate__animated animate__bounceInDown animate__infinite animate__slow"
                          />
                          Download
                        </Button>
                        <Button variant="warning" size="lg">
                          Upload
                          <IconUpload
                            size={24}
                            className="animate__animated animate__fadeOutRight animate__infinite animate__fast"
                          />
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Animation categories */}
          <Col xs={12}>
            <div
              className="animation-blocks"
              data-masonry='{"percentPosition": true }'
            >
              {animationCategories.map((category, index) => (
                <Card key={index} className="cheatsheet-card animation-card">
                  <div className="card-header p-0">
                    <a
                      className="btn btn-primary w-100 text-center f-s-18 f-w-500 rounded-bottom-0 py-2"
                      data-bs-toggle="collapse"
                      href={`#${category.name.replace(/\s+/g, "-").toLowerCase()}`}
                      aria-expanded="false"
                    >
                      {category.name}
                    </a>
                  </div>
                  <div
                    className="collapse card-body show px-4"
                    id={category.name.replace(/\s+/g, "-").toLowerCase()}
                  >
                    <ul>
                      <li>
                        <div className="d-flex flex-wrap gap-3">
                          {category.animations.map((ani, aniIndex) => (
                            <AnimatedHover
                              key={aniIndex}
                              ani={ani}
                              className="btn btn-light-primary"
                            >
                              {ani}
                            </AnimatedHover>
                          ))}
                        </div>
                      </li>
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </Col>

          <AnimateUse />
        </Row>
      </Container>
    </div>
  );
};

export default AnimationPage;
