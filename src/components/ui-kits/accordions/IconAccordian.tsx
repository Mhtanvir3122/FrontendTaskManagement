
import React, { useEffect, useState } from "react";
import { Accordion, Card, Col, Collapse, Row } from "react-bootstrap";
import {
  IconMessageReport,
  IconTicket,
  IconTransform,
  IconPlus,
  IconMinus,
} from "@tabler/icons-react";
import { Code } from "phosphor-react";
import Prism from "prismjs";
import "prismjs/components/prism-markup";
import "prismjs/themes/prism.css";

type FaqItem = {
  id: string;
  icon: React.ReactNode;
  question: string;
  answer: string;
};

const faqData: FaqItem[] = [
  {
    id: "1",
    icon: <IconMessageReport size={18} className="me-2" />,
    question: "What happens if I just pay my ticket?",
    answer:
      "Paying your ticket without contesting it can result in a conviction on your driving record. This can have long-lasting consequences such as increased insurance rates, driver's license suspension, employment restrictions, and additional fines imposed by your state's DMV.",
  },
  {
    id: "2",
    icon: <IconTicket size={18} className="me-2" />,
    question: "Can this ticket affect my job?",
    answer:
      "Tickets recorded on your driving history can result in disqualification from driving commercially or for ride-sharing services like Uber or Lyft.",
  },
  {
    id: "3",
    icon: <IconTransform size={18} className="me-2" />,
    question: "How long does it take to resolve my case?",
    answer:
      "It depends on the court. On average, resolving a case takes 1–3 months.",
  },
];

const FaqAccordions: React.FC = () => {
  const [uiState, setUiState] = useState({
    openCode1: false,
    openCode2: false,
  });
  const [activeFaq, setActiveFaq] = useState<string | null>(faqData[0].id);
  const [activePlusMinus, setActivePlusMinus] = useState<string | null>(
    faqData[0].id
  );

  const toggleAccordion = (
    id: string,
    setter: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    setter((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    Prism.highlightAll();
  }, [uiState.openCode1, uiState.openCode2]);

  return (
    <Row>
      {/* Left Icon Accordion */}
      <Col lg={6}>
        <Card>
          <Card.Header className="code-header d-flex justify-content-between align-items-center">
            <h5>FAQs with Left Icons</h5>
            <a onClick={() => setUiState((prev) => ({ ...prev, openCode1: !uiState.openCode1 }))}>
              <Code size={30} weight="bold" className="source " />
            </a>
          </Card.Header>
          <Card.Body>
            <Accordion
              activeKey={activeFaq ?? ""}
              onSelect={(k) => toggleAccordion(k as string, setActiveFaq)}
              className="app-accordion accordion-light-secondary"
            >
              {faqData.map(({ id, icon, question, answer }) => (
                <Accordion.Item eventKey={id} key={id}>
                  <Accordion.Header>
                    {icon}
                    {question}
                  </Accordion.Header>
                  <Accordion.Body>{answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Card.Body>
          <Collapse in={uiState.openCode1}>
            <pre className="language-html mb-0">
              <code className="language-html">
{`<Accordion activeKey="${faqData[0].id}" onSelect={toggleAccordion} className="app-accordion accordion-light-secondary">
  ${faqData.map(({ id, question }) => (
  `<Accordion.Item eventKey="${id}">
      <Accordion.Header>${question}</Accordion.Header>
      <Accordion.Body>...</Accordion.Body>
    </Accordion.Item>`
)).join("\n  ")}
</Accordion>`}
              </code>
            </pre>
          </Collapse>
        </Card>
      </Col>

      {/* Plus/Minus Toggle Accordion */}
      <Col lg={6}>
        <Card>
          <Card.Header className="code-header d-flex justify-content-between align-items-center">
            <h5>FAQs with Plus/Minus Icons</h5>
            <a onClick={() => setUiState((prev) => ({ ...prev, openCode2 : !uiState.openCode2 }))}>
              <Code size={30} weight="bold" className="source " />
            </a>
          </Card.Header>
          <Card.Body>
            <Accordion
              activeKey={activePlusMinus ?? ""}
              onSelect={(k) => toggleAccordion(k as string, setActivePlusMinus)}
              className="app-accordion accordion-light-primary"
            >
              {faqData.map(({ id, question, answer }) => (
                <Accordion.Item eventKey={id} key={id}>
                  <Accordion.Header>
                    <span className="me-2">
                      {activePlusMinus === id ? (
                        <IconMinus size={16} />
                      ) : (
                        <IconPlus size={16} />
                      )}
                    </span>
                    {question}
                  </Accordion.Header>
                  <Accordion.Body>{answer}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Card.Body>
          <Collapse in={uiState.openCode2}>
            <pre className="language-html mb-0">
              <code className="language-html">
{`<Accordion activeKey="${faqData[0].id}" onSelect={toggleAccordion} className="app-accordion accordion-light-primary">
  ${faqData.map(({ id, question }) => (
  `<Accordion.Item eventKey="${id}">
      <Accordion.Header>
        <IconPlus /> ${question}
      </Accordion.Header>
      <Accordion.Body>...</Accordion.Body>
    </Accordion.Item>`
)).join("\n  ")}
</Accordion>`}
              </code>
            </pre>
          </Collapse>
        </Card>
      </Col>
    </Row>
  );
};

export default FaqAccordions;
