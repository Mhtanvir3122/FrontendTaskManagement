import { useState } from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";

import {
  leftSessionList,
  rightSessionList,
  securityItems,
} from "@/data/app/settingapp/SettingAppData.tsx";
import { IconCircleXFilled } from "@tabler/icons-react";
import { Eye, EyeSlash, Lock } from "phosphor-react";

type PasswordField = {
  id: "current" | "new" | "confirm";
  label: string;
  placeholder: string;
};

const fields: PasswordField[] = [
  {
    id: "current",
    label: "Current Password",
    placeholder: "********",
  },
  {
    id: "new",
    label: "New Password",
    placeholder: "********",
  },
  {
    id: "confirm",
    label: "Confirm Password",
    placeholder: "********",
  },
];

const SecurityCard = () => {
  const [visibility, setVisibility] = useState<
    Record<PasswordField["id"], boolean>
  >({
    current: false,
    new: false,
    confirm: false,
  });

  const toggleVisibility = (key: PasswordField["id"]) => {
    setVisibility((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div>
      {/* Account Security */}
      <Card className="security-card-content mb-4">
        <Card.Body>
          <Row className="align-items-center">
            <Col sm={8}>
              <h5 className="text-primary fw-semibold">Account Security</h5>
              <p className="text-secondary fs-6 mt-2 mb-0">
                Your account is valuable to hackers. To make 2-step verification
                very secure, use your phone&#39;s built-in security key.
              </p>
            </Col>
            <Col sm={4} className="text-end">
              <img
                alt="Account"
                src="/images/setting-app/account.jpg"
                className="img-fluid w-120"
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Security Items */}
      {securityItems.map((item, idx) => (
        <Card className="mb-4" key={idx}>
          <Card.Body>
            <Row className="security-box-card align-items-center">
              <Col md={3} className="position-relative">
                <span className="anti-code">{item.icon}</span>
                <p className="security-box-title text-dark f-w-500 f-s-16 ms-5 security-code">
                  {item.title}
                </p>
              </Col>
              <Col md={6} className="security-discription">
                <p className="text-secondary fs-6 mb-2">{item.description}</p>
                {item.badge && (
                  <Badge bg={item.badge.color} className="text-secondary p-2">
                    {item.badge.icon}
                    {item.badge.text}
                  </Badge>
                )}
              </Col>
              <Col md={3} className="text-end">
                {item.button ? (
                  <Button variant={item.button.color}>
                    {item.button.text}
                  </Button>
                ) : (
                  item.rightText && <p>{item.rightText}</p>
                )}
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}

      {/* Devices and Sessions */}
      <Card className="security-card-content mb-4">
        <Card.Body>
          <Row className="align-items-center">
            <Col sm={9}>
              <h5 className="text-primary fw-semibold">
                Devices and active sessions
              </h5>
              <p className="text-secondary fs-6 mt-3">
                Your account is valuable to hackers. To make 2-step verification
                very secure, use your phone&#39;s built-in security key.
              </p>
            </Col>
            <Col sm={3} className="text-end">
              <img
                alt="Device"
                src="/images/setting-app/device.jpg"
                className="img-fluid w-120"
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Device Lists */}
      <Row>
        <Col lg={12} xxl={6}>
          <ul className="active-device-session active-device-list">
            {leftSessionList.map((item, idx) => (
              <li key={idx}>
                <Card className={idx === 0 ? "share-menu-active" : ""}>
                  <Card.Body>
                    <div className="device-menu-item" draggable={false}>
                      <span className="device-menu-img">
                        <item.icon
                          size={40}
                          weight="duotone"
                          className={`text-${item.iconColor}`}
                        />
                      </span>
                      <div className="device-menu-content">
                        <h6 className="mb-0 txt-ellipsis-1">{item.name}</h6>
                        <p className="mb-0 txt-ellipsis-1 text-secondary">
                          {item.location}
                        </p>
                      </div>
                      <div className="device-menu-icons">
                        <Badge
                          bg="light-secondary"
                          className="p-2 f-s-16 text-secondary"
                        >
                          {item.status === "online" ? (
                            <IconCircleXFilled
                              size={16}
                              className="me-1 text-success"
                            />
                          ) : (
                            <IconCircleXFilled
                              size={16}
                              className="me-1 text-primary"
                            />
                          )}
                          {item.status === "online" ? "Online" : "Offline"}
                        </Badge>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </li>
            ))}
          </ul>
        </Col>
        <Col lg={12} xxl={6}>
          <ul className="active-device-session active-device-list">
            {rightSessionList.map((item, idx) => (
              <li key={idx}>
                <Card>
                  <Card.Body>
                    <div className="device-menu-item" draggable={false}>
                      <span className="device-menu-img">
                        <item.icon
                          size={40}
                          weight="duotone"
                          className={`text-${item.iconColor}`}
                        />
                      </span>
                      <div className="device-menu-content">
                        <h6 className="mb-0 txt-ellipsis-1">{item.name}</h6>
                        <p className="mb-0 txt-ellipsis-1 text-secondary">
                          {item.location}
                        </p>
                      </div>
                      <div className="device-menu-icons">
                        <Badge
                          bg="light-secondary"
                          className="p-2 f-s-16 text-secondary"
                        >
                          {item.status === "online" ? (
                            <IconCircleXFilled
                              size={16}
                              className="me-1 text-success"
                            />
                          ) : (
                            <IconCircleXFilled
                              size={16}
                              className="me-1 text-primary"
                            />
                          )}
                          {item.status === "online" ? "Online" : "Offline"}
                        </Badge>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </li>
            ))}
          </ul>
        </Col>
      </Row>

      {/* Change Password */}
      <Card className="security-card-content">
        <Card.Body>
          <div className="account-security mb-2">
            <Row className="align-items-center">
              <Col sm={9}>
                <h5 className="text-primary fw-semibold">Change Password</h5>
                <p className="account-discription text-secondary fs-6 mt-3">
                  To change your password, please fill in the fields below. Your
                  password must contain at least 8 characters and include at
                  least one uppercase letter, one lowercase letter, one number,
                  and one special character.
                </p>
              </Col>
              <Col sm={3} className="account-security-img">
                <img
                  src="/images/setting-app/password.jpg"
                  alt="Password Illustration"
                  className="w-150"
                />
              </Col>
            </Row>
          </div>

          <Form className="app-form">
            <Row>
              {fields.map(({ id, label, placeholder }) => (
                <Col sm={12} className="mb-3" key={id}>
                  <Form.Label>{label}</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>
                      <Lock size={20} weight="bold" />
                    </InputGroup.Text>
                    <Form.Control
                      type={visibility[id] ? "text" : "password"}
                      placeholder={placeholder}
                    />
                    <InputGroup.Text
                      onClick={() => toggleVisibility(id)}
                      className="cursor-pointer"
                    >
                      {visibility[id] ? (
                        <Eye size={20} weight="regular" />
                      ) : (
                        <EyeSlash size={20} weight="regular" />
                      )}
                    </InputGroup.Text>
                  </InputGroup>
                </Col>
              ))}
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SecurityCard;
