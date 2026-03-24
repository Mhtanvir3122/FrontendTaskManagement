import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { Cardholder } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb";
import TouchSpinCard from "@/components/forms-elements/touch-spin/TouchSpinCard.tsx";

const Index: React.FC = () => {
  const [countsA, setCountsA] = useState([25, 25, 25]);
  const colorsA = ["light-primary", "light-secondary", "light-success"];
  const updateCountA = (i: number, d: number) =>
    setCountsA((prev) => {
      const updated = [...prev];
      updated[i] += d;
      return updated;
    });

  const [countsB, setCountsB] = useState([25, 25, 25]);
  const updateCountB = (i: number, d: number) =>
    setCountsB((prev) => {
      const updated = [...prev];
      updated[i] += d;
      return updated;
    });

  const [countsC, setCountsC] = useState([25, 25, 25]);
  const colorsC = ["primary", "secondary", "success"];
  const updateCountC = (i: number, d: number) =>
    setCountsC((prev) => {
      const updated = [...prev];
      updated[i] += d;
      return updated;
    });

  const [countsD, setCountsD] = useState([25, 25, 25]);
  const colorsD = ["primary", "secondary", "success"];
  const updateCountD = (i: number, d: number) =>
    setCountsD((prev) => {
      const updated = [...prev];
      updated[i] += d;
      return updated;
    });
  const [countsG, setCountsG] = useState([25, 25, 25]);
  const updateCountG = (i: number, d: number) =>
    setCountsG((prev) => {
      const updated = [...prev];
      updated[i] += d;
      return updated;
    });

  const [countsE, setCountsE] = useState([25, 25, 25]);
  const updateCountE = (i: number, d: number) =>
    setCountsE((prev) => {
      const updated = [...prev];
      updated[i] += d;
      return updated;
    });

  const [countF, setCountF] = useState([25]);
  const updateCountF = (i: number, d: number) =>
    setCountF((prev) => {
      const updated = [...prev];
      updated[i] += d;
      return updated;
    });

  const [countH, setCountH] = useState([25]);
  const updateCountH = (i: number, d: number) =>
    setCountH((prev) => {
      const updated = [...prev];
      updated[i] += d;
      return updated;
    });
  const [countDrop, setCountDrop] = useState([25]);
  const updateCountDrop = (i: number, d: number) =>
    setCountDrop((prev) => {
      const updated = [...prev];
      updated[i] += d;
      return updated;
    });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const [count3, setCount3] = useState([25]);
  const updateCount3 = (i: number, d: number) =>
    setCount3((prev) => {
      const updated = [...prev];
      updated[i] += d;
      return updated;
    });
  return (
    <Container fluid>
      <Breadcrumbs
        mainTitle="Touch spin"
        title="Forms elements"
        path={["Touch spin"]}
        Icon={Cardholder}
      />
      <Row>
        <Col xl={3}>
          <TouchSpinCard
            title="Basic Touchspin"
            counts={countsA}
            colors={colorsA}
            updateCount={updateCountA}
            variant="button"
          />
        </Col>
        <Col xl={3}>
          <TouchSpinCard
            title="Basic Touchspin - Card B"
            counts={countsB}
            colors={colorsA}
            updateCount={updateCountB}
            variant="anchor"
          />
        </Col>
        <Col xl={3}>
          <TouchSpinCard
            title="Basic Touchspin - Card C"
            counts={countsC}
            colors={colorsC}
            updateCount={updateCountC}
            variant="custom"
          />
        </Col>
        <Col xl={3}>
          <TouchSpinCard
            title="Basic Touchspin - Card D"
            counts={countsD}
            colors={colorsD}
            updateCount={updateCountD}
            variant="custom"
          />
        </Col>
        <Col xxl={6} xl={6} lg={12}>
          <TouchSpinCard
            title="Custom Round Touchspin"
            counts={countsG}
            colors={["primary", "secondary", "success"]}
            updateCount={updateCountG}
            variant="round"
          />
        </Col>
        <Col xxl={6} xl={6} lg={12}>
          <TouchSpinCard
            title="Custom Round Touchspin E"
            counts={countsE}
            colors={["primary", "secondary", "success"]}
            updateCount={updateCountE}
            variant="round-alt"
          />
        </Col>
        <Col lg={6}>
          <TouchSpinCard
            title="Default Touchspin"
            counts={countF}
            colors={["primary"]}
            updateCount={updateCountF}
            variant="default"
          />
        </Col>
        <Col lg={6}>
          <TouchSpinCard
            title="Horizontal Touchspin"
            counts={countH}
            colors={["primary"]}
            updateCount={updateCountH}
            variant="horizontal"
          />
        </Col>
        <Col lg={6}>
          <TouchSpinCard
            title="Touchspin With Dropdown"
            counts={countDrop}
            colors={["primary"]}
            updateCount={updateCountDrop}
            variant="with-dropdown"
            withDropdown
            dropdownOpen={dropdownOpen}
            toggleDropdown={toggleDropdown}
          />
        </Col>
        <Col lg={6}>
          <TouchSpinCard
            title="Touchspin With Postfix & Prefix"
            counts={count3}
            colors={["primary"]}
            updateCount={updateCount3}
            variant="prefix-postfix"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Index;
