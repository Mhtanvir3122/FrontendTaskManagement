import React, { useState } from "react";
import { Card, Col, Container, Form, FormCheck, Row } from "react-bootstrap";

import { Cardholder } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

interface SwitchState {
  [key: string]: boolean;
}

const Index: React.FC = () => {
  const [basicSwitch1, setBasicSwitch1] = useState<boolean>(false);
  const [basicSwitch2, setBasicSwitch2] = useState<boolean>(false);
  const [switch001, setSwitch001] = useState<boolean>(true);
  const [switch002, setSwitch002] = useState<boolean>(false);
  const [switch003, setSwitch003] = useState<boolean>(true);
  const [switch004, setSwitch004] = useState<boolean>(false);
  const [switch005, setSwitch005] = useState<boolean>(true);
  const [switch006, setSwitch006] = useState<boolean>(false);

  const handleSwitchChange = (
    setter: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setter((prev) => !prev);
  };

  const [switchStates, setSwitchStates] = useState<SwitchState>({
    check5: true,
    check6: true,
    check7: true,
    check8: true,
    check9: true,
    check10: true,
    check01: true,
  });

  const handleSwitchChange1 = (id: string) => {
    setSwitchStates((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const [switchStates2, setSwitchStates2] = useState<SwitchState>({
    check02: true,
    check03: true,
    check04: true,
    check05: true,
    check06: true,
    check07: true,
    check08: true,
  });

  const handleSwitchChange2 = (id: string) => {
    setSwitchStates2((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="switch"
          title="Forms elements"
          path={["switch"]}
          Icon={Cardholder}
        />
        <Row>
          <Col sm="12">
            <Card>
              <Card.Header>
                <h5>Basic Switch</h5>
              </Card.Header>
              <Card.Body className="main-switch">
                <div className="d-flex align-items-center mb-3">
                  <FormCheck
                    type="switch"
                    id="basic-switch-1"
                    label="Bootstrap Switch"
                    checked={basicSwitch1}
                    onChange={() => handleSwitchChange(setBasicSwitch1)}
                  />
                </div>
                <div className="d-flex align-items-center">
                  <FormCheck
                    type="switch"
                    id="basic-switch-2"
                    label="Bootstrap Disabled"
                    checked={basicSwitch2}
                    onChange={() => handleSwitchChange(setBasicSwitch2)}
                    disabled
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={6} xxl={4}>
            <Card className="equal-card">
              <Card.Header>
                <h5>Switch Sizing</h5>
              </Card.Header>
              <Card.Body className="main-switch main-switch-color">
                <Form.Group className="switch-primary my-3">
                  <Form.Control
                    type="checkbox"
                    id="check-001"
                    className="toggle"
                    checked={switch001}
                    onChange={() => handleSwitchChange(setSwitch001)}
                  />
                  <Form.Label htmlFor="check-001" className="text-dark">
                    Large Size
                  </Form.Label>
                </Form.Group>
                <Form.Group className="switch-secondary my-3">
                  <Form.Control
                    type="checkbox"
                    id="check-002"
                    checked={switch002}
                    onChange={() => handleSwitchChange(setSwitch002)}
                    className="toggle"
                  />
                  <Form.Label htmlFor="check-002" className="text-dark">
                    Large Unchecked
                  </Form.Label>
                </Form.Group>
                <Form.Group className="swich-size my-3">
                  <Form.Control
                    type="checkbox"
                    id="check-003"
                    checked={switch003}
                    onChange={() => handleSwitchChange(setSwitch003)}
                    className="toggle"
                  />
                  <Form.Label htmlFor="check-003" className="text-dark">
                    Large Size
                  </Form.Label>
                </Form.Group>
                <Form.Group className="switch-danger swich-size my-3">
                  <Form.Control
                    type="checkbox"
                    id="check-004"
                    checked={switch004}
                    onChange={() => handleSwitchChange(setSwitch004)}
                    className="toggle"
                  />
                  <Form.Label htmlFor="check-004" className="text-dark">
                    Normal Unchecked
                  </Form.Label>
                </Form.Group>
                <Form.Group className="switch-warning swich-size2 my-3">
                  <Form.Control
                    type="checkbox"
                    id="check-005"
                    checked={switch005}
                    onChange={() => handleSwitchChange(setSwitch005)}
                    className="toggle"
                  />
                  <Form.Label htmlFor="check-005" className="text-dark">
                    Small Size
                  </Form.Label>
                </Form.Group>
                <Form.Group className="switch-info swich-size2 my-3">
                  <Form.Control
                    type="checkbox"
                    id="check-006"
                    checked={switch006}
                    onChange={() => handleSwitchChange(setSwitch006)}
                    className="toggle"
                  />
                  <Form.Label htmlFor="check-006" className="text-dark">
                    Small Size Unchecked
                  </Form.Label>
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>

          <Col sm="6" xxl="4">
            <Card>
              <Card.Header>
                <h5>Switch Variants</h5>
              </Card.Header>
              <Card.Body className="main-switch main-switch-color switch-unchecked switch_border">
                <Form.Group className="switch-primary switch-unchecked-primary switch-border-primary my-3">
                  <Form.Control
                    type="checkbox"
                    id="check5"
                    className="toggle"
                    checked={switchStates.check5}
                    onChange={() => handleSwitchChange1("check5")}
                  />
                  <Form.Label htmlFor="check5" className="text-dark">
                    Large Size
                  </Form.Label>
                </Form.Group>
                <Form.Group className="switch-secondary switch-unchecked-secondary switch-border-secondary my-3">
                  <Form.Control
                    type="checkbox"
                    id="check6"
                    className="toggle m-3"
                    checked={switchStates.check6}
                    onChange={() => handleSwitchChange1("check6")}
                  />
                  <Form.Label htmlFor="check6">Secondary</Form.Label>
                </Form.Group>

                <Form.Group className="switch-success switch-unchecked-success switch-border-success my-3">
                  <Form.Control
                    type="checkbox"
                    id="check7"
                    className="toggle m-3"
                    checked={switchStates.check7}
                    onChange={() => handleSwitchChange1("check7")}
                  />
                  <Form.Label htmlFor="check7">Success</Form.Label>
                </Form.Group>

                <Form.Group className="switch-danger switch-unchecked-danger switch-border-danger my-3">
                  <Form.Control
                    type="checkbox"
                    id="check8"
                    className="toggle m-3"
                    checked={switchStates.check8}
                    onChange={() => handleSwitchChange1("check8")}
                  />
                  <Form.Label htmlFor="check8">Danger</Form.Label>
                </Form.Group>

                <Form.Group className="switch-warning switch-unchecked-warning switch-border-warning my-3">
                  <Form.Control
                    type="checkbox"
                    id="check9"
                    className="toggle m-3"
                    checked={switchStates.check9}
                    onChange={() => handleSwitchChange1("check9")}
                  />
                  <Form.Label htmlFor="check9">Warning</Form.Label>
                </Form.Group>

                <Form.Group className="switch-info switch-unchecked-info switch-border-info my-3">
                  <Form.Control
                    type="checkbox"
                    id="check10"
                    className="toggle m-3"
                    checked={switchStates.check10}
                    onChange={() => handleSwitchChange1("check10")}
                  />
                  <Form.Label htmlFor="check10">Info</Form.Label>
                </Form.Group>

                <Form.Group className="switch-dark switch-unchecked-dark switch-border-dark my-3">
                  <Form.Control
                    type="checkbox"
                    id="check01"
                    className="toggle m-3"
                    checked={switchStates.check01}
                    onChange={() => handleSwitchChange1("check01")}
                  />
                  <Form.Label htmlFor="check01">Dark</Form.Label>
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>

          <Col sm="6" xxl="4">
            <Card>
              <Card.Header>
                <h5>Switch outline</h5>
              </Card.Header>
              <Card.Body className="switch_border main-switch switch-unchecked">
                <Form.Group className="switch-border-primary switch-primary switch-unchecked-primary my-3">
                  <Form.Control
                    type="checkbox"
                    id="check-02"
                    className="toggle switch-border-primary"
                    checked={switchStates2.check02}
                    onChange={() => handleSwitchChange2("check02")}
                  />
                  <Form.Label htmlFor="check-02">Primary</Form.Label>
                </Form.Group>

                <Form.Group className="switch-border-secondary switch-secondary switch-unchecked-secondary my-3">
                  <Form.Control
                    type="checkbox"
                    id="check-03"
                    className="toggle"
                    checked={switchStates2.check03}
                    onChange={() => handleSwitchChange2("check03")}
                  />
                  <Form.Label htmlFor="check-03">Secondary</Form.Label>
                </Form.Group>

                <Form.Group className="switch-border-success switch-success switch-unchecked-success my-3">
                  <Form.Control
                    type="checkbox"
                    id="check-04"
                    className="toggle switch-border-primary"
                    checked={switchStates2.check04}
                    onChange={() => handleSwitchChange2("check04")}
                  />
                  <Form.Label htmlFor="check-04">Success</Form.Label>
                </Form.Group>

                <Form.Group className="switch-border-danger switch-danger switch-unchecked-danger my-3">
                  <Form.Control
                    type="checkbox"
                    id="check-05"
                    className="toggle"
                    checked={switchStates2.check05}
                    onChange={() => handleSwitchChange2("check05")}
                  />
                  <Form.Label htmlFor="check-05">Danger</Form.Label>
                </Form.Group>

                <Form.Group className="switch-border-warning switch-warning switch-unchecked-warning my-3">
                  <Form.Control
                    type="checkbox"
                    id="check-06"
                    className="toggle"
                    checked={switchStates2.check06}
                    onChange={() => handleSwitchChange2("check06")}
                  />
                  <Form.Label htmlFor="check-06">Warning</Form.Label>
                </Form.Group>

                <Form.Group className="switch-border-info switch-info switch-unchecked-info my-3">
                  <Form.Control
                    type="checkbox"
                    id="check-07"
                    className="toggle"
                    checked={switchStates2.check07}
                    onChange={() => handleSwitchChange2("check07")}
                  />
                  <Form.Label htmlFor="check-07">Info</Form.Label>
                </Form.Group>

                <Form.Group className="switch-border-dark switch-dark switch-unchecked-dark my-3">
                  <Form.Control
                    type="checkbox"
                    id="check-08"
                    className="toggle"
                    checked={switchStates2.check08}
                    onChange={() => handleSwitchChange2("check08")}
                  />
                  <Form.Label htmlFor="check-08">Dark</Form.Label>
                </Form.Group>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Index;
