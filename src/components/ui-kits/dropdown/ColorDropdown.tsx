import React, { useState } from "react";
import { Button, Card, CardBody, Col, Row } from "react-bootstrap";
import { ChatCircle, DotsThree, Gear, Intersect, UserPlus } from "phosphor-react";

interface DropdownItem {
  label: string;
  icon: React.ReactNode;
}

const dropdownItems: DropdownItem[] = [
  { label: "Action", icon: <UserPlus size={18} /> },
  { label: "Another action", icon: <Intersect size={18} /> },
  { label: "Something else here", icon: <ChatCircle size={18} /> },
  { label: "Settings", icon: <Gear size={18} /> },
];

// All color variants
const menuColors: string[] = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
];

const ColorDropdown: React.FC = () => {
  // State to track which dropdown is open
  const [openDropdowns, setOpenDropdowns] = useState<boolean[]>(
    Array(menuColors.length).fill(true)
  );

  const toggleDropdown = (index: number) => {
    setOpenDropdowns(prev => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <Col xs={12}>
      <Card>
        <Card.Header>
          <h5>Color Dropdown Menu</h5>
        </Card.Header>
        <CardBody>
          <Row>
            {menuColors.map((color, index) => (
              <Col md={6} xl={4} key={index}>
                <div className="app-dropdown mb-3">
                  <Button
                    variant=""
                    className="border-0 icon-btn"
                    type="button"
                    onClick={() => toggleDropdown(index)}
                  >
                    <DotsThree size={24} weight="bold" />
                  </Button>
                  {openDropdowns[index] && (
                    <ul className={`dropdown-menu menu-${color} show`}>
                      {dropdownItems.slice(0, 3).map((item, idx) => (
                        <li
                          className="dropdown-item d-flex justify-content-between"
                          key={idx}
                        >
                          <span>{item.label}</span>
                          {item.icon}
                        </li>
                      ))}
                      <li className="dropdown-divider"></li>
                      <li className="dropdown-item d-flex justify-content-between">
                        <span>{dropdownItems[3].label}</span>
                        {dropdownItems[3].icon}
                      </li>
                    </ul>
                  )}
                </div>
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ColorDropdown;
