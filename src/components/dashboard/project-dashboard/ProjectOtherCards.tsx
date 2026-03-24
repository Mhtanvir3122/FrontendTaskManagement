import React, { useState } from "react";
import { Badge, Card, Col, Form, Row, Tab, Table, Tabs } from "react-bootstrap";
import { Link } from "react-router-dom";

import {
  Candidate,
  candidatesData,
  clientsData,
  projectNotificationsData,
} from "@/data/dashboard/project-dashboard/OtherCardsData.ts";
import { IconMessage } from "@tabler/icons-react";

const ProjectOtherCards: React.FC = () => {
  const [candidates, setCandidates] = useState<Candidate[]>(candidatesData);

  const clients = clientsData;
  const notifications = projectNotificationsData;

  const handleCandidateToggle = (id: string) => {
    setCandidates((prev) =>
      prev.map((candidate) =>
        candidate.id === id
          ? { ...candidate, checked: !candidate.checked }
          : candidate
      )
    );
  };

  return (
    <>
      {/* Profit Cards Column */}
      <Col lg={4} xxl={2} className="order-1-lg">
        <Row>
          <Col sm={6} lg={12}>
            <Card className="project-profit-card">
              <Card.Body>
                <div className="profit-arrow">
                  <span className="bg-white text-primary h-45 w-45 d-flex-center">
                    <i className="ph-bold ph-arrow-up-right f-s-18"></i>
                  </span>
                </div>
                <span className="bg-primary h-45 w-45 d-flex-center b-r-50">
                  <i className="ph-bold ph-chart-line-up f-s-24"></i>
                </span>
                <div className="mt-3">
                  <h4 className="text-dark">22.2K+</h4>
                  <p className="f-w-500 mb-0 txt-ellipsis-1">
                    Total profit Progress
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={6} lg={12}>
            <Card className="bg-primary profit-card-2">
              <Card.Body>
                <i className="ph-duotone ph-calendar-check icon-bg"></i>
                <span className="bg-white h-50 w-50 d-flex-center b-r-50">
                  <i className="ph-duotone ph-calendar-check text-primary f-s-24"></i>
                </span>
                <div className="mt-3">
                  <h4 className="text-white">15+</h4>
                  <p className="f-w-500 mb-0 txt-ellipsis-1">Active Projects</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>

      {/* Online Candidates Column */}
      <Col md={7} lg={4}>
        <div className="header-box">
          <h5>Online Candidates</h5>
        </div>
        <Card>
          <Card.Body className="px-2 pt-2 equal-card">
            <div className="table-responsive app-scroll">
              <Table className="table-bottom-border align-middle mb-0">
                <tbody>
                  {candidates.map((candidate) => (
                    <tr key={candidate.id} className="border-0">
                      <td>
                        <div className="d-flex align-items-center">
                          <div
                            className={`h-40 w-40 d-flex-center b-r-12 overflow-hidden ${candidate.bgColor}`}
                          >
                            <img
                              alt="candidate"
                              className="img-fluid"
                              src={candidate.avatar}
                            />
                          </div>
                          <div className="flex-grow-1 ps-2">
                            <div className="fw-medium txt-ellipsis-1">
                              {candidate.name}
                            </div>
                            <div className="text-muted f-s-12 txt-ellipsis-1">
                              {candidate.role}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <Badge bg="light-primary" className="f-s-12 f-w-700">
                          {candidate.points}
                        </Badge>
                      </td>
                      <td>
                        <Form.Check
                          type="switch"
                          id={`tableCheck-${candidate.id}`}
                          className="form-check-primary"
                          label={
                            <span className="f-w-500">
                              {candidate.checked ? "Remove" : "Add"}
                            </span>
                          }
                          checked={candidate.checked}
                          onChange={() => handleCandidateToggle(candidate.id)}
                        />
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td className="pb-0 text-nowrap">Add New Candidates</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </Col>

      {/* Client List Column */}
      <Col sm={6} lg={4} xxl={3}>
        <div className="header-box d-flex justify-content-between align-items-center">
          <h5>Client List</h5>
        </div>
        <Card>
          <Card.Body>
            <Tabs
              defaultActiveKey="client"
              id="client-tabs"
              className="app-tabs-primary border-0 flex-nowrap overflow-auto"
            >
              <Tab eventKey="client" title="Client" />
              <Tab eventKey="active" title="Active" />
              <Tab eventKey="deactivate" title="Deactivate" />
            </Tabs>
            <ul className="box-list client-list">
              {clients.map((client) => (
                <li
                  key={client.id}
                  className="d-flex align-items-center justify-content-between"
                >
                  <div
                    className={`h-45 w-45 d-flex-center b-r-12 overflow-hidden ${client.bgColor} flex-shrink-0`}
                  >
                    <img
                      alt="client"
                      className="img-fluid"
                      src={client.avatar}
                    />
                  </div>
                  <div className="ms-2 flex-grow-1">
                    <p className="mb-0 f-w-500 f-s-16 txt-ellipsis-1">
                      {client.name}
                    </p>
                    <p className="mb-0 f-s-12 txt-ellipsis-1">
                      {client.points}
                    </p>
                  </div>
                  <span className="h-30 w-30 d-flex-center b-r-50">
                    <i className="ti ti-chevron-right text-primary f-s-20"></i>
                  </span>
                </li>
              ))}
            </ul>
          </Card.Body>
        </Card>
      </Col>

      {/* Notifications Column */}
      <Col sm={6} lg={4} xxl={3}>
        <ul className="box-list">
          <li className="d-flex justify-content-between align-items-center mt-3">
            <h5 className="mb-0 txt-ellipsis-1 flex-grow-1">Notifications</h5>
            <Badge bg="primary">3 New</Badge>
          </li>
          {notifications.map((notification) => (
            <li
              key={notification.id}
              className="d-flex align-items-center justify-content-between"
            >
              <div
                className={`h-40 w-40 d-flex-center b-r-12 overflow-hidden ${notification.bgColor} text-white flex-shrink-0`}
              >
                {notification.isInitials ? (
                  notification.avatar
                ) : (
                  <img
                    alt="notification"
                    className="img-fluid"
                    src={notification.avatar as string}
                  />
                )}
              </div>
              <div className="ms-2 flex-grow-1">
                <p className="mb-0 f-w-500 f-s-18 txt-ellipsis-1">
                  {notification.title}
                </p>
                <p className="mb-0 f-s-12 txt-ellipsis-1">
                  {notification.time}
                </p>
              </div>
              <Link
                to="/apps/chat"
                target="_blank"
                rel="noreferrer"
                className="text-light-success h-45 w-45 d-flex-center b-r-50"
              >
                <IconMessage className="f-s-20" />
              </Link>
            </li>
          ))}
        </ul>
      </Col>
    </>
  );
};

export default ProjectOtherCards;
