import React, { useEffect, useRef } from "react";
import { Card, Col } from "react-bootstrap";

import { AnchorSimple } from "phosphor-react";
import Sortable from "sortablejs";

const handleListItems = [
  { color: "primary", text: "A simple primary list group item" },
  { color: "secondary", text: "A simple secondary list group item" },
  { color: "success", text: "A simple success list group item" },
  { color: "danger", text: "A simple danger list group item" },
  { color: "warning", text: "A simple warning list group item" },
  { color: "info", text: "A simple info list group item" },
  { color: "dark", text: "A simple dark list group item" },
];

const HandleDraggableList: React.FC = () => {
  const handleListRef = useRef<HTMLUListElement | null>(null);
  useEffect(() => {
    if (handleListRef.current) {
      new Sortable(handleListRef.current, {
        handle: ".list-handle",
        animation: 150,
      });
    }
  }, []);

  return (
    <Col xxl={6}>
      <Card className="equal-card">
        <Card.Header>
          <h5>Draggable Handle List</h5>
        </Card.Header>
        <Card.Body>
          <ul className="list-group handle-list-group"
            ref={handleListRef}
          >
            {handleListItems.map((item, index) => (
              <li
                key={index}
                className={`list-group-item text-light-${item.color}`}
              >
                <AnchorSimple size={18} weight="bold" className="list-handle" />
                {item.text}
              </li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default HandleDraggableList;
