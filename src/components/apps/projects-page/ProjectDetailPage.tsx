import { Container, Row } from "react-bootstrap";

import { StackIcon } from "@phosphor-icons/react";
import "glightbox/dist/css/glightbox.min.css";

import ProjectDetailsCenter from "@/components/apps/projects-page/ProjectDetailsCenter.tsx";
import ProjectDetailsLeft from "@/components/apps/projects-page/ProjectDetailsLeft.tsx";
import ProjectDetailsRight from "@/components/apps/projects-page/ProjectDetailsRight.tsx";
import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const ProjectDetails = () => {
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Project Details"
          title="Apps"
          path={["Project App", "Project Details"]}
          Icon={StackIcon}
        />
        <Row>
          <ProjectDetailsLeft />
          <ProjectDetailsCenter />
          <ProjectDetailsRight />
        </Row>
      </Container>
    </div>
  );
};

export default ProjectDetails;
