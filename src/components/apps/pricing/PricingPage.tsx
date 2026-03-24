import { Card, Col, Container, Row } from "react-bootstrap";

import { StackIcon } from "@phosphor-icons/react";

import ComparePricing from "@/components/apps/pricing/ComparePricing.tsx";
import PricingCard from "@/components/apps/pricing/PricingCard.tsx";
import SimplePricingCard from "@/components/apps/pricing/SimplePricingCard.tsx";
import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const PricingPage = () => {
  const plans = [
    {
      plan: "Basic Plans",
      price: 20,
      yearlyPrice: 80,
      features: [
        "5 Free Websites",
        "1 GB Hard disk Storage",
        "1 field",
        "10 Users",
        "Email Support",
      ],
      imgSrc: "/images/pricing/1.png",
      imgSrcBack: "/images/pricing/9.png",
      bgColor: "secondary",
    },
    {
      plan: "Business Plans",
      price: 80,
      yearlyPrice: 100,
      features: [
        "40 Free Websites",
        "20 GB Hard disk Storage",
        "50 fields",
        "30 Users",
        "Email Support",
      ],
      imgSrc: "/images/pricing/2.png",
      imgSrcBack: "/images/pricing/8.png",
      isBest: true,
      bgColor: "primary",
    },
    {
      plan: "Premium Plans",
      price: 200,
      yearlyPrice: 500,
      features: [
        "Unlimited Websites",
        "40 GB Hard disk Storage",
        "Unlimited fields",
        "40 Users",
        "Email Support",
      ],
      imgSrc: "/images/pricing/3.png",
      imgSrcBack: "/images/pricing/7.png",
      bgColor: "secondary",
    },
    {
      plan: "Golden Premium Plans",
      price: 500,
      yearlyPrice: 1000,
      features: [
        "Unlimited Websites",
        "40 GB Hard disk Storage",
        "Unlimited fields",
        "Unlimited Users",
        "Email Support",
      ],
      imgSrc: "/images/pricing/15.png",
      imgSrcBack: "/images/pricing/14.png",
      isBest: true,
      bgColor: "primary",
    },
  ];
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Pricing"
          title="Apps"
          path={["Pricing"]}
          Icon={StackIcon}
        />
        <Row>
          <Col xs={12}>
            <Card>
              <Card.Header>
                <h5>Pricing Plans</h5>
              </Card.Header>
              <Card.Body>
                <Row className="flip-pricing-container app-arrow">
                  {plans.map((plan, index) => (
                    <PricingCard key={index} {...plan} />
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12}>
            <Card>
              <Card.Header>
                <h5>Simple Pricing Plans</h5>
              </Card.Header>
              <Card.Body>
                <SimplePricingCard />
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12}>
            <Card>
              <Card.Header>
                <h5>Compare plans</h5>
              </Card.Header>
              <Card.Body>
                <ComparePricing />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PricingPage;
