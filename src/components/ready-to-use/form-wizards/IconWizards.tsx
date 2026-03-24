
import React, { useState, ChangeEvent } from "react";
import {
  Card,
  Form,
  Row,
  Col,
  Button,
  FormGroup,
  FormLabel,
  FormControl,
} from "react-bootstrap";
import {
  UsersThree,
  Info,
  UploadSimple,
} from "phosphor-react";

type FormData = {
  emailId: string;
  password: string;
  confirmPassword: string;
  companyName: string;
  department: string;
  departmentCode: string;
  projectName: string;
  file: File | null;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const IconWizard: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<FormData>({
    emailId: "",
    password: "",
    confirmPassword: "",
    companyName: "",
    department: "",
    departmentCode: "",
    projectName: "",
    file: null,
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, file }));
  };

  const validateStep = (s: number): FormErrors => {
    const errs: FormErrors = {};
    if (s === 1) {
      if (!formData.emailId) errs.emailId = "Email is required";
      if (!formData.password) errs.password = "Password is required";
      if (formData.password !== formData.confirmPassword)
        errs.confirmPassword = "Passwords must match";
    }
    if (s === 2) {
      if (!formData.companyName) errs.companyName = "Company name is required";
      if (!formData.department) errs.department = "Department is required";
      if (!formData.departmentCode) errs.departmentCode = "Department code is required";
    }
    if (s === 3) {
      if (!formData.projectName) errs.projectName = "Project name is required";
      if (!formData.file) errs.file = "File is required";
    }
    return errs;
  };

  const handleNext = () => {
    const errs = validateStep(step);
    if (Object.keys(errs).length === 0) {
      setErrors({});
      setStep(step + 1);
    } else {
      setErrors(errs);
    }
  };

  const handlePrev = () => setStep(step - 1);

  return (
    <Card className="p-4">
      <h5 className="mb-4">Wizard With Icon</h5>
      <div className="form-wizard">
        <Row>

            <ul className="form-wizard-steps">
              <li className={`${step >= 1 ? "activated" : ""} ${step === 1 ? "active" : ""}`}>
                <span className="wizard-steps circle-steps">
                  <UsersThree size={20} weight="bold"/>
                </span>
              </li>
              <li className={`${step >= 2 ? "activated" : ""} ${step === 2 ? "active" : ""}`}>
                <span className="wizard-steps circle-steps">
                  <Info size={20} weight="bold"/>
                </span>
              </li>
              <li className={`${step >= 3 ? "activated" : ""} ${step === 3 ? "active" : ""}`}>
                <span className="wizard-steps circle-steps">
                  <UploadSimple size={20} weight="bold"/>
                </span>
              </li>
            </ul>


            <Form className="app-form">
              {step === 1 && (
                <div className="wizard-fieldset show">
                  <Row>
                    <Col xs={12}>
                      <FormGroup className="mb-3">
                        <FormLabel htmlFor="emailId">Username*</FormLabel>
                        <FormControl
                          type="email"
                          id="emailId"
                          placeholder="Allen"
                          value={formData.emailId}
                          onChange={handleChange}
                          isInvalid={!!errors.emailId}
                        />
                        <FormControl.Feedback type="invalid">
                          {errors.emailId}
                        </FormControl.Feedback>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup className="mb-3">
                        <FormLabel htmlFor="password">Password*</FormLabel>
                        <FormControl
                          type="password"
                          id="password"
                          placeholder="******"
                          value={formData.password}
                          onChange={handleChange}
                          isInvalid={!!errors.password}
                        />
                        <FormControl.Feedback type="invalid">
                          {errors.password}
                        </FormControl.Feedback>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup className="mb-3">
                        <FormLabel htmlFor="confirmPassword">Confirm Password*</FormLabel>
                        <FormControl
                          type="password"
                          id="confirmPassword"
                          placeholder="******"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          isInvalid={!!errors.confirmPassword}
                        />
                        <FormControl.Feedback type="invalid">
                          {errors.confirmPassword}
                        </FormControl.Feedback>
                      </FormGroup>
                    </Col>
                    <Col xs={12} className="text-end">
                      <Button onClick={handleNext} className="next-btn btn-lg" variant="primary">
                        Next
                      </Button>
                    </Col>
                  </Row>
                </div>
              )}

              {step === 2 && (
                <div className="wizard-fieldset show">
                  <Row>
                    <Col xs={12}>
                      <FormGroup className="mb-3">
                        <FormLabel htmlFor="companyName">Company Name*</FormLabel>
                        <FormControl
                          type="text"
                          id="companyName"
                          placeholder="Enter Your Company Name"
                          value={formData.companyName}
                          onChange={handleChange}
                          isInvalid={!!errors.companyName}
                        />
                        <FormControl.Feedback type="invalid">
                          {errors.companyName}
                        </FormControl.Feedback>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup className="mb-3">
                        <FormLabel htmlFor="department">Department*</FormLabel>
                        <FormControl
                          type="text"
                          id="department"
                          placeholder="Enter Your Department"
                          value={formData.department}
                          onChange={handleChange}
                          isInvalid={!!errors.department}
                        />
                        <FormControl.Feedback type="invalid">
                          {errors.department}
                        </FormControl.Feedback>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup className="mb-3">
                        <FormLabel htmlFor="departmentCode">Department Code*</FormLabel>
                        <FormControl
                          type="text"
                          id="departmentCode"
                          placeholder="Enter Department Code"
                          maxLength={6}
                          value={formData.departmentCode}
                          onChange={handleChange}
                          isInvalid={!!errors.departmentCode}
                        />
                        <FormControl.Feedback type="invalid">
                          {errors.departmentCode}
                        </FormControl.Feedback>
                      </FormGroup>
                    </Col>
                    <Col xs={12} className="text-end">
                      <Button onClick={handlePrev} className="pre-btn btn-lg me-2" variant="secondary">
                        Previous
                      </Button>
                      <Button onClick={handleNext} className="next-btn btn-lg" variant="primary">
                        Next
                      </Button>
                    </Col>
                  </Row>
                </div>
              )}

              {step === 3 && (
                <div className="wizard-fieldset show">
                  <Row>
                    <Col xs={12}>
                      <FormGroup className="mb-3">
                        <FormLabel htmlFor="projectName">Project Name*</FormLabel>
                        <FormControl
                          type="text"
                          id="projectName"
                          placeholder="Enter Your Project Name"
                          value={formData.projectName}
                          onChange={handleChange}
                          isInvalid={!!errors.projectName}
                        />
                        <FormControl.Feedback type="invalid">
                          {errors.projectName}
                        </FormControl.Feedback>
                      </FormGroup>
                    </Col>
                    <Col xs={12}>
                      <FormGroup className="mb-3">
                        <FormLabel htmlFor="file">Upload Your File*</FormLabel>
                        <FormControl
                          type="file"
                          id="file"
                          onChange={handleFileChange}
                          isInvalid={!!errors.file}
                        />
                        <FormControl.Feedback type="invalid">
                          {errors.file}
                        </FormControl.Feedback>
                      </FormGroup>
                    </Col>
                    <Col xs={12} className="text-end">
                      <Button onClick={handlePrev} className="pre-btn btn-lg me-2" variant="secondary">
                        Previous
                      </Button>
                      <Button type="submit" className="btn-lg" variant="success">
                        Submit
                      </Button>
                    </Col>
                  </Row>
                </div>
              )}
            </Form>
        </Row>
      </div>
    </Card>
  );
};

export default IconWizard;
