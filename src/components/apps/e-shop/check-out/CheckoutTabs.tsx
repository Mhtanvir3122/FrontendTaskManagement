import { useState } from "react";
import { Card, Container } from "react-bootstrap";

import {
  IconCurrencyDollar,
  IconDisc,
  IconUserCircle,
  IconUserPlus,
} from "@tabler/icons-react";

import CheckoutTabsData from "@/components/apps/e-shop/check-out/CheckoutTabsData.tsx";

const CheckoutTabs = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { id: 1, title: "Billing Info", icon: <IconUserCircle size={20} /> },
    { id: 2, title: "Address", icon: <IconDisc size={20} /> },
    { id: 3, title: "Payment", icon: <IconUserPlus size={20} /> },
    { id: 4, title: "Review", icon: <IconCurrencyDollar size={20} /> },
    { id: 5, title: "Finish", icon: <IconDisc size={20} /> },
  ];

  const handleStepClick = (stepId: number) => {
    setCurrentStep(stepId);
  };

  return (
    <Container fluid>
      <Card className="mb-3">
        <Card.Body className="p-0">
          <div className="checkout-tabs-step">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`tab d-flex align-items-center cursor-pointer ${
                  currentStep === step.id ? "checkout-current-step" : ""
                }`}
                onClick={() => handleStepClick(step.id)}
                role="button"
              >
                <div className="tabs-steps me-2">{step.icon}</div>
                <div>
                  <h6 className="mb-0">{step.title}</h6>
                  <span className="text-secondary">Step {step.id}</span>
                </div>
              </div>
            ))}
          </div>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <CheckoutTabsData currentStep={currentStep} />
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CheckoutTabs;
