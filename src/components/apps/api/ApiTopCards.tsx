import { useState } from "react";
import Chart from "react-apexcharts";
import { Alert, Button, Card, Col, Form, Modal, Row } from "react-bootstrap";

import { apiCardsData, apiKeyData } from "@/data/app/api/apiData.tsx";
import { ApiRequestData } from "@/data/charts/apexcharts/ApexChart.ts";

interface Props {
  apiKeyList: typeof apiKeyData;
  setApiKeyList: React.Dispatch<React.SetStateAction<typeof apiKeyData>>;
}

const ApiTopCards: React.FC<Props> = ({ apiKeyList, setApiKeyList }) => {
    const [uiState, setUiState] = useState({
    showModal: false,
    isKeyGenerated: false,
  });
  const [apiName, setApiName] = useState("");
  const [apiKey, setApiKey] = useState("");

  const handleGenerateKey = () => {
    const key = `api_${crypto.randomUUID().replace(/-/g, "").slice(0, 16)}`;
    setApiKey(key);
    setUiState((prev) => ({ ...prev, isKeyGenerated: true }));
  };

  const handleAddApi = () => {
    const newApi = {
      id: apiKeyList.length + 1,
      name: apiName,
      parentName: "Olive Yew",
      key: apiKey,
      date: new Date().toLocaleDateString("en-GB"),
      email: "noreply@example.com",
      avatar: "/images/avatar/1.png",
      bg: "text-bg-primary",
    };
    setApiKeyList([...apiKeyList, newApi]);

    setUiState((prev) => ({
      ...prev,
      showModal: false,
      isKeyGenerated: false,
    }));
    setApiName("");
    setApiKey("");
  };
  return (
    <>
      <Col lg={6}>
        <Card>
          <Card.Header>
            <h5>API request</h5>
          </Card.Header>
          <Card.Body>
            <div className="api-chart d-flex gap-3 justify-content-end">
              <Form.Check
                type="checkbox"
                id="apiCheckbox"
                className="mb-0"
                label="22k successfully"
              />
              <Form.Check
                type="checkbox"
                id="apiCheckbox1"
                className="mb-0"
                label="2 error"
              />
              <Form.Check
                type="checkbox"
                id="apiCheckbox2"
                className="mb-0"
                label="123 Total request"
              />
            </div>

            <div className="mt-4">
              <div id="apikey"></div>
              <Chart
                options={ApiRequestData}
                series={ApiRequestData.series}
                type="area"
                height={350}
              />
            </div>
          </Card.Body>
        </Card>
      </Col>
      <Col lg={6}>
        <Row>
          {apiCardsData.map((card, idx) => (
            <Col sm={6} key={idx}>
              <div className="card api-eshop-card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <h6>{card.title}</h6>
                    <div
                      className={`dropdown ${card.bgColor} h-40 w-40 d-flex-center b-r-15`}
                    >
                      {card.icon}
                    </div>
                  </div>
                  <h3 className={card.showButton ? "mb-3" : ""}>
                    {card.value}
                  </h3>

                  {card.percentage && (
                    <p className="text-success mt-3 f-s-16 f-w-500 mb-0">
                      <i className="ph-bold ph-arrow-up-right text-success f-s-20"></i>
                      {card.percentage}
                      <span className="text-secondary f-s-16 f-w-200">
                        {" "}
                        {card.subtitle}
                      </span>
                    </p>
                  )}

                  {card.avatars && (
                    <ul className="avatar-group justify-content-start">
                      {card.avatars.map((avatar, i) => (
                        <li
                          key={i}
                          className={`h-45 w-45 d-flex-center b-r-50 ${avatar.bgColor || "text-bg-secondary"} b-2-light position-relative`}
                        >
                          <span className="position-absolute top-0 start-2 p-1 bg-danger border border-light rounded-circle"></span>
                          <img
                            src={avatar.src}
                            alt=""
                            className="img-fluid b-r-50 overflow-hidden"
                          />
                        </li>
                      ))}
                      <li
                        className="text-bg-primary h-35 w-35 d-flex-center b-r-50"
                        data-bs-toggle="tooltip"
                        data-bs-title="5 More"
                      >
                        5+
                      </li>
                    </ul>
                  )}
                  {card.showButton && (
                    <Button color="primary" onClick={() => setUiState((prev) => ({ ...prev, showModal: true }))}>
                      Create API
                    </Button>
                  )}
                </div>
              </div>
            </Col>
          ))}

          <Col xl={12}>
            <Alert color="info" className="alert-border-info bg-white">
              <h6>
                <i className="ti ti-info-circle f-s-18 me-2 text-info"></i>
                Review API Token
              </h6>
              <p className="text-secondary">
                Here is your new API token. This is the only time the token will
                ever be displayed, so be sure not to lose it!
              </p>
              <div className="text-end">
                <a
                  href="#"
                  className="link-primary text-d-underline"
                  data-bs-dismiss="alert"
                >
                  Don’t allow
                </a>
                <a href="#" className="link-primary text-d-underline ms-2">
                  Allow
                </a>
              </div>
            </Alert>
          </Col>
        </Row>

        <Modal
          show={uiState.showModal}
          onHide={() => setUiState((prev) => ({ ...prev, showModal: false }))}
          backdrop="static"
        >
          <Modal.Header closeButton>
            <Modal.Title>Create API</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form className="app-form">
              <Form.Group controlId="apiName">
                <Form.Label>API Key Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter API Key Name"
                  value={apiName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setApiName(e.target.value)
                  }
                />
              </Form.Group>
              {uiState.isKeyGenerated && (
                <Form.Group controlId="generatedApiKey">
                  <Form.Label>Generated API Key</Form.Label>
                  <Form.Control type="text" value={apiKey} readOnly />
                </Form.Group>
              )}
            </Form>
          </Modal.Body>
          <Modal.Footer>
            {!uiState.isKeyGenerated ? (
              <Button color="primary" onClick={handleGenerateKey}>
                Generate Key
              </Button>
            ) : (
              <Button color="success" onClick={handleAddApi}>
                Add API
              </Button>
            )}
            <Button color="secondary" onClick={() => setUiState((prev) => ({ ...prev, showModal: false }))}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Col>
    </>
  );
};

export default ApiTopCards;
