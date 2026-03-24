import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import Select, { MultiValue } from "react-select";

export type OptionType = {
  value: string;
  label: string;
  isDisabled?: boolean;
};

const colourOptions: OptionType[] = [
  { value: "orange", label: "Orange" },
  { value: "purple", label: "Purple" },
  { value: "white", label: "White" },
];

const selectOptions: OptionType[] = [
  { value: "AL", label: "Alabama" },
  { value: "WY", label: "Wyoming" },
  { value: "WD", label: "Coming" },
  { value: "AF", label: "Hanry Die" },
  { value: "TU", label: "John Doe" },
];

const options: OptionType[] = [
  { value: "AL", label: "Alabama" },
  { value: "WY", label: "Wyoming" },
  { value: "WD", label: "Coming" },
  { value: "AF", label: "Hanry Die" },
  { value: "TU", label: "John Doe" },
];
const Select2Basic: React.FC = () => {
    const [uiState, setUiState] = useState({
    isMounted: false,
    isDisabled: false,
  });
  const [selectedDark, setSelectedDark] = useState<OptionType[]>([]);

  const [selectedOptions, setSelectedOptions] = useState<
    MultiValue<OptionType>
  >([]);

  const handleChange = (selected: MultiValue<OptionType>) => {
    if (selected.length <= 3) {
      setSelectedOptions(selected);
    }
  };

  useEffect(() => {
    setUiState((prev) => ({ ...prev, isMounted: true }));
    setSelectedDark(
      selectOptions.filter((opt) => ["AL", "WY"].includes(opt.value))
    );
  }, []);

  if (!uiState.isMounted) return <div>Loading...</div>;
  return (
    <div>
      <Row>
        <Col xs={12}>
          <Card>
            <Card.Header>
              <h5>Advanced Select2 Examples</h5>
            </Card.Header>
            <Card.Body>
              <Row className="app-form">
                <Col md={6} xl={4} className="mt-4">
                  <label className="form-label">Basic</label>
                  <Select
                    options={selectOptions}
                    placeholder="Select an option"
                    classNamePrefix="custom-select"
                    className="select-example"
                  />
                </Col>

                <Col md={6} xl={4} className="mt-4">
                  <label className="form-label">Multiple</label>
                  <Select
                    isMulti
                    options={colourOptions}
                    defaultValue={[colourOptions[0], colourOptions[1]]}
                    placeholder="Select options"
                    classNamePrefix="custom-select"
                    className="select-1"
                  />
                </Col>

                <Col md={6} xl={4} className="mt-4">
                  <label className="form-label">Disabled</label>
                  <Select
                    isMulti
                    options={selectOptions}
                    value={selectedDark}
                    isDisabled
                    classNamePrefix="custom-select"
                    className="w-100"
                  />
                </Col>

                <Col md={6} xl={4} className="mt-4">
                  <label className="form-label">Icon Options</label>
                  <Select
                    options={[
                      { value: "ti-brand-html5", label: "HTML5" },
                      { value: "ti-brand-codepen", label: "Codepen" },
                    ]}
                    defaultValue={{ value: "ti-brand-html5", label: "HTML5" }}
                    placeholder="Select icon"
                    classNamePrefix="custom-select"
                    className="select2-icon"
                  />
                </Col>
                <Col md={6} xl={4}>
                  <div className="mt-4">
                    <Form.Label>
                      Limit The Number Of Selections (max 3)
                    </Form.Label>
                    <Select
                      isMulti
                      hideSelectedOptions={false}
                      options={options}
                      value={selectedOptions}
                      onChange={handleChange}
                      placeholder="Select up to 3 options"
                      classNamePrefix="custom-select"
                      className="select-basic-multiple-four w-100"
                    />
                  </div>
                </Col>

                <Col md={6} xl={4} className="mt-4">
                  <label className="form-label">RTL Support</label>
                  <Select
                    isRtl
                    isMulti
                    options={selectOptions}
                    classNamePrefix="custom-select"
                    className="w-100"
                  />
                </Col>

                <Col md={6} xl={4} className="mt-4">
                  <label className="form-label">Disable Results</label>
                  <Select
                    isMulti
                    options={[
                      { value: "AL", label: "Alabama" },
                      {
                        value: "WY",
                        label: "Wyoming (disabled)",
                        isDisabled: true,
                      },
                      { value: "WD", label: "Coming" },
                    ]}
                    placeholder="Select..."
                    classNamePrefix="custom-select"
                    className="w-100"
                  />
                </Col>

                <Col md={6} xl={4} className="mt-4">
                  <label className="form-label">Flags</label>
                  <Select
                    isMulti
                    options={[
                      { value: "🇮🇳", label: "India" },
                      { value: "🇦🇼", label: "Aruba" },
                    ]}
                    classNamePrefix="custom-select"
                    className="w-100"
                    formatOptionLabel={(e) => (
                      <div
                        className="d-flex gap-10 align-items-center"
                      >
                        <span>{e.value}</span> {e.label}
                      </div>
                    )}
                  />
                </Col>

                <Col md={6} xl={4} className="mt-4">
                  <label className="form-label">Enable / Disable</label>
                  <Select
                    isDisabled={uiState.isDisabled}
                    options={selectOptions}
                    defaultValue={selectOptions[0]}
                    classNamePrefix="custom-select"
                    className="w-100"
                  />
                  <div className="text-end mt-2">
                    <Button
                      variant="primary"
                      className="me-2"
                      onClick={() => setUiState((prev) => ({ ...prev, isDisabled: false }))}
                    >
                      Enable
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() => setUiState((prev) => ({ ...prev, isDisabled: true }))}
                    >
                      Disable
                    </Button>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Select2Basic;
