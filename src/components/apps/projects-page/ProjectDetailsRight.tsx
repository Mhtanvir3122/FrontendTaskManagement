import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import {
  projectDetails1,
  projectFiles,
} from "@/data/app/projectapp/ProjectDetailData.ts";

const ProjectDetailsRight = () => {
  return (
    <Col md={6} xxl={3} className="order-md-1 order-xxl-3">
      <Card>
        <Card.Header>
          <h5>About Project</h5>
        </Card.Header>
        <Card.Body>
          <div className="mb-3">
            <h6>Project Description</h6>
            <p className="text-muted">{projectDetails1.description}</p>
          </div>
          <div className="mb-3">
            <h6>Task Information</h6>
            <p className="text-muted">{projectDetails1.taskInfo}</p>
          </div>
          <div className="mb-3">
            <h6>Background Information</h6>
            <p className="text-muted">{projectDetails1.backgroundInfo}</p>
          </div>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <h5 className="header-title-text">Data Folder & Files</h5>
          <div className="data-list-box mt-3">
            {projectFiles.map((file, index) => (
              <div className="filebox" key={index}>
                <div className="d-flex align-items-center position-relative">
                  <div className="position-absolute start-0">
                    <img
                      src={file.icon}
                      className="w-35 h-35"
                      alt={file.name}
                    />
                  </div>
                  <div className="flex-grow-1 mg-s-40">
                    <h6 className="mb-0">{file.name}</h6>
                    <p className="text-secondary mb-0">{file.count}</p>
                  </div>
                  <p className="file-data text-secondary f-w-500 mb-0">
                    {file.size}
                  </p>
                </div>
              </div>
            ))}
            <div>
              <Link
                to="/apps/file-manager"
                role="button"
                className="btn btn-primary w-100 rounded"
              >
                View More
              </Link>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProjectDetailsRight;
