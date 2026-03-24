import { ChangeEvent, JSX, useState } from "react";
import { Card, Col, Form, FormCheck, Row, Stack } from "react-bootstrap";

import { Desktop, DeviceMobileSpeaker, Watch } from "phosphor-react";

type NotificationDevice = {
  id: string;
  name: string;
  icon: JSX.Element;
  description: string;
  colorClass: string;
  checked: boolean;
};

const NotificationSettings = () => {
  const [emailSettings, setEmailSettings] = useState({
    comments: false,
    candidates: false,
    offers: false,
  });

  const [devices, setDevices] = useState<NotificationDevice[]>([
    {
      id: "mobile",
      name: "Mobile push notification",
      icon: <DeviceMobileSpeaker weight="bold" size={30} />,
      description: "Receive all notifications via your mobile app",
      colorClass: "text-outline-primary",
      checked: true,
    },
    {
      id: "desktop",
      name: "Desktop push notification",
      icon: <Desktop weight="bold" size={30} />,
      description: "Receive all notifications via your desktop app",
      colorClass: "text-outline-success",
      checked: false,
    },
    {
      id: "smartwatch",
      name: "Smartwatch push notification",
      icon: <Watch weight="bold" size={30} />,
      description: "Receive all notifications via your smartwatch app",
      colorClass: "text-outline-danger",
      checked: false,
    },
  ]);

  const handleSwitchChange = (deviceId: string) => {
    setDevices((prevDevices) =>
      prevDevices.map((device) =>
        device.id === deviceId
          ? { ...device, checked: !device.checked }
          : device
      )
    );
  };

  const [pushNotification, setPushNotification] = useState("everything");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    setEmailSettings((prev) => ({
      ...prev,
      [id]: checked,
    }));
  };

  const handlePushNotificationChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPushNotification(e.target.value);
  };

  return (
    <Card>
      <Card.Header>
        <h5>Notification</h5>
      </Card.Header>
      <Card.Body>
        <div className="notification-content">
          <Row>
            {/* Email Notification */}
            <Col lg={6}>
              <div className="notification-email">
                <h6 className="mb-0">By Email</h6>
                <p className="mb-3 text-dark">
                  {" "}
                  These are delivered via mail to your Email.
                </p>
                <Form>
                  <FormCheck
                    type="checkbox"
                    id="comments"
                    label="Comments - notified posts on comment"
                    checked={emailSettings.comments}
                    onChange={handleEmailChange}
                    className="mb-3 text-secondary f-w-500"
                  />
                  <FormCheck
                    type="checkbox"
                    id="candidates"
                    label="Candidates - notified candidate applies"
                    checked={emailSettings.candidates}
                    onChange={handleEmailChange}
                    className="mb-3 text-secondary f-w-500"
                  />
                  <FormCheck
                    type="checkbox"
                    id="offers"
                    label="Offers - notified accepts or rejects"
                    checked={emailSettings.offers}
                    onChange={handleEmailChange}
                    className="mb-3 text-secondary f-w-500"
                  />
                </Form>
              </div>
            </Col>

            {/* Push Notification */}
            <Col lg={6}>
              <div className="notification-push">
                <h6 className="mb-0">Push Notification</h6>
                <p className="mb-3 text-dark">
                  These are delivered via SMS to your mobile phone.
                </p>

                {/* Radio buttons for push notification preferences */}
                <Form>
                  <FormCheck
                    type="radio"
                    name="pushNotification"
                    id="everything"
                    label="Everything"
                    value="everything"
                    checked={pushNotification === "everything"}
                    onChange={handlePushNotificationChange}
                    className="mb-3 text-secondary f-w-500"
                  />
                  <FormCheck
                    type="radio"
                    name="pushNotification"
                    id="sameAsEmail"
                    label="Same as email"
                    value="sameAsEmail"
                    checked={pushNotification === "sameAsEmail"}
                    onChange={handlePushNotificationChange}
                    className="mb-3 text-secondary f-w-500"
                  />
                  <FormCheck
                    type="radio"
                    name="pushNotification"
                    id="noPush"
                    label="No push notification"
                    value="noPush"
                    checked={pushNotification === "noPush"}
                    onChange={handlePushNotificationChange}
                    className="mb-3 text-secondary f-w-500"
                  />
                </Form>
              </div>
            </Col>
          </Row>

          <Col md={12} className="mt-4">
            <Stack gap={4}>
              {devices.map((device) => (
                <div key={device.id} className="share-menu-item">
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center gap-3">
                      <span
                        className={`share-menu-img ${device.colorClass} h-45 w-45 d-flex-center b-r-10`}
                      >
                        {device.icon}
                      </span>
                      <div>
                        <h6 className="mb-0">{device.name}</h6>
                        <p className="mb-0 text-secondary">
                          {device.description}
                        </p>
                      </div>
                    </div>
                    <FormCheck
                      type="switch"
                      id={`${device.id}Push`}
                      checked={device.checked}
                      onChange={() => handleSwitchChange(device.id)}
                    />
                  </div>
                </div>
              ))}
            </Stack>
          </Col>
        </div>
      </Card.Body>
    </Card>
  );
};

export default NotificationSettings;
