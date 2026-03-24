import React from "react";
import ApexCharts from "react-apexcharts";
import { Card, Col, Container, Row } from "react-bootstrap";

import {
  basicAreaChart,
  irregularSeries,
  splineAreaChart,
  stackedAreaChart,
} from "@/data/charts/apexcharts/AreaChart.ts";
import { ChartPieSlice } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const Areachart: React.FC = () => {
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Area"
          title="Chart"
          path={["Apexcharts", "Area"]}
          Icon={ChartPieSlice}
        />
        <Row>
          <Col md="6">
            <Card>
              <Card.Header>
                <h5>Basic Area Chart</h5>
              </Card.Header>
              <Card.Body>
                <ApexCharts
                  series={basicAreaChart.series}
                  options={basicAreaChart.options}
                  type="area"
                  height={350}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <Card.Header>
                <h5>Spline Area</h5>
              </Card.Header>
              <Card.Body>
                <ApexCharts
                  series={splineAreaChart.series}
                  options={splineAreaChart.options}
                  type="area"
                  height={350}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <Card.Header>
                <h5>Irregular Timeseries</h5>
              </Card.Header>
              <Card.Body>
                <ApexCharts
                  series={irregularSeries.series}
                  options={irregularSeries.options}
                  type="area"
                  height={350}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <Card.Header>
                <h5>Irregular Timeseries</h5>
              </Card.Header>
              <Card.Body>
                <ApexCharts
                  series={stackedAreaChart.series}
                  options={stackedAreaChart.options}
                  type="area"
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

export default Areachart;
