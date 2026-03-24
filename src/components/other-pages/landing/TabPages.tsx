import React from "react";
import { Badge, Button, Card, Col, Nav, Row, Tab } from "react-bootstrap";

import { HandHeartIcon, ShapesIcon, TableIcon } from "@phosphor-icons/react";
import {
  Briefcase,
  BriefcaseMetal,
  Cardholder,
  Cards,
  CaretRight,
  House,
  Notebook,
  Stack,
  WarningOctagon,
} from "phosphor-react";

const tabData = {
  dashboard: [
    {
      title: "Ecommerce",
      img: "ecommerce-dashboard.jpg",
      link: "/dashboard/ecommerce",
    },
    {
      title: "Project",
      img: "project-dashboard.jpg",
      link: "/dashboard/project",
    },
  ],
  apps: [
    { title: "Calendar", img: "calender.jpg", link: "/apps/calendar" },
    {
      title: "Profile",
      img: "profile.jpg",
      link: "/apps/profile-page/profile",
    },
    { title: "Team", img: "team.jpg", link: "/apps/team" },
    { title: "Chat", img: "chat.jpg", link: "/apps/chat" },
    { title: "Email", img: "email.jpg", link: "/apps/email-page/email" },
    { title: "Ecommerce", img: "ecommerce.jpg", link: "/apps/e-shop/product" },
    { title: "Todo", img: "to-do.jpg", link: "/apps/todo" },
    {
      title: "File manager",
      img: "file-manager.jpg",
      link: "/apps/file-manager",
    },
    { title: "Blog", img: "blog.jpg", link: "/apps/blog-page/blog" },
  ],
  ui: [
    { title: "Alert", img: "alert.jpg", link: "/ui-kits/alert" },
    { title: "Badges", img: "badges.jpg", link: "/ui-kits/badges" },
    { title: "Buttons", img: "button.jpg", link: "/ui-kits/buttons" },
    { title: "Dropdown", img: "dropdown.jpg", link: "/ui-kits/dropdown" },
    { title: "Avtar", img: "avatar.jpg", link: "/ui-kits/avatar" },
    { title: "Accordions", img: "accordions.jpg", link: "/ui-kits/accordions" },
    { title: "Progress", img: "progress.jpg", link: "/ui-kits/progress" },
    {
      title: "Notifications",
      img: "notification.jpg",
      link: "/ui-kits/notifications",
    },
  ],
  advanceUi: [
    { title: "Modals", img: "modal.jpg", link: "/advance-ui/modals" },
    {
      title: "Sweetalert",
      img: "sweet-alert.jpg",
      link: "/advance-ui/sweat-alert",
    },
    { title: "Animation", img: "animation.jpg", link: "/advance-ui/animation" },
    {
      title: "Video embaded",
      img: "video-embaded.jpg",
      link: "/advance-ui/video-embed",
    },
    { title: "Tour", img: "tour.jpg", link: "/advance-ui/tour" },
    { title: "Slider", img: "slider.jpg", link: "/advance-ui/slider" },
    { title: "Rating", img: "rating.jpg", link: "/advance-ui/rating" },
    {
      title: "Count Down",
      img: "count-down.jpg",
      link: "/advance-ui/count-down",
    },
  ],
  icons: [
    {
      title: "Fontawesome Icons",
      img: "fontawesome.jpg",
      link: "/icons/font-awesome",
    },
    { title: "Flag Icons", img: "flag.jpg", link: "/icons/flag" },
    {
      title: "Animated Icons",
      img: "animated-icon.jpg",
      link: "/icons/animated",
    },
    {
      title: "Whether Icons",
      img: "weather-icon.jpg",
      link: "/icons/weather",
    },
  ],
  table: [
    { title: "Basic Table", img: "basic-table.jpg", link: "/table/basictable" },
    { title: "Data Table", img: "data-table.jpg", link: "/table/data-table" },
    { title: "List Js", img: "list-js.jpg", link: "/table/list-js" },
    {
      title: "Advance Table",
      img: "advance-table.jpg",
      link: "/table/advance-table",
    },
  ],
  forms: [
    {
      title: "Basic input",
      img: "base-input.jpg",
      link: "/forms-elements/base-input",
    },
    {
      title: "Form Validation",
      img: "form-validation.jpg",
      link: "/forms-elements/form-validation",
    },
    {
      title: "Checkbox & Radio",
      img: "checkbox.jpg",
      link: "/forms-elements/checkbox-radio",
    },
    {
      title: "Input Mask",
      img: "input-mask.jpg",
      link: "/forms-elements/input-masks",
    },
    {
      title: "Floating Labels",
      img: "floating-label.jpg",
      link: "/forms-elements/floating-labels",
    },
    { title: "Select", img: "select.jpg", link: "/forms-elements/select2" },
    {
      title: "Range Slider",
      img: "range-slider.jpg",
      link: "/forms-elements/range-slider",
    },
    {
      title: "Clipboard",
      img: "clip-board.jpg",
      link: "/forms-elements/clipboard",
    },
    {
      title: "File Upload",
      img: "file-upload.jpg",
      link: "/forms-elements/file-upload",
    },
    {
      title: "Dual Listbox",
      img: "duel-list-box.jpg",
      link: "/forms-elements/dual-list-boxes",
    },
    {
      title: "Default Forms",
      img: "default-form.jpg",
      link: "/forms-elements/default-forms",
    },
  ],
  readyTouse: [
    {
      title: "Form Wizards",
      img: "form-wizard.jpg",
      link: "/ready-to-use/form-wizards",
    },
    {
      title: "Form Wizards 1",
      img: "form-wizard-1.jpg",
      link: "/ready-to-use/form-wizard-1",
    },
    {
      title: "Form Wizards 2",
      img: "form-wizard-2.jpg",
      link: "/ready-to-use/form-wizard-2",
    },
    {
      title: "Ready To Use Form",
      img: "ready-to-use-form.jpg",
      link: "/ready-to-use/ready-to-use-form",
    },
    {
      title: "Ready To Use table",
      img: "ready-to-use-table.jpg",
      link: "/ready-to-use/ready-to-use-tables",
    },
  ],
  auth: [
    { title: "Sign In", img: "auth-1.jpg", link: "/auth-pages/sign-in" },
    {
      title: "Sign In With Bg image",
      img: "auth-2.jpg",
      link: "/auth-pages/sign-in-with-bg-image",
    },
    { title: "Sign-up", img: "auth-3.jpg", link: "/auth-pages/sign-up" },
    {
      title: "Sign Up With Bgimage",
      img: "auth-4.jpg",
      link: "/auth-pages/sign-up-with-bg-image",
    },
    {
      title: "Password Create",
      img: "auth-5.jpg",
      link: "/auth-pages/password-create",
    },
    {
      title: "Password reset",
      img: "auth-6.jpg",
      link: "/auth-pages/password-reset",
    },
    {
      title: "Lock Screen",
      img: "auth-7.jpg",
      link: "/auth-pages/lock-screen",
    },
    {
      title: "Tow Step Verification",
      img: "auth-8.jpg",
      link: "/auth-pages/two-step-verification",
    },
  ],
  error: [
    {
      title: "Bad Request",
      img: "error-400.jpg",
      link: "/error-pages/bad-request",
    },
    {
      title: "Forbidden",
      img: "error-403.jpg",
      link: "/error-pages/forbidden",
    },
    {
      title: "Not Found",
      img: "error-404.jpg",
      link: "/error-pages/not-found",
    },
    {
      title: "Internal Server",
      img: "error-500.jpg",
      link: "/error-pages/internal-server",
    },
    {
      title: "Service Unavailable",
      img: "error-503.jpg",
      link: "/error-pages/service-unavailable",
    },
  ],
};
const TabPages: React.FC = () => {
  return (
      <section className="demos-section section-lg-space-x" id="Demo">
        <div className="container">
          <Row>
            <div className="col-xl-8">
              <div className="landing-title">
                <Badge className="title-badge mb-3" bg="light-primary">
                  <Cards
                    size={18}
                    weight="fill"
                    className="me-2 align-text-bottom"
                  />
                  Pages
                </Badge>
                <h2>
                  150 <span className="highlight-title"> pages</span>
                </h2>
                <p>
                  All pages created with unlimited features that will reduce the
                  cost, efforts and your time.
                </p>
              </div>
            </div>
          </Row>
          <Tab.Container defaultActiveKey="dashboard">
            <Row>
              <Col xl={3}>
                <div className="demos-tab-section">
                  <Nav variant="tabs" className="app-tabs-dark" id="v-bg">
                    <Nav.Item>
                      <Nav.Link eventKey="dashboard">
                        <House size={36} className="pe-2 ps-1" /> Dashboard
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="apps">
                        <Stack size={36} className="pe-2 ps-1" /> Apps
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="ui">
                        <Briefcase size={36} className="pe-2 ps-1" /> UI Kits
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="advanceUi">
                        <BriefcaseMetal size={36} className="pe-2 ps-1" />{" "}
                        Advance UI
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="icons">
                        <ShapesIcon size={36} className="pe-2 ps-1" /> Icons
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="table">
                        <TableIcon size={36} className="pe-2 ps-1" /> Tables
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="forms">
                        <Cardholder size={36} className="pe-2 ps-1" /> Forms
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="readyTouse">
                        <HandHeartIcon size={36} className="pe-2 ps-1" /> Ready
                        To Use
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="auth">
                        <Notebook size={36} className="pe-2 ps-1" /> Auth Pages
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="error">
                        <WarningOctagon size={36} className="pe-2 ps-1" /> Error
                        Pages
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </div>
              </Col>
              <Col xl={9}>
                <Tab.Content className="mt-3 pe-sm-5 pe-0">
                  {/* Dashboard tab */}
                  <Tab.Pane eventKey="dashboard">
                    <Row className="g-4">
                      {tabData.dashboard.map((item, index) => (
                        <Col sm={6} key={index}>
                          <Card className="demo-card">
                            <Card.Body>
                              <img
                                alt="demo-img"
                                className="img-fluid b-r-8"
                                src={`/images/landing/${item.img}`}
                              />
                              <div className="demo-box">
                                <h6 className="m-0 f-w-500 f-s-18">
                                  {item.title}
                                </h6>
                                <Button
                                  as="a"
                                  href={item.link}
                                  target="_blank"
                                  variant="primary"
                                  className="icon-btn b-r-22"
                                >
                                  <CaretRight weight="bold" />
                                </Button>
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </Tab.Pane>

                  {/* Apps tab */}
                  <Tab.Pane eventKey="apps">
                    <Row className="g-4">
                      {tabData.apps.map((item, index) => (
                        <Col md={6} key={index}>
                          <Card className="demo-card">
                            <Card.Body>
                              <img
                                alt="demo-img"
                                className="img-fluid b-r-8"
                                src={`/images/landing/${item.img}`}
                              />
                              <div className="demo-box">
                                <h6 className="m-0 f-w-500 f-s-18">
                                  {item.title}
                                </h6>
                                <Button
                                  as="a"
                                  href={item.link}
                                  target="_blank"
                                  variant="primary"
                                  className="icon-btn b-r-22"
                                >
                                  <CaretRight weight="bold" />
                                </Button>
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </Tab.Pane>

                  {/* UI Kits tab */}
                  <Tab.Pane eventKey="ui">
                    <Row className="g-4">
                      {tabData.ui.map((item, index) => (
                        <Col md={6} key={index}>
                          <Card className="demo-card">
                            <Card.Body>
                              <img
                                alt="demo-img"
                                className="img-fluid b-r-8"
                                src={`/images/landing/${item.img}`}
                              />
                              <div className="demo-box">
                                <h6 className="m-0 f-w-500 f-s-18">
                                  {item.title}
                                </h6>
                                <Button
                                  as="a"
                                  href={item.link}
                                  target="_blank"
                                  variant="primary"
                                  className="icon-btn b-r-22"
                                >
                                  <CaretRight weight="bold" />
                                </Button>
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </Tab.Pane>

                  {/* Advance UI tab */}
                  <Tab.Pane eventKey="advanceUi">
                    <Row className="g-4">
                      {tabData.advanceUi.map((item, index) => (
                        <Col md={6} key={index}>
                          <Card className="demo-card">
                            <Card.Body>
                              <img
                                alt="demo-img"
                                className="img-fluid b-r-8"
                                src={`/images/landing/${item.img}`}
                              />
                              <div className="demo-box">
                                <h6 className="m-0 f-w-500 f-s-18">
                                  {item.title}
                                </h6>
                                <Button
                                  as="a"
                                  href={item.link}
                                  target="_blank"
                                  variant="primary"
                                  className="icon-btn b-r-22"
                                >
                                  <CaretRight weight="bold" />
                                </Button>
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </Tab.Pane>

                  {/* Icons tab */}
                  <Tab.Pane eventKey="icons">
                    <Row className="g-4">
                      {tabData.icons.map((item, index) => (
                        <Col md={6} key={index}>
                          <Card className="demo-card">
                            <Card.Body>
                              <img
                                alt="demo-img"
                                className="img-fluid b-r-8"
                                src={`/images/landing/${item.img}`}
                              />
                              <div className="demo-box">
                                <h6 className="m-0 f-w-500 f-s-18">
                                  {item.title}
                                </h6>
                                <Button
                                  as="a"
                                  href={item.link}
                                  target="_blank"
                                  variant="primary"
                                  className="icon-btn b-r-22"
                                >
                                  <CaretRight weight="bold" />
                                </Button>
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </Tab.Pane>

                  {/* Table tab */}
                  <Tab.Pane eventKey="table">
                    <Row className="g-4">
                      {tabData.table.map((item, index) => (
                        <Col md={6} key={index}>
                          <Card className="demo-card">
                            <Card.Body>
                              <img
                                alt="demo-img"
                                className="img-fluid b-r-8"
                                src={`/images/landing/${item.img}`}
                              />
                              <div className="demo-box">
                                <h6 className="m-0 f-w-500 f-s-18">
                                  {item.title}
                                </h6>
                                <Button
                                  as="a"
                                  href={item.link}
                                  target="_blank"
                                  variant="primary"
                                  className="icon-btn b-r-22"
                                >
                                  <CaretRight weight="bold" />
                                </Button>
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </Tab.Pane>

                  {/* Form tab */}
                  <Tab.Pane eventKey="forms">
                    <Row className="g-4">
                      {tabData.forms.map((item, index) => (
                        <Col md={6} key={index}>
                          <Card className="demo-card">
                            <Card.Body>
                              <img
                                alt="demo-img"
                                className="img-fluid b-r-8"
                                src={`/images/landing/${item.img}`}
                              />
                              <div className="demo-box">
                                <h6 className="m-0 f-w-500 f-s-18">
                                  {item.title}
                                </h6>
                                <Button
                                  as="a"
                                  href={item.link}
                                  target="_blank"
                                  variant={
                                    item.title === "Dual Listbox"
                                      ? "danger"
                                      : "primary"
                                  }
                                  className="icon-btn b-r-22"
                                >
                                  <CaretRight weight="bold" />
                                </Button>
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </Tab.Pane>

                  {/* Ready To Use tab */}
                  <Tab.Pane eventKey="readyTouse">
                    <Row className="g-4">
                      {tabData.readyTouse.map((item, index) => (
                        <Col md={6} key={index}>
                          <Card className="demo-card">
                            <Card.Body>
                              <img
                                alt="demo-img"
                                className="img-fluid b-r-8"
                                src={`/images/landing/${item.img}`}
                              />
                              <div className="demo-box">
                                <h6 className="m-0 f-w-500 f-s-18">
                                  {item.title}
                                </h6>
                                <Button
                                  as="a"
                                  href={item.link}
                                  target="_blank"
                                  variant="primary"
                                  className="icon-btn b-r-22"
                                >
                                  <CaretRight weight="bold" />
                                </Button>
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </Tab.Pane>

                  {/* Auth Pages tab */}
                  <Tab.Pane eventKey="auth">
                    <Row className="g-4">
                      {tabData.auth.map((item, index) => (
                        <Col md={6} key={index}>
                          <Card className="demo-card">
                            <Card.Body>
                              <img
                                alt="demo-img"
                                className="img-fluid b-r-8"
                                src={`/images/landing/${item.img}`}
                              />
                              <div className="demo-box">
                                <h6 className="m-0 f-w-500 f-s-18">
                                  {item.title}
                                </h6>
                                <Button
                                  as="a"
                                  href={item.link}
                                  target="_blank"
                                  variant="primary"
                                  className="icon-btn b-r-22"
                                >
                                  <CaretRight weight="bold" />
                                </Button>
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </Tab.Pane>

                  {/* Error Pages tab */}
                  <Tab.Pane eventKey="error">
                    <Row className="g-4">
                      {tabData.error.map((item, index) => (
                        <Col md={6} key={index}>
                          <Card className="demo-card">
                            <Card.Body>
                              <img
                                alt="demo-img"
                                className="img-fluid b-r-8"
                                src={`/images/landing/${item.img}`}
                              />
                              <div className="demo-box">
                                <h6 className="m-0 f-w-500 f-s-18">
                                  {item.title}
                                </h6>
                                <Button
                                  as="a"
                                  href={item.link}
                                  target="_blank"
                                  variant="primary"
                                  className="icon-btn b-r-22"
                                >
                                  <CaretRight weight="bold" />
                                </Button>
                              </div>
                            </Card.Body>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </section>
  );
};

export default TabPages;
