import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";

import {
  faCreditCard,
  faDownload,
  faLinkSlash,
  faMagnifyingGlass,
  faMagnifyingGlassMinus,
  faPaste,
  faPencil,
  faPhone,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Cardholder } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const InputGroupsPage: React.FC = () => {
  return (
    <Container fluid>
      <Breadcrumbs
        mainTitle="Input Groups"
        title="Forms elements"
        path={["Input groups"]}
        Icon={Cardholder}
      />
      <Row>
        {/* Basic Input Groups */}
        <Col xs={12}>
          <Card className="mb-4">
            <Card.Header>
              <h5>Basic Input Groups</h5>
            </Card.Header>
            <Card.Body>
              <div className="app-form">
                <Form.Group className="mb-3">
                  <Form.Label>Left Addon</Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="b-r-left bg-primary b-1-primary">
                      @
                    </InputGroup.Text>
                    <Form.Control placeholder="Username" />
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Right Addon</Form.Label>
                  <InputGroup>
                    <Form.Control placeholder="Recipient's username" />
                    <InputGroup.Text className="b-r-left bg-secondary b-1-secondary">
                      @example.com
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Joint Addon</Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="b-r-left bg-primary b-1-primary">
                      $
                    </InputGroup.Text>
                    <InputGroup.Text className="b-r-left bg-primary b-1-primary">
                      0.00
                    </InputGroup.Text>
                    <Form.Control placeholder="Dollar amount" />
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Left & Right Addon</Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="b-r-left bg-danger b-1-danger">
                      $
                    </InputGroup.Text>
                    <Form.Control placeholder="Amount (to the nearest dollar)" />
                    <InputGroup.Text>.00</InputGroup.Text>
                  </InputGroup>
                </Form.Group>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* FontAwesome + Advanced Addons */}
        <Col xs={12}>
          <Card className="mb-4">
            <Card.Header>
              <h5>FontAwesome & Advanced Input Groups</h5>
            </Card.Header>
            <Card.Body>
              <Form className="app-form">
                <Form.Group className="mb-3">
                  <Form.Label>Left Addon (Icon)</Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="b-r-left bg-light-primary b-1-primary">
                      <FontAwesomeIcon icon={faPencil} />
                    </InputGroup.Text>
                    <Form.Control placeholder="Email" />
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Right Addon (Icon)</Form.Label>
                  <InputGroup>
                    <Form.Control placeholder="Recipient's username" />
                    <InputGroup.Text className="b-r-left bg-light-secondary b-1-primary">
                      <FontAwesomeIcon icon={faPhone} />
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Left Spinner</Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="b-r-left bg-light-success b-1-primary">
                      <span className="spinner-border spinner-border-sm"></span>
                    </InputGroup.Text>
                    <Form.Control placeholder="Loading..." />
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Right Spinner</Form.Label>
                  <InputGroup>
                    <Form.Control placeholder="Loading..." />
                    <InputGroup.Text className="b-r-left bg-light-warning b-1-warning">
                      <span className="spinner-border spinner-border-sm text-warning"></span>
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Joint Addon (Icons)</Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="b-r-left bg-light-danger b-1-danger">
                      <FontAwesomeIcon icon={faLinkSlash} />
                    </InputGroup.Text>
                    <InputGroup.Text className="b-r-left bg-light-danger b-1-danger">
                      0.00
                    </InputGroup.Text>
                    <Form.Control />
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Left & Right Addon (Icons)</Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="b-r-left bg-light-dark b-1-dark">
                      <FontAwesomeIcon icon={faMagnifyingGlassMinus} />
                    </InputGroup.Text>
                    <Form.Control />
                    <InputGroup.Text>
                      <FontAwesomeIcon icon={faMagnifyingGlassMinus} />
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Solid style</Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="b-r-left bg-light-primary b-1-primary">
                      <FontAwesomeIcon icon={faUsers} />
                    </InputGroup.Text>
                    <Form.Control placeholder="999999" />
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Flat style</Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="b-r-left bg-light-secondary b-1-secondary">
                      <FontAwesomeIcon icon={faCreditCard} />
                    </InputGroup.Text>
                    <Form.Control />
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Raise style</Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="b-r-left bg-light-warning b-1-warning">
                      <FontAwesomeIcon icon={faDownload} />
                    </InputGroup.Text>
                    <Form.Control placeholder="https://www.example.com" />
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Pill Addon</Form.Label>
                  <InputGroup className="rounded-pill overflow-hidden">
                    <InputGroup.Text className="b-r-left bg-light-danger b-1-danger">
                      <FontAwesomeIcon icon={faPaste} size="lg" />
                    </InputGroup.Text>
                    <Form.Control />
                    <InputGroup.Text>
                      <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Multiple Addons Example */}
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header>
              <h5>Multiple Addons</h5>
            </Card.Header>
            <Card.Body>
              <div className="app-form">
                <InputGroup className="mb-3">
                  <InputGroup.Text className="b-r-left bg-warning">
                    $
                  </InputGroup.Text>
                  <InputGroup.Text className="b-r-left bg-warning">
                    0.00
                  </InputGroup.Text>
                  <Form.Control placeholder="Amount" />
                </InputGroup>

                <InputGroup>
                  <Form.Control />
                  <InputGroup.Text className="b-r-left bg-danger">
                    $
                  </InputGroup.Text>
                  <InputGroup.Text className="b-r-left bg-danger">
                    0.00
                  </InputGroup.Text>
                </InputGroup>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Checkboxes & Radios */}
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header>
              <h5>Checkboxes and Radios</h5>
            </Card.Header>
            <Card.Body>
              <div className="app-form">
                <InputGroup className="mb-3">
                  <InputGroup.Text className="b-r-left bg-light-primary b-1-primary">
                    <Form.Check type="checkbox" />
                  </InputGroup.Text>
                  <Form.Control />
                </InputGroup>
                <InputGroup>
                  <InputGroup.Text className="b-r-left bg-light-primary b-1-primary">
                    <Form.Check type="radio" />
                  </InputGroup.Text>
                  <Form.Control />
                </InputGroup>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Sizing Examples */}
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header>
              <h5>Sizing</h5>
            </Card.Header>
            <Card.Body>
              <div className="app-form">
                <InputGroup size="sm" className="mb-3">
                  <InputGroup.Text className=" text-light-primary b-r-left">
                    Small
                  </InputGroup.Text>
                  <Form.Control />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Text className="text-light-secondary b-r-left">
                    Default
                  </InputGroup.Text>
                  <Form.Control />
                </InputGroup>

                <InputGroup size="lg">
                  <InputGroup.Text className="text-light-success b-r-left">
                    Large
                  </InputGroup.Text>
                  <Form.Control />
                </InputGroup>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Button Addons */}
        <Col md={6}>
          <Card className="mb-4">
            <Card.Header>
              <h5>Button Addons</h5>
            </Card.Header>
            <Card.Body>
              <div className="app-form">
                <InputGroup className="mb-3">
                  <Button variant="outline-primary">Button</Button>
                  <Form.Control />
                </InputGroup>

                <InputGroup className="mb-3">
                  <Form.Control />
                  <Button variant="outline-secondary">Button</Button>
                </InputGroup>

                <InputGroup className="mb-3">
                  <Button variant="outline-success">Button</Button>
                  <Button variant="outline-success">Button</Button>
                  <Form.Control />
                </InputGroup>

                <InputGroup>
                  <Form.Control />
                  <Button variant="outline-danger">Button</Button>
                  <Button variant="outline-danger">Button</Button>
                </InputGroup>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default InputGroupsPage;
