import React from "react";
import ApexCharts from "react-apexcharts";
import { Card, Col, Container, Row } from "react-bootstrap";

import {
  basicColumnChartConfig,
  columnChartWithFruitsConfig,
  columnChartWithMarkersConfig,
  dumbbellChartConfig,
} from "@/data/charts/apexcharts/ColumnChart.ts";
import { ChartPieSlice } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const ColumnPage: React.FC = () => {
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="column"
          title="Chart"
          path={["Apexcharts", "column"]}
          Icon={ChartPieSlice}
        />
        <Row>
          <Col lg="6">
            <Card>
              <Card.Header>
                <h5> Basic Column Chart</h5>
              </Card.Header>
              <Card.Body>
                <ApexCharts
                  series={basicColumnChartConfig.series}
                  options={basicColumnChartConfig.options}
                  type="bar"
                  height={350}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col lg="6">
            <Card>
              <Card.Header>
                <h5> Dumbbell Chart</h5>
              </Card.Header>
              <Card.Body>
                <ApexCharts
                  type="bar"
                  height={350}
                  series={dumbbellChartConfig.series}
                  options={dumbbellChartConfig.options}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col lg="6">
            <Card>
              <Card.Header>
                <h5> Column Chart</h5>
              </Card.Header>
              <Card.Body>
                <ApexCharts
                  type="bar" // ✅ Correct chart type
                  height={350}
                  series={columnChartWithFruitsConfig.series}
                  options={columnChartWithFruitsConfig.options}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col lg="6">
            <Card>
              <Card.Header>
                <h5> Column with Markers</h5>
              </Card.Header>
              <Card.Body>
                <ApexCharts
                  type="bar"
                  height={350}
                  series={columnChartWithMarkersConfig.series}
                  options={columnChartWithMarkersConfig.options}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ColumnPage;
