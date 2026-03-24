import { useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";

import {
  IconBrandHipchat,
  IconDotsVertical,
  IconHeart,
  IconSend,
} from "@tabler/icons-react";
import "glightbox/dist/css/glightbox.min.css";

const imageUrls = [
  "/images/profile-app/19.jpg",
  "/images/profile-app/27.jpg",
  "/images/profile-app/28.jpg",
  "/images/profile-app/29.jpg",
  "/images/profile-app/30.jpg",
];

const FeaturedPost = () => {
  useEffect(() => {
    let lightbox: { destroy: () => void } | null = null;

    import("glightbox").then((mod) => {
      lightbox = mod.default({
        selector: ".glightbox",
        touchNavigation: true,
        loop: true,
        width: "90vw",
        height: "90vh",
      });
    });

    return () => {
      if (lightbox) lightbox.destroy();
    };
  }, []);

  return (
    <Card>
      <Card.Body>
        <div className="d-flex align-items-center">
          <div className="h-45 w-45 d-flex justify-content-center align-items-center rounded-circle overflow-hidden bg-danger">
            <img
              src="/images/avatar/16.png"
              alt="Avatar"
              className="img-fluid h-45 w-45 img-cover"
            />
          </div>
          <div className="flex-grow-1 ps-2 pe-2">
            <div className="fw-semibold">Heli Walsh</div>
            <div className="text-muted small">3 Week</div>
          </div>
          <div>
            <IconDotsVertical size={18} />
          </div>
        </div>

        <div className="post-div">
          <Row className="g-2 my-2">
            {imageUrls.map((url, idx) => (
              <Col key={idx} xs={imageUrls.length > 2 && idx < 2 ? 6 : 4}>
                <a
                  href={url}
                  className="glightbox"
                  data-glightbox="type: image; zoomable: true"
                >
                  <img
                    src={url}
                    alt={`Image ${idx + 1}`}
                    className="w-100 rounded"
                  />
                </a>
              </Col>
            ))}
          </Row>

          <p className="text-muted">
            There&#39;s nothing like fresh flowers!......🌸🌼🌻
          </p>

          <div className="d-flex align-items-center mt-2">
            <IconHeart size={20} className="me-2" />
            <IconBrandHipchat size={20} className="me-2" />
            <IconSend size={20} className="me-2" />
            <p className="mb-0 text-secondary ms-2">2k Likes</p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default FeaturedPost;
