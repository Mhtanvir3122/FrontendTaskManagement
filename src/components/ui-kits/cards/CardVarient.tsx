import React from "react";
import { Card, Col } from "react-bootstrap";

import { Alarm, Briefcase, BugBeetle, Medal } from "phosphor-react";

type CardItem = {
  id: string;
  className: string;
  icon?: React.ReactNode;
  heading: string;
  content: string;
  headingAfterText?: boolean;
};

const cardData: CardItem[] = [
  {
    id: "icon-card-1",
    className: "hover-effect card-primary",
    icon: <Alarm size={50} weight="bold" className="icon-bg" />,
    heading: "Card With icon",
    content:
      "With supporting text below lead-in to additional content below as a natural.",
  },
  {
    id: "icon-card-2",
    className: "hover-effect card-secondary",
    icon: <BugBeetle size={50} weight="bold" className="icon-bg" />,
    heading: "Card With icon",
    content:
      "With supporting text below lead-in to additional content below as a natural.",
  },
  {
    id: "icon-card-3",
    className: "hover-effect card-light-primary",
    icon: <Briefcase size={50} weight="bold" className="icon-bg" />,
    heading: "Card With icon",
    content:
      "With supporting text below lead-in to additional content below as a natural.",
  },
  {
    id: "icon-card-4",
    className: "hover-effect card-light-secondary",
    icon: <Medal size={50} weight="bold" className="icon-bg" />,
    heading: "Card With icon",
    content:
      "With supporting text below lead-in to additional content below as a natural.",
  },
  {
    id: "border-card-1",
    className: "hover-effect border-primary border-top border-4",
    heading: "Card With Top border",
    content:
      "With supporting text below lead-in to additional content below as a natural.",
  },
  {
    id: "border-card-2",
    className: "hover-effect border-secondary border-bottom border-4",
    heading: "Card With Bottom border",
    content:
      "With supporting text below lead-in to additional content below as a natural.",
    headingAfterText: true,
  },
  {
    id: "border-card-3",
    className: "hover-effect border-success border-start border-4",
    heading: "Card With left border",
    content:
      "With supporting text below lead-in to additional content below as a natural.",
    headingAfterText: true,
  },
  {
    id: "border-card-4",
    className: "hover-effect border-danger border-end border-4",
    heading: "Card With right border",
    content:
      "With supporting text below lead-in to additional content below as a natural.",
    headingAfterText: true,
  },
];

const CardVariant: React.FC = () => {
  return (
    <>
      {cardData.map(
        ({ id, className, icon, heading, content, headingAfterText }) => (
          <Col md={6} xl={3} key={id}>
            <Card className={className}>
              <Card.Body>
                {icon}
                {!headingAfterText && <h6>{heading}</h6>}
                <p>{content}</p>
                {headingAfterText && <h6 className="mb-0 mt-2">{heading}</h6>}
              </Card.Body>
            </Card>
          </Col>
        )
      )}
    </>
  );
};

export default CardVariant;
