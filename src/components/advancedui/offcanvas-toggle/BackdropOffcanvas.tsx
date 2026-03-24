import { useState } from "react";
import { Button, Card, Col, Offcanvas } from "react-bootstrap";

interface OffcanvasItem {
  id: string;
  label: string;
  body: string;
  scroll: boolean;
  backdrop: boolean | "static";
}

const BackdropOffcanvasMap = () => {
  const offcanvasItems: OffcanvasItem[] = [
    {
      id: "scrolling",
      label: "Colored with scrolling",
      body: "Try scrolling the rest of the page to see this option in action.",
      scroll: true,
      backdrop: false,
    },
    {
      id: "backdrop",
      label: "Offcanvas with backdrop",
      body: "This offcanvas has a backdrop and disables scrolling.",
      scroll: false,
      backdrop: true,
    },
    {
      id: "both",
      label: "Backdroped with scrolling",
      body: "Try scrolling the rest of the page to see this option in action.",
      scroll: true,
      backdrop: true,
    },
  ];

  const [openId, setOpenId] = useState<string | null>(null);

  const handleOpen = (id: string) => setOpenId(id);
  const handleClose = () => setOpenId(null);

  return (
    <Col xs={12}>
      <Card>
        <Card.Header>
          <h5>Backdrop</h5>
          <p>
            Scrolling the <code>body</code> is disabled when an offcanvas and
            its backdrop are visible. Use <code>scroll</code> and{" "}
            <code>backdrop</code> properties to control behavior.
          </p>
        </Card.Header>

        <Card.Body className="d-flex flex-wrap gap-2">
          {offcanvasItems.map((item) => (
            <Button
              key={item.id}
              variant="primary"
              className="m-2"
              onClick={() => handleOpen(item.id)}
            >
              {item.id === "scrolling" && "Enable body scrolling"}
              {item.id === "backdrop" && "Enable backdrop (default)"}
              {item.id === "both" && "Enable both scrolling & backdrop"}
            </Button>
          ))}
          {offcanvasItems.map((item) => (
            <Offcanvas
              key={item.id}
              show={openId === item.id}
              onHide={handleClose}
              scroll={item.scroll}
              backdrop={item.backdrop}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>{item.label}</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <p>{item.body}</p>
              </Offcanvas.Body>
            </Offcanvas>
          ))}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default BackdropOffcanvasMap;
