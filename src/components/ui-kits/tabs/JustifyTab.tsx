import React, { useEffect, useState } from "react";
import { Card, Col, Collapse, Nav, Tab } from "react-bootstrap";

import { Code, Keyboard, Lifebuoy, ThumbsDown } from "phosphor-react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";

const JustifyLightTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("justify-home");
  const [openTab, setOpenTab] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <Col lg={6}>
      <Card>
        <Card.Header className="code-header d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Justify Light Tabs</h5>
          <a onClick={() => setOpenTab(!openTab)}>
            <Code size={30} weight="bold" className="source cursor-pointer" />
          </a>
        </Card.Header>

        <Card.Body>
          <Tab.Container activeKey={activeTab}>
            <Nav
              variant="tabs"
              className="nav-tabs tab-light-secondary justify-content-around"
              id="justify-Light"
              role="tablist"
            >
              <Nav.Item className="flex-fill text-center">
                <Nav.Link
                  className="w-100"
                  active={activeTab === "justify-home"}
                  onClick={() => setActiveTab("justify-home")}
                  id="justify-home-tab"
                  role="tab"
                  aria-controls="justify-home-pane"
                >
                  <Lifebuoy size={18} className="me-1" />
                  Home
                </Nav.Link>
              </Nav.Item>

              <Nav.Item className="flex-fill text-center">
                <Nav.Link
                  className="w-100"
                  active={activeTab === "justify-profile"}
                  onClick={() => setActiveTab("justify-profile")}
                  id="justify-profile-tab"
                  role="tab"
                  aria-controls="justify-profile-pane"
                >
                  <Keyboard size={18} className="me-1" />
                  Profile
                </Nav.Link>
              </Nav.Item>

              <Nav.Item className="flex-fill text-center">
                <Nav.Link
                  className="w-100"
                  active={activeTab === "justify-contact"}
                  onClick={() => setActiveTab("justify-contact")}
                  id="justify-contact-tab"
                  role="tab"
                  aria-controls="justify-contact-pane"
                >
                  <ThumbsDown size={18} className="me-1" />
                  Contact
                </Nav.Link>
              </Nav.Item>
            </Nav>

            <Tab.Content className="pt-3" id="justify-LightContent">
              <Tab.Pane
                eventKey="justify-home"
                role="tabpanel"
                id="justify-home-pane"
              >
                <p className="f-s-15">
                  The idea is to use <code>:target</code> pseudoclass to show
                  tabs, use anchors with fragment identifiers to switch between
                  them. The idea is to use pseudoclass to show tabs, use anchors
                  with fragment identifiers to switch between them.
                </p>
              </Tab.Pane>

              <Tab.Pane
                eventKey="justify-profile"
                role="tabpanel"
                id="justify-profile-pane"
              >
                <ol>
                  <li>Show only the last tab.</li>
                  <li>
                    If <code>:target</code> matches a tab, show it and hide all
                    following siblings.
                  </li>
                  <li>
                    Matches a tab, show it and hide all following siblings.
                  </li>
                </ol>
              </Tab.Pane>

              <Tab.Pane
                eventKey="justify-contact"
                role="tabpanel"
                id="justify-contact-pane"
              >
                <p className="f-s-15">
                  The idea is to use <code>:target</code> pseudoclass to show
                  tabs, use anchors with fragment identifiers to switch between
                  them. The idea is to use pseudoclass to show tabs, use anchors
                  with fragment identifiers to switch between them.
                </p>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Card.Body>

        <Collapse in={openTab}>
          <pre className="language-html">
            <code className="language-html">{`<Tab.Container activeKey="justify-home">
  <Nav variant="tabs" className="nav-tabs tab-light-secondary justify-content-around">
    <Nav.Item className="flex-fill text-center">
      <Nav.Link className="w-100 active" id="justify-home-tab">
      <Lifebuoy size={18} className="me-1" />
        Home
      </Nav.Link>
    </Nav.Item>
    <Nav.Item className="flex-fill text-center">
      <Nav.Link className="w-100" id="justify-profile-tab">
      <Keyboard size={18} className="me-1" />
        Profile
      </Nav.Link>
    </Nav.Item>
    <Nav.Item className="flex-fill text-center">
      <Nav.Link className="w-100" id="justify-contact-tab">
      <ThumbsDown size={18} className="me-1" />
        Contact
      </Nav.Link>
    </Nav.Item>
  </Nav>

  <Tab.Content className="pt-3" id="justify-LightContent">
    <Tab.Pane eventKey="justify-home" id="justify-home-pane">
      <p class="f-s-15">...content...</p>
    </Tab.Pane>
    <Tab.Pane eventKey="justify-profile" id="justify-profile-pane">
      <ol>...list...</ol>
    </Tab.Pane>
    <Tab.Pane eventKey="justify-contact" id="justify-contact-pane">
      <p class="f-s-15">...content...</p>
    </Tab.Pane>
  </Tab.Content>
</Tab.Container>`}</code>
          </pre>
        </Collapse>
      </Card>
    </Col>
  );
};

export default JustifyLightTabs;
