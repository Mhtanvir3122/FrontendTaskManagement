import { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

import {
  privacyOptions,
  userOptions,
} from "@/data/app/settingapp/SettingAppData.tsx";

const PrivacyCard = () => {
  const [privacyOption, setPrivacyOption] = useState("option1");
  const [userOption, setUserOption] = useState("useroption1");

  return (
    <Card className="equal-card privacy-card">
      <Card.Header>
        <h5>Privacy</h5>
      </Card.Header>
      <Card.Body>
        <h6>ACCESS</h6>
        <Row>
          {privacyOptions.map((option) => (
            <Col key={option.id} xl={6}>
              <div className="setting-privacy-card mb-3">
                <div className="select-item">
                  <Form.Check
                    type="radio"
                    id={option.id}
                    name="option"
                    value={option.value}
                    checked={privacyOption === option.value}
                    onChange={(e) => setPrivacyOption(e.target.value)}
                    label={
                      <span
                        className={`d-flex align-items-center position-relative ${option.icon}`}
                      >
                        <span
                          className={`privacy-img ${option.color} h-40 w-40 d-flex-center b-r-50 position-absolute`}
                        >
                          $
                          {option.icon && (
                            <i className={`ph-bold ${option.icon} f-s-18`}></i>
                          )}
                        </span>
                        <span className="privacy-content ms-5 me-2">
                          <span className="mb-0 text-dark txt-ellipsis-1 f-s-16 f-w-500">
                            {option.label}
                          </span>
                          <span className="mb-0 text-secondary f-s-16">
                            {option.description}
                          </span>
                        </span>
                      </span>
                    }
                    className="form-check-input-custom position-relative"
                  />
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <h6>USERS</h6>
        <Row>
          {userOptions.map((option) => (
            <Col key={option.id} xl={6}>
              <div className="setting-privacy-card mb-3">
                <div className="select-item">
                  <Form.Check
                    type="radio"
                    id={option.id}
                    name="useroption"
                    value={option.value}
                    checked={userOption === option.value}
                    onChange={(e) => setUserOption(e.target.value)}
                    label={
                      <span className="d-flex align-items-center position-relative">
                        <span
                          className={`privacy-img ${option.color} h-40 w-40 d-flex-center b-r-50 position-absolute`}
                        >
                          $
                          {option.icon && (
                            <i className={`ph-bold ${option.icon} f-s-18`}></i>
                          )}
                        </span>
                        <span className="privacy-content ms-5 me-2">
                          <span className="mb-0 text-dark txt-ellipsis-1 f-s-16 f-w-500">
                            {option.label}
                          </span>
                          <span className="mb-0 text-secondary f-s-16">
                            {option.description}
                          </span>
                        </span>
                      </span>
                    }
                    className="form-check-input-custom position-relative"
                  />
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <div className="publishe-card mt-4">
          <div>
            <h6 className="m-0">Publishing</h6>
            <p className="mb-0 f-s-16 text-secondary">
              Your project is published
            </p>
          </div>
          <Button variant="light-primary" type="button">
            Unpublish
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PrivacyCard;
