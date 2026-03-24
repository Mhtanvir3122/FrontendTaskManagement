import { Col, Container, Row } from "react-bootstrap";

import { SquaresFour } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";
import AiCommerceCard from "@/components/widget/AiCommerceCard.tsx";
import ProfitOverviewCard from "@/components/widget/ProfitOverviewCard.tsx";
import ProjectDetailsCard from "@/components/widget/ProjectDetailsCard.tsx";
import ProjectMeetingCard from "@/components/widget/ProjectMeetingCard.tsx";
import SaleOfferCard from "@/components/widget/SaleOfferCard.tsx";
import TotalEarningCard from "@/components/widget/TotalEarningCard.tsx";
import TotalRevenueCard from "@/components/widget/TotalRevenueCard.tsx";
import YearlyEarningCard from "@/components/widget/YearlyEarningCard.tsx";

const WidgetPage = () => {
  return (
    <Container fluid>
      <Row>
        <Breadcrumbs
          mainTitle="Widget"
          title="Widget"
          path={["Widget"]}
          Icon={SquaresFour}
        />
        <Col sm="6" lg="4" xxl="3">
          <ProfitOverviewCard />
        </Col>
        <Col sm="6" lg="4" xxl="3">
          <YearlyEarningCard chartHeight={160} />
        </Col>
        <Col md="6" xxl="4" className="order-1-sm">
          <ProjectDetailsCard isWidgetPage />
        </Col>
        <Col sm="6" lg="4" xxl="2">
          <AiCommerceCard isWidgetPage />
        </Col>
        <Col sm="6" lg="4" xxl="3">
          <ProjectMeetingCard />
        </Col>
        <Col md="6" xxl="3" className="order-2-sm">
          <TotalRevenueCard />
        </Col>
        <Col sm="6" lg="4" xxl="3">
          <SaleOfferCard />
        </Col>
        <Col sm="6" lg="4" xxl="3">
          <TotalEarningCard />
        </Col>
      </Row>
    </Container>
  );
};

export default WidgetPage;
