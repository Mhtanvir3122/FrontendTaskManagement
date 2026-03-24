
import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  FormLabel,
  FormControl,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

interface PasswordField {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  value: string;
}

const PasswordCreateImg: React.FC = () => {
  const navigate = useNavigate();
  const [passwords, setPasswords] = useState<{ [key: string]: string }>({
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (id: string, value: string) => {
    setPasswords({ ...passwords, [id]: value });
  };

  const passwordFields: PasswordField[] = [
    {
      id: "newPassword",
      label: "New Password",
      placeholder: "Enter Your Password",
      type: "password",
      value: passwords.newPassword,
    },
    {
      id: "confirmPassword",
      label: "Confirm Password",
      placeholder: "Enter Your Password",
      type: "password",
      value: passwords.confirmPassword,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwords.newPassword !== passwords.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Password created:", passwords);
    navigate("/");
  };

  return (
    <main className="w-100 p-0">
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
                <Form className="app-form" onSubmit={handleSubmit}>
                  <div className="mb-3 text-center">
                    <h3>Create Password</h3>
                    <p className="f-s-12 text-secondary">
                      Your new password must be different from previous used password
                    </p>
                  </div>

                  {passwordFields.map((field) => (
                    <FormGroup className="mb-3" controlId={field.id} key={field.id}>
                      <FormLabel>{field.label}</FormLabel>
                      <FormControl
                        type={field.type}
                        placeholder={field.placeholder}
                        value={field.value}
                        onChange={(e) => handleChange(field.id, e.target.value)}
                        required
                      />
                    </FormGroup>
                  ))}

                  <Link to="/dashboard/ecommerce"  type="submit" className="w-100 btn btn-primary mb-3" >
                    Reset Password
                  </Link>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default PasswordCreateImg;
