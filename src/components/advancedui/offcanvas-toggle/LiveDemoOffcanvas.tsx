import React, { useState } from "react";
import { Button, Card, Col, Offcanvas } from "react-bootstrap";

const LiveDemoOffcanvas: React.FC = () => {
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);
  const toggleOffcanvas = () => setOffcanvasOpen(!offcanvasOpen);

  return (
    <Col xs={12}>
      <Card>
        <Card.Header>
          <h5>Live Demo</h5>
          <p>
            Use the buttons below to show and hide an offcanvas element via
            JavaScript that toggles the <code>.show</code> class on an element
            with the <span className="text-danger">.offcanvas</span> class.
          </p>
        </Card.Header>

        <Card.Body>
          <Button variant="primary" className="m-2" onClick={toggleOffcanvas}>
            Link with href
          </Button>

          <Button variant="primary" className="m-2" onClick={toggleOffcanvas}>
            Button with data-bs-target
          </Button>

          <Offcanvas
            show={offcanvasOpen}
            onHide={toggleOffcanvas}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <p>
                Some text as placeholder. In real life you can have the elements
                you have chosen. Like, text, images, lists, etc.
              </p>
            </Offcanvas.Body>
          </Offcanvas>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default LiveDemoOffcanvas;
