import { Card, Col, Form, Row } from "react-bootstrap";

import { connections } from "@/data/app/settingapp/SettingAppData.tsx";

const ConnectionSettings = () => {
  return (
    <Row>
      {connections.map(({ id, title, description, imgSrc }) => (
        <Col key={id} md={6} xxl={4} className="mb-4">
          <Card className="conection-setting h-100">
            <Card.Body>
              <div className="conection-item">
                <div className="position-relative">
                  <span className="position-absolute">
                    <img alt={title} className="w-35 h-35" src={imgSrc} />
                  </span>
                  <h5 className="ms-5 mt-1">{title}</h5>
                </div>
                <Form.Check
                  type="switch"
                  id={`custom-switch-${id}`}
                  label=""
                  className="d-flex mt-1"
                >
                  <Form.Check.Input
                    type="checkbox"
                    role="switch"
                    className="form-check-input form-check-primary fs-3"
                    defaultChecked
                  />
                  <Form.Check.Label className="pt-2" />
                </Form.Check>
              </div>
              <p className="text-secondary f-s-16 mt-4">{description}</p>
            </Card.Body>
            <Card.Footer className="text-end text-d-underline link-primary">
              <a href="#">View integration</a>
            </Card.Footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ConnectionSettings;
