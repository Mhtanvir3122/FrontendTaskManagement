import React, { useEffect, useRef } from "react";
import { Button, Card, Col, Form, Row, Table } from "react-bootstrap";

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconMail } from "@tabler/icons-react";
import List from "list.js";

const TablesLists: React.FC = () => {
  const sideListRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const listRef1 = useRef<HTMLDivElement>(null);
  const paginationRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (sideListRef.current) {
        new List(sideListRef.current, { valueNames: ["side"] });
      }
      if (listRef.current) {
        new List(listRef.current, { valueNames: ["name"] });
      }
      if (listRef1.current && paginationRef.current) {
        new List(listRef1.current, {
          valueNames: ["name"],
          page: 3,
          pagination: {
            innerWindow: 1,
            outerWindow: 1,
            paginationClass: "pagination",
          },
        });
      }
    }
  }, []);

  const sideListData = [
    {
      id: 1,
      name: "Olive Yew",
      description: "This is the content of the email.",
      time: "28 min",
      theme: "info",
    },
    {
      id: 2,
      name: "Bea Mine",
      description: "It enables users to easily.",
      time: "48 min",
      theme: "success",
    },
    {
      id: 3,
      name: "Toi Story",
      description: "Companies can use to convey.",
      time: "2 hours",
      theme: "primary",
    },
    {
      id: 4,
      name: "Art Decco",
      description: "System Software is closer.",
      time: "1 day",
      theme: "info",
    },
  ];

  const searchListData = [
    "Guybrush Threepwood",
    "Elaine Marley",
    "LeChuck",
    "Stan",
    "Voodoo Lady",
    "Herman Toothrot",
    "Meathook",
    "Carla",
    "Otis",
    "Rapp Scallion",
    "Rum Rogers Sr.",
    "Men of Low Moral Fiber",
    "Murray",
    "Cannibals",
  ];

  const tableData = ["Jonny Stromberg", "Jonas Arnklint", "Martina Elm"];

  return (
    <>
      <Col md={6} xxl={4}>
        <Card>
          <Card.Header>
            <h5>Existing list</h5>
          </Card.Header>
          <Card.Body>
            <div id="sidelist" ref={sideListRef}>
              <Row className="mb-3">
                <Col>
                  <Form.Control
                    type="search"
                    className="search rounded-pill"
                    placeholder="Search..."
                  />
                </Col>
                <Col sm="auto">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="sort rounded-pill"
                    data-sort="side"
                  >
                    Sort by name
                  </Button>
                </Col>
              </Row>
              <div className="list existing-list">
                {sideListData.map(({ id, name, description, time, theme }) => (
                  <Row
                    key={id}
                    className="align-items-center mb-3"
                    data-id={id}
                  >
                    <Col xs="auto">
                      <div
                        className={`position-relative d-flex justify-content-center align-items-center rounded-circle bg-${theme} text-white avatar-40`}
                      >
                        <FontAwesomeIcon icon={faUser} />
                        <span className="position-absolute end-0 top-0 p-1 bg-light border rounded-circle"></span>
                      </div>
                    </Col>
                    <Col className="ps-2">
                      <h6 className="link side mb-0">{name}</h6>
                      <p className="mb-0 small">{description}</p>
                    </Col>
                    <Col xs="auto" className="text-muted small">
                      {time}
                    </Col>
                  </Row>
                ))}
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Col md={6} xxl={4}>
        <Card>
          <Card.Header>
            <h5>Search List Table</h5>
          </Card.Header>
          <Card.Body>
            <div id="test-list" ref={listRef}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="search"
                  className="fuzzy-search search rounded-pill"
                  placeholder="Search..."
                />
              </Form.Group>
              <ul className="list fuzzy-list ps-3">
                {searchListData.map((name, idx) => (
                  <li key={idx}>
                    <p className="name mb-1">{name}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Col md={6} xxl={4}>
        <Card>
          <Card.Header>
            <h5>Table with Pagination</h5>
          </Card.Header>
          <Card.Body>
            <div id="user" ref={listRef1}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="search"
                  className="search rounded-pill"
                  placeholder="Search..."
                />
              </Form.Group>
              <Table bordered responsive className="align-middle">
                <tbody className="list">
                  {tableData.map((name, idx) => (
                    <tr key={idx}>
                      <td className="name">{name}</td>
                      <td className="text-end">
                        <Button
                          variant="light"
                          className="float-end rounded-pill"
                        >
                          <IconMail size={18} className="me-1" />
                          Message
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <div className="list-pagination">
                <ul className="pagination mb-0" ref={paginationRef}></ul>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default TablesLists;
