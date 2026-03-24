import React from "react";
import ApexCharts from "react-apexcharts";
import { Card, Col, Container, Row } from "react-bootstrap";

import {
  basicBoxWhiskerChartData,
  boxPlotWithScatterData,
} from "@/data/charts/apexcharts/BoxplotChart.ts";
import { ChartPieSlice } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const BoxplotPage: React.FC = () => {
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Boxplot"
          title="Chart"
          path={["Apexcharts", "Boxplot"]}
          Icon={ChartPieSlice}
        />
        <Row>
          <Col xs="12">
            <Card>
              <Card.Header>
                <h5>Basic Box & Whisker Chart</h5>
              </Card.Header>
              <Card.Body>
                <ApexCharts
                  series={basicBoxWhiskerChartData.series}
                  options={basicBoxWhiskerChartData.options}
                  type="boxPlot"
                  height={350}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col xs="12">
            <Card>
              <Card.Header>
                <h5>BoxPlot with Scatter Chart</h5>
              </Card.Header>
              <Card.Body>
                <ApexCharts
                  series={boxPlotWithScatterData.series}
                  options={boxPlotWithScatterData.options}
                  type="boxPlot"
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

export default BoxplotPage;
