import React from "react";
import ApexCharts from "react-apexcharts";
import { Card, Col, Container, Row } from "react-bootstrap";

import {
  basicRadarChartData,
  multiSeriesRadarChartData,
  polygonRadarChartData,
} from "@/data/charts/apexcharts/RadarChart.ts";
import { ChartPieSlice } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const RadarChartPage: React.FC = () => {
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Radar"
          title="Chart"
          path={["Apexcharts", "Radar"]}
          Icon={ChartPieSlice}
        />
        <Row>
          <Col sm="12" md="6" xl="6">
            <Card>
              <Card.Header>
                <h5>Basic Radar Chart</h5>
              </Card.Header>
              <Card.Body>
                <ApexCharts
                  series={basicRadarChartData.series}
                  type="radar"
                  height={350}
                  options={basicRadarChartData.options}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col sm="12" md="6" xl="6">
            <Card>
              <Card.Header>
                <h5>Radar Chart – Multiple Series</h5>
              </Card.Header>
              <Card.Body>
                <ApexCharts
                  series={multiSeriesRadarChartData.series}
                  type="radar"
                  height={350}
                  options={multiSeriesRadarChartData.options}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col sm="12" md="6" xl="6">
            <Card>
              <Card.Header>
                <h5>Radar Chart – Polygon Fill</h5>
              </Card.Header>
              <Card.Body>
                <ApexCharts
                  series={polygonRadarChartData.series}
                  type="radar"
                  height={350}
                  options={polygonRadarChartData.options}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RadarChartPage;
