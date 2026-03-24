// components/touchspin/TouchSpinCard.tsx
import React from "react";
import {
  Button,
  Card,
  Col,
  Dropdown,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";

type TouchSpinCardProps = {
  title: string;
  counts: number[];
  colors: string[];
  updateCount: (index: number, delta: number) => void;
  variant?:
    | "button"
    | "anchor"
    | "custom"
    | "round"
    | "round-alt"
    | "default"
    | "horizontal"
    | "with-dropdown"
    | "prefix-postfix";
  withDropdown?: boolean;
  dropdownOpen?: boolean;
  toggleDropdown?: () => void;
};

const TouchSpinCard: React.FC<TouchSpinCardProps> = ({
  title,
  counts,
  colors,
  updateCount,
  variant = "button",
  withDropdown,
  dropdownOpen,
  toggleDropdown,
}) => {
  return (
    <Card className="equal-card">
      <Card.Header>
        <h5>{title}</h5>
      </Card.Header>
      <Card.Body>
        <Row>
          {counts.map((count, i) => (
            <Col key={i} className="mt-2">
              {variant === "button" && (
                <InputGroup className="simplespin">
                  <Button
                    variant={colors[i]}
                    onClick={() => updateCount(i, -1)}
                    className="circle-btn decrement"
                  >
                    -
                  </Button>
                  <Form.Control
                    value={count}
                    readOnly
                    className="app-small-touchspin count"
                  />
                  <Button
                    variant={colors[i]}
                    onClick={() => updateCount(i, 1)}
                    className="circle-btn increment"
                  >
                    +
                  </Button>
                </InputGroup>
              )}

              {variant === "anchor" && (
                <div className="simplespin input-group">
                  <a
                    onClick={() => updateCount(i, -1)}
                    className="circle-btn decrement cursor-pointer"
                  >
                    -
                  </a>
                  <Form.Control
                    type="text"
                    value={count}
                    readOnly
                    className="form-control app-small-touchspin count"
                  />
                  <a
                    onClick={() => updateCount(i, 1)}
                    className="circle-btn increment cursor-pointer"
                  >
                    +
                  </a>
                </div>
              )}

              {variant === "custom" && (
                <div className="custom-touchspin d-flex align-items-center">
                  <button
                    type="button"
                    onClick={() => updateCount(i, -1)}
                    className={`touchspin-circle-btn btn-${colors[i]} text-white decrement`}
                  >
                    -
                  </button>
                  <Form.Control
                    type="text"
                    value={count}
                    readOnly
                    className="form-control app-small-touchspin count mx-2 text-center"
                  />
                  <button
                    type="button"
                    onClick={() => updateCount(i, 1)}
                    className={`touchspin-circle-btn btn-${colors[i]} text-white increment`}
                  >
                    +
                  </button>
                </div>
              )}
              {variant === "round" && (
                <div className="simplerounded d-flex">
                  <button
                    className={`btn btn-${colors[i]} btn-left decrement`}
                    onClick={() => updateCount(i, -1)}
                  >
                    -
                  </button>
                  <Form.Control
                    type="text"
                    className="app-touchspin border-0 count text-center"
                    readOnly
                    value={count}
                  />
                  <button
                    className={`btn btn-${colors[i]} btn-right increment`}
                    onClick={() => updateCount(i, 1)}
                  >
                    +
                  </button>
                </div>
              )}
              {variant === "round-alt" && (
                <div className="simplerounded d-flex">
                  <button
                    className={`btn btn-${colors[i]} round decrement`}
                    onClick={() => updateCount(i, -1)}
                  >
                    -
                  </button>
                  <Form.Control
                    type="text"
                    className="app-touchspin border-0 count text-center"
                    readOnly
                    value={count}
                  />
                  <button
                    className={`btn btn-${colors[i]} round increment`}
                    onClick={() => updateCount(i, 1)}
                  >
                    +
                  </button>
                </div>
              )}
              {variant === "default" && (
                <div className="d-flex">
                  <Button
                    variant={colors[i]}
                    className={`btn-${colors[i]} b-r-0 decrement`}
                    onClick={() => updateCount(i, -1)}
                  >
                    -
                  </Button>
                  <Form.Control
                    className="form-control app-touchspin count"
                    type="text"
                    value={count}
                    readOnly
                  />
                  <Button
                    variant={colors[i]}
                    className={`btn-${colors[i]} b-r-0 increment`}
                    onClick={() => updateCount(i, 1)}
                  >
                    +
                  </Button>
                </div>
              )}
              {variant === "horizontal" && (
                <div className="d-flex" id="small-horizontal-touchspin">
                  <Button
                    variant={colors[i]}
                    className={`btn-${colors[i]} b-r-0 decrement`}
                    onClick={() => updateCount(i, -1)}
                  >
                    -
                  </Button>
                  <Form.Control
                    className="form-control app-touchspin count"
                    type="text"
                    value={count}
                    readOnly
                  />
                  <Button
                    variant={colors[i]}
                    className={`btn-${colors[i]} b-r-0 increment`}
                    onClick={() => updateCount(i, 1)}
                  >
                    +
                  </Button>
                </div>
              )}

              {variant === "with-dropdown" && (
                <div
                  className="d-flex touchspin-with-dropdown"
                  id="touchspin-with-dropdown"
                >
                  <Button
                    variant={colors[i]}
                    className={`btn-${colors[i]} b-r-0 decrement`}
                    onClick={() => updateCount(i, -1)}
                  >
                    -
                  </Button>

                  <span className="input-group-text tochspin-pre-class text-light-secondary text-dark b-r-0">
                    Pre
                  </span>

                  <Form.Control
                    className="form-control app-touchspin count"
                    type="text"
                    value={count}
                    readOnly
                  />

                  <span className="input-group-text tochspin-pre-class text-light-secondary text-dark b-r-0">
                    Post
                  </span>

                  <Button
                    variant="secondary"
                    className="b-r-0 increment"
                    onClick={() => updateCount(i, 1)}
                  >
                    +
                  </Button>

                  {withDropdown && (
                    <Dropdown show={dropdownOpen} onToggle={toggleDropdown}>
                      <Dropdown.Toggle className="btn text-light-secondary">
                        Dropdown
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Header>Actions</Dropdown.Header>
                        <Dropdown.Item>Action</Dropdown.Item>
                        <Dropdown.Item>Another action</Dropdown.Item>
                        <Dropdown.Item>Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>Separated link</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  )}
                </div>
              )}

              {variant === "prefix-postfix" && (
                <div className="d-flex touchspin-with-PostPre">
                  <Button
                    className={`btn-${colors[i]} b-r-0 decrement`}
                    onClick={() => updateCount(i, -1)}
                  >
                    -
                  </Button>

                  <span className="input-group-text b-r-0">#</span>

                  <Form.Control
                    className="form-control app-touchspin count"
                    type="text"
                    value={count}
                    readOnly
                  />

                  <span className="input-group-text b-r-0">%</span>

                  <Button
                    className="btn-secondary b-r-0 increment"
                    onClick={() => updateCount(i, 1)}
                  >
                    +
                  </Button>
                </div>
              )}
            </Col>
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default TouchSpinCard;
