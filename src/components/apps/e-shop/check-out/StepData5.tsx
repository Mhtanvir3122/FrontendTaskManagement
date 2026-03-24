import { Card, Col, FormCheck, Image, Row } from "react-bootstrap";

const StepData5 = () => {
  return (
    <div>
      <Row>
        <Col xs={12}>
          <div className="text-center">
            <div className="mb-3">
              <Image src="/images/form/done.gif" alt="form" fluid />
            </div>
            <h5 className="text-success">
              Your Order #7AD6728 Placed, Thank you!
            </h5>
            <p>Confirmation will be sent to Your Email</p>
          </div>
          <hr />
        </Col>
        <Col xs={12}>
          <Row className="mb-3">
            <Col md={12}>
              <h6>
                In the unlikely case of items being unavailable, what would you
                prefer?
              </h6>
            </Col>

            <Col md={6} xl={4} className="mt-3">
              <Card className="shadow-none equal-card">
                <Card.Body className="address-content">
                  <FormCheck
                    type="radio"
                    name="preference"
                    id="option1"
                    label="Call Help Center for any substitutes"
                    className="text-secondary fs-6 f-w-500"
                  />
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} xl={4} className="mt-3">
              <Card className="shadow-none equal-card">
                <Card.Body className="address-content">
                  <FormCheck
                    type="radio"
                    name="preference"
                    id="option2"
                    label="Let us pick your substitutes"
                    className="text-secondary fs-6 f-w-500"
                  />
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} xl={4} className="mt-3">
              <Card className="shadow-none equal-card">
                <Card.Body className="address-content">
                  <FormCheck
                    type="radio"
                    name="preference"
                    id="option3"
                    label="I do not need any substitutes"
                    className="text-secondary fs-6 f-w-500"
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default StepData5;
