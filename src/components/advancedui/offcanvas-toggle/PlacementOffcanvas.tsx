import { useState } from "react";
import { Button, Card, Col, Offcanvas } from "react-bootstrap";

// Type for offcanvas items
interface OffcanvasItem {
  id: string;
  label: string;
  placement: "top" | "end" | "bottom";
}

const PlacementOffcanvasMap = () => {
  const offcanvasItems: OffcanvasItem[] = [
    { id: "top", label: "Top Offcanvas", placement: "top" },
    { id: "right", label: "Right Offcanvas", placement: "end" },
    { id: "bottom", label: "Bottom Offcanvas", placement: "bottom" },
  ];

  const [openId, setOpenId] = useState<string | null>(null);

  const toggleOffcanvas = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <Col xs={12}>
      <Card>
        <Card.Header>
          <h5>Placement</h5>
          <p className="mb-0">
            Offcanvas Placement Example: <code>Top</code>, <code>End</code>{" "}
            (Right), and <code>Bottom</code>
          </p>
        </Card.Header>

        <Card.Body className="d-flex flex-wrap gap-2">
          {offcanvasItems.map(({ id, label }) => (
            <Button
              key={id}
              variant="primary"
              onClick={() => toggleOffcanvas(id)}
            >
              Toggle {label}
            </Button>
          ))}

          {offcanvasItems.map(({ id, label, placement }) => (
            <Offcanvas
              key={id}
              show={openId === id}
              onHide={() => toggleOffcanvas(id)}
              placement={placement}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>{label}</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                This is the <strong>{label}</strong> content.
              </Offcanvas.Body>
            </Offcanvas>
          ))}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PlacementOffcanvasMap;
