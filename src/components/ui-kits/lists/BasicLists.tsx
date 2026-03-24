import React, { useState } from "react";
import { Card, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";

import {
  activeList,
  buttonList,
  defaultList,
  horizontalList,
  linkList,
  numberedList,
} from "@/data/uikit/lists/listPageData.ts";
import { ArrowSquareRight, LinkBreak } from "phosphor-react";

const ListGroupComponent: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle active state
  };

  return (
    <Row>
      <Col md={6} xl={4}>
        <Card>
          <Card.Header>
            <h5>Default Lists</h5>
          </Card.Header>
          <Card.Body>
            <ListGroup>
              {defaultList.map((item, index) => (
                <ListGroupItem key={index}>{item}</ListGroupItem>
              ))}
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>

      <Col md={6} xl={4}>
        <Card>
          <Card.Header>
            <h5>Active Items</h5>
          </Card.Header>
          <Card.Body>
            <ListGroup className="list-items-active">
              {activeList.map((item, index) => (
                <ListGroupItem
                  key={item.id}
                  active={activeIndex === index}
                  className={`list-active ${activeIndex === index ? "active" : ""}`}
                  onClick={() => handleClick(index)}
                >
                  {item.text}
                </ListGroupItem>
              ))}
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>

      <Col md={6} xl={4}>
        <Card>
          <Card.Header>
            <h5>Links</h5>
          </Card.Header>
          <Card.Body>
            <ListGroup className="list-group list-link">
              {linkList.map((link) => (
                <a
                  key={link.id}
                  href={link.disabled ? undefined : link.href}
                  className={`list-group-item list-group-item-action ${
                    link.active ? "active" : ""
                  } ${link.disabled ? "disabled" : ""}`}
                  aria-disabled={link.disabled}
                >
                  <LinkBreak size={16} className="me-2" />
                  {link.text}
                </a>
              ))}
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>

      <Col md={6} xl={4}>
        <Card>
          <Card.Header className="code-header">
            <h5>Buttons</h5>
          </Card.Header>
          <Card.Body className="gap-2 d-flex flex-column">
            <div className="list-group list-button">
              {buttonList.map((button) => (
                <button
                  key={button.id}
                  type="button"
                  className={`list-group-item list-group-item-action ${
                    button.active ? "active" : ""
                  }`}
                  disabled={button.disabled}
                >
                  <ArrowSquareRight size={16} className="me-2" />
                  {button.text}
                </button>
              ))}
            </div>
          </Card.Body>
        </Card>
      </Col>

      <Col md={6} xl={4}>
        <Card>
          <Card.Header className="code-header">
            <h5>Numbered</h5>
          </Card.Header>
          <Card.Body>
            <ol className="list-group list-group-numbered p-1">
              {numberedList.map((item) => (
                <li
                  key={item.id}
                  className={`list-group-item d-flex justify-content-between align-items-start text-${item.color}`}
                >
                  <div className="ms-2 w-100">
                    <div className="w-100 d-flex justify-content-between align-items-center">
                      <div className="fw-bold me-1">Subheading</div>
                      <span
                        className={`badge text-light-${item.color} rounded-pill`}
                      >
                        {item.count}
                      </span>
                    </div>
                    {item.text}
                  </div>
                </li>
              ))}
            </ol>
          </Card.Body>
        </Card>
      </Col>

      <Col md={6} xl={4}>
        <Card>
          <Card.Header className="code-header">
            <h5>Horizontal</h5>
          </Card.Header>
          <Card.Body className="list-horizontal gap-2 d-flex flex-column align-items-center">
            {horizontalList.map((group) => (
              <ul key={group.id} className="list-group list-group-horizontal">
                {group.items.map((item, index) => (
                  <li
                    key={index}
                    className={`list-group-item ${group.className}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ))}
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default ListGroupComponent;
