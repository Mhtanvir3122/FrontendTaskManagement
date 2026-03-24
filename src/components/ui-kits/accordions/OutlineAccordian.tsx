import React, { useEffect, useState } from "react";
import { Accordion, Card, Col, Collapse } from "react-bootstrap";

import {
  lightAccordionItems,
  outlineAccordionItems,
} from "@/data/uikit/accordionData/accordionPageData.ts";
import { Code } from "phosphor-react";
import Prism from "prismjs";
import "prismjs/components/prism-markup";
import "prismjs/themes/prism.css";

const AccordionSection: React.FC = () => {
  const [uiState, setUiState] = useState({
    openOutline: false,
    openLight: false,
    openFlush: false,
  });

  const [activeOutlineKey, setActiveOutlineKey] = useState<string>(
    outlineAccordionItems[0]?.id
  );
  const [activeLightKey, setActiveLightKey] = useState<string>(
    lightAccordionItems[0]?.id
  );
  const [activeFlushKey, setActiveFlushKey] = useState<string>("1");

  const toggleAccordion = (
    currentKey: string,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter((prev) => (prev === currentKey ? "" : currentKey));
  };

  useEffect(() => {
    Prism.highlightAll();
  }, [uiState.openOutline, uiState.openLight, uiState.openFlush]);

  return (
    <>
      {/* Outline Accordion */}
      <Col lg={6}>
        <Card>
          <Card.Header className="code-header d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Outline Accordion</h5>
            <a onClick={() => setUiState((prev) => ({ ...prev, openOutline: !uiState.openOutline }))}>
              <Code size={30} weight="bold" className="source" />
            </a>
          </Card.Header>
          <Card.Body>
            <Accordion
              activeKey={activeOutlineKey}
              onSelect={(key) =>
                toggleAccordion(key as string, setActiveOutlineKey)
              }
              className="app-accordion accordion-outline-secondary"
            >
              {outlineAccordionItems.map(({ id, title, content }) => (
                <Accordion.Item key={id} eventKey={id}>
                  <Accordion.Header>{title}</Accordion.Header>
                  <Accordion.Body>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: `<strong>${content.split(".")[0]}.</strong> ${content
                          .substring(content.indexOf(".") + 1)
                          .trim()}`,
                      }}
                    />
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Card.Body>

          <Collapse in={uiState.openOutline}>
            <pre className="language-html mb-0">
              <code className="language-html">{`
<Accordion activeKey="${outlineAccordionItems[0].id}" onSelect={() => {}} className="app-accordion accordion-outline-secondary">
${outlineAccordionItems
  .map(
    ({ id, title, content }) => `  <Accordion.Item eventKey="${id}">
    <Accordion.Header>${title}</Accordion.Header>
    <Accordion.Body>
      <strong>${content.split(".")[0]}.</strong> ${content
        .substring(content.indexOf(".") + 1)
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .trim()}
    </Accordion.Body>
  </Accordion.Item>`
  )
  .join("\n")}
</Accordion>`}</code>
            </pre>
          </Collapse>
        </Card>
      </Col>

      {/* Light Accordion */}
      <Col lg={6}>
        <Card>
          <Card.Header className="code-header d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Light Accordion</h5>
            <a onClick={() => setUiState((prev) => ({ ...prev, openLight: !uiState.openLight }))}>
              <Code size={30} weight="bold" className="source" />
            </a>
          </Card.Header>
          <Card.Body>
            <Accordion
              activeKey={activeLightKey}
              onSelect={(key) =>
                toggleAccordion(key as string, setActiveLightKey)
              }
              className="app-accordion accordion-light-secondary"
            >
              {lightAccordionItems.map(({ id, title, content }) => (
                <Accordion.Item key={id} eventKey={id}>
                  <Accordion.Header>{title}</Accordion.Header>
                  <Accordion.Body>
                    <div dangerouslySetInnerHTML={{ __html: content.trim() }} />
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Card.Body>

          <Collapse in={uiState.openLight}>
            <pre className="language-html mb-0">
              <code className="language-html">{`
<Accordion activeKey="${lightAccordionItems[0].id}" onSelect={() => {}} className="app-accordion accordion-light-secondary">
${lightAccordionItems
  .map(
    ({ id, title, content }) => `  <Accordion.Item eventKey="${id}">
    <Accordion.Header>${title}</Accordion.Header>
    <Accordion.Body>
      ${content.replace(/</g, "&lt;").replace(/>/g, "&gt;").trim()}
    </Accordion.Body>
  </Accordion.Item>`
  )
  .join("\n")}
</Accordion>`}</code>
            </pre>
          </Collapse>
        </Card>
      </Col>

      {/* Flush Accordion */}
      <Col lg={6}>
        <Card>
          <Card.Header className="code-header d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Flush Accordion (No Border)</h5>
            <a onClick={() => setUiState((prev) => ({ ...prev, openFlush: !uiState.openFlush }))}>
              <Code size={30} weight="bold" className="source" />
            </a>
          </Card.Header>
          <Card.Body>
            <Accordion
              activeKey={activeFlushKey}
              onSelect={(key) =>
                toggleAccordion(key as string, setActiveFlushKey)
              }
              className="app-accordion accordion-flush accordion-secondary"
            >
              {[1, 2, 3].map((num) => (
                <Accordion.Item key={num} eventKey={num.toString()}>
                  <Accordion.Header>Accordion Item #{num}</Accordion.Header>
                  <Accordion.Body>
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the {num} item's accordion body.
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Card.Body>

          <Collapse in={uiState.openFlush}>
            <pre className="language-html mb-0">
              <code className="language-html">{`
<Accordion activeKey="1" onSelect={() => {}} className="accordion-flush accordion-secondary">
${[1, 2, 3]
  .map(
    (num) => `  <Accordion.Item eventKey="${num}">
    <Accordion.Header>Accordion Item #${num}</Accordion.Header>
    <Accordion.Body>
      Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class.
      This is the ${num} item's accordion body.
    </Accordion.Body>
  </Accordion.Item>`
  )
  .join("\n")}
</Accordion>`}</code>
            </pre>
          </Collapse>
        </Card>
      </Col>
    </>
  );
};

export default AccordionSection;
