import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { BriefcaseMetal } from "phosphor-react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb";

const ScrollbarPage: React.FC = () => {
  const badges = [
    { name: "Stella Nowland", badgeType: "primary" },
    { name: "Lola Stanford", badgeType: "secondary" },
    { name: "Caitlin Coungeau", badgeType: "success" },
    { name: "Graciela W. McClaran", badgeType: "danger" },
    { name: "Derek T. Aldridge", badgeType: "warning" },
    { name: "Annie A. Riley", badgeType: "primary" },
    { name: "Hana J. Boyd", badgeType: "danger" },
    { name: "Karen R. Pryce", badgeType: "warning" },
    { name: "Annie A. Riley", badgeType: "primary" },
    { name: "Graciela W. McClaran", badgeType: "danger" },
    { name: "Hana J. Boyd", badgeType: "warning" },
    { name: "Stella Nowland", badgeType: "primary" },
  ];

  const images = [
    "/images/profile-app/07.jpg",
    "/images/profile-app/09.jpg",
    "/images/profile-app/10.jpg",
    "/images/profile-app/07.jpg",
  ];

  return (
    <Container fluid>
      <Breadcrumbs
        mainTitle="Scrollbar"
        title="Advance UI"
        path={["Scrollbar"]}
        Icon={BriefcaseMetal}
      />
      <Row>
        <Col lg={6}>
          <Card className="mb-4">
            <Card.Header>
              <h5>Vertical Scrollbar</h5>
            </Card.Header>
            <Card.Body>
              <SimpleBar
                autoHide={true}
                className="scroll-bar vertical-scrollbar-box"
                style={{ maxHeight: "300px" }}
              >
                <h5 className="mb-2">Vertically scrollbar:</h5>
                <p>
                  To create a vertically scrollable container with detailed
                  control over the scrollbar, you can use a combination of HTML
                  and CSS.
                </p>
                <img
                  src="/images/blog-app/02.jpg"
                  alt="Vertical Scroll"
                  className="w-100 mb-3"
                />
                <ul>
                  <li>
                    <strong>Overflow Content:</strong> When content within a
                    container exceeds the container’s height.
                  </li>
                  <li>
                    <strong>Text Blocks:</strong> Displaying lengthy articles,
                    documents, or comments.
                  </li>
                  <li>
                    <strong>Data Tables:</strong> Viewing large datasets or
                    tables.
                  </li>
                </ul>
              </SimpleBar>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6}>
          <Card className="mb-4">
            <Card.Header>
              <h5>Both Scrollbars</h5>
            </Card.Header>
            <Card.Body>
              <SimpleBar
                autoHide={false}
                className="scroll-bar both-scroll"
                style={{ maxHeight: "300px" }}
              >
                <img
                  src="/images/blog-app/09.jpg"
                  alt="Both Scroll"
                  className="img-fluid"
                />
              </SimpleBar>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6}>
          <Card className="mb-4">
            <Card.Header>
              <h5>Horizontal Scrollbar</h5>
            </Card.Header>
            <Card.Body>
              <SimpleBar
                autoHide={false}
                className="scroll-bar horizontal-scrollbar"
                style={{ whiteSpace: "nowrap" }}
              >
                <div className="d-flex">
                  {images.map((src, i) => (
                    <div key={i} className="me-3 flex-0-auto">
                      <img
                        src={src}
                        alt={`Profile ${i}`}
                        className="img-fluid rounded"
                      />
                    </div>
                  ))}
                </div>
              </SimpleBar>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6}>
          <Card>
            <Card.Header>
              <h5>Badges Scrollbar</h5>
            </Card.Header>
            <Card.Body>
              <SimpleBar
                autoHide={false}
                className="list-group scroll-bar scroll-list-group"
                style={{ maxHeight: "300px" }}
              >
                <ol className="list-group">
                {badges.map((badge, index) => (
                  <li
                    key={index}
                    className="list-group-item d-flex justify-content-between align-items-center flex-wrap"
                  >
                    <div className="ms-2">{`${index + 1}. ${badge.name}`}</div>
                    <span
                      className={`badge text-bg-${badge.badgeType.toLowerCase()}`}
                    >
                      {badge.badgeType}
                    </span>
                  </li>
                ))}
              </ol>
              </SimpleBar>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ScrollbarPage;
