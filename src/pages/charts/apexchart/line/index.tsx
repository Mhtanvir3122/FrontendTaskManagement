import React from "react";
import ApexCharts from "react-apexcharts";
import { Card, Col, Container, Row } from "react-bootstrap";

import {
  basicLineChartConfig,
  dashedLineChartConfig,
  gradientLineChartConfig,
  steplineChartConfig,
} from "@/data/charts/apexcharts/LineChart.ts";
import { ChartPieSlice } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const LinePage: React.FC = () => {
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Line"
          title="Chart"
          path={["Apexcharts", "Line"]}
          Icon={ChartPieSlice}
        />
        <Row>
          <Col md="6">
            <Card>
              <Card.Header>
                <h5>Basic Line Chart</h5>
              </Card.Header>
              <Card.Body>
                <ApexCharts
                  type="line"
                  height={440}
                  series={basicLineChartConfig.series}
                  options={basicLineChartConfig.options}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <Card.Header>
                <h5>Gradient line chart</h5>
              </Card.Header>
              <Card.Body>
                <ApexCharts
                  type="line"
                  height={440}
                  series={gradientLineChartConfig.series}
                  options={gradientLineChartConfig.options}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <Card.Header>
                <h5>Dashed Line Chart</h5>
              </Card.Header>
              <Card.Body>
                <ApexCharts
                  type="line"
                  height={440}
                  series={dashedLineChartConfig.series}
                  options={dashedLineChartConfig.options}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <Card.Header>
                <h5>Stepline Chart</h5>
              </Card.Header>
              <Card.Body>
                <ApexCharts
                  type="line"
                  height={440}
                  series={steplineChartConfig.series}
                  options={steplineChartConfig.options}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LinePage;
