import { useEffect } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

import { projectActivities } from "@/data/app/projectapp/ProjectDetailData.ts";
import {
  IconCamera,
  IconMicrophone,
  IconMoodSmileBeam,
  IconPaperclip,
  IconSend,
} from "@tabler/icons-react";
import "glightbox/dist/css/glightbox.min.css";
import { ImageSquare } from "phosphor-react";

const ProjectDetailsCenter = () => {
  useEffect(() => {
    let lightbox: { destroy: () => void } | null = null;

    import("glightbox").then((mod) => {
      lightbox = mod.default({
        selector: ".glightbox",
        touchNavigation: true,
        loop: true,
        zoomable: true,
        autoplayVideos: true,
      });
    });

    return () => {
      if (lightbox) lightbox.destroy();
    };
  }, []);

  return (
    <Col xxl={6} className="order-xxl-2">
      <Card>
        <Card.Header>
          <h5>Project Activity</h5>
        </Card.Header>
        <Card.Body>
          <ul className="app-timeline-box">
            {projectActivities.map((activity) => (
              <li className="timeline-section" key={activity.id}>
                <div className="timeline-icon">
                  <span
                    className={`text-light-${activity.id === 2 ? "info" : activity.id === 3 ? "success" : activity.id === 4 ? "danger" : "primary"} h-35 w-35 d-flex-center rounded-circle`}
                  >
                    {activity.id === 2 ? (
                      <ImageSquare size={18} weight="duotone" />
                    ) : (
                      activity.icon
                    )}
                  </span>
                </div>
                <div className="timeline-content pt-0">
                  <div className="d-flex f-s-16">
                    <p
                      className={`text-${activity.id === 2 ? "info" : activity.id === 3 ? "success" : activity.id === 4 ? "danger" : "primary"} f-s-16 mb-0`}
                    >
                      {activity.user}
                    </p>
                    {activity.badge && (
                      <span className="text-secondary ms-2">
                        {activity.action}{" "}
                        <span className="badge bg-light-primary text-primary me-2">
                          {activity.badge}
                        </span>
                      </span>
                    )}
                  </div>
                  <p className="">{activity.time}</p>

                  {activity.images && (
                    <div className="app-timeline-info-text timeline-border-box me-2 ms-0 mt-3 p-3">
                      <Row>
                        {activity.images.map((image, index) => (
                          <Col sm={4} key={index}>
                            <a
                              href={image}
                              className="glightbox img-hover-zoom"
                              data-glightbox="type: image; zoomable: true;"
                            >
                              <img
                                src={image}
                                className="w-100 rounded"
                                alt=""
                              />
                            </a>
                          </Col>
                        ))}
                      </Row>
                    </div>
                  )}

                  {activity.feature && (
                    <div className="timeline-border-box me-2 ms-0 mt-3">
                      <h6 className="mb-0">{activity.feature.title}</h6>
                      <p className="mb-4 text-secondary">
                        {activity.feature.description}
                      </p>
                      <span className="badge bg-light-primary text-success me-2 timeline-badge">
                        {activity.feature.reactions}
                      </span>
                      <span className="badge bg-light-primary text-success me-2">
                        {activity.feature.replies}
                      </span>
                    </div>
                  )}

                  {activity.buttons && (
                    <div>
                      <Button variant="danger" className="me-2">
                        Accept
                      </Button>
                      <Button variant="outline-danger">Reject</Button>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Card.Body>
        <Card.Footer>
          <div className="d-flex">
            <div className="flex-grow-1">
              <div className="input-group">
                <span className="input-group-text ms-2 me-2 rounded">
                  <a
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    data-bs-original-title="Emoji"
                    role="button"
                  >
                    <IconMoodSmileBeam size={20} />
                  </a>
                </span>
                <Form.Control
                  type="text"
                  className="rounded"
                  placeholder="Type a message"
                  aria-label="Recipient's username"
                />
                <Button
                  className="btn btn-sm btn-primary ms-2 me-2 rounded"
                  type="button"
                >
                  <IconSend size={20} /> Send
                </Button>
              </div>
            </div>
            <div className="ms-2 d-none d-sm-block">
              <a
                className="text-light-secondary h-35 w-35 d-flex-center rounded ms-1"
                role="button"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-original-title="Microphone"
              >
                <IconMicrophone size={20} />
              </a>
            </div>
            <div className="d-none d-sm-block">
              <a
                className="text-light-secondary h-35 w-35 d-flex-center rounded ms-1"
                role="button"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-original-title="Camera"
              >
                <IconCamera size={20} />
              </a>
            </div>
            <div className="d-none d-sm-block">
              <a
                className="text-light-secondary h-35 w-35 d-flex-center rounded ms-1"
                role="button"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                data-bs-original-title="Paperclip"
              >
                <IconPaperclip size={20} />
              </a>
            </div>
            <div>
              <div className="btn-group dropdown-icon-none d-sm-none">
                <a
                  className="h-35 w-35 d-flex-center ms-1"
                  role="button"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="true"
                  aria-expanded="false"
                >
                  <i className="ti ti-dots-vertical"></i>
                </a>
                <ul
                  className="dropdown-menu"
                  data-popper-placement="bottom-start"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="ti ti-microphone"></i>{" "}
                      <span className="f-s-13">Microphone</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="ti ti-camera-plus"></i>{" "}
                      <span className="f-s-13">Camera</span>
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="ti ti-paperclip"></i>{" "}
                      <span className="f-s-13">Paperclip</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default ProjectDetailsCenter;
