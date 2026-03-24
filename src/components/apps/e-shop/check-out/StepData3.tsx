import { useState } from "react";
import {
  Button,
  Card,
  Col,
  Form,
  FormCheck,
  FormControl,
  FormGroup,
  FormLabel,
  Image,
  Row,
} from "react-bootstrap";

const StepData3 = () => {
  const [selectedPayment, setSelectedPayment] = useState("card");

  const [cardData, setCardData] = useState({
    name: "",
    number: "",
    expiry: "",
    cvc: "",
  });

  const handlePaymentSelect = (method: string) => {
    setSelectedPayment(method);
  };

  const handleCardInputChange = (field: string, value: string) => {
    setCardData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted card data:", cardData);
    alert("Payment submitted successfully!");
  };

  return (
    <div>
      <Row>
        {/* Credit / Debit Card */}
        <Col md={12}>
          <Card className="shadow-none mb-3">
            <Card.Body className="select-content">
              <FormCheck
                type="radio"
                name="payment"
                id="creditCard"
                label="Credit / Debit Card"
                checked={selectedPayment === "card"}
                onChange={() => handlePaymentSelect("card")}
                className="mb-3 fs-6 tab-heading"
              />
              {selectedPayment === "card" && (
                <Form className="app-form" onSubmit={handleCardSubmit}>
                  <Row>
                    <Col md={12}>
                      <FormGroup className="mb-3">
                        <FormLabel>Cardholder Name</FormLabel>
                        <FormControl
                          type="text"
                          placeholder="Olaf"
                          value={cardData.name}
                          onChange={(e) =>
                            handleCardInputChange("name", e.target.value)
                          }
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={12}>
                      <FormGroup className="mb-3">
                        <FormLabel>Card Number</FormLabel>
                        <FormControl
                          type="text"
                          placeholder="xxxx-xxxx-xxxx-xxxx"
                          value={cardData.number}
                          onChange={(e) =>
                            handleCardInputChange("number", e.target.value)
                          }
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup className="mb-3">
                        <FormLabel>Expiration Date</FormLabel>
                        <FormControl
                          type="text"
                          placeholder="MM/YY"
                          value={cardData.expiry}
                          onChange={(e) =>
                            handleCardInputChange("expiry", e.target.value)
                          }
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup className="mb-3">
                        <FormLabel>CVC Code</FormLabel>
                        <FormControl
                          type="text"
                          placeholder="xxx"
                          value={cardData.cvc}
                          onChange={(e) =>
                            handleCardInputChange("cvc", e.target.value)
                          }
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={12} className="text-end">
                      <Button type="submit" variant="primary">
                        Submit
                      </Button>
                    </Col>
                  </Row>
                </Form>
              )}
            </Card.Body>
          </Card>
        </Col>

        {/* Visa Card */}
        <Col md={6}>
          <Card className="shadow-none mb-3">
            <Card.Body className="select-content">
              <FormCheck
                type="radio"
                name="payment"
                id="visaCard"
                label={
                  <div className="d-flex align-items-center">
                    <Image
                      src="/images/checkbox-radio/logo1.png"
                      width={30}
                      height={30}
                      alt="Visa"
                      className="me-2"
                    />
                    <div>
                      <div className="fs-6 tab-heading">Visa Card</div>
                      <p className="text-secondary mb-0">Select Visa</p>
                    </div>
                  </div>
                }
                checked={selectedPayment === "visa"}
                onChange={() => handlePaymentSelect("visa")}
              />
            </Card.Body>
          </Card>
        </Col>

        {/* PayPal */}
        <Col md={6}>
          <Card className="shadow-none mb-3">
            <Card.Body className="select-content">
              <FormCheck
                type="radio"
                name="payment"
                id="paypal"
                label={
                  <div className="d-flex align-items-center">
                    <Image
                      src="/images/checkbox-radio/logo3.png"
                      width={30}
                      height={30}
                      alt="PayPal"
                      className="me-2"
                    />
                    <div>
                      <div className="fs-6 tab-heading">Paypal</div>
                      <p className="text-secondary mb-0">Select PayPal</p>
                    </div>
                  </div>
                }
                checked={selectedPayment === "paypal"}
                onChange={() => handlePaymentSelect("paypal")}
              />
            </Card.Body>
          </Card>
        </Col>

        {/* UPI */}
        <Col md={12}>
          <Card className="shadow-none mb-3">
            <Card.Body className="select-content">
              <FormCheck
                type="radio"
                name="payment"
                id="upi"
                label={
                  <>
                    <div className="fs-6 tab-heading">Other UPI Apps</div>
                    <p className="text-secondary mb-0">
                      Select Other UPI Apps for payment
                    </p>
                  </>
                }
                checked={selectedPayment === "upi"}
                onChange={() => handlePaymentSelect("upi")}
              />
            </Card.Body>
          </Card>
        </Col>

        {/* Cash on Delivery */}
        <Col md={12}>
          <Card className="shadow-none mb-3">
            <Card.Body className="select-content">
              <FormCheck
                type="radio"
                name="payment"
                id="cod"
                label={
                  <>
                    <div className="fs-6 tab-heading">
                      Cash on Delivery/Pay on Delivery
                    </div>
                    <p className="text-secondary mb-0">
                      Cash, UPI and Cards accepted.
                    </p>
                  </>
                }
                checked={selectedPayment === "cod"}
                onChange={() => handlePaymentSelect("cod")}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default StepData3;
