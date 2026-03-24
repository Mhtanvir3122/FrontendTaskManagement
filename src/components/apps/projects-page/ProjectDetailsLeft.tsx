import { Badge, Card, Col, Table } from "react-bootstrap";

import {
  projectDetails,
  teamMembers,
} from "@/data/app/projectapp/ProjectDetailData.ts";

const ProjectDetailsLeft = () => {
  return (
    <Col md={6} xxl={3} className="order-md-2 order-xxl-1">
      <Card>
        <Card.Header>
          <h5>Project Details</h5>
        </Card.Header>
        <Card.Body>
          <Table borderless className="project-details-table align-middle mb-0">
            <tbody>
              <tr>
                <td>
                  <strong>Name</strong>
                </td>
                <td className="text-end">{projectDetails.name}</td>
              </tr>
              <tr>
                <td>
                  <strong>Manager</strong>
                </td>
                <td className="text-end">{projectDetails.manager}</td>
              </tr>
              <tr>
                <td>
                  <strong>Start Date</strong>
                </td>
                <td className="text-end text-primary">
                  {projectDetails.startDate}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>End Date</strong>
                </td>
                <td className="text-end text-danger">
                  {projectDetails.endDate}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Pricing</strong>
                </td>
                <td className="text-end">
                  <h6>{projectDetails.pricing}</h6>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Assigned By</strong>
                </td>
                <td className="text-end">
                  <div className="avatar-group justify-content-end">
                    <span
                      className="text-bg-danger h-30 w-30 d-flex-center rounded-circle"
                      data-bs-toggle="tooltip"
                      data-bs-title="Everlee Lambert"
                    >
                      A
                    </span>
                    <span
                      className="text-bg-dark h-30 w-30 d-flex-center rounded-circle"
                      data-bs-toggle="tooltip"
                      data-bs-title="Hunter Scott"
                    >
                      CD
                    </span>
                    <span
                      className="text-bg-warning h-30 w-30 d-flex-center rounded-circle"
                      data-bs-toggle="tooltip"
                      data-bs-title="Hunter Scott"
                    >
                      XYZ
                    </span>
                    <span
                      className="text-bg-secondary h-25 w-25 d-flex-center rounded-circle"
                      data-bs-toggle="tooltip"
                      data-bs-title="2 More"
                    >
                      2+
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Status</strong>
                </td>
                <td className="text-end">
                  <Badge bg="primary" className="bg-light-primary text-primary">
                    {projectDetails.status}
                  </Badge>
                </td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      <Card>
        <Card.Header>
          <h5 className="header-title-text">Project Team</h5>
        </Card.Header>
        <Card.Body>
          <div className="project-team-list">
            {teamMembers.map((member, index) => (
              <div className="d-flex align-items-center mt-3" key={index}>
                {member.imgSrc ? (
                  <div
                    className={`bg-primary h-35 w-35 d-flex-center rounded overflow-hidden`}
                  >
                    <img
                      src={member.imgSrc}
                      alt={member.name}
                      className="img-fluid"
                    />
                  </div>
                ) : (
                  <span
                    className={`${member.color} h-35 w-35 d-flex-center rounded`}
                  >
                    {member.initial}
                  </span>
                )}
                <div className="flex-grow-1 ps-2">
                  <h6 className="fs-6 mb-0 fw-medium">{member.name}</h6>
                  <p className="text-muted f-s-13 mb-0 f-w-500">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProjectDetailsLeft;
