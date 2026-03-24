import { useState } from "react";
import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";

import { CheckCircle } from "phosphor-react";

const SubscriptionPlan = () => {
  const [teamCount, setTeamCount] = useState(25);
  const [selectedPlan, setSelectedPlan] = useState("planOption1");

  const handleIncrement = () => setTeamCount((prev) => prev + 1);
  const handleDecrement = () =>
    setTeamCount((prev) => (prev > 1 ? prev - 1 : prev));

  const plans = [
    {
      id: "planOption2",
      label: "Mark Moen",
      subLabel: "UI/UX Designer",
      price: "$69.44",
      users: "1 users/quarterly",
    },
    {
      id: "planOption1",
      label: "Mark Moen",
      subLabel: "UI/UX Designer",
      price: "$69.44",
      users: "1 users/quarterly",
      features: [
        "40 downloads per day.",
        "Access to all products or bundles.",
        "Early access to new/beta release features.",
      ],
      hasTeamOption: true,
    },
    {
      id: "planOption3",
      label: "Business Pro",
      subLabel: "for big teams",
      price: "$250.44",
      users: "31 users/quarterly",
    },
  ];

  const paymentMethods = [
    {
      id: "paymentCheckbox1",
      value: "paymentoption1",
      label: "**** 4426",
      subLabel: "Visa card",
      img: "/images/setting-app/visa-icon.png",
      alt: "Visa",
      defaultChecked: false,
    },
    {
      id: "paymentCheckbox2",
      value: "paymentoption2",
      label: "**** 6790",
      subLabel: "Master card",
      img: "/images/setting-app/master-icon.png",
      alt: "MasterCard",
      defaultChecked: true,
    },
  ];

  return (
    <Card>
      <Card.Header>
        <h5>Subscription</h5>
      </Card.Header>
      <Card.Body>
        <div className="subscription-plan">
          <Row>
            <Col xl="6">
              <div className="plan-choose">
                <h6 className="mb-0">Choose plan</h6>
                <div>
                  <Button variant="primary" className="me-2">
                    Quarterly
                  </Button>
                  <Button variant="secondary">Yearly</Button>
                </div>
              </div>

              {plans.map((plan) => (
                <div className="form-selectgroup mt-4" key={plan.id}>
                  <div className="select-item">
                    <input
                      type="radio"
                      id={plan.id}
                      value={plan.id}
                      name="planoption"
                      checked={selectedPlan === plan.id}
                      onChange={() => setSelectedPlan(plan.id)}
                      className="form-check-input form-check-primary w-20 h-20"
                    />
                    <Form.Label htmlFor={plan.id} className="form-check-label">
                      <span className="d-flex align-items-center">
                        <span>
                          <span className="fs-6 mb-0">{plan.label}</span>
                          <span className="d-block text-secondary mb-0">
                            {plan.subLabel}
                          </span>
                        </span>
                      </span>
                    </Form.Label>
                    <div className="select-item-2 ms-2">
                      <h6 className="fs-6 mb-0">{plan.price}</h6>
                      <p className="text-secondary mb-0">{plan.users}</p>
                    </div>
                  </div>

                  {plan.features && (
                    <>
                      <ul className="features-list mx-4">
                        {plan.features.map((feature, i) => (
                          <li className="f-s-16 text-secondary" key={i}>
                            <CheckCircle
                              weight="bold"
                              size={16}
                              className="me-2 text-success"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="app-divider-v py-3 mb-4"></div>
                    </>
                  )}

                  {plan.hasTeamOption && (
                    <div className="team-accounts mb-4 d-flex align-items-center">
                      <div className="privacy-content">
                        <span className="mb-0 f-s-16 f-w-500">
                          Team Accounts
                        </span>
                        <span className="text-secondary f-s-14 mb-0 d-block">
                          Starting at 5 users in the team plan, you can
                          increase.
                        </span>
                      </div>
                      <div className="simplespin ms-3 d-flex align-items-center">
                        <Button
                          variant="light-primary"
                          className="circle-btn icon-btn decrement"
                          onClick={handleDecrement}
                        >
                          -
                        </Button>
                        <Form.Control
                          type="text"
                          className="app-small-touchspin count p-3"
                          value={teamCount}
                          readOnly
                        />
                        <Button
                          variant="light-primary"
                          className="circle-btn icon-btn increment"
                          onClick={handleIncrement}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </Col>
            <Col xl="6" className="mt-xxl-0 mt-5">
              <div className="plan-choose">
                <h6 className="mb-0">Payment plan</h6>
                <div>
                  <Button variant="primary" className="me-2">
                    Credit card
                  </Button>
                  <Button variant="secondary">PayPal</Button>
                </div>
              </div>

              {/* Payment Methods */}
              {paymentMethods.map((method) => (
                <div className="form-selectgroup mt-4" key={method.id}>
                  <div className="select-item">
                    <input
                      type="radio"
                      id={method.id}
                      value={method.value}
                      name="paymentoption"
                      defaultChecked={method.defaultChecked}
                      className="form-check-input form-check-primary w-20 h-20"
                    />
                    <Form.Label
                      htmlFor={method.id}
                      className="form-check-label"
                    >
                      <span className="d-flex align-items-center">
                        <span>
                          <span className="f-s-16 mb-0 f-w-500">
                            {method.label}
                          </span>
                          <span className="d-block text-secondary f-s-16 mb-0">
                            {method.subLabel}
                          </span>
                        </span>
                      </span>
                    </Form.Label>
                    <div className="ms-2">
                      <img src={method.img} alt={method.alt} />
                    </div>
                  </div>
                </div>
              ))}

              <Button variant="success" className="w-100 mt-4">
                + Add New Card
              </Button>

              {/* Discount Code Area */}
              <div className="form-selectgroup p-3 mt-4">
                <h6 className="mb-2">Discount code</h6>
                <InputGroup className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="20FGJKYSD"
                    className="b-r-left"
                  />
                  <Button variant="secondary" className="b-r-right">
                    Apply
                  </Button>
                </InputGroup>

                <p className="text-success f-s-16 mb-0">
                  30% discount code applied
                </p>

                <div className="team-accounts mt-3 p-0 d-flex justify-content-between align-items-center">
                  <div className="privacy-content">
                    <span className="mb-0 f-s-16 f-w-500">Team Plan</span>
                    <span className="text-secondary f-s-14 mb-0 d-block">
                      5 Users Quarterly
                    </span>
                  </div>
                  <h4>$789.0</h4>
                </div>

                <div className="app-divider-v py-3" />

                <div className="plan-choose d-flex justify-content-between">
                  <h6 className="mb-0">Payment plan</h6>
                  <h5 className="text-success f-s-18">-$57.90</h5>
                </div>

                <div className="app-divider-v py-3" />

                <div className="team-accounts mt-3 mb-4 p-0 d-flex justify-content-between">
                  <div className="privacy-content">
                    <span className="mb-0 f-s-16 f-w-500">Total</span>
                    <span className="text-secondary f-s-14 mb-0 d-block">
                      Next payment will charge 10th of January 2030
                    </span>
                  </div>
                  <h6>$789.0</h6>
                </div>

                <Button variant="success" className="w-100">
                  PAY NOW
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Card.Body>
    </Card>
  );
};

export default SubscriptionPlan;
