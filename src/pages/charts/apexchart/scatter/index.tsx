import React from "react";
import ApexCharts from "react-apexcharts";
import { Card, Col, Container, Row } from "react-bootstrap";

import {
  scatterChartData,
  scatterImageFillChartData,
} from "@/data/charts/apexcharts/ScatterChart.ts";
import { ChartPieSlice } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const ScatterChartPage: React.FC = () => {
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Scatter"
          title="Chart"
          path={["Apexcharts", "Scatter"]}
          Icon={ChartPieSlice}
        />
        <Row>
          <Col xs="12">
            <Card>
              <Card.Header>
                <h5>Scatter (XY) Chart</h5>
              </Card.Header>
              <Card.Body>
                <ApexCharts
                  series={scatterChartData.series}
                  options={scatterChartData.options}
                  type="scatter"
                  height={350}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col xs="12">
            <Card>
              <Card.Header>
                <h5>Scatter – Image fill</h5>
              </Card.Header>
              <Card.Body>
                <ApexCharts
                  series={scatterImageFillChartData.series}
                  options={scatterImageFillChartData.options}
                  type="scatter"
                  height={350}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ScatterChartPage;
