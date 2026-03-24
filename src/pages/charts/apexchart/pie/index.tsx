import React from "react";
import ApexCharts from "react-apexcharts";
import { Card, Col, Container, Row } from "react-bootstrap";

import {
  gradientDonutChartData,
  imageFillPieChartData,
  patternedDonutChartData,
  simpleDonutChartData,
  simplePieChartData,
} from "@/data/charts/apexcharts/PieChart.ts";
import { ChartPieSlice } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const PieChartPage: React.FC = () => {
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="pie"
          title="Chart"
          path={["Apexcharts", "pie"]}
          Icon={ChartPieSlice}
        />
        <Row>
          <Col lg="6" xl="4">
            <Card>
              <Card.Header>
                <h5>Simple Pie Chart</h5>
              </Card.Header>
              <Card.Body>
                <ApexCharts
                  series={simplePieChartData.series}
                  type="pie"
                  height={340}
                  options={simplePieChartData.options}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col lg="6" xl="4">
            <Card>
              <Card.Header>
                <h5>Simple Donut Chart</h5>
              </Card.Header>
              <Card.Body>
                <ApexCharts
                  series={simpleDonutChartData.series}
                  type="donut"
                  height={340}
                  options={simpleDonutChartData.options}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col lg="6" xl="4">
            <Card>
              <Card.Header>
                <h5>Gradient Donut Chart</h5>
              </Card.Header>
              <Card.Body>
                <ApexCharts
                  series={gradientDonutChartData.series}
                  type="donut"
                  height={340}
                  options={gradientDonutChartData.options}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col lg="6" xl="4">
            <Card>
              <Card.Header>
                <h5>Patterned Donut Chart</h5>
              </Card.Header>
              <Card.Body>
                <ApexCharts
                  series={patternedDonutChartData.series}
                  type="donut"
                  height={380}
                  options={patternedDonutChartData.options}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col lg="6" xl="4">
            <Card className="equal-card">
              <Card.Header>
                <h5>Pie Chart with Image fill</h5>
              </Card.Header>
              <Card.Body>
                <ApexCharts
                  series={imageFillPieChartData.series}
                  type="pie"
                  height={380}
                  options={imageFillPieChartData.options}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PieChartPage;
