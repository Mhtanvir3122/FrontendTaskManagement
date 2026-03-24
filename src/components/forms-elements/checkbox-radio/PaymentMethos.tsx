import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

import {
  managers,
  paymentMethods,
  services,
} from "@/data/form-elements/Checkbox/checkboxData.tsx";

const PaymentMethos: React.FC = () => {
  const [selectedPayment, setSelectedPayment] = useState<string>("Credit Card");

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPayment(e.target.value);
  };

  const [selectedManagers, setSelectedManagers] = useState<string[]>([]);

  const handleManagerChange = (name: string) => {
    setSelectedManagers((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name]
    );
  };

  const [selectedService, setSelectedService] = useState<string>("Consulting");

  const handleServiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedService(e.target.value);
  };
  return (
    <div>
      <Row>
        <Col md={6} xl={4}>
          <Card>
            <Card.Header>
              <h5>Payment Methods</h5>
            </Card.Header>
            <Card.Body>
              <div className="form-selectgroup">
                {paymentMethods.map((method, index) => (
                  <div key={index} className="select-item">
                    <input
                      type="radio"
                      name="paymentMethod"
                      id={`payment${index}`}
                      value={method}
                      checked={selectedPayment === method}
                      onChange={handlePaymentChange}
                      className="form-check-input"
                    />
                    <label
                      htmlFor={`payment${index}`}
                      className="form-check-label"
                    >
                      <span className="d-flex align-items-center">
                        <img
                          src={`/images/checkbox-radio/logo${index + 1}.png`}
                          className="w-30 h-30 b-r-16"
                          alt=""
                        />
                        <span className="ms-2">
                          <span className="fs-6">{method}</span>
                          <span className="d-block text-secondary">
                            Select {method} payment method
                          </span>
                        </span>
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} xl={4}>
          <Card>
            <Card.Header>
              <h5>Project Manager</h5>
            </Card.Header>
            <Card.Body>
              <div className="form-selectgroup">
                {managers.map((manager, index) => (
                  <div key={index} className="select-item">
                    <input
                      type="checkbox"
                      id={`manager${index}`}
                      value={manager.name}
                      checked={selectedManagers.includes(manager.name)}
                      onChange={() => handleManagerChange(manager.name)}
                      className="form-check-input"
                    />
                    <label
                      htmlFor={`manager${index}`}
                      className="form-check-label"
                    >
                      <span className="d-flex align-items-center">
                        <span className="bg-secondary h-30 w-30 d-flex-center b-r-50 position-relative">
                          <img
                            src={`/images/avatar/${manager.img}`}
                            alt=""
                            className="img-fluid b-r-50"
                          />
                          <span className="position-absolute top-0 end-0 p-1 bg-success border border-light rounded-circle"></span>
                        </span>
                        <span className="ms-2">
                          <span className="fs-6">{manager.name}</span>
                          <span className="d-block text-secondary">
                            {manager.role}
                          </span>
                        </span>
                      </span>
                    </label>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} xl={4}>
          <Card className="equal-card">
            <Card.Header>
              <h5>Custom Select Group</h5>
            </Card.Header>
            <Card.Body>
              <Row>
                {services.map((service, index) => (
                  <Col xs={12} key={index}>
                    <Card className="shadow-none">
                      <Card.Body className="custom-selection address-content">
                        <div className="position-relative">
                          <label className="check-box">
                            <input
                              type="radio"
                              name="service"
                              value={service.name}
                              checked={selectedService === service.name}
                              onChange={handleServiceChange}
                            />
                            <span className="radiomark outline-secondary position-absolute"></span>
                            <span className="ms-4 fs-6">{service.name}</span>
                          </label>
                        </div>
                        <div>
                          <i className={`${service.icon} icon-bg`}></i>
                          <p className="text-muted">{service.description}</p>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default PaymentMethos;
