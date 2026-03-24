import React, { useEffect, useState } from "react";
import { Accordion, Card, Col, Collapse } from "react-bootstrap";

import { accordionItems } from "@/data/uikit/accordionData/accordionPageData.ts";
import { Code } from "phosphor-react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";

const SimpleAccordion: React.FC = () => {
  const [openAccordian, setOpenAccordian] = useState(false);

  const [activeKey, setActiveKey] = useState<string | null>(
    accordionItems[0]?.id || null
  );

  const toggleAccordion = (eventKey: string | null) => {
    setActiveKey((prev) => (prev === eventKey ? null : eventKey));
  };

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <Col md={6}>
      <Card>
        <Card.Header className="code-header d-flex justify-content-between align-items-center">
          <h5>Simple Accordion</h5>
          <a onClick={() => setOpenAccordian(!openAccordian)}>
            <Code size={30} weight="bold" className="source" />
          </a>
        </Card.Header>

        <Card.Body>
          <Accordion
            activeKey={activeKey || ""}
            onSelect={(eventKey) => toggleAccordion(eventKey as string)}
            className="app-accordion accordion-secondary"
          >
            {accordionItems.map(({ id, title, content }) => (
              <Accordion.Item key={id} eventKey={id}>
                <Accordion.Header>{title}</Accordion.Header>
                <Accordion.Body>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `
                        <strong>${content.split(".")[0]}.</strong>
                        ${content
                          .substring(content.indexOf(".") + 1)
                          .replace(
                            /\.accordion-body/g,
                            `<code>.accordion-body</code>`
                          )
                          .trim()}
                      `,
                    }}
                  />
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </Card.Body>

        <Collapse in={openAccordian}>
          <pre className="language-html">
            <code className="language-html">
              {`<Accordion activeKey="${accordionItems[0].id}" onSelect={toggleAccordion} className="app-accordion accordion-secondary">
${accordionItems
  .map(
    ({ id, title, content }) => `  <Accordion.Item eventKey="${id}">
    <Accordion.Header>${title}</Accordion.Header>
    <Accordion.Body>
      <strong>${content.split(".")[0]}.</strong> ${content
        .substring(content.indexOf(".") + 1)
        .trim()}
    </Accordion.Body>
  </Accordion.Item>`
  )
  .join("\n")}
</Accordion>`}
            </code>
          </pre>
        </Collapse>
      </Card>
    </Col>
  );
};

export default SimpleAccordion;
