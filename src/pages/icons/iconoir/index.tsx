import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
} from "react-bootstrap";

import * as Iconoir from "iconoir-react";
import { DiamondsFour } from "phosphor-react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const IconoirPage: React.FC = () => {
  const iconList = Object.entries(Iconoir).filter(
    ([name]) =>
      !["context", "provider"].some((word) => name.toLowerCase().includes(word))
  ) as [string, React.FC<React.SVGProps<SVGSVGElement>>][];

  const [filteredIcons, setFilteredIcons] = useState(iconList);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    if (searchValue === "") {
      setFilteredIcons(iconList);
    } else {
      setFilteredIcons(
        iconList.filter(([name]) =>
          name.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    }
  }, [searchValue]);

  const copyToClipboard = (iconName: string) => {
    const iconElement = `<${iconName} />`;
    navigator.clipboard.writeText(iconElement);
    Toastify({
      text: "Copied to clipboard!",
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
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Iconoir"
          title="Icons"
          path={["Iconoir"]}
          Icon={DiamondsFour}
        />
        <Row>
          <Col xs={12}>
            <Card>
              <CardHeader>
                <Row>
                  <Col md={4}>
                    <div className="search-bar app-form app-icon-form position-relative">
                      <input
                        type="search"
                        className="form-control"
                        name="search"
                        placeholder="Type to search"
                        onChange={(e) => setSearchValue(e.target.value)}
                      />
                    </div>
                  </Col>
                  <Col md={8} className="text-end pt-2" />
                </Row>
              </CardHeader>
              <CardBody>
                <ul className="icon-list icons-iconoir space-top-icon">
                  {filteredIcons.map(([name, IconComponent]) => (
                    <li
                      className="icon-box"
                      key={name}
                      onClick={() => copyToClipboard(name)}
                    >
                      <IconComponent width={30} />
                      <strong className="mb-3">{name}</strong>
                    </li>
                  ))}
                </ul>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default IconoirPage;
