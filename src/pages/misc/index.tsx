import React from "react";
import { Card, Col, Container, Pagination, Row } from "react-bootstrap";

import {
  IconBooks,
  IconClipboardData,
  IconDatabaseExport,
  IconFileFilled,
  IconHome,
  IconInfoCircle,
  IconTableExport,
  IconUsers,
} from "@tabler/icons-react";
import { AppleShortcuts } from "iconoir-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const breadcrumbSets: BreadcrumbSet[] = [
  {
    className: "breadcrumb bg-light-secondary p-2",
    items: [
      {
        label: "Home",
        href: "#",
        icon: <IconHome size={18} className="me-1" />,
      },
      {
        label: "Library",
        icon: <IconBooks size={18} className="me-1" />,
        active: true,
      },
    ],
  },
  {
    className: "breadcrumb bg-light-secondary p-2",
    items: [
      { label: "Home", href: "#" },
      { label: "Library", active: true },
    ],
  },
  {
    className: "breadcrumb flex-wrap bg-light-secondary p-2",
    items: [
      {
        label: "Home",
        href: "#",
        icon: <IconHome size={18} className="me-1" />,
      },
      {
        label: "Library",
        href: "#",
        icon: <IconBooks size={18} className="me-1" />,
      },
      {
        label: "File",
        icon: <IconFileFilled size={18} className="me-1" />,
        active: true,
      },
    ],
  },
  {
    className: "breadcrumb bg-light-secondary p-2 bootstrap-breadcrumb divider",
    items: [
      { label: "Home", href: "#" },
      { label: "Library", active: true },
    ],
  },
  {
    className:
      "breadcrumb bg-light-secondary p-2 mb-0 bootstrap-breadcrumb divider1",
    items: [
      {
        label: "Home",
        href: "#",
        icon: <IconHome size={18} className="me-1" />,
      },
      {
        label: "Library",
        icon: <IconBooks size={18} className="me-1" />,
        active: true,
      },
    ],
  },
];
type BreadcrumbItem = {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  iconClass?: string;
  active?: boolean;
};
const textList = ["page1", "page2", "page3", "page4"];
const iconList = [
  <IconHome key="home" size={16} />,
  <IconBooks key="books" size={16} />,
  <IconFileFilled key="file" size={16} />,
  <IconDatabaseExport key="db" size={16} />,
];
const simplePages = ["Page 1", "Page 2", "Page 3", "Page 4", "Page 5"];
const breadcrumbItems = ["Page 1", "Page 2", "Page 3", "Page 4", "Page 5"];
const breadcrumbTexts = ["Home", "Gallery", "Library", "Web", "Data"];
const breadcrumbIcons = [
  <IconHome key="home" size={18} className="mg-e-4 f-s-18" />,
  <IconBooks key="books" size={18} className="mg-e-4 f-s-18" />,
  <IconFileFilled key="file" size={18} className="mg-e-4 f-s-18" />,
  <IconDatabaseExport key="db" size={18} className="mg-e-4 f-s-18" />,
  <IconClipboardData key="clipboard" size={18} className="mg-e-4 f-s-18" />,
];
const breadcrumbIconsOnly = [
  <IconHome key="home" size={22} className="mg-e-4 f-s-22" />,
  <IconBooks key="books" size={22} className="mg-e-4 f-s-22" />,
  <IconFileFilled key="file" size={22} className="mg-e-4 f-s-22" />,
  <IconDatabaseExport key="db" size={22} className="mg-e-4 f-s-22" />,
  <IconClipboardData key="clipboard" size={22} className="mg-e-4 f-s-22" />,
];
const iconSteps = [
  <IconUsers key="users" />,
  <IconInfoCircle key="info" />,
  <IconTableExport key="export" />,
];
const shapeSteps = [
  { label: "Cart" },
  { label: "Billing" },
  { label: "Shipping" },
  { label: "Payment" },
];
const stepNumbers = ["1", "2", "3"];
const pages = [1, 2, 3];
type BreadcrumbSet = {
  className: string;
  items: BreadcrumbItem[];
};

const MiscPage = () => {
  return (
    <Container fluid>
      <Breadcrumbs
        mainTitle="Misc"
        title="Misc Page"
        path={["Misc"]}
        Icon={AppleShortcuts}
      />

      <Row>
        <Col lg="5">
          <Card>
            <Card.Header>
              <h5>Breadcrumbs</h5>
            </Card.Header>
            <Card.Body className="app-breadcrumb">
              {breadcrumbSets.map((set, index) => (
                <div key={index}>
                  <ol className={set.className}>
                    {set.items.map((item, i) => (
                      <li
                        key={i}
                        className={`breadcrumb-item${item.active ? " active" : ""}`}
                        aria-current={item.active ? "page" : undefined}
                      >
                        {item.href ? (
                          <a
                            href={item.href}
                            className="d-flex align-content-center"
                          >
                            {item.icon ||
                              (item.iconClass && (
                                <i className={`${item.iconClass} me-2`} />
                              ))}
                            {item.label}
                          </a>
                        ) : (
                          <>
                            {item.icon ||
                              (item.iconClass && (
                                <i className={`${item.iconClass} me-2`} />
                              ))}
                            {item.label}
                          </>
                        )}
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>

        <Col lg="7">
          <Card className="equal-card">
            <Card.Header>
              <h5>Custom Breadcrumbs</h5>
            </Card.Header>
            <Card.Body>
              <div>
                <ul className="line-breadcrumbs">
                  {textList.map((text, index) => (
                    <li key={index}>
                      <a className={index < 2 ? "active" : ""} href="#">
                        {text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <ul className="breadcrumbs">
                  {textList.map((text, index) => (
                    <li key={index}>
                      <a className={index < 2 ? "active" : ""} href="#">
                        {iconList[index]} {text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <ul className="circle-breadcrumbs breadcrumbs-primary">
                  {iconList.map((icon, index) => (
                    <li key={index} className={index === 0 ? "active" : ""}>
                      <a href="#">{icon}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <ul className="simple-breadcrumbs">
                  {simplePages.map((page, index) => (
                    <li key={index} className={index === 0 ? "active" : ""}>
                      <a href="#">{page}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-4">
                <ul className="simple-shape-breadcrumbs">
                  {simplePages.map((page, index) => (
                    <li key={index} className={index < 2 ? "active" : ""}>
                      <a href="#">{page}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xl="6">
          <Card className="equal-card">
            <Card.Header className="card-header">
              <h5>Custom Breadcrumb</h5>
            </Card.Header>
            <Card.Body>
              <div className="mb-3">
                <ul className="shape-breadcrumbs">
                  {breadcrumbItems.map((item, index) => (
                    <li key={index} className={index < 2 ? "active" : ""}>
                      <a href="#">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <ul className="shape-breadcrumbs">
                  {breadcrumbItems.map((item, index) => (
                    <li key={index} className={index < 3 ? "active" : ""}>
                      <a href="#">
                        {index === 1}
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xl="6">
          <Card className="equal-card">
            <Card.Header className="card-header">
              <h5>Rounded Breadcrumb</h5>
            </Card.Header>
            <Card.Body>
              {/* Text only */}
              <div className="mb-3">
                <ul className="rounded-breadcrumbs">
                  {breadcrumbTexts.map((text, index) => (
                    <li key={index} className={index === 4 ? "active" : ""}>
                      {index !== 4 ? <a href="#">{text}</a> : text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Icon + Text */}
              <div className="mb-3">
                <ul className="rounded-breadcrumbs">
                  {breadcrumbTexts.map((text, index) => (
                    <li key={index} className={index === 4 ? "active" : ""}>
                      {index !== 4 ? (
                        <a href="#">
                          {breadcrumbIcons[index]}
                          {text}
                        </a>
                      ) : (
                        <>
                          {breadcrumbIcons[index]}
                          {text}
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Icons only */}
              <div>
                <ul className="rounded-breadcrumbs">
                  {breadcrumbIconsOnly.map((icon, index) => (
                    <li key={index} className={index === 4 ? "active" : ""}>
                      {index !== 4 ? <a href="#">{icon}</a> : icon}
                    </li>
                  ))}
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xl="6">
          <Card>
            <Card.Header className="card-header">
              <h5>Steps</h5>
            </Card.Header>
            <Card.Body>
              {/* Numbered Steps */}
              <div className="form-wizard">
                <div className="form-wizard-header">
                  <ul className="form-wizard-steps">
                    {stepNumbers.map((step, index) => (
                      <li key={index} className={index === 0 ? "active" : ""}>
                        <span className="wizard-steps">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Icon Steps */}
              <div className="form-wizard">
                <div className="form-wizard-header">
                  <ul className="form-wizard-steps">
                    {iconSteps.map((icon, index) => (
                      <li key={index} className={index === 0 ? "active" : ""}>
                        <span className="wizard-steps circle-steps">
                          {icon}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Shape Steps */}
              <div className="mb-3">
                <ul className="shape-step">
                  {shapeSteps.map((step, index) => (
                    <li key={index} className={index < 2 ? "active" : ""}>
                      <a href="#">{step.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={6}>
          <Card className="equal-card">
            <Card.Header className="card-header">
              <h5>Pagination</h5>
            </Card.Header>
            <Card.Body>
              {/* Pagination with text nav */}
              <div className="app-pagination-link">
                <Pagination className="app-pagination">
                  <Pagination.Prev className="b-r-left">
                    Previous
                  </Pagination.Prev>
                  {pages.map((page) => (
                    <Pagination.Item key={`nav1-${page}`}>
                      {page}
                    </Pagination.Item>
                  ))}
                  <Pagination.Next>Next</Pagination.Next>
                </Pagination>
              </div>

              {/* Pagination with arrows */}
              <div className="mt-3">
                <Pagination className="app-pagination">
                  <Pagination.Prev>&laquo;</Pagination.Prev>
                  {pages.map((page) => (
                    <Pagination.Item key={`nav2-${page}`}>
                      {page}
                    </Pagination.Item>
                  ))}
                  <Pagination.Next>&raquo;</Pagination.Next>
                </Pagination>
              </div>

              {/* Pagination with active + disabled */}
              <div className="mt-3">
                <Pagination className="app-pagination">
                  <Pagination.Prev className="b-r-left" disabled>
                    Previous
                  </Pagination.Prev>
                  {pages.map((page) => (
                    <Pagination.Item key={`nav3-${page}`} active={page === 2}>
                      {page}
                    </Pagination.Item>
                  ))}
                  <Pagination.Next>Next</Pagination.Next>
                </Pagination>
              </div>

              {/* Large pagination, justify end */}
              <div className="mt-3">
                <Pagination
                  size="lg"
                  className="justify-content-end app-pagination"
                >
                  <Pagination.Prev className="b-r-left" disabled>
                    «
                  </Pagination.Prev>
                  {pages.map((page) => (
                    <Pagination.Item
                      key={`nav4-${page}`}
                      active={page === 2}
                      className={page === 3 ? "d-none d-sm-block" : ""}
                    >
                      {page}
                    </Pagination.Item>
                  ))}
                  <Pagination.Next className="b-r-right">»</Pagination.Next>
                </Pagination>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MiscPage;
