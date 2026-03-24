import { useState } from "react";
import { Button, Card, Col, Offcanvas, Row } from "react-bootstrap";

interface OffcanvasItem {
  id: string;
  title: string;
  buttonText: string;
  description: string;
  scroll: boolean;
  backdrop: boolean | "static";
}

const OffcanvasDemo = () => {
  const [openOffcanvas, setOpenOffcanvas] = useState<string | null>(null);

  const offcanvasItems: OffcanvasItem[] = [
    {
      id: "scrolling",
      title: "Offcanvas with body scrolling",
      buttonText: "Enable body scrolling",
      description:
        "Try scrolling the rest of the page to see this option in action.",
      scroll: true,
      backdrop: false,
    },
    {
      id: "staticBackdrop",
      title: "Offcanvas with static backdrop",
      buttonText: "Toggle static offcanvas",
      description: "I will not close if you click outside of me.",
      scroll: false,
      backdrop: "static",
    },
    {
      id: "bothOptions",
      title: "Backdrop with scrolling",
      buttonText: "Enable both scrolling & backdrop",
      description:
        "Try scrolling the rest of the page to see this option in action.",
      scroll: true,
      backdrop: true,
    },
  ];

  const handleOpen = (id: string) => setOpenOffcanvas(id);
  const handleClose = () => setOpenOffcanvas(null);

  return (
    <Row>
      {offcanvasItems.map((item) => (
        <Col md={6} key={item.id}>
          <Card className="mb-4">
            <Card.Header>
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </Card.Header>
            <Card.Body>
              <Button variant="primary" onClick={() => handleOpen(item.id)}>
                {item.buttonText}
              </Button>

              <Offcanvas
                show={openOffcanvas === item.id}
                onHide={handleClose}
                scroll={item.scroll}
                backdrop={item.backdrop}
                placement="start"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>{item.title}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <p>{item.description}</p>
                </Offcanvas.Body>
              </Offcanvas>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default OffcanvasDemo;
