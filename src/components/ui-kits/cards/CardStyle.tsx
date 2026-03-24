import { Card, Col, Row } from "react-bootstrap";

import { HeartStraight } from "phosphor-react";

const topBottomImageCards = [
  {
    id: "card-1",
    position: "top" as const,
    image: "/images/blog-app/06.jpg",
    title: "Card Title",
    content:
      "This is a wider card with supporting text below as a natural lead-in to.",
  },
  {
    id: "card-2",
    position: "bottom" as const,
    image: "/images/blog-app/02.jpg",
    title: "Card Title",
    content:
      "This is a wider card with supporting text below as a natural lead-in to additional This content.",
  },
];

const avatarImages = [
  "/images/avatar/4.png",
  "/images/avatar/1.png",
  "/images/avatar/2.png",
  "/images/avatar/3.png",
];

const avatarBgClasses = [
  "text-bg-danger",
  "text-bg-success",
  "text-bg-warning",
  "text-bg-info",
];

const listItems = ["An item", "A second item", "A third item", "A Fourth item"];

const CardStyle = () => {
  return (
    <>
      {topBottomImageCards.map(({ id, position, image, title, content }) => (
        <Col md={6} xxl={4} key={id}>
          <Card className="hover-effect">
            {position === "top" && (
              <Card.Img src={image} className="card-img-top" alt="..." />
            )}
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{content}</Card.Text>
              <Card.Text>
                <small className="text-body-secondary">
                  Last updated 3 min&#39;s ago
                </small>
              </Card.Text>
            </Card.Body>
            {position === "bottom" && (
              <Card.Img src={image} className="card-img-bottom" alt="..." />
            )}
          </Card>
        </Col>
      ))}

      <Col xxl="4">
        <Row>
          <Col xxl={12} md={6}>
            <Card className="hover-effect">
              <Card.Header>
                <h6 className="mb-0 mt-2 f-w-600">My Profile</h6>
              </Card.Header>
              <Card.Body>
                <p>
                  I am a keen, hard working, reliable and excellent time keeper.
                  I am a bright and receptive person
                </p>
              </Card.Body>
              <Card.Footer>
                <Row>
                  <div className="col-6">
                    <HeartStraight
                      size={16}
                      weight="fill"
                      className="text-danger"
                    />
                    <span>60 likes</span>
                  </div>
                  <div className="col-6">
                    <ul className="avatar-group float-end">
                      {avatarImages.map((src, i) => (
                        <li
                          key={i}
                          className={`h-25 w-25 d-flex-center b-r-50 ${avatarBgClasses[i]} b-2-light position-relative`}
                          data-bs-toggle="tooltip"
                          data-bs-title="Sabrina Torres"
                        >
                          <Card.Img
                            src={src}
                            alt=""
                            className="img-fluid b-r-50 overflow-hidden"
                          />
                        </li>
                      ))}
                      <li
                        className="text-bg-primary h-25 w-25 d-flex-center b-r-50"
                        data-bs-toggle="tooltip"
                        data-bs-title="5 More"
                      >
                        5+
                      </li>
                    </ul>
                  </div>
                </Row>
              </Card.Footer>
            </Card>
          </Col>
          <Col xxl={12} md={6}>
            <Card className="hover-effect">
              <Card.Header>Featured</Card.Header>
              <ul className="list-group list-group-flush">
                {listItems.map((item, idx) => (
                  <li key={idx} className="list-group-item">
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </Col>
        </Row>
      </Col>

      <Col xl="6">
        <Card className=" mb-3 hover-effect">
          <Row>
            <Col md={6} xl={4}>
              <Card.Img
                src="/images/blog-app/08.jpg"
                alt="..."
                width="100%"
                height="100%"
              />
            </Col>
            <Col md={6} xl={8}>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Card.Text>
                  <small className="text-body-secondary">
                    Last updated 3 min&#39;s ago
                  </small>
                </Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Col>
    </>
  );
};

export default CardStyle;
