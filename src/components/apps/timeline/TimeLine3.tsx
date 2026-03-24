 import { Card, CardBody, Col, Container, Row } from "react-bootstrap";
import Slider from "react-slick";
 import "slick-carousel/slick/slick.css";
 import "slick-carousel/slick/slick-theme.css";

import {
  IconCircleCheck,
  IconClock,
  IconMessageCircle,
  IconSquareCheck,
} from "@tabler/icons-react";

const TimeLine3 = () => {
  const settings = {
    className: "timeline-slider",
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 1008,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };
  const timelineItems = [
    {
      icon: <IconMessageCircle size={24} />,
      color: "info",
      title: "New Task",
      time: "10 hours ago",
      description:
        "A business- and employment-oriented social networking service that operates via websites and mobile apps",
    },
    {
      icon: <IconSquareCheck size={24} />,
      color: "success",
      title: "New Task",
      time: "10 hours ago",
      description:
        "An online social media and social networking service based in Menlo Park, California.",
    },
    {
      icon: <IconClock size={24} />,
      color: "secondary",
      title: "New Task",
      time: "10 hours ago",
      description:
        "A service for friends, family, and coworkers to communicate and stay connected through quick messages.",
    },
    {
      icon: <IconCircleCheck size={24} />,
      color: "primary",
      title: "New Task",
      time: "10 hours ago",
      description:
        "First large-scale video sharing website that makes it easy to watch videos online.",
    },
  ];

  return (
    <Card>
      <CardBody>
        <Container fluid>
          <Row>
            <Col xs="12">
              <div className="timeline-horizontal">
                <div className="main-timeline-section position-relative">
                  <div className="conference-center-line" />
                  <div className="h-340">
                    <Slider {...settings}>
                      {timelineItems.map((item, index) => (
                        <div className="timeline-article" key={index}>
                          <div className={`meta-date border-${item.color}`}>
                            <span
                              className={`text-light-${item.color} h-40 w-40  d-flex align-items-center justify-content-center rounded-circle timline_position`}
                            >
                              {item.icon}
                            </span>
                          </div>
                          <Card
                            className={`card-light-${item.color} content-box ${index % 2 === 0 ? "content-box-bottom" : "content-box-top"}`}
                          >
                            <CardBody>
                              <div className="d-flex justify-content-between align-items-center mb-2">
                                <h6 className={`m-0 text-${item.color}`}>
                                  {item.title}
                                </h6>
                                <span className={`text-${item.color}`}>
                                  {item.time}
                                </span>
                              </div>
                              <p className="text-secondary timeline-ellipsis">
                                {item.description}
                              </p>
                            </CardBody>
                          </Card>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </CardBody>
    </Card>
  );
};

export default TimeLine3;
