import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

import { DiamondsFour } from "phosphor-react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import * as WeatherIcons from "weather-icons-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const WeatherIconPage: React.FC = () => {
  const icons = Object.keys(WeatherIcons) as (keyof typeof WeatherIcons)[];
  const size: number = 50;
  const color: string = "#000";
  const [iconList, setIconList] = useState(icons);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    if (searchValue.trim() === "") {
      setIconList(icons);
    } else {
      const filteredIcons = icons.filter((icon) =>
        icon.toLowerCase().includes(searchValue.toLowerCase())
      );
      setIconList(filteredIcons);
    }
  }, [searchValue]);

  const searchWeatherIcons = (iconName: keyof typeof WeatherIcons) => {
    const iconTag = `<${iconName} size={${size}} color="${color}" />`;

    navigator.clipboard.writeText(iconTag);

    Toastify({
      text: "Copied to the clipboard successfully",
      duration: 3000,
      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "rgba(var(--success),1)",
      },
      onClick: function () {},
    }).showToast();
  };

  return (
    <div className="d-flex justify-content-between align-items-center">
      <Container fluid>
        <Breadcrumbs
          mainTitle="Weather"
          title="Icons"
          path={["Weather"]}
          Icon={DiamondsFour}
        />
        <Row>
          <Col xs="12">
            <Card>
              <Card.Header>
                <Row>
                  <Col md="4">
                    <div className="search-bar app-form app-icon-form position-relative">
                      <input
                        type="search"
                        className="form-control"
                        name="search"
                        placeholder="type to search"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                      />
                    </div>
                  </Col>
                  <div className="col-md-8 text-end pt-2" />
                </Row>
              </Card.Header>
              <Card.Body className=" d-flex justify-content-between align-items-center">
                <ul className="icon-list space-top-icon">
                  {(iconList || []).map(
                    (iconName: keyof typeof WeatherIcons, index) => {
                      const IconComponent = WeatherIcons[iconName];
                      return (
                        <li
                          className="icon-box"
                          onClick={() => searchWeatherIcons(iconName)}
                          key={index}
                        >
                          <IconComponent size={size} color={color} />
                          <div className="icon-box-codes">
                            <code>{iconName}</code>
                            <br />
                          </div>
                        </li>
                      );
                    }
                  )}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WeatherIconPage;
