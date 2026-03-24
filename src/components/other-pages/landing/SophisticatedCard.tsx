import { Badge, Col, Container, Row } from "react-bootstrap";

import { GearFineIcon } from "@phosphor-icons/react";
import {
  CreditCard,
  DeviceTablet,
  DiamondsFour,
  Gear,
  Layout,
  Palette,
} from "phosphor-react";

const cardDetails = [
  { icon: <CreditCard weight="fill" />, text: "200+ Cards Collection" },
  { icon: <DiamondsFour weight="fill" />, text: "Basic Components Included" },
  { icon: <Gear weight="fill" />, text: "Customization and Personalization" },
  { icon: <DeviceTablet weight="fill" />, text: "Responsive Card Design" },
  { icon: <GearFineIcon weight="fill" />, text: "Advanced Functionality" },
  { icon: <Palette weight="fill" />, text: "Styleguide Included" },
];

const SophisticatedCard: React.FC = () => {
  return (
      <section className="card-section" id="Cards">
        <Container fluid>
          <div className="card-section-content section-lg-space-x">
            <Row className="align-items-center mb-5">
              <Col xl={8} className="offset-xl-2 text-md-center">
                <div className="landing-title">
                  <Badge className="title-badge mb-3" bg="light-primary">
                    <Layout
                      size={14}
                      className="align-text-bottom me-1"
                      weight="fill"
                    />
                    Cards
                  </Badge>
                  <h2>
                    Sophisticated{" "}
                    <span className="highlight-title px-3">Cards</span>
                  </h2>
                  <p>
                    Cards offer enhanced design flexibility and interactive
                    capabilities, incorporating dynamic elements like
                    animations, real-time updates, or embedded multimedia to
                    provide a richer and more engaging user experience in a
                    concise card format.
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="align-items-center">
              <Col xl={7} className="text-center position-relative">
                <img
                  src="/images/landing/cards-img.png"
                  alt="cards-img"
                  className="img-fluid cards-img"
                />
              </Col>

              <Col xl={5}>
                <ul className="card-details-list px-sm-4 px-0 list-unstyled">
                  {cardDetails.map((item, index) => (
                    <li
                      key={index}
                      className="d-flex align-items-center gap-3 mb-3"
                    >
                      <span className="bg-light-primary h-45 w-45 d-flex-center b-r-10 b-1-primary flex-shrink-0">
                        {item.icon}
                      </span>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
  );
};

export default SophisticatedCard;
