import { useRef, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

import { IconPhotoHeart } from "@tabler/icons-react";

function SettingProfile() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <Card className="setting-profile-tab">
        <Card.Header>
          <h5>Profile</h5>
        </Card.Header>
        <Card.Body>
          <div className="profile-tab profile-container">
            {/* Profile Picture Section */}
            <div className="image-details">
              <div className="profile-image"></div>
              <div className="profile-pic">
                <div className="avatar-upload">
                  <div className="avatar-edit">
                    <Form.Control
                      type="file"
                      id="imageUpload"
                      accept=".png, .jpg, .jpeg"
                      onChange={handleFileChange}
                      ref={fileInputRef}
                    />
                    <Form.Label htmlFor="imageUpload">
                      <IconPhotoHeart size={16} />
                    </Form.Label>
                  </div>
                  <div className="avatar-preview">
                    <div
                      id="imgPreview"
                      className={`preview-image ${previewUrl ? "has-image" : ""}`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Details */}
            <div className="person-details">
              <h5 className="fw-bold">
                Ninfa Monaldo{" "}
                <img
                  width={20}
                  height={20}
                  src="/images/profile-app/01.png"
                  alt="instagram-check-mark"
                />
              </h5>
              <p>Web designer & Developer</p>
            </div>

            {/* User Info Form */}
            <Form className="app-form">
              <h5 className="mb-2 text-dark fw-bold">User Info</h5>
              <Row>
                <Col md="12">
                  <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Maria C. Eck" />
                  </Form.Group>
                </Col>
                <Col md="12">
                  <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="MariaCEck@teleworm.us"
                    />
                  </Form.Group>
                </Col>
                <Col md="6">
                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="*******" />
                  </Form.Group>
                </Col>
                <Col md="6">
                  <Form.Group className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="*******" />
                  </Form.Group>
                </Col>
              </Row>

              {/* Divider */}
              <div className="app-divider-v dotted my-3"></div>

              <h5 className="mb-2 text-dark fw-bold">Personal Info</h5>
              <Row>
                <Col md="12">
                  <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="1098 Asylum Avenue, New Haven, CT 06510"
                    />
                  </Form.Group>
                </Col>
                <Col md="12">
                  <Form.Group className="mb-3">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control
                      as="textarea"
                      placeholder="51244 Ankunding Villages, Reicheltown, IL 84366"
                    />
                  </Form.Group>
                </Col>
                <Col md="6">
                  <Form.Group className="mb-3">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="Oregon" />
                  </Form.Group>
                </Col>
                <Col md="4">
                  <Form.Group className="mb-3">
                    <Form.Label>State</Form.Label>
                    <Form.Select>
                      <option>Choose...</option>
                      <option>USA</option>
                      <option>Canada</option>
                      <option>Australia</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md="2">
                  <Form.Group className="mb-3">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control type="text" placeholder="CT 06510" />
                  </Form.Group>
                </Col>
                <Col md="6">
                  <Form.Group className="mb-3">
                    <Form.Label>Language</Form.Label>
                    <Form.Select>
                      <option value="EN">English</option>
                      <option value="GU">Gujarati</option>
                      <option value="HI">Hindi</option>
                      <option value="DU">Dutch</option>
                      <option value="FR">French</option>
                      <option value="RU">Russian</option>
                      <option value="KO">Korean</option>
                      <option value="TA">Tamil</option>
                      <option value="SP">Spanish</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md="12">
                  <div className="text-end">
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default SettingProfile;
