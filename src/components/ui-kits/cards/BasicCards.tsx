import React, { useEffect, useState } from "react";
import { Card, Col, Collapse, Row } from "react-bootstrap";

import { Code } from "phosphor-react";
import Prism from "prismjs";
import "prismjs/components/prism-markup";
import "prismjs/themes/prism.css";

type CardData = {
  id: string;
  title: string;
  headerText?: string;
  body: string;
  footer?: string;
  className?: string;
};

const basicCardVariants: CardData[] = [
  {
    id: "cardheader1",
    title: "Card Header",
    headerText: "Card Body",
    body: "With supporting text below as a natural lead-in to additional content.",
  },
  {
    id: "cardheader2",
    title: "",
    headerText: "Card Body",
    body: "With supporting text below as a natural lead-in to additional content.",
    footer: "Card Footer",
  },
  {
    id: "cardheader3",
    title: "Card Header",
    body: "With supporting text below as a natural lead-in to additional content below as a natural.",
    footer: "Card Footer",
    className: "border-0",
  },
  {
    id: "cardheader4",
    title: "Hover Effect",
    headerText: "Card Body",
    body: "With supporting text below lead-in to additional content below as a natural.",
    className: "hover-effect",
  },
];

const customCardVariants: CardData[] = [
  {
    id: "cardheader5",
    title: "Primary card",
    headerText: "Card Body",
    body: "With supporting text below lead-in to additional content below as a natural.",
    className: "hover-effect card-primary",
  },
  {
    id: "cardheader6",
    title: "Secondary card",
    headerText: "Card Body",
    body: "With supporting text below lead-in to additional content below as a natural.",
    className: "hover-effect card-secondary",
  },
  {
    id: "cardheader7",
    title: "Success card",
    headerText: "Card Body",
    body: "With supporting text below lead-in to additional content below as a natural.",
    className: "hover-effect card-success",
  },
  {
    id: "cardheader8",
    title: "Danger card",
    headerText: "Card Body",
    body: "With supporting text below lead-in to additional content below as a natural.",
    className: "hover-effect card-danger",
  },
  {
    id: "cardheader9",
    title: "Outline card",
    headerText: "Card Body",
    body: "With supporting text below lead-in to additional content below as a natural.",
    className: "hover-effect card-outline-primary",
  },
  {
    id: "cardheader10",
    title: "Secondary",
    headerText: "Card Body",
    body: "With supporting text below lead-in to additional content below as a natural.",
    className: "hover-effect card-outline-secondary",
  },
  {
    id: "cardheader11",
    title: "Secondary",
    headerText: "Card Body",
    body: "With supporting text below lead-in to additional content below as a natural.",
    className: "hover-effect card-light-secondary",
  },
  {
    id: "cardheader12",
    title: "Light card",
    headerText: "Card Body",
    body: "With supporting text below lead-in to additional content below as a natural.",
    className: "hover-effect card-light-primary",
  },
];

const BasicCards: React.FC = () => {
  const [openBasicCard, setOpenBasicCard] = useState<string | null>(null);
  const [openCustomCard, setOpenCustomCard] = useState<string | null>(null);

  useEffect(() => {
    Prism.highlightAll();
  }, [openBasicCard, openCustomCard]);

  return (
    <Row>
      {/* Basic Cards (1–4) */}
      {basicCardVariants.map(
        ({ id, title, headerText, body, footer, className }, index) => (
          <Col md={6} xl={3} key={id} className="mb-4">
            <Card className={className || "card"}>
              <Card.Header
                className={`code-header d-flex justify-content-between align-items-center ${
                  !title ? "border-0 pb-0 justify-content-end" : ""
                }`}
              >
                {title && <h5 className="mb-0">{title}</h5>}
                <a
                  role="button"
                  onClick={() =>
                    setOpenBasicCard(openBasicCard === id ? null : id)
                  }
                >
                  <Code size={30} weight="bold" className="source" />
                </a>
              </Card.Header>

              <Card.Body>
                {headerText && <h6>{headerText}</h6>}
                <p>{body}</p>
              </Card.Body>

              {footer && (
                <Card.Footer>
                  <h5>{footer}</h5>
                </Card.Footer>
              )}
            </Card>

            <Collapse in={openBasicCard === id}>
              <div>
                <pre className={`card-basic-${index + 1} language-html p-3`}>
                  <code className="language-html">
                    {`<Card className="${className || "card"}">
  ${title ? `<Card.Header>\n  <h5>${title}</h5>\n</Card.Header>` : ""}
  <Card.Body>
    ${headerText ? `<h6>${headerText}</h6>\n    ` : ""}<p>${body}</p>
  </Card.Body>
  ${footer ? `<Card.Footer>\n  <h5>${footer}</h5>\n</Card.Footer>` : ""}
</Card>`}
                  </code>
                </pre>
              </div>
            </Collapse>
          </Col>
        )
      )}

      {/* Custom Cards (5–12) */}
      {customCardVariants.map(
        ({ id, title, headerText, body, footer, className }, index) => (
          <Col md={6} xl={3} key={id} className="mb-4">
            <Card className={className || "card"}>
              <Card.Header className="code-header d-flex justify-content-between align-items-center">
                {title && <h5 className="mb-0">{title}</h5>}
                <a
                  role="button"
                  onClick={() =>
                    setOpenCustomCard(openCustomCard === id ? null : id)
                  }
                >
                  <Code size={30} weight="bold" className="source" />
                </a>
              </Card.Header>

              <Card.Body>
                {headerText && <h6>{headerText}</h6>}
                <p>{body}</p>
              </Card.Body>

              {footer && (
                <Card.Footer>
                  <h5>{footer}</h5>
                </Card.Footer>
              )}
            </Card>

            <Collapse in={openCustomCard === id}>
              <div>
                <pre className={`card-custom-${index + 5} language-html p-3`}>
                  <code className="language-html">
                    {`<Card className="${className || "card"}">
  ${title ? `<Card.Header>\n  <h5>${title}</h5>\n</Card.Header>` : ""}
  <Card.Body>
    ${headerText ? `<h6>${headerText}</h6>\n    ` : ""}<p>${body}</p>
  </Card.Body>
  ${footer ? `<Card.Footer>\n  <h5>${footer}</h5>\n</Card.Footer>` : ""}
</Card>`}
                  </code>
                </pre>
              </div>
            </Collapse>
          </Col>
        )
      )}
    </Row>
  );
};

export default BasicCards;
