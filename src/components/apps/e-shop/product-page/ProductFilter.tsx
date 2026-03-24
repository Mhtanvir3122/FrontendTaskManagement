import { useState } from "react";
import { Accordion, Button, Form, Stack } from "react-bootstrap";

import { IconStar, IconStarFilled } from "@tabler/icons-react";
import {
  CirclesThreePlus,
  DesktopTower,
  FirstAidKit,
  GameController,
  ShoppingCart,
} from "phosphor-react";

const FilterSidebar = () => {
  const [activeKeys, setActiveKeys] = useState<string[]>([
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
  ]);

  const toggleKey = (key: string) => {
    setActiveKeys((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const [selectedColor, setSelectedColor] = useState<string>("primary");

  const colorOptions = [
    { value: "primary", className: "bg-primary" },
    { value: "secondary", className: "bg-secondary" },
    { value: "success", className: "bg-success" },
    { value: "danger", className: "bg-danger" },
    { value: "warning", className: "bg-warning" },
    { value: "info", className: "bg-info" },
    { value: "light", className: "bg-light border" },
    { value: "dark", className: "bg-dark" },
  ];

  const genderOptions = ["Men", "Women", "Boys", "Girls", "Boys & Girls"];
  const [checkedGenders, setCheckedGenders] = useState<string[]>([]);
  const handleGenderToggle = (val: string) => {
    setCheckedGenders((prev) =>
      prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val]
    );
  };

  const sortOptions = [
    "Featured",
    "Price: High to Low",
    "Price: Low to High",
    "Newest",
    "Ratings",
  ];
  const [selectedSort, setSelectedSort] = useState("Featured");

  const rating = 3;

  return (
    <div className="p-0">
      <Accordion activeKey={activeKeys} alwaysOpen>
        {/* Sort By */}
        <Accordion.Item eventKey="0">
          <Accordion.Header onClick={() => toggleKey("0")}>
            Sort By
          </Accordion.Header>
          <Accordion.Body>
            <Stack gap={2}>
              {sortOptions.map((option) => (
                <Form.Check
                  key={option}
                  type="radio"
                  name="sortGroup"
                  label={option}
                  id={`sort-${option}`}
                  checked={selectedSort === option}
                  onChange={() => setSelectedSort(option)}
                />
              ))}
            </Stack>
          </Accordion.Body>
        </Accordion.Item>

        {/* Categories */}
        <Accordion.Item eventKey="1">
          <Accordion.Header onClick={() => toggleKey("1")}>
            Categories
          </Accordion.Header>
          <Accordion.Body>
            <Stack gap={3}>
              {[
                { icon: <DesktopTower size={18} />, label: "Home Appliances" },
                { icon: <FirstAidKit size={18} />, label: "Health & Beauty" },
                { icon: <GameController size={18} />, label: "Toys & Games" },
                { icon: <ShoppingCart size={18} />, label: "Groceries" },
                { icon: <CirclesThreePlus size={18} />, label: "See all" },
              ].map((item, i) => (
                <Form.Check
                  key={i}
                  type="checkbox"
                  label={
                    <span className="d-flex align-items-center gap-2">
                      <span>{item.icon}</span>
                      {item.label}
                    </span>
                  }
                />
              ))}
            </Stack>
          </Accordion.Body>
        </Accordion.Item>

        {/* Color */}
        <Accordion.Item eventKey="2">
          <Accordion.Header onClick={() => toggleKey("2")}>
            Color
          </Accordion.Header>
          <Accordion.Body>
            <div className="d-flex flex-wrap gap-2">
              {colorOptions.map((color) => (
                <Form.Check
                  key={color.value}
                  type="radio"
                  name="colorSelect"
                  id={`color-${color.value}`}
                  checked={selectedColor === color.value}
                  onChange={() => setSelectedColor(color.value)}
                  label=""
                  className="position-relative"
                >
                  <span
                    className={`d-inline-block rounded-circle ${color.className} avatar-20 ml-8`}
                  />
                </Form.Check>
              ))}
            </div>
          </Accordion.Body>
        </Accordion.Item>

        {/* Gender */}
        <Accordion.Item eventKey="3">
          <Accordion.Header onClick={() => toggleKey("3")}>
            Gender
          </Accordion.Header>
          <Accordion.Body>
            <Stack gap={2}>
              {genderOptions.map((opt) => (
                <Form.Check
                  key={opt}
                  type="checkbox"
                  label={opt}
                  id={`gender-${opt}`}
                  checked={checkedGenders.includes(opt)}
                  onChange={() => handleGenderToggle(opt)}
                />
              ))}
            </Stack>
          </Accordion.Body>
        </Accordion.Item>

        {/* Customer Ratings */}
        <Accordion.Item eventKey="4">
          <Accordion.Header onClick={() => toggleKey("4")}>
            Customer Ratings
          </Accordion.Header>
          <Accordion.Body>
            <div className="d-flex gap-1 justify-content-start">
              {[...Array(5)].map((_, i) =>
                i < rating ? (
                  <IconStarFilled key={i} className="text-warning" />
                ) : (
                  <IconStar key={i} className="text-muted" />
                )
              )}
            </div>
          </Accordion.Body>
        </Accordion.Item>

        {/* Price Range */}
        <Accordion.Item eventKey="5">
          <Accordion.Header onClick={() => toggleKey("5")}>
            Price Range
          </Accordion.Header>
          <Accordion.Body>
            <Form.Range className="mb-2" />
            <div className="d-flex gap-2">
              <Form.Control type="number" placeholder="Min" />
              <Form.Control type="number" placeholder="Max" />
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {/* Buttons */}
      <div className="text-end m-3">
        <Button variant="outline-primary" size="sm" className="me-2">
          Clear All
        </Button>
        <Button variant="secondary" size="sm">
          Apply
        </Button>
      </div>
    </div>
  );
};

export default FilterSidebar;
