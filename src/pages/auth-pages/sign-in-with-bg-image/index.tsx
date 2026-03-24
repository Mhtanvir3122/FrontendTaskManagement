import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  FormCheck,
  FormLabel,
  FormControl,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FacebookLogo,
  GoogleLogo,
  GithubLogo,
} from "phosphor-react";


type FormDataType = {
  email: string;
  password: string;
  remember: boolean;
};

type FieldName = "email" | "password";

const fields: {
  label: string;
  type: string;
  name: FieldName;
  id: string;
}[] = [
  {
    label: "Email address",
    type: "text",
    name: "email",
    id: "email",
  },
  {
    label: "Password",
    type: "password",
    name: "password",
    id: "password",
  },
];

const socialButtons = [
  {
    icon: <FacebookLogo size={18} color="white" weight="bold" />,
    variant: "primary",
  },
  {
    icon: <GoogleLogo size={18} color="white" weight="bold" />,
    variant: "danger",
  },
  {
    icon: <GithubLogo size={18} color="white" weight="bold" />,
    variant: "dark",
  },
];

const SignInBgImg: React.FC = () => {
  const [formData, setFormData] = useState<FormDataType>({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted", formData);
  };

  return (
    <Container fluid>
      <Row>
        <Col xs={12} className="p-0">
          <div className="login-form-container">
            <div className="mb-4 text-center">
              <Link className="logo" to="/dashboard/ecommerce">
                <img src="/images/logo/3.png" alt="logo" />
              </Link>
            </div>

            <div className="form_container">
              <Form onSubmit={handleSubmit} className="app-form">
                <div className="mb-3 text-center">
                  <h3 className="text-primary-dark">Login to your Account</h3>
                  <p className="f-s-12 text-secondary">
                    Get started with our app, just create an account and enjoy the experience.
                  </p>
                </div>

                {fields.map((field) => (
                  <FormGroup className="mb-3" key={field.id}>
                    <FormLabel htmlFor={field.id}>{field.label}</FormLabel>
                    <FormControl
                      type={field.type}
                      id={field.id}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                    />
                    {field.name === "email" && (
                      <div className="form-text text">
                        We&#39;ll never share your email with anyone else.
                      </div>
                    )}
                  </FormGroup>
                ))}

                <FormCheck
                  id="formCheck1"
                  type="checkbox"
                  label="remember me"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                  className="mb-3"
                />

                <Link
                  type="submit"
                  to="/dashboard/ecommerce"
                  className="btn btn-primary w-100"
                >
                  Continue
                </Link>

                <div className="app-divider-v justify-content-center">
                  <p>OR</p>
                </div>

                <div className="text-center mb-3">
                  {socialButtons.map((btn, idx) => (
                    <Button key={idx} variant={btn.variant} className="icon-btn btn b-r-5 m-1">
                      {btn.icon}
                    </Button>
                  ))}
                </div>

                <div className="text-center">
                  <Link
                    to="/other-pages/terms-condition"
                    className="text-secondary text-decoration-underline"
                  >
                    Terms of use & Conditions
                  </Link>
                </div>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SignInBgImg;
