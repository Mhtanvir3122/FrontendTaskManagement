import React, { useEffect, useRef } from "react";
import { Card, Col } from "react-bootstrap";

import { DotsThreeVertical } from "phosphor-react";
import Sortable from "sortablejs";

const clonicMenuItemsLeft = [
  { label: "A", title: "Clonic Menu List 1" },
  { label: "B", title: "Clonic Menu List 2" },
  { label: "C", title: "Clonic Menu List 3" },
  { label: "D", title: "Clonic Menu List 4" },
  { label: "E", title: "Clonic Menu List 5" },
];

const clonicMenuItemsRight = [
  { label: "A", title: "Clonic Menu List 6" },
  { label: "B", title: "Clonic Menu List 7" },
  { label: "C", title: "Clonic Menu List 8" },
  { label: "D", title: "Clonic Menu List 9" },
  { label: "E", title: "Clonic Menu List 10" },
];

const ClonicDraggableList: React.FC = () => {
  const clonicMenuLeftRef = useRef<HTMLUListElement | null>(null);
  const clonicMenuRightRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    if (clonicMenuLeftRef.current) {
      new Sortable(clonicMenuLeftRef.current, {
        group: { name: "shared1", pull: "clone", put: false },
        animation: 150,
        sort: false,
      });
    }
    if (clonicMenuRightRef.current) {
      new Sortable(clonicMenuRightRef.current, {
        group: { name: "shared1", pull: "clone" },
        animation: 150,
      });
    }
  }, []);

  return (
    <Col xxl={6}>
      <Card className="equal-card">
        <Card.Header>
          <h5>Draggable Clonic List</h5>
        </Card.Header>
        <Card.Body>
          <div className="row">
            <Col xs={6} sm={6} md={6} lg={6} className="box-layout-draggable">
              <ul className="clonic-menu-list"
                ref={clonicMenuLeftRef}
              >
                {clonicMenuItemsLeft.map((item, index) => (
                  <li key={index}>
                    <div className="clonic-menu-item" draggable="false">
                      <span className="text-light-primary h-40 w-40 d-flex-center b-r-50 clonic-menu-img">
                        {item.label}
                      </span>
                      <div className="clonic-menu-content">
                        <h6 className="mb-0">{item.title}</h6>
                      </div>
                      <span>
                        <DotsThreeVertical size={18} />
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} className="box-layout-draggable">
              <ul className="clonic-menu-list"
                ref={clonicMenuRightRef}
              >
                {clonicMenuItemsRight.map((item, index) => (
                  <li key={index}>
                    <div className="clonic-menu-item" draggable="false">
                      <span className="text-light-primary h-40 w-40 d-flex-center b-r-50 clonic-menu-img">
                        {item.label}
                      </span>
                      <div className="clonic-menu-content">
                        <h6 className="mb-0">{item.title}</h6>
                      </div>
                      <span>
                        <DotsThreeVertical size={18} />
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </Col>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ClonicDraggableList;
