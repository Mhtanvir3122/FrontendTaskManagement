import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

import { FlagData } from "@/data/icons/flag/FlagData.ts";
import * as allCountryCodes from "country-flag-icons/react/1x1";
import { DiamondsFour } from "phosphor-react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

type FlagComponents = typeof allCountryCodes;
type CountryCode = keyof FlagComponents;
const flagComponents: Record<CountryCode, React.ComponentType> =
  allCountryCodes;

const FlagIcons: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  // Extract all valid country codes from the package
  console.log(allCountryCodes);
  const countryCodes = Object.keys(flagComponents) as Array<
    keyof typeof flagComponents
  >;

  const copyCode = (countryCode: string) => {
    const flagTag = `<${countryCode} className="w-16 h-12" />`;
    navigator.clipboard.writeText(flagTag);
    Toastify({
      text: "Copied to clipboard successfully!",
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
        mainTitle="Flags"
        title="Icons"
        path={["Flags"]}
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
                      placeholder="Type country code (e.g., us, gb)"
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                    />
                  </div>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body className="d-flex justify-content-between align-items-center">
              <ul className="icon-list space-top-icon">
                {countryCodes
                  .filter((code) => code.length === 2 && code.toLowerCase().includes(searchValue.toLowerCase()))
                  .map((countryCode) => {
                    const FlagComponent = allCountryCodes[countryCode];
                    return (
                      <li
                        key={countryCode}
                        className="icon-box"
                        onClick={() => copyCode(countryCode)}
                      >
                        <FlagComponent height={30} width={40} />
                        <div className="icon-box-codes d-flex flex-column">
                          <strong className="text-uppercase">
                            {countryCode}
                          </strong>
                         {/* <code>{FlagData[countryCode]}</code> */}
                          <br />
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

export default FlagIcons;
