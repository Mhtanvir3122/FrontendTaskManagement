import React, { useEffect, useState } from "react";
import { Card, Col, Collapse, Nav, Tab } from "react-bootstrap";

import { Code } from "phosphor-react";
import Prism from "prismjs";
import "prismjs/components/prism-markup";
import "prismjs/themes/prism.css";

export const BasicTabsRB: React.FC = () => {
  const [activeTab, setActiveTab] = useState("html");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <Col lg={6}>
      <Card className="equal-card">
        <Card.Header className="code-header d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Basic Tabs</h5>
          <a onClick={() => setOpen(!open)} role="button">
            <Code size={30} weight="bold" className="source" />
          </a>
        </Card.Header>

        <Card.Body>
          <Tab.Container
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k || "html")}
          >
            <>
              <Nav variant="tabs" className="app-tabs-primary" id="Basic">
                <Nav.Item>
                  <Nav.Link eventKey="html" id="html-tab" role="tab">
                    HTML
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="css" id="css-tab" role="tab">
                    CSS
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="php" id="php-tab" role="tab">
                    PHP
                  </Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content className="mt-3" id="BasicContent">
                <Tab.Pane eventKey="html" role="tabpanel" id="html-tab-pane">
                  <p className="f-s-15">
                    Hypertext Markup Language is the standard markup language
                    for documents designed to be displayed in a web browser.
                  </p>
                  <p className="f-s-15">
                    It can be assisted by technologies such as Cascading Style
                    Sheets (CSS) and scripting languages such as JavaScript.
                  </p>
                </Tab.Pane>

                <Tab.Pane eventKey="css" role="tabpanel" id="css-tab-pane">
                  <p className="f-s-15">
                    Cascading Style Sheets (CSS) is a style sheet language used
                    for describing the presentation of a document written in a
                    markup language like HTML.
                  </p>
                  <p className="f-s-15">
                    CSS is a cornerstone technology of the World Wide Web,
                    alongside HTML and JavaScript.
                  </p>
                </Tab.Pane>

                <Tab.Pane eventKey="php" role="tabpanel" id="php-tab-pane">
                  <p className="f-s-15">
                    PHP is a popular general-purpose scripting language that is
                    especially suited to web development.
                  </p>
                  <p className="f-s-15">
                    It was originally created by Rasmus Lerdorf in 1994; the PHP
                    reference implementation is now produced by The PHP Group.
                  </p>
                </Tab.Pane>
              </Tab.Content>
            </>
          </Tab.Container>
        </Card.Body>

        <Collapse in={open}>
          <pre className="language-markup mb-0 mt-3">
            <code className="language-markup">{`<Tab.Container activeKey="html">
  <>
    <Nav variant="tabs" className="app-tabs-primary" id="Basic">
      <Nav.Item>
        <Nav.Link eventKey="html" id="html-tab" role="tab">HTML</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="css" id="css-tab" role="tab">CSS</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="php" id="php-tab" role="tab">PHP</Nav.Link>
      </Nav.Item>
    </Nav>

    <Tab.Content className="mt-3" id="BasicContent">
      <Tab.Pane eventKey="html" role="tabpanel" id="html-tab-pane">
        <p className="f-s-15">Hypertext Markup Language is the standard...</p>
        <p className="f-s-15">It can be helped by technologies such as...</p>
      </Tab.Pane>

      <Tab.Pane eventKey="css" role="tabpanel" id="css-tab-pane">
        <p className="f-s-15">Cascading Style Sheets (CSS) is a style sheet...</p>
        <p className="f-s-15">CSS is a cornerstone technology of the Web...</p>
      </Tab.Pane>

      <Tab.Pane eventKey="php" role="tabpanel" id="php-tab-pane">
        <p className="f-s-15">PHP is a popular general-purpose scripting...</p>
        <p className="f-s-15">It was originally created by Rasmus Lerdorf...</p>
      </Tab.Pane>
    </Tab.Content>
  </>
</Tab.Container>`}</code>
          </pre>
        </Collapse>
      </Card>
    </Col>
  );
};
