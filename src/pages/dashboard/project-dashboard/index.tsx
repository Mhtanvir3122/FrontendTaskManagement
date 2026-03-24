import { Container, Row } from "react-bootstrap";

import ProjectOtherCards from "@/components/dashboard/project-dashboard/ProjectOtherCards.tsx";
import ProjectOverview from "@/components/dashboard/project-dashboard/ProjectOverview.tsx";
import ProjectTopCards from "@/components/dashboard/project-dashboard/ProjectTopCards.tsx";

const Index = () => {
  return (
    <Container fluid>
      <Row>
        <ProjectTopCards />
        <ProjectOverview />
        <ProjectOtherCards />
      </Row>
    </Container>
  );
};

export default Index;
