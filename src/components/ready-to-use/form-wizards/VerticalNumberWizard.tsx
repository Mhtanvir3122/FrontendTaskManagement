
import React, { useState, ChangeEvent } from "react";
import {
  Card,
  Button,
  Form,
  Row,
  Col,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  dob: string;
  section: string;
  position: string;
  officeAddress: string;
}

interface Errors {
  firstName?: string;
  lastName?: string;
  email?: string;
  contact?: string;
  dob?: string;
  section?: string;
  position?: string;
  officeAddress?: string;
}

const VerticalNumberWizard: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    dob: "",
    section: "",
    position: "",
    officeAddress: "",
  });
  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateStep = (step: number): Errors => {
    const newErrors: Errors = {};
    if (step === 1) {
      if (!formData.firstName) newErrors.firstName = "First name is required";
      if (!formData.lastName) newErrors.lastName = "Last name is required";
      if (!formData.email) newErrors.email = "Email is required";
    }
    if (step === 2) {
      if (!formData.section) newErrors.section = "Section is required";
      if (!formData.position) newErrors.position = "Position is required";
      if (!formData.officeAddress)
        newErrors.officeAddress = "Office address is required";
    }
    return newErrors;
  };

  const handleNext = () => {
    const validation = validateStep(step);
    if (Object.keys(validation).length === 0) {
      setStep(step + 1);
    } else {
      setErrors(validation);
    }
  };

  const handlePrev = () => setStep(step - 1);

  return (
    <Card className="p-4">
      <h5 className="mb-4">Vertical Wizard With Number</h5>
      <div className="form-wizard">
        <Row>
          <Col xs={3}>
            <div className="form-wizard-header">
              <ul className="vertica-wizard-steps">
                {[1, 2, 3].map((s) => (
                  <li
                    key={s}
                    className={`${step >= s ? "activated" : ""} ${step === s ? "active" : ""}`}
                  >
                    <span className="wizard-steps circle-steps">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Col>

          <Col xs={9}>
            <Form className="app-form">
              {step === 1 && (
                <Row>
                  <Col md={6}>
                    <FormGroup className="mb-3">
                      <FormLabel htmlFor="firstName">First Name*</FormLabel>
                      <FormControl
                        id="firstName"
                        type="text"
                        placeholder="Enter Your First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        isInvalid={!!errors.firstName}
                      />
                      <FormControl.Feedback type="invalid">
                        {errors.firstName}
                      </FormControl.Feedback>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="mb-3">
                      <FormLabel htmlFor="lastName">Last Name*</FormLabel>
                      <FormControl
                        id="lastName"
                        type="text"
                        placeholder="Enter Your Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        isInvalid={!!errors.lastName}
                      />
                      <FormControl.Feedback type="invalid">
                        {errors.lastName}
                      </FormControl.Feedback>
                    </FormGroup>
                  </Col>
                  <Col xs={12}>
                    <FormGroup className="mb-3">
                      <FormLabel htmlFor="email">Email*</FormLabel>
                      <FormControl
                        id="email"
                        type="email"
                        placeholder="Enter Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                      />
                      <FormControl.Feedback type="invalid">
                        {errors.email}
                      </FormControl.Feedback>
                    </FormGroup>
                  </Col>
                  <Col md={6} xl={7}>
                    <FormGroup className="mb-3">
                      <FormLabel htmlFor="contact">Contact*</FormLabel>
                      <FormControl
                        id="contact"
                        type="text"
                        placeholder="Enter Your Contact Number"
                        value={formData.contact}
                        onChange={handleChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col md={6} xl={5}>
                    <FormGroup className="mb-3">
                      <FormLabel htmlFor="dob">Date of Birth</FormLabel>
                      <FormControl
                        id="dob"
                        type="date"
                        placeholder="Select Your DOB"
                        value={formData.dob}
                        onChange={handleChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col xs={12} className="text-end">
                    <Button variant="primary" onClick={handleNext} className="next-btn btn-lg">
                      Next
                    </Button>
                  </Col>
                </Row>
              )}

              {step === 2 && (
                <Row>
                  <Col md={6}>
                    <FormGroup className="mb-3">
                      <FormLabel htmlFor="section">Section*</FormLabel>
                      <FormControl
                        id="section"
                        type="text"
                        placeholder="Enter Your Section"
                        value={formData.section}
                        onChange={handleChange}
                        isInvalid={!!errors.section}
                      />
                      <FormControl.Feedback type="invalid">
                        {errors.section}
                      </FormControl.Feedback>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup className="mb-3">
                      <FormLabel htmlFor="position">Position*</FormLabel>
                      <FormControl
                        id="position"
                        type="text"
                        placeholder="Enter Your Position"
                        value={formData.position}
                        onChange={handleChange}
                        isInvalid={!!errors.position}
                      />
                      <FormControl.Feedback type="invalid">
                        {errors.position}
                      </FormControl.Feedback>
                    </FormGroup>
                  </Col>
                  <Col xs={12}>
                    <FormGroup className="mb-3">
                      <FormLabel htmlFor="officeAddress">Office Address*</FormLabel>
                      <FormControl
                        id="officeAddress"
                        as="textarea"
                        placeholder="Enter Your Office Address"
                        value={formData.officeAddress}
                        onChange={handleChange}
                        isInvalid={!!errors.officeAddress}
                      />
                      <FormControl.Feedback type="invalid">
                        {errors.officeAddress}
                      </FormControl.Feedback>
                    </FormGroup>
                  </Col>
                  <Col xs={12} className="text-end">
                    <Button variant="primary" onClick={handlePrev} className="pre-btn btn-lg">
                      Previous
                    </Button>{" "}
                    <Button variant="primary" onClick={handleNext} className="next-btn btn-lg">
                      Next
                    </Button>
                  </Col>
                </Row>
              )}

              {step === 3 && (
                <Row>
                  <Col xs={12}>
                    <h6>Check your Details and Submit</h6>
                    <p className="f-w-500">Section :</p>
                    <p>- {formData.section}</p>
                    <p className="f-w-500">Position :</p>
                    <p>- {formData.position}</p>
                    <p className="f-w-500">Office Address :</p>
                    <p>{formData.officeAddress}</p>
                  </Col>
                  <Col xs={12} className="text-end">
                    <Button variant="primary" onClick={handlePrev} className="pre-btn btn-lg">
                      Previous
                    </Button>{" "}
                    <Button type="submit" variant="primary" className="btn-lg">
                      Submit
                    </Button>
                  </Col>
                </Row>
              )}
            </Form>
          </Col>
        </Row>
      </div>
    </Card>
  );
};

export default VerticalNumberWizard;
