import React from "react";
import ApexCharts from "react-apexcharts";
import { Card, Col, Container, Row } from "react-bootstrap";

import {
  basicRadialBarChartData,
  circleAngleRadialChartData,
  circleChartWithImageData,
  customSizedRadialBars,
  multipleRadialBarsChartData,
  semiCircularGaugeChartData,
  strokedCircularGaugeChartData,
} from "@/data/charts/apexcharts/RadialBarChart.ts";
import { ChartPieSlice } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const RadialbarChartPage: React.FC = () => {
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Radialbar"
          title="Chart"
          path={["Apexcharts", "Radialbar"]}
          Icon={ChartPieSlice}
        />
        <Row>
          <Col lg="6" xxl="4">
            <Card>
              <Card.Header>
                <h5>Basic RadialBar Chart</h5>
              </Card.Header>
              <Card.Body>
                <ApexCharts
                  series={basicRadialBarChartData.series}
                  type="radialBar"
                  height={350}
                  options={basicRadialBarChartData.options}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col lg="6" xxl="4">
            <Card>
              <Card.Header>
                <h5>Multiple RadialBars</h5>
              </Card.Header>
              <Card.Body>
                <ApexCharts
                  series={multipleRadialBarsChartData.series}
                  type="radialBar"
                  height={350}
                  options={multipleRadialBarsChartData.options}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col lg="6" xxl="4">
            <Card>
              <Card.Header>
                <h5>Circle Chart – Custom Angle</h5>
              </Card.Header>
              <Card.Body>
                <ApexCharts
                  series={circleAngleRadialChartData.series}
                  type="radialBar"
                  height={350}
                  options={circleAngleRadialChartData.options}
                />
              </Card.Body>
            </Card>
          </Col>

          <Col lg="6" xxl="4">
            <Card className="equal-card">
              <Card.Header>
                <h5>Stroked Circular Gauge</h5>
              </Card.Header>
              <Card.Body>
                <ApexCharts
                  series={strokedCircularGaugeChartData.series}
                  type="radialBar"
                  height={350}
                  options={strokedCircularGaugeChartData.options}
                />
              </Card.Body>
            </Card>
          </Col>

          <Col lg="6" xxl="4">
            <Card className="equal-card">
              <Card.Header>
                <h5>Semi Circular Gauge</h5>
              </Card.Header>
              <Card.Body>
                <ApexCharts
                  series={semiCircularGaugeChartData.series}
                  type="radialBar"
                  height={410}
                  options={semiCircularGaugeChartData.options}
                />
              </Card.Body>
            </Card>
          </Col>

          <Col lg="6" xxl="4">
            <Card className="equal-card">
              <Card.Header>
                <h5>Circle Chart with Image</h5>
              </Card.Header>
              <Card.Body>
                <ApexCharts
                  series={circleChartWithImageData.series}
                  type="radialBar"
                  height={350}
                  options={circleChartWithImageData.options}
                />
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12}>
            <Card>
              <Card.Header>
                <h5>Custom size and custom thickness</h5>
                <p>You can use customize size by adding</p>
              </Card.Header>
              <Card.Body>
                <div className="d-flex flex-wrap custom-radial justify-content-center">
                  {customSizedRadialBars.map((item, idx) => (
                    <div
                      className="d-flex align-items-center flex-column"
                      key={item.label + idx}
                    >
                      <div className="mt-auto">
                        <ApexCharts
                          series={item.series}
                          type="radialBar"
                          height={item.height}
                          width={item.width}
                          options={item.options}
                        />
                      </div>
                      <div className="mt-auto">
                        <p className={`f-s-18 f-w-600 ${item.textClass}`}>
                          {item.label}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RadialbarChartPage;
