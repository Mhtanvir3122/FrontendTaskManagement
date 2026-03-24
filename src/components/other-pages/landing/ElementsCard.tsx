import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";

import {
  Briefcase,
  CaretDown,
  CaretRight,
  CookingPot,
  CreditCard,
  ListBullets,
  RadioButton,
  WarningCircle,
} from "phosphor-react";

const uiElements = [
  {
    title: "Buttons",
    icon: <RadioButton size={18} color="#212529" weight="bold" />,
    desc: "Apply Custom button styles to forms, dialogs, and various elements, featuring support for multiple sizes and states.",
    href: "/ui-kits/buttons",
  },
  {
    title: "Cards",
    icon: <CreditCard size={18} color="#212529" weight="bold" />,
    desc: "Create stylish cards with Admin Element for organized content presentation and a sleek user interface.",
    href: "/ui-kits/cards",
  },
  {
    title: "List",
    icon: <ListBullets size={18} color="#212529" weight="bold" />,
    desc: "Easily design lists with Admin Element intuitive elements for structured content display, enhancing user",
    href: "/ui-kits/lists",
  },
  {
    title: "Alerts",
    icon: <WarningCircle size={18} color="#212529" weight="bold" />,
    desc: "Create alerts using Admin Elements intuitive elements to effectively communicate messages.",
    href: "/ui-kits/alert",
  },
  {
    title: "Accordions",
    icon: <CookingPot size={18} color="#212529" weight="bold" />,
    desc: "Create collapsible accordion in Admin for organized content presentation, optimizing user interaction.",
    href: "/ui-kits/accordions",
  },
  {
    title: "Dropdown",
    icon: <CaretDown size={18} color="#212529" weight="bold" />,
    desc: "Create dropdown using Admin Elements for enhanced user interaction and intuitive navigation.",
    href: "/ui-kits/dropdown",
  },
];
const ElementsCard: React.FC = () => {
  return (
      <section className="element-section section-lg-space-x" id="Elements">
        <Container>
          <Row>
            <Col xl={8}>
              <div className="landing-title">
                <Badge className="title-badge mb-3" bg="light-primary">
                  <Briefcase
                    weight="fill"
                    size={14}
                    className="align-text-bottom me-1"
                  />
                  UI Elements
                </Badge>
                <h2>
                  Elements <span className="highlight-title">Of Ki-Admin</span>
                </h2>
                <p>
                  Offer a responsive and user-friendly interface, streamlining
                  the design and development of web applications by providing a
                  robust set of pre-built components and templates.
                </p>
              </div>
            </Col>
          </Row>

          <Row className="gx-sm-5 gy-sm-4 g-2">
            {uiElements.map((element, index) => (
              <Col sm={6} lg={4} key={index}>
                <Card className="card-primary">
                  <Card.Body>
                    <div className="element-card">
                      <div className="element-card-img">
                        <img src="/images/landing/card-image.png" alt="" />
                      </div>
                      <div className="element-content">
                        <span className="btn btn-white icon-btn flex-shrink-0 w-45 h-45 b-r-8">
                          {element.icon}
                        </span>
                        <h3 className="mt-3 mb-0">{element.title}</h3>
                      </div>
                      <div>
                        <p className="f-s-16 txt-ellipsis-2 text-white-800 mb-3">
                          {element.desc}
                        </p>
                        <Button
                          href={element.href}
                          target="_blank"
                          variant={"light-white"}
                          className="link-btn"
                        >
                          View {element.title}
                          <CaretRight className="ms-2 f-s-16" weight="bold" />
                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
  );
};

export default ElementsCard;
