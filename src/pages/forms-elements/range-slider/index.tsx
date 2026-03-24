import React, { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import { Cardholder } from "phosphor-react";
import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const arbitraryValuesForSlider = ["MB", "256MB", "1GB", "8GB", "16GB", "32GB", "GB"];
const format = {
  to: (value: number) => arbitraryValuesForSlider[Math.round(value)],
  from: (value: string | number) => arbitraryValuesForSlider.indexOf(String(value)),
};

const valuesForSlider = [1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, 28, 32];
const formatValue = {
  to: (value: number) => valuesForSlider[Math.round(value)],
  from: (value: string | number) => valuesForSlider.indexOf(Number(value)),
};

const colorVariants = [
  { label: "Primary", className: "slider-round" },
  { label: "Secondary", className: "slider-round slider-secondary" },
  { label: "Success", className: "slider-round slider-success" },
  { label: "Danger", className: "slider-round slider-danger" },
  { label: "Warning", className: "slider-round slider-warning" },
  { label: "Info", className: "slider-round slider-info" },
  { label: "Light", className: "slider-round slider-light" },
  { label: "Dark", className: "slider-round slider-dark" },
];

const selectOptions = Array.from({ length: 61 }, (_, i) => i - 20); // -20 to 40

const RangeSlider: React.FC = () => {
  const [slider1, setSlider1] = useState<number>(20);
  const [slider2, setSlider2] = useState<number>(20);
  const [rgbValues, setRgbValues] = useState<number[]>([127, 127, 127]);
  const [selectValue, setSelectValue] = useState<number>(10);
  const [numberValue, setNumberValue] = useState<number>(30);

  const handleUpdate = (values: string[], handle: number) => {
    const value = parseFloat(values[handle]);
    if (handle === 0) {
      setSelectValue(Math.round(value));
    } else {
      setNumberValue(value);
    }
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(parseFloat(event.target.value));
  };

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumberValue(parseFloat(event.target.value));
  };

  const updateRgbValue = (index: number) => (values: string[], handle: number) => {
    setRgbValues(prev => {
      const updated = [...prev];
      updated[index] = Number(values[handle]);
      return updated;
    });
  };

  return (
    <Container fluid>
      <Breadcrumbs
        mainTitle="Range Slider"
        title="Forms elements"
        path={["Range slider"]}
        Icon={Cardholder}
      />

      <Row>
        <Col md="12" xl="6">
          <Card>
            <Card.Header>
              <h5>Bootstrap Range Sliders</h5>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md="12">
                  <Form.Label>Range</Form.Label>
                  <Form.Range />
                </Col>
                <Col md="12">
                  <Form.Label>Range (Disabled)</Form.Label>
                  <Form.Range disabled />
                </Col>
                <Col md="12">
                  <Form.Label>Min and max range Slider</Form.Label>
                  <Form.Range min="0" max="2" />
                </Col>
                <Col md="12">
                  <Form.Label>Min and max range Slider</Form.Label>
                  <Form.Range min="0" max="5" />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <h5>Colour Variant</h5>
            </Card.Header>
            <Card.Body>
              <Row>
                {colorVariants.map((item, idx) => (
                  <Col md={6} key={idx}>
                    <div className="mb-3">
                      <label className="form-label">{item.label} range slider</label>
                      <Nouislider
                        direction="ltr"
                        orientation="horizontal"
                        range={{ min: 0, max: 100 }}
                        start={[40]}
                        connect={[true, false]}
                        className={item.className}
                      />
                    </div>
                  </Col>
                ))}
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12}>
          <Card>
            <Card.Header>
              <h5>Value Slider</h5>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col xs={12}>
                  <div className="mb-4">
                    <label className="form-label f-s-16 text-secondary mb-3">
                      Locking sliders together
                    </label>
                    <Nouislider
                      range={{ min: 0, max: 100 }}
                      start={slider1}
                      connect={[true, false]}
                      onUpdate={(values, handle) => setSlider1(Number(values[handle]))}
                      className="slider-round"
                    />
                    <div className="mt-2">
                      Value: <span>{slider1}</span>
                    </div>
                  </div>

                  <div className="mb-5">
                    <Nouislider
                      range={{ min: 0, max: 100 }}
                      start={slider2}
                      connect={[true, false]}
                      onUpdate={(values, handle) => setSlider2(Number(values[handle]))}
                      className="slider-round"
                    />
                    <div className="mt-2">
                      Value: <span>{slider2}</span>
                      <Button
                        variant="primary"
                        className="float-end"
                        id="lockbtn"
                        type="button"
                      >
                        Lock
                      </Button>
                    </div>
                  </div>
                </Col>

                <Col xs={12}>
                  <div className="mb-4">
                    <label className="form-label text-secondary f-s-16 mb-3">
                      Multi range slider
                    </label>
                    <Nouislider
                      range={{ min: 0, max: arbitraryValuesForSlider.length - 1 }}
                      start={[2, 4]}
                      connect={[false, true, false]}
                      step={1}
                      format={format}
                      pips={{ mode: "steps", density: 50, format }}
                      className="slider-round"
                    />
                  </div>
                </Col>

                <Col xs={12}>
                  <div className="mb-5 mt-4">
                    <label className="form-label f-s-16 mb-3 text-secondary">
                      Soft limits
                    </label>
                    <Nouislider
                      range={{ min: 0, max: 100 }}
                      start={[50]}
                      connect={[true, false]}
                      step={1}
                      pips={{ mode: "values", values: [40, 80], density: 2 }}
                      className="colored-slider slider-round"
                    />
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12}>
          <Card>
            <Card.Header>
              <h5>Tooltip Slider</h5>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col xs={12}>
                  <div className="mb-5">
                    <label className="form-label f-s-16 text-secondary mb-3">
                      Values Slider
                    </label>
                    <Nouislider
                      range={{ min: 0, max: valuesForSlider.length - 1 }}
                      start={[5]}
                      connect={[true, false]}
                      step={2}
                      tooltips
                      format={formatValue}
                      pips={{ mode: "steps", format: formatValue }}
                      className="slider-round primary-slider-round"
                    />
                  </div>
                </Col>

                <Col xs={12}>
                  <div className="mb-5">
                    <label className="form-label f-s-16 text-secondary mb-3">
                      Tooltip Slider
                    </label>
                    <Nouislider
                      range={{ min: 0, max: 100 }}
                      start={[20]}
                      connect={[true, false]}
                      tooltips
                      className="slider-round hide-tooltips primary-slider-round"
                    />
                  </div>
                </Col>

                <Col xs={12}>
                  <div className="mb-5">
                    <label className="form-label f-s-16 text-secondary mb-3">
                      Colored Connect Slider
                    </label>
                    <Nouislider
                      range={{ min: 0, max: 100 }}
                      start={[20, 32, 50, 70, 80, 90]}
                      connect={true}
                      tooltips={[false, true, true, true, true, true]}
                      className="noUi-connects"
                    />
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12}>
          <Card>
            <Card.Header>
              <h5>Dynamic Slider</h5>
            </Card.Header>
            <Card.Body>
              <div className="mb-4">
                <Form.Label>HTML5 Input</Form.Label>
                <Nouislider
                  start={[selectValue, numberValue]}
                  connect
                  range={{ min: -20, max: 40 }}
                  onUpdate={handleUpdate}
                  className="slider-round"
                />
              </div>

              <div className="d-flex gap-2 mb-3">
                <Form.Select
                  value={selectValue}
                  onChange={handleSelectChange}
                  className="w-auto"
                >
                  {selectOptions.map(option => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </Form.Select>
                <Form.Control
                  type="number"
                  value={numberValue}
                  onChange={handleNumberChange}
                  className="w-auto"
                />
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12}>
          <Row>
            <Col md={4}>
              <Card>
                <Card.Header>
                  <h5>Color Picker Slider</h5>
                </Card.Header>
                <Card.Body>
                  <div className="colorpicker-slider">
                    <Nouislider
                      start={127}
                      connect={[true, false]}
                      orientation="vertical"
                      range={{ min: 0, max: 255 }}
                      className="vertical verticalsliders red"
                      onUpdate={updateRgbValue(0)}
                    />
                    <Nouislider
                      start={127}
                      connect={[true, false]}
                      orientation="vertical"
                      range={{ min: 0, max: 255 }}
                      className="vertical verticalsliders green"
                      onUpdate={updateRgbValue(1)}
                    />
                    <Nouislider
                      start={127}
                      connect={[true, false]}
                      orientation="vertical"
                      range={{ min: 0, max: 255 }}
                      className="vertical verticalsliders blue"
                      onUpdate={updateRgbValue(2)}
                    />
                    <div
                      className="color-result result"
                      style={{ backgroundColor: `rgb(${rgbValues.join(",")})` }}
                    />
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card>
                <Card.Header>
                  <h5>Vertical Slider</h5>
                </Card.Header>
                <Card.Body>
                  <Nouislider
                    start={20}
                    connect={[true, false]}
                    orientation="vertical"
                    range={{ min: 0, max: 100 }}
                    className="vertical"
                  />
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card>
                <Card.Header>
                  <h5>Toggle Slider</h5>
                </Card.Header>
                <Card.Body>
                  <Nouislider
                    start={0}
                    orientation="vertical"
                    range={{ min: [0, 1], max: 1 }}
                    className="vertical"
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default RangeSlider;