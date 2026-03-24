
import { useState } from "react";
import { Card, Tab, Row, Col } from "react-bootstrap";
import PaymentDataForm from "./PaymentDataForm";

const PaymentForm = () => {
  const [activeTab, setActiveTab] = useState("card");

  const toggleTab = (tab: string) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <Card>
      <Card.Header>
        <h5>Payment Information Form</h5>
      </Card.Header>
      <Card.Body>
        <Tab.Container activeKey={activeTab}>
          <Row>
            <Col md={4} xxl={3}>
              <div className="step-status">
                <ul className="nav flex-column">
                  <li className="mb-2">
                    <button
                      type="button"
                      className={`btn nav-link flex-grow-1 text-start ${
                        activeTab === "card" ? "active" : ""
                      }`}
                      onClick={() => toggleTab("card")}
                    >
                      <img
                        src="/images/checkbox-radio/logo1.png"
                        alt=""
                        className="w-35 h-35 avatar-35"
                      />
                      <span>Credit / Debit Card</span>
                    </button>
                  </li>
                  <li className="mb-2">
                    <button
                      type="button"
                      className={`btn nav-link flex-grow-1 text-start ${
                        activeTab === "visa" ? "active" : ""
                      }`}
                      onClick={() => toggleTab("visa")}
                    >
                      <img
                        src="/images/checkbox-radio/logo2.png"
                        alt=""
                        className="w-35 h-35 avatar-35"
                      />
                      <span>Visa Card</span>
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className={`btn nav-link flex-grow-1 text-start ${
                        activeTab === "paypal" ? "active" : ""
                      }`}
                      onClick={() => toggleTab("paypal")}
                    >
                      <img
                        src="/images/checkbox-radio/logo3.png"
                        alt=""
                        className="w-35 h-35 avatar-35"
                      />
                      <span>Paypal</span>
                    </button>
                  </li>
                </ul>
              </div>
            </Col>

            <Col md={8} xxl={9}>
              <Tab.Content className="mt-3">
                <Tab.Pane eventKey="card" active={activeTab === "card"}>
                  <PaymentDataForm />
                </Tab.Pane>
                <Tab.Pane eventKey="visa" active={activeTab === "visa"}>
                  <PaymentDataForm />
                </Tab.Pane>
                <Tab.Pane eventKey="paypal" active={activeTab === "paypal"}>
                  <PaymentDataForm />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Card.Body>
    </Card>
  );
};

export default PaymentForm;
