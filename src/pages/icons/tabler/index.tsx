import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

import * as TablerIcons from "@tabler/icons-react";
import { Icon } from "@tabler/icons-react";
import { DiamondsFour } from "phosphor-react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

interface IconProps
  extends Partial<Omit<React.ComponentPropsWithoutRef<"svg">, "stroke">> {
  size?: string | number;
  stroke?: string | number;
  title?: string;
}

const size = 50;
const color = "#000";

type IconComponentType = React.ForwardRefExoticComponent<
  IconProps & React.RefAttributes<Icon>
>;

const isValidIcon = (
  IconComponent: unknown
): IconComponent is IconComponentType => {
  return (
    typeof IconComponent === "object" &&
    IconComponent !== null &&
    "$$typeof" in IconComponent
  );
};

// Convert TablerIcons into a properly typed array
const iconEntries: [string, IconComponentType][] = Object.entries(
  TablerIcons as unknown as Record<string, IconComponentType>
)
  .filter(([, IconComponent]) =>
    isValidIcon(
      IconComponent as React.ForwardRefExoticComponent<
        Omit<IconProps, "ref"> & React.RefAttributes<TablerIcons.Icon>
      >
    )
  )
  .map(([iconName, IconComponent]) => [
    iconName,
    IconComponent as IconComponentType,
  ]);

const TablerIconsComponent: React.FC = () => {
  const [iconList, setIconList] = useState(iconEntries);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (searchValue.trim() === "") {
      setIconList(iconEntries);
    } else {
      const filteredIcons = iconEntries.filter(([iconName]) =>
        iconName.toLowerCase().includes(searchValue.toLowerCase())
      );
      setIconList(filteredIcons);
    }
  }, [searchValue]);

  const copyIcon = (iconName: string) => {
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
    }).showToast();
  };

  return (
    <Container fluid>
      <Breadcrumbs
        mainTitle="Tabler"
        title="Icons"
        path={["Tabler"]}
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
                      onChange={(e) => setSearchValue(e.target.value)}
                    />
                  </div>
                </Col>
                <div className="col-md-8 text-end pt-2" />
              </Row>
            </Card.Header>
            <Card.Body>
              <ul className="icon-list space-top-icon">
                {iconList.map(([iconName, IconComponent], index) => {
                  return (
                    <li
                      className="icon-box"
                      onClick={() => copyIcon(iconName)}
                      key={index}
                    >
                      {IconComponent && (
                        <IconComponent size={size} stroke={2} />
                      )}
                      <div className="icon-box-codes d-flex flex-column">
                        <strong className="text-capitalize">{iconName}</strong>
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

export default TablerIconsComponent;
