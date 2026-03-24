import React from "react";
import ApexCharts from "react-apexcharts";
import { Card, Col, Container, Row } from "react-bootstrap";

import {
  simpleBubbleChartData,
  threeDBubbleChartData,
} from "@/data/charts/apexcharts/BubbleChart.ts";
import { ChartPieSlice } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const BubblePage: React.FC = () => {
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Bubble"
          title="Chart"
          path={["Apexcharts", "Bubble"]}
          Icon={ChartPieSlice}
        />
        <Row>
          <Col xs="12">
            <Card>
              <Card.Header>
                <h5>Simple Bubble Chart</h5>
              </Card.Header>
              <Card.Body>
                <ApexCharts
                  series={simpleBubbleChartData.series}
                  options={simpleBubbleChartData.options}
                  type="bubble"
                  height={350}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col xs="12">
            <Card>
              <Card.Header>
                <h5>3D Bubble Chart</h5>
              </Card.Header>
              <Card.Body>
                <ApexCharts
                  series={threeDBubbleChartData.series}
                  options={threeDBubbleChartData.options}
                  type="bubble"
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

export default BubblePage;
