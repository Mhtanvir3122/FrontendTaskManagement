
import React, { useEffect, useState } from "react";
import { Accordion, Card, Col, Collapse, Row } from "react-bootstrap";
import {
  IconMessageReport,
  IconTicket,
  IconTransform,
} from "@tabler/icons-react";
import { Code } from "phosphor-react";
import Prism from "prismjs";
import "prismjs/components/prism-markup";
import "prismjs/themes/prism.css";

type AccordionItem = {
  id: string;
  icon?: React.ReactNode;
  title: string;
  content: string;
};

type NestedAccordionItem = {
  id: string;
  title: string;
  content: string;
};

type NestedAccordionGroup = {
  id: string;
  title: string;
  children: NestedAccordionItem[];
};

const noIconItems: AccordionItem[] = [
  {
    id: "noicon1",
    icon: <IconMessageReport size={20} className="me-2" />,
    title: "What happens if I just pay my ticket?",
    content:
      "Paying your ticket without contesting it can result in a conviction on your driving record. This can have long-lasting consequences such as increased insurance rates, driver's license suspension, employment restrictions, and additional fines imposed by your state's DMV.",
  },
  {
    id: "noicon2",
    icon: <IconTicket size={20} className="me-2" />,
    title: "Can this ticket affect my job?",
    content:
      "Absolutely, tickets recorded on your driving history can result in disqualification from driving commercially or obtaining a commercial driver's license (CDL). They can also disqualify you from driving for ride-sharing services such as Uber or Lyft, which require a clean driving record.",
  },
  {
    id: "noicon3",
    icon: <IconTransform size={20} className="me-2" />,
    title: "How long does it take to resolve my case?",
    content:
      "It really depends on the court your ticket landed in. Some courts move faster than others, but on average, it could take about 1-3 months. This is perfectly normal in the legal process.",
  },
];

const multiLevelItems: NestedAccordionGroup[] = [
  {
    id: "level1-1",
    title: "This is level one accordion #1",
    children: [
      {
        id: "level2-1-1",
        title: "This is level two accordion #1",
        content:
          "This is the first item's accordion body. It is shown by default.",
      },
      {
        id: "level2-1-2",
        title: "This is level two accordion #2",
        content:
          "This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes.",
      },
    ],
  },
  {
    id: "level1-2",
    title: "This is level one accordion #2",
    children: [],
  },
];

const AccordionSections: React.FC = () => {
  const [uiState, setUiState] = useState({
    openNoIconCode: false,
    openMultiCode: false,
  });
  const [activeNoIcon, setActiveNoIcon] = useState<string | null>(noIconItems[0].id);
  const [activeLevel1, setActiveLevel1] = useState<string | null>(multiLevelItems[0].id);
  const [activeNested, setActiveNested] = useState<string | null>(null);

  const toggleKey = (key: string, setter: React.Dispatch<React.SetStateAction<string | null>>) => {
    setter((prev) => (prev === key ? null : key));
  };

  useEffect(() => {
    Prism.highlightAll();
  }, [uiState.openNoIconCode, uiState.openMultiCode]);

  return (
    <Row>
      {/* No Icon Accordion */}
      <Col lg={6}>
        <Card>
          <Card.Header className="code-header d-flex justify-content-between align-items-center">
            <h5>No Icon Indicators</h5>
            <a onClick={() => setUiState((prev) => ({...prev, openNoIconCode: !prev.openNoIconCode}))}>
              <Code size={30} weight="bold" className="source" />
            </a>
          </Card.Header>

          <Card.Body>
            <Accordion
              activeKey={activeNoIcon || ""}
              onSelect={(k) => toggleKey(k as string, setActiveNoIcon)}
              className="app-accordion accordion-light-danger"
            >
              {noIconItems.map(({ id, icon, title, content }) => (
                <Accordion.Item key={id} eventKey={id}>
                  <Accordion.Header>
                    {icon}
                    {title}
                  </Accordion.Header>
                  <Accordion.Body>{content}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Card.Body>

          <Collapse in={uiState.openNoIconCode}>
            <pre className="language-html mb-0">
              <code className="language-html">
{`<Accordion activeKey="${noIconItems[0].id}" onSelect={toggleKey} className="app-accordion accordion-light-danger">
  ${noIconItems.map(({ id, title, content }) => (
  `<Accordion.Item eventKey="${id}">
    <Accordion.Header>${title}</Accordion.Header>
    <Accordion.Body>
      ${content}
    </Accordion.Body>
  </Accordion.Item>`)).join("\n  ")}
</Accordion>`}
              </code>
            </pre>
          </Collapse>
        </Card>
      </Col>

      {/* Multi-Level Accordion */}
      <Col lg={6}>
        <Card>
          <Card.Header className="code-header d-flex justify-content-between align-items-center">
            <h5>Multi-Level Accordion</h5>
            <a onClick={() => setUiState((prev) => ({...prev,openMultiCode : !prev.openMultiCode }))}>
              <Code size={30} weight="bold" className="source" />
            </a>
          </Card.Header>

          <Card.Body>
            <Accordion
              activeKey={activeLevel1 || ""}
              onSelect={(k) => toggleKey(k as string, setActiveLevel1)}
              className="app-accordion accordion-light-success"
            >
              {multiLevelItems.map((group) => (
                <Accordion.Item key={group.id} eventKey={group.id}>
                  <Accordion.Header>{group.title}</Accordion.Header>
                  <Accordion.Body>
                    {/* This line added below header */}
                    <p>
                      <strong>This is the first item's accordion body.</strong>{" "}
                      <span className="text-muted">It is shown by default.</span>
                    </p>

                    {group.children.length > 0 ? (
                      <Accordion
                        activeKey={activeNested || ""}
                        onSelect={(k) => toggleKey(k as string, setActiveNested)}
                        className="mt-2 app-accordion app-accordion-icon-left app-accordion-plus"
                      >
                        {group.children.map((child) => (
                          <Accordion.Item key={child.id} eventKey={child.id}>
                            <Accordion.Header>{child.title}</Accordion.Header>
                            <Accordion.Body>{child.content}</Accordion.Body>
                          </Accordion.Item>
                        ))}
                      </Accordion>
                    ) : (
                      <p>This is the second item's accordion body. It is hidden by default.</p>
                    )}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Card.Body>

          <Collapse in={uiState.openMultiCode}>
            <pre className="language-html mb-0">
              <code className="language-html">
{`<Accordion activeKey="${multiLevelItems[0].id}" onSelect={toggleKey} className="app-accordion accordion-light-success">
  ${multiLevelItems.map((group) => {
  const nested = group.children.length
    ? `<Accordion className="mt-2 app-accordion app-accordion-icon-left app-accordion-plus">
      ${group.children.map((child) => (
      `<Accordion.Item eventKey="${child.id}">
        <Accordion.Header>${child.title}</Accordion.Header>
        <Accordion.Body>
          ${child.content}
        </Accordion.Body>
      </Accordion.Item>`)).join("\n      ")}
    </Accordion>`
    : `<p>This is the second item's accordion body. It is hidden by default.</p>`;

  return `<Accordion.Item eventKey="${group.id}">
    <Accordion.Header>${group.title}</Accordion.Header>
    <Accordion.Body>
      <p><strong>This is the first item's accordion body.</strong> <span class="text-muted">It is shown by default.</span></p>
      ${nested}
    </Accordion.Body>
  </Accordion.Item>`;
}).join("\n  ")}
</Accordion>`}
              </code>
            </pre>
          </Collapse>
        </Card>
      </Col>
    </Row>
  );
};

export default AccordionSections;
