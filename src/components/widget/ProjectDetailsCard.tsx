import { Button, Card, Col, Form, Row } from "react-bootstrap";

import {
  projectTasksLeft,
  projectTasksRight,
} from "@/data/dashboard/project-dashboard/TopCardsData.ts";
import {
  IconCircleCheck,
  IconClockHour5,
  IconRefresh,
} from "@tabler/icons-react";

type ProjectDetailsCardProps = {
  isWidgetPage?: boolean;
};

const ProjectDetailsCard = ({
  isWidgetPage = false,
}: ProjectDetailsCardProps) => {
  return (
    <Card
      className={`equal-card project-data-container ${isWidgetPage ? "widget-card" : ""}`}
    >
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <h6 className="mb-0">Project</h6>
          <Form className="app-form flex-shrink-0">
            <Form.Select className="custom-form-select">
              <option>Filter</option>
              <option value="1">Fashion</option>
              <option value="2">Books</option>
              <option value="3">Sports</option>
              <option value="4">Fitness</option>
            </Form.Select>
          </Form>
        </div>

        <Row className={`mt-4 project-row`}>
          <Col sm={4}>
            <Card className="project-status-card mb-0 text-center bg-primary text-white shadow rounded p-3">
              <div className="bg-white status-icon rounded-circle d-flex-center w-45 h-45">
                <IconClockHour5 size={20} className="text-primary" />
              </div>
              <p className="mb-0 text-white text-truncate">Running</p>
            </Card>
          </Col>

          <Col sm={4}>
            <Card className="project-status-card mb-0 text-center bg-success text-white shadow rounded p-3">
              <div className="bg-white status-icon rounded-circle d-flex-center w-45 h-45">
                <IconCircleCheck size={20} className="text-success" />
              </div>
              <p className="mb-0 text-white text-truncate">Completed</p>
            </Card>
          </Col>

          <Col sm={4}>
            <Card className="project-status-card mb-0 text-center bg-danger text-white shadow rounded p-3">
              <div className="bg-white status-icon rounded-circle d-flex-center w-45 h-45">
                <IconRefresh size={20} className="text-danger" />
              </div>
              <p className="mb-0 text-white text-truncate">Pending</p>
            </Card>
          </Col>
        </Row>

        <Row className={` ${isWidgetPage ? "mt-3" : "mt-4"}`}>
          <Col sm={6}>
            <ul className="list-unstyled">
              {projectTasksLeft.map((task) => (
                <li
                  key={task.id}
                  className={`d-flex align-items-center justify-content-between ${
                    task.id === 1 ? "mt-0" : "mt-3"
                  }`}
                >
                  <div
                    className={`bg-${task.iconBg} d-flex-center p-1 w-30 h-30 b-r-8 flex-shrink-0`}
                  >
                    <img alt="avatar" className="img-fluid" src={task.icon} />
                  </div>
                  <div className="ms-2 flex-grow-1">
                    <p className="text-dark-800 mb-0 f-w-500 f-s-15 txt-ellipsis-1">
                      {task.title}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Col>
          <Col sm={6}>
            <ul className="list-unstyled">
              {projectTasksRight.map((task) => (
                <li
                  key={task.id}
                  className={`d-flex align-items-center justify-content-between ${
                    task.id === 4 ? "mt-0" : "mt-3"
                  }`}
                >
                  <div
                    className={`bg-${task.iconBg} d-flex-center p-1 w-30 h-30 b-r-8 flex-shrink-0`}
                  >
                    <img alt="avatar" className="img-fluid" src={task.icon} />
                  </div>
                  <div className="ms-2 flex-grow-1">
                    <p className="text-dark-800 mb-0 f-w-500 f-s-15 txt-ellipsis-1">
                      {task.title}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Col>
        </Row>

        {isWidgetPage && (
          <div className="mt-3">
            <Button variant="primary" className="w-100 btn-sm">
              View all
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProjectDetailsCard;
