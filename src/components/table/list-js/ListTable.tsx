import React, { useEffect, useRef, useState } from "react";
import { Button, Card, Col, Form, Image, Row } from "react-bootstrap";

import List from "list.js";

const ListTable: React.FC = () => {
  const usersRef = useRef<HTMLDivElement>(null);
  const [listInstance, setListInstance] = useState<List | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && usersRef.current) {
      const options = {
        valueNames: ["name", "born", { data: ["id"] }],
      };

      if (!listInstance) {
        setListInstance(new List(usersRef.current, options));
      }
    }
  }, [listInstance]);

  const userData = [
    { id: 1, name: "Olive Yew", born: "1986", img: "07.png" },
    { id: 2, name: "Olive Yew", born: "1957", img: "07.png" },
    { id: 3, name: "Allie Grater", born: "1860", img: "1.png" },
    { id: 4, name: "Rita Book", born: "1976", img: "16.png" },
    { id: 5, name: "Rose Bush", born: "1960", img: "4.png" },
  ];

  return (
    <Col lg={4}>
      <Card>
        <Card.Header>
          <h5>List Table</h5>
        </Card.Header>
        <Card.Body>
          <div id="users" ref={usersRef}>
            <Row className="align-items-center mb-3">
              <Col xs={12} sm>
                <Form.Control
                  type="search"
                  className="search"
                  placeholder="Search..."
                  aria-label="Search"
                />
              </Col>
              <Col xs={12} sm="auto" className="mt-2 mt-sm-0">
                <Button variant="secondary" className="sort" data-sort="name">
                  Sort by name
                </Button>
              </Col>
            </Row>

            <div className="list list-tables">
              {userData.map(({ id, name, born, img }) => (
                <Row
                  key={id}
                  data-id={id}
                  className="d-flex align-items-center justify-content-between mt-2"
                >
                  <Col xs="auto">
                    <Form.Check type="checkbox" />
                  </Col>
                  <Col className="name">
                    <p className="mb-0">{name}</p>
                    <h6 className="fw-bold born">{born}</h6>
                  </Col>
                  <Col xs="auto">
                    <div
                      className="h-25 w-25 d-flex-center b-r-50 overflow-hidden text-bg-secondary avatar-40"
                    >
                      <Image
                        src={`/images/avatar/${img}`}
                        alt="avatar"
                        width={40}
                        height={40}
                        fluid
                      />
                    </div>
                  </Col>
                </Row>
              ))}
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ListTable;
