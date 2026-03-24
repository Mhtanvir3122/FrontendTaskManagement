import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import * as BrandIcons from "@fortawesome/free-brands-svg-icons";
import * as RegularIcons from "@fortawesome/free-regular-svg-icons";
import * as SolidIcons from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DiamondsFour } from "phosphor-react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const filterValidIcons = (icons: Record<string, unknown>): string[] =>
  Object.keys(icons).filter(
    (key) =>
      (icons[key] as IconDefinition)?.prefix &&
      (icons[key] as IconDefinition)?.iconName
  );

const solidIcons = filterValidIcons(SolidIcons);
const regularIcons = filterValidIcons(RegularIcons);
const brandIcons = filterValidIcons(BrandIcons);

const icons = [...solidIcons, ...regularIcons, ...brandIcons];
const size: number = 50;
const color: string = "#15264b";

const Fontawesome: React.FC = () => {
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

  const copyIcon = (iconName: string) => {
    // const iconTag = `<FontAwesomeIcon icon={${iconName}} size="${size}" color="${color}" />`;
    navigator.clipboard.writeText(iconName);
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
    }).showToast();
  };

  return (
    <Container fluid>
      <Breadcrumbs
        mainTitle="Fontawesome"
        title="Icons"
        path={["Fontawesome"]}
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
                      placeholder="Type to search"
                      value={searchValue}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setSearchValue(e.target.value)
                      }
                    />
                  </div>
                </Col>
                <div className="col-md-8 text-end pt-2" />
              </Row>
            </Card.Header>
            <Card.Body className="d-flex justify-content-between align-items-center">
              <ul className="icon-list space-top-icon">
                {(iconList || []).map((iconName, index) => {
                  const IconComponent =
                    SolidIcons[iconName as keyof typeof SolidIcons] ||
                    RegularIcons[iconName as keyof typeof RegularIcons] ||
                    BrandIcons[iconName as keyof typeof BrandIcons];

                  if (!IconComponent || typeof IconComponent !== "object")
                    return null;

                  const iconDef = IconComponent as IconDefinition;

                  return (
                    <li
                      className="icon-box"
                      onClick={() => copyIcon(iconName)}
                      key={index}
                    >
                      <FontAwesomeIcon
                        size="2xl"
                        className="fontawesome-icons"
                        icon={iconDef}
                      />
                      <div className="icon-box-codes d-flex flex-column">
                        <strong className="text-capitalize">
                          {iconDef.iconName || ""}
                        </strong>
                        <code>{iconName}</code>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Fontawesome;
