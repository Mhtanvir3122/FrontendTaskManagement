import React, { useEffect, useRef, useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";

import {
  checkboxData,
  checkboxImageOptions,
  platforms,
  radioData,
  radioImageOptions,
  radioPlatforms,
  toggleData,
} from "@/data/form-elements/Checkbox/checkboxData.tsx";
import { Cardholder } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";
import PaymentMethos from "@/components/forms-elements/checkbox-radio/PaymentMethos.tsx";

// === Type Declarations ===
type PlatformKey = "instagram" | "twitter" | "facebook" | "snapchat";

type ToggleGroup = {
  type: string;
  name: string;
  options: ToggleOption[];
};

type ToggleOption = {
  id: string;
  label: string;
  className: string;
  checked: boolean;
  disabled?: boolean;
  type?: string;
};

const Index: React.FC = () => {
  const indeterminateRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (indeterminateRef.current) {
      indeterminateRef.current.indeterminate = true;
    }
  }, []);

  const [selectedPlatforms, setSelectedPlatforms] = useState<
    Record<PlatformKey, boolean>
  >({
    instagram: false,
    twitter: false,
    facebook: false,
    snapchat: false,
  });

  const handleCheckboxChange = (platform: PlatformKey) => {
    setSelectedPlatforms((prev) => ({
      ...prev,
      [platform]: !prev[platform],
    }));
  };
  type PlatformOption = "instagram" | "twitter" | "facebook" | "snapchat";
  const [selectedOption, setSelectedOption] =
    useState<PlatformOption>("instagram");

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value as PlatformOption);
  };

  const [selectedImage, setSelectedImage] = useState<string>("1");
  const [selectedImages, setSelectedImages] = useState<Record<number, boolean>>(
    {
      1: true,
      2: false,
      3: false,
    }
  );

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedImage(e.target.value);
  };

  const handleImgCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setSelectedImages((prev) => ({
      ...prev,
      [value]: !prev[value],
    }));
  };
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Checkbox & Radio"
          title="Forms elements"
          path={["Checkbox & Radio"]}
          Icon={Cardholder}
        />
        <Row>
          <Col md={6}>
            <Card>
              <Card.Header>
                <h5>Custom Radio</h5>
              </Card.Header>
              <Card.Body>
                <div className="d-flex flex-column gap-2">
                  <Form.Check
                    type="radio"
                    id="radio_default1"
                    name="flexRadioDefault"
                    label="Default"
                    className="form-check d-flex align-items-center gap-1"
                  />

                  <Form.Check
                    type="radio"
                    id="radio_disabled"
                    name="flexRadioDisabled"
                    label="Disabled"
                    disabled
                    className="form-check d-flex align-items-center gap-1"
                  />

                  <Form.Check
                    type="radio"
                    id="radio_default2"
                    name="flexRadioDefault"
                    label="Checked"
                    defaultChecked
                    className="form-check d-flex align-items-center gap-1"
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Header>
                <h5>Custom Checkbox</h5>
              </Card.Header>
              <Card.Body>
                <Row className="d-flex flex-wrap gap-2">
                  <Form.Check
                    type="checkbox"
                    id="flexCheck"
                    label="checkbox"
                    defaultChecked
                    className="d-flex align-items-center gap-1 mg-2"
                  />

                  <Form.Check
                    type="checkbox"
                    id="flexCheckIndeterminate"
                    label="indeterminate checkbox"
                    ref={indeterminateRef}
                    className="d-flex align-items-center gap-1 mg-2"
                  />

                  <Form.Check
                    type="checkbox"
                    id="flexCheckDisabled"
                    label="Disabled checkbox"
                    disabled
                    className="d-flex align-items-center gap-1 mg-2"
                  />
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Row>
              <Card>
                <Card.Header>
                  <h5>Radio with States</h5>
                </Card.Header>
                <Card.Body>
                  <Row>
                    {radioData.map((group, idx) => (
                      <Col key={idx} md={6} xl={4}>
                        <div className="check-container">
                          {group.radios.map((radio) => (
                            <label key={radio.id} className="check-box">
                              <input
                                type="radio"
                                name={group.name}
                                id={radio.id}
                              />
                              <span
                                className={`radiomark ${radio.colorClass} ms-2`}
                              ></span>
                              <span className={radio.textClass}>
                                {radio.label}
                              </span>
                            </label>
                          ))}
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Card.Body>
              </Card>
            </Row>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Header>
                <h5>Checkbox with States</h5>
              </Card.Header>
              <Card.Body>
                <Row>
                  {checkboxData.map((group, idx) => (
                    <Col key={idx} md={6} xl={4}>
                      <div className="check-container">
                        {group.checkboxes.map((checkbox) => (
                          <label key={checkbox.id} className="check-box">
                            <input
                              type="checkbox"
                              name={group.name}
                              id={checkbox.id}
                            />
                            <span
                              className={`checkmark ${checkbox.colorClass} ms-2`}
                            ></span>
                            <span className={checkbox.textClass}>
                              {checkbox.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12}>
            <Row>
              {toggleData.map((group: ToggleGroup, idx) => (
                <Col key={idx} md={6} xl={4}>
                  <Card className="equal-card">
                    <Card.Header>
                      <h5>
                        {group.type === "radio"
                          ? "Radio Toggle Buttons"
                          : "Checkbox Toggle Buttons"}
                      </h5>
                    </Card.Header>
                    <Card.Body>
                      <div className="d-flex flex-wrap gap-2">
                        {group.options.map((option) => (
                          <React.Fragment key={option.id}>
                            <input
                              type={option.type ?? group.type}
                              className="btn-check"
                              id={option.id}
                              name={group.name}
                              defaultChecked={option.checked}
                              disabled={option.disabled || false}
                            />
                            <label
                              className={`btn ${option.className}`}
                              htmlFor={option.id}
                            >
                              {option.label}
                            </label>
                          </React.Fragment>
                        ))}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Header>
                <h5>Select group Checkbox With Icons</h5>
              </Card.Header>
              <Card.Body>
                <div className="form-selectgroup">
                  <div className="d-flex gap-2 flex-wrap">
                    {platforms.map((platform) => (
                      <label
                        key={platform.key}
                        className="d-flex align-items-center select-items"
                      >
                        <input
                          type="checkbox"
                          checked={
                            selectedPlatforms[platform.key as PlatformKey]
                          }
                          onChange={() =>
                            handleCheckboxChange(platform.key as PlatformKey)
                          }
                          className="me-2 select-input"
                        />
                        <span className="select-box">
                          <span className="selectitem">
                            {platform.icon} {platform.label}
                          </span>
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Header>
                <h5>Select group Radio With Icons</h5>
              </Card.Header>

              <Card.Body>
                <div className="form-selectgroup">
                  <div className="d-flex gap-2 flex-wrap">
                    {radioPlatforms.map((platform) => (
                      <label
                        key={platform.value}
                        className="d-flex align-items-center select-items"
                      >
                        <input
                          type="radio"
                          name="select-options"
                          value={platform.value}
                          checked={selectedOption === platform.value}
                          onChange={handleRadioChange}
                          className="me-2 select-input"
                        />
                        <span className="select-box">
                          <span className="selectitem">
                            {platform.icon} {platform.label}
                          </span>
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Header>
                <h5>Images With Radio</h5>
              </Card.Header>
              <Card.Body>
                <Row>
                  {radioImageOptions.map((item) => (
                    <Col sm={6} xl={4} key={item.value}>
                      <label className="form-checkimage">
                        <input
                          type="radio"
                          name="radioimage"
                          value={item.value}
                          checked={selectedImage === item.value}
                          onChange={handleImageSelect}
                          disabled={item.disabled}
                          className="checkimage-input"
                        />
                        <span className="check-box radiobox">
                          <img
                            src={item.src}
                            className="checkbox-image w-100"
                            alt={item.alt}
                          />
                        </span>
                      </label>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Header>
                <h5>Images with checkbox</h5>
              </Card.Header>
              <Card.Body>
                <Row>
                  {checkboxImageOptions.map((item) => (
                    <Col md={6} xl={4} key={item.value}>
                      <label className="form-checkimage">
                        <input
                          type="checkbox"
                          value={item.value}
                          checked={selectedImages[item.value]}
                          onChange={handleImgCheckboxChange}
                          disabled={item.disabled}
                          className="checkimage-input"
                        />
                        <span className="check-box">
                          <img
                            src={item.src}
                            className="checkbox-image w-100"
                            alt={item.alt}
                          />
                        </span>
                      </label>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <PaymentMethos />
        </Row>
      </Container>
    </div>
  );
};

export default Index;
