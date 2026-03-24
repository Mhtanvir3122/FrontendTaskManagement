import React from "react";
import ApexCharts from "react-apexcharts";
import { Card, Col, Container, Row } from "react-bootstrap";

import {
  basicBarChartData,
  groupedStackedBarsData,
  patternedBarChartData,
  stackedBarChartData,
} from "@/data/charts/apexcharts/BarChart.ts";
import { ChartPieSlice } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const BarChartPage: React.FC = () => {
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Bar"
          title="Chart"
          path={["Apexcharts", "Bar"]}
          Icon={ChartPieSlice}
        />
        <Row>
          <Col lg="6">
            <Card>
              <Card.Header>
                <h5> Basic Bar Chart</h5>
              </Card.Header>
              <Card.Body>
                <ApexCharts
                  type="bar"
                  height={350}
                  series={basicBarChartData.series}
                  options={basicBarChartData.options}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col lg="6">
            <div className="card equal-card">
              <Card.Header>
                <h5> Patterned Bar Chart</h5>
              </Card.Header>
              <Card.Body>
                <ApexCharts
                  series={patternedBarChartData.series}
                  type="bar"
                  height={350}
                  options={patternedBarChartData.options}
                />
              </Card.Body>
            </div>
          </Col>
          <Col lg="6">
            <Card>
              <Card.Header>
                <h5> Stacked Bar Chart</h5>
              </Card.Header>
              <Card.Body>
                <ApexCharts
                  series={stackedBarChartData.series}
                  type="bar"
                  height={350}
                  options={stackedBarChartData.options}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col lg="6">
            <Card>
              <Card.Header>
                <h5> Grouped Stacked Bars</h5>
              </Card.Header>
              <Card.Body>
                <ApexCharts
                  series={groupedStackedBarsData.series}
                  type="bar"
                  height={350}
                  options={groupedStackedBarsData.options}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BarChartPage;
