import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

import { Icon } from "@iconify/react";
import { DiamondsFour } from "phosphor-react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const fetchLineMDIcons = async (): Promise<string[][]> => {
  try {
    const response = await fetch(
      "https://api.iconify.design/collection?prefix=line-md&chars=true&aliases=true"
    );
    const data = await response.json();
    const categories = Object.keys(data.categories);
    return categories.map((icon) =>
      data.categories[icon].map((item: string[]) => item)
    ) as string[][];
  } catch (error) {
    console.error("Error fetching LineMD icons:", error);
    return [];
  }
};

const AnimatedPage: React.FC = () => {
  const [iconList, setIconList] = useState<string[][]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  // Fetch icons on mount
  useEffect(() => {
    const fetchIcons = async () => {
      const icons: string[][] = await fetchLineMDIcons();
      setIconList(icons);
    };

    fetchIcons();
  }, []);

  useEffect(() => {
    if (searchValue === "") {
      setIconList(iconList);
    } else {
      setIconList(
        iconList.map((iconData) =>
          iconData.filter((icon) => {
            console.log(icon);
            return icon.toLowerCase().includes(searchValue.toLowerCase());
          })
        )
      );
    }
  }, [searchValue]);

  const copyIconToClipboard = (iconName: string) => {
    navigator.clipboard.writeText(
      `<iconify-icon icon="${iconName}"></iconify-icon>`
    );

    Toastify({
      text: "Copied to clipboard successfully",
      duration: 3000,
      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: { background: "rgba(var(--success),1)" },
    }).showToast();
  };

  return (
    <Container fluid>
      <Breadcrumbs
        mainTitle="Animated"
        title="Icons"
        path={["Animated"]}
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
                      onChange={(e) => setSearchValue(e.target.value)}
                    />
                  </div>
                </Col>
                <Col md="8" className="text-end pt-2" />
              </Row>
            </Card.Header>
            <Card.Body>
              <ul className="icon-list">
                {iconList.map((iconData, dataIndex) =>
                  iconData.map((icon, iconIndex) => {
                    const iconKey = `${dataIndex}-${iconIndex}`;
                    return (
                      <li
                        className={"icon-box"}
                        onClick={() => copyIconToClipboard(icon)}
                        key={iconKey}
                        data-icon={icon}
                      >
                        <i>
                          <Icon
                            icon={`line-md:${icon}`}
                            width={30}
                            height={30}
                          />
                        </i>
                        <strong className="mb-3">{icon}</strong>
                      </li>
                    );
                  })
                )}
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AnimatedPage;
