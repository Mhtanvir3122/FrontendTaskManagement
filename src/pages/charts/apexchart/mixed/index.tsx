import React from "react";
import ApexCharts from "react-apexcharts";
import { Card, Col, Container, Row } from "react-bootstrap";

import {
  lineAreaChartData,
  lineColumnAreaChartData,
  lineColumnComboChartData,
  multipleYAxisChartData,
} from "@/data/charts/apexcharts/MixedChart.ts";
import { ChartPieSlice } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const MixedPage: React.FC = () => {
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Mixed"
          title="Chart"
          path={["Apexcharts", "Mixed"]}
          Icon={ChartPieSlice}
        />
        <Row>
          <Col lg="6">
            <Card>
              <Card.Header>
                <h5> Line & Column Chart</h5>
              </Card.Header>
              <Card.Body>
                <ApexCharts
                  series={lineColumnComboChartData.series}
                  type="line"
                  height={350}
                  options={lineColumnComboChartData.options}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col lg="6">
            <Card>
              <Card.Header>
                <h5> Multiple Y-Axis Chart</h5>
              </Card.Header>
              <Card.Body>
                <ApexCharts
                  series={multipleYAxisChartData.series}
                  options={multipleYAxisChartData.options}
                  type="line"
                  height={350}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col lg="6">
            <Card>
              <Card.Header>
                <h5> Line & Area Chart</h5>
              </Card.Header>
              <Card.Body>
                <ApexCharts
                  series={lineAreaChartData.series}
                  options={lineAreaChartData.options}
                  type="line"
                  height={350}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col lg="6">
            <Card>
              <Card.Header>
                <h5> Line, Column & Area Chart</h5>
              </Card.Header>
              <Card.Body>
                <ApexCharts
                  type="line"
                  height={350}
                  series={lineColumnAreaChartData.series}
                  options={lineColumnAreaChartData.options}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MixedPage;
