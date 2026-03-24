import { useEffect, useState } from "react";
import { Badge, Button, Card, Col, Image, Tab, Tabs } from "react-bootstrap";

import {
  activities,
  monthActivities,
  weekActivities,
} from "@/data/app/settingapp/SettingAppData.tsx";
import GLightbox from "glightbox";
import "glightbox/dist/css/glightbox.min.css";

const ActivityTimeline = () => {
  const [activeTab, setActiveTab] = useState("today");

  useEffect(() => {
    const lightbox = GLightbox({ selector: ".glightbox" });
    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <Card className="equal-card month-timeline">
      <Card.Header>
        <div className="activity-time">
          <h5 className="mb-0 flex-grow-1">Activity</h5>
          <Tabs
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k || "today")}
            className="nav-tabs tab-light-primary mb-0"
          >
            <Tab eventKey="today" title="Today" />
            <Tab eventKey="week" title="Week" />
            <Tab eventKey="month" title="Month" />
          </Tabs>
        </div>
      </Card.Header>

      <Card.Body>
        {activeTab === "today" && (
          <ul className="app-timeline-box activity-timeline">
            {activities.map((activity) => (
              <li className="timeline-section" key={activity.id}>
                <div className="timeline-icon">
                  <span
                    className={`${activity.iconColor} h-35 w-35 d-flex-center b-r-50`}
                  >
                    {activity.iconText}
                    {activity.icon && (
                      <i className={`${activity.icon} f-s-18`}></i>
                    )}
                  </span>
                </div>
                <div className="timeline-content">
                  <div className="f-s-16">
                    <span className="text-primary f-s-16 mb-0">
                      {activity.username && `${activity.username} `}
                      <span className="text-secondary ms-2">
                        {activity.activity}{" "}
                        <span className="badge text-outline-primary me-2">
                          {activity.post}
                        </span>
                      </span>
                    </span>
                  </div>

                  {activity.content && (
                    <div className="timeline-border-box me-2 ms-0 mt-3">
                      <h6 className="mb-0">{activity.content}</h6>
                      <p className="mb-4 text-secondary">{activity.content}</p>
                      {activity.badges?.map((badge, index) => (
                        <Badge key={index} className="me-2">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {Array.isArray(activity.images) &&
                    activity.images.length > 0 && (
                      <div className="app-timeline-info-text timeline-border-box me-2 ms-0 mt-3 p-3">
                        <div className="row">
                          {activity.images.map((img, index) => (
                            <Col sm={4} key={index}>
                              <a
                                href={img}
                                className="glightbox img-hover-zoom"
                                data-glightbox="type: image; zoomable: true;"
                              >
                                <Image
                                  src={img}
                                  className="img-fluid rounded timeline-img"
                                  alt={`Image ${index + 1}`}
                                  fluid
                                />
                              </a>
                            </Col>
                          ))}
                        </div>
                      </div>
                    )}

                  <p className="f-w-500 mt-2 mb-0">
                    <i className="ph ph-clock me-1 align-middle"></i>
                    {activity.time}
                  </p>

                  {activity.actions.length > 0 && (
                    <div className="mt-3">
                      {activity.actions.map((action, index) => (
                        <Button
                          key={index}
                          variant={action.color}
                          className="me-2"
                        >
                          {action.label}
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}

        {activeTab === "week" && (
          <ul className="app-timeline-box activity-timeline">
            {weekActivities.map((activity) => (
              <li className="timeline-section" key={activity.id}>
                <div className="timeline-icon">
                  <span
                    className={`h-35 w-35 d-flex-center b-r-50 ${activity.iconColor}`}
                  >
                    {activity.iconText}
                  </span>
                </div>
                <div className="timeline-content">
                  <div className="f-s-16">
                    <span className="text-secondary">
                      <span className="f-s-16 mb-0">{activity.name}</span>{" "}
                      {activity.action}{" "}
                      <Badge className="me-2">{activity.post}</Badge> post
                    </span>
                  </div>

                  {activity.content && (
                    <div className="timeline-border-box me-2 ms-0 mt-3">
                      <h6 className="mb-0">{activity.content}</h6>
                      <p className="mb-4 text-secondary">
                        {activity.description}
                      </p>
                      {activity.reactions && (
                        <span className="badge text-outline-success me-2 timeline-badge">
                          {activity.reactions}
                        </span>
                      )}
                      {activity.replies && (
                        <span className="badge text-outline-success me-2">
                          {activity.replies}
                        </span>
                      )}
                    </div>
                  )}

                  <div className="mt-3">
                    <Button variant="primary">{activity.buttonText1}</Button>
                    <Button variant="outline-primary" className="ms-2">
                      {activity.buttonText2}
                    </Button>
                  </div>

                  <p className="f-w-500 mt-2 mb-0">
                    <i className="ph ph-clock me-1 align-middle"></i>
                    {activity.time}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}

        {activeTab === "month" && (
          <ul className="app-timeline-box activity-timeline">
            {monthActivities.map((item) => (
              <li key={item.id} className="timeline-section">
                <div className="timeline-icon">
                  {item.icon.length === 1 ? (
                    <span className="text-light-primary h-35 w-35 d-flex-center b-r-50">
                      {item.icon}
                    </span>
                  ) : (
                    <span className="text-light-info h-35 w-35 d-flex-center b-r-50">
                      <i className={`ph-duotone ${item.icon} f-s-18`} />
                    </span>
                  )}
                </div>
                <div className="timeline-content">
                  {item.user && (
                    <div className="f-s-16">
                      <span className="text-secondary">
                        <span className="text-success f-s-16 mb-0">
                          {item.user}
                        </span>{" "}
                        {item.reaction}{" "}
                        <span className="badge text-outline-success me-2">
                          {item.post}
                        </span>{" "}
                        post
                      </span>
                    </div>
                  )}

                  {item.message && (
                    <div className="timeline-border-box me-2 ms-0 mt-3">
                      <h6 className="mb-0">Need a feature</h6>
                      <p className="mb-4 text-secondary">{item.message}</p>
                      {item.badges?.map((badge, index) => (
                        <span
                          key={index}
                          className="badge text-outline-success me-2 timeline-badge"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  )}

                  {item.images && (
                    <div className="app-timeline-info-text timeline-border-box me-2 ms-0 mt-3 p-3">
                      <div className="row">
                        {item.images.map((image, index) => (
                          <div key={index} className="col-sm-4">
                            <a
                              href={image}
                              className="glightbox img-hover-zoom"
                              data-glightbox="type: image; zoomable: true;"
                            >
                              <Image
                                src={image}
                                className="w-100 rounded"
                                alt={`Image ${index + 1}`}
                                fluid
                              />
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {item.buttons && (
                    <div className="mt-3 d-flex gap-2">
                      {item.buttons.map((button, index) => (
                        <Button key={index} className={button.class}>
                          {button.label}
                        </Button>
                      ))}
                    </div>
                  )}

                  <p className="f-w-500 mt-2 mb-0">
                    <i className="ph ph-clock me-1 align-middle"></i>
                    {item.time}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </Card.Body>
    </Card>
  );
};

export default ActivityTimeline;
