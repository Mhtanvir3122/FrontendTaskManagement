import React, { useEffect, useState } from "react";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.min.css";

import { Cardholder } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const TypeaheadPage: React.FC = () => {
  const [countriesData, setCountriesData] = useState<string[]>([]);
  const [remoteData, setRemoteData] = useState<string[]>([]);

  const states: string[] = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const countries = (await import("../../../constant/countries.json"))
          .default;
        const remote = (await import("@/constant/post_1960.json")).default;
        const remoteData = remote.map((data) => data.value);

        setCountriesData(countries);
        setRemoteData(remoteData);
      } catch (error) {
        console.error("Error loading JSON files:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Typeahead"
          title="Forms Elements"
          path={["Typeahead"]}
          Icon={Cardholder}
        />
        <Row className="app-typeahead typeahead-demo">
          {/* The Basics */}
          <Col md="6">
            <Card>
              <Card.Header>
                <h5>The Basics</h5>
              </Card.Header>
              <Card.Body>
                <Form className="app-form">
                  <div id="basictype">
                    <Typeahead
                      id="basic-typeahead-single"
                      labelKey="name"
                      className="typeahead"
                      options={states}
                      placeholder="States"
                    />
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Bloodhound */}
          <Col md="6">
            <Card>
              <Card.Header>
                <h5>Bloodhound</h5>
              </Card.Header>
              <Card.Body>
                <Form className="app-form">
                  <div id="bloodhoundtype">
                    <Typeahead
                      id="basic-typeahead-single"
                      labelKey="name"
                      className="typeahead"
                      options={states}
                      placeholder="States of USA"
                    />
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Prefetch */}
          <Col md="6">
            <Card>
              <Card.Header>
                <h5>Prefetch</h5>
              </Card.Header>
              <Card.Body>
                <Form className="app-form">
                  <div id="prefetchtype">
                    <Typeahead
                      id="basic-typeahead-single"
                      labelKey="name"
                      className="typeahead"
                      options={countriesData}
                      placeholder="Countries"
                    />
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Remote Typeahead */}
          <Col md="6">
            <Card>
              <Card.Header>
                <h5>Remote Typeahead</h5>
              </Card.Header>
              <Card.Body>
                <Form className="app-form">
                  <div id="remotetype">
                    <Typeahead
                      id="basic-typeahead-single"
                      labelKey="name"
                      className="typeahead"
                      options={remoteData}
                      placeholder="Oscar winners for Best Picture"
                    />
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Custom Templates */}
          <Col md="6">
            <Card>
              <Card.Header>
                <h5>Custom Templates</h5>
              </Card.Header>
              <Card.Body>
                <Form className="app-form">
                  <div id="customtype-templates">
                    <Typeahead
                      id="basic-typeahead-single"
                      labelKey="name"
                      className="typeahead"
                      options={remoteData}
                      placeholder="Oscar winners for Best Picture"
                      emptyLabel={
                        <div className="empty-message">
                          <i className="ti ti-mood-sad me-2"></i> sorry! Data is
                          not available
                        </div>
                      }
                    />
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          <Col md="6">
            <Card>
              <Card.Header>
                <h5>Scrollable Dropdown Menu</h5>
              </Card.Header>
              <Card.Body>
                <Form className="app-form">
                  <div className="scrollable-dropdown">
                    <Typeahead
                      id="basic-typeahead-single"
                      labelKey="name"
                      className="typeahead"
                      options={countriesData}
                      placeholder="Countries"
                    />
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TypeaheadPage;
