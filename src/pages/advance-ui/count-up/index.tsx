import React, { useState } from "react";
import { Button, Card, Col, Container, Nav } from "react-bootstrap";
import { BriefcaseMetal } from "phosphor-react";
import "prismjs/themes/prism.css";

import Counter, {
  counterItems,
  simpleCounterItems,
  tabData,
  updateCounterItems,
} from "@/components/advancedui/count-up/UpdateCounter.tsx";
import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const SimpleCounterSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("1");


  const [updateValues, setUpdateValues] = useState(
    updateCounterItems.map((item) => item.value)
  );

  const handleUpdateCounters = () => {

    setUpdateValues((prevValues) =>
      prevValues.map((val) => val + 1)
    );
  };

  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Count Up"
          title="Advance Ui"
          path={["Count Up"]}
          Icon={BriefcaseMetal}
        />
        <Col xs="12">
          <Card className="mb-4">
            <Card.Header className="code-header">
              <h5>Simple</h5>
              <div className="text-secondary mt-2">
                Explore CountUp.js for additional examples. For more examples,
                visit the official{" "}
                <a
                  href="https://inorganik.github.io/countUp.js/"
                  className="text-danger text-decoration-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CountUp.js
                </a>{" "}
                website.
              </div>
            </Card.Header>

            <Card.Body>
              <div className="simple-counter mt-4">
                {simpleCounterItems.map((item, idx) => (
                  <div className="simple" key={idx}>
                    <div>
                      {item.prefix && <span>{item.prefix}</span>}
                      <Counter className="counter" tag="p" value={item.value} />
                      {item.suffix && <span>{item.suffix}</span>}
                    </div>
                    <p>
                      {item.icon}
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="12">
          <Card className="mb-4">
            <Card.Header className="code-header d-flex justify-content-between align-items-start">
              <div>
                <h5>Customized</h5>
                <div className="text-secondary mt-2">
                  You have the flexibility to modify CountUp by incorporating
                  our extended Bootstrap classes.
                </div>
              </div>
            </Card.Header>

            <Card.Body>
              <div className="customized-counter">
                {counterItems.map((item, idx) => (
                  <div className="customized text-center" key={idx}>
                    <div className="icon-edit">{item.icon}</div>
                    <div className="d-flex justify-content-center align-items-center">
                      {item.prefix && <span>{item.prefix}</span>}
                      <Counter
                        className="counter f-w-500 f-s-30 text-dark"
                        value={item.value}
                        tag={item.tag}
                      />
                      {item.suffix && <span>{item.suffix}</span>}
                    </div>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="12">
          <Card className="mb-4">
            <Card.Header className="code-header">
              <h5>Update Data</h5>
              <div className="text-secondary mt-2">
                Refer to CountUp.js&#39;s official documentation to understand
                the plugin API. The provided example demonstrates how to reset a
                CountUp instance with a new value and configuration to
                dynamically update the displayed value.
              </div>
            </Card.Header>
            <Card.Body>
              <div className="simple-counter mt-4">
                <div className="d-flex gap-3">
                  {updateCounterItems.map((item, index) => (
                    <div className="simple" key={index}>
                      <div className="d-flex align-items-center">
                        {item.prefix && <span>{item.prefix}</span>}
                        <Counter
                          className="counter update-counter"
                          value={updateValues[index]}
                          tag="p"
                        />

                        {item.suffix && <span>{item.suffix}</span>}
                      </div>
                      <p>
                        <i
                          className={`${item.iconClass} ${item.iconColorClass}`}
                        ></i>{" "}
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-3">
                  <Button
                    variant="light-primary"
                    onClick={handleUpdateCounters}
                  >
                    Update Data
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12}>
          <Card className="mb-4">
            <Card.Header className="code-header d-flex justify-content-between align-items-start">
              <div>
                <h5>Under Tab Sections</h5>
                <div className="text-secondary mt-2">
                  Experience a demo featuring CountUp, triggered only when it
                  enters the viewport within a tab container.
                </div>
              </div>
            </Card.Header>

            <Card.Body>
              <div className="mt-3 under-tab-section">
                <Nav
                  variant="tabs"
                  className="app-tabs-primary justify-content-center mb-3"
                  activeKey={activeTab}
                  onSelect={(selectedKey) => setActiveTab(selectedKey || "1")}
                >
                  {tabData.map((tab) => (
                    <Nav.Item key={tab.id}>
                      <Nav.Link
                        eventKey={tab.id.toString()}
                      >{`Tab-${tab.id}`}</Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
                <div className="simple-counter mt-4">
                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    {tabData
                      .find((tab) => tab.id.toString() === activeTab)
                      ?.items.map((item, idx) => (
                        <div
                          key={`${activeTab}-${idx}`}
                          className="simple text-center"
                        >
                          <div>
                            {item.prefix && <span>{item.prefix}</span>}
                            <Counter
                              value={item.value}
                              className="counter d-inline"
                              tag="p"
                            />
                            {item.suffix && <span>{item.suffix}</span>}
                          </div>
                          <p className="mb-0">
                            {item.icon}
                            {item.label}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>


      </Container>
    </div>
  );
};

export default SimpleCounterSection;
