import React, { useState, ChangeEvent } from "react";
import {
  Card,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  FormControl,
  FormLabel,
} from "react-bootstrap";
import {
  UsersThree,
  PhoneCall,
  Info,
} from "phosphor-react";

interface FormData {
  name: string;
  aboutSelf: string;
  email: string;
  password: string;
  confirmPassword: string;
  facebookUrl: string;
  twitterUrl: string;
  githubUrl: string;
}

interface Errors {
  [key: string]: string | undefined;
}

const VerticalIconWizards: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    aboutSelf: "",
    email: "",
    password: "",
    confirmPassword: "",
    facebookUrl: "",
    twitterUrl: "",
    githubUrl: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const validateStep = (step: number): Errors => {
    const newErrors: Errors = {};

    if (step === 1) {
      if (!formData.name) newErrors.name = "Name is required";
      if (!formData.aboutSelf) newErrors.aboutSelf = "About Self is required";
    }

    if (step === 2) {
      if (!formData.email) newErrors.email = "Email is required";
      if (!formData.password) newErrors.password = "Password is required";
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

    return newErrors;
  };

  const handleNext = (): void => {
    const validation = validateStep(step);
    if (Object.keys(validation).length === 0) {
      setStep(step + 1);
    } else {
      setErrors(validation);
    }
  };

  const handlePrev = (): void => {
    setStep(step - 1);
  };

  return (
    <Card className="equal-card p-4">
      <h5 className="mb-4 text-muted">Vertical Wizard With Icon</h5>
      <div className="form-wizard">
        <Row>
          {/* Step Indicator with Icons */}
          <Col md={3}>
            <div className="form-wizard-header">
              <ul className="vertica-wizard-steps">
                <li className={`${step >= 1 ? "activated" : ""} ${step === 1 ? "active" : ""}`}>
                  <span className="wizard-steps"><UsersThree size={20} weight="bold"/></span>
                </li>
                <li className={`${step >= 2 ? "activated" : ""} ${step === 2 ? "active" : ""}`}>
                  <span className="wizard-steps"><PhoneCall size={20} weight="bold"/></span>
                </li>
                <li className={`${step >= 3 ? "activated" : ""} ${step === 3 ? "active" : ""}`}>
                  <span className="wizard-steps"><Info size={20} weight="bold"/></span>
                </li>
              </ul>
            </div>
          </Col>

          {/* Form Fields */}
          <Col md={9}>
            <Form className="app-form">
              {step === 1 && (
                <div className="wizard-fieldset show">
                  <FormGroup className="mb-3">
                    <FormLabel htmlFor="name">Name*</FormLabel>
                    <FormControl
                      id="name"
                      type="text"
                      placeholder="Johnson"
                      value={formData.name}
                      onChange={handleChange}
                      isInvalid={!!errors.name}
                    />
                    <FormControl.Feedback type="invalid">
                      {errors.name}
                    </FormControl.Feedback>
                  </FormGroup>
                  <FormGroup className="mb-3">
                    <FormLabel htmlFor="aboutSelf">About Self</FormLabel>
                    <FormControl
                      as="textarea"
                      id="aboutSelf"
                      placeholder="Type About Self"
                      value={formData.aboutSelf}
                      onChange={handleChange}
                      isInvalid={!!errors.aboutSelf}
                    />
                    <FormControl.Feedback type="invalid">
                      {errors.aboutSelf}
                    </FormControl.Feedback>
                  </FormGroup>
                  <div className="text-end">
                    <Button onClick={handleNext} className="next-btn btn-lg" variant="primary">
                      Next
                    </Button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="wizard-fieldset show">
                  <FormGroup className="mb-3">
                    <FormLabel htmlFor="email">Email*</FormLabel>
                    <FormControl
                      id="email"
                      type="email"
                      placeholder="StevenSHarmon@rhyta.com"
                      value={formData.email}
                      onChange={handleChange}
                      isInvalid={!!errors.email}
                    />
                    <FormControl.Feedback type="invalid">
                      {errors.email}
                    </FormControl.Feedback>
                  </FormGroup>
                  <FormGroup className="mb-3">
                    <FormLabel htmlFor="password">Password*</FormLabel>
                    <FormControl
                      id="password"
                      type="password"
                      placeholder="*****"
                      value={formData.password}
                      onChange={handleChange}
                      isInvalid={!!errors.password}
                    />
                    <FormControl.Feedback type="invalid">
                      {errors.password}
                    </FormControl.Feedback>
                  </FormGroup>
                  <FormGroup className="mb-3">
                    <FormLabel htmlFor="confirmPassword">Confirm Password*</FormLabel>
                    <FormControl
                      id="confirmPassword"
                      type="password"
                      placeholder="*****"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      isInvalid={!!errors.confirmPassword}
                    />
                    <FormControl.Feedback type="invalid">
                      {errors.confirmPassword}
                    </FormControl.Feedback>
                  </FormGroup>
                  <div className="text-end mb-3">
                    <Button onClick={handlePrev} className="pre-btn btn-lg me-2" variant="secondary">
                      Previous
                    </Button>
                    <Button onClick={handleNext} className="next-btn btn-lg" variant="primary">
                      Next
                    </Button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="wizard-fieldset show">
                  <FormGroup className="mb-3">
                    <FormLabel htmlFor="facebookUrl">Facebook Url</FormLabel>
                    <FormControl
                      id="facebookUrl"
                      type="url"
                      placeholder="https://"
                      value={formData.facebookUrl}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup className="mb-3">
                    <FormLabel htmlFor="twitterUrl">Twitter Url</FormLabel>
                    <FormControl
                      id="twitterUrl"
                      type="url"
                      placeholder="https://"
                      value={formData.twitterUrl}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <FormGroup className="mb-3">
                    <FormLabel htmlFor="githubUrl">Github Url</FormLabel>
                    <FormControl
                      id="githubUrl"
                      type="url"
                      placeholder="https://"
                      value={formData.githubUrl}
                      onChange={handleChange}
                    />
                  </FormGroup>
                  <div className="text-end mb-3">
                    <Button onClick={handlePrev} className="pre-btn btn-lg me-2" variant="secondary">
                      Previous
                    </Button>
                    <Button type="submit" className="btn-lg" variant="success">
                      Submit
                    </Button>
                  </div>
                </div>
              )}
            </Form>
          </Col>
        </Row>
      </div>
    </Card>
  );
};

export default VerticalIconWizards;
