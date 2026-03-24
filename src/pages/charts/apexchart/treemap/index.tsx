import React from "react";
import ApexCharts from "react-apexcharts";
import { Card, Col, Container, Row } from "react-bootstrap";

import {
  basicTreemapData,
  colorRangeTreemapChartData,
  distributedTreemapChartData,
  multiDimensionalTreemapData,
} from "@/data/charts/apexcharts/TreeMapChart.ts";
import { ChartPieSlice } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const TreemapChartPage: React.FC = () => {
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Treemap"
          title="Chart"
          path={["Apexcharts", "Treemap"]}
          Icon={ChartPieSlice}
        />
        <Row>
          <Col sm="12">
            <Card>
              <Card.Header>
                <h5> Basic Treemap Chart</h5>
              </Card.Header>
              <Card.Body>
                <ApexCharts
                  series={basicTreemapData.series}
                  options={basicTreemapData.options}
                  type="treemap"
                  height={350}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <Card.Header>
                <h5> Multi-Dimensional Treemap Chart</h5>
              </Card.Header>
              <Card.Body>
                <ApexCharts
                  series={multiDimensionalTreemapData.series}
                  type="treemap"
                  height={350}
                  options={multiDimensionalTreemapData.options}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <Card.Header>
                <h5> Distributed Treemap Chart (set color for each cell)</h5>
              </Card.Header>
              <Card.Body>
                <ApexCharts
                  series={distributedTreemapChartData.series}
                  type="treemap"
                  height={350}
                  options={distributedTreemapChartData.options}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col sm="12">
            <Card>
              <Card.Header>
                <h5> Treemap Chart with Color ranges</h5>
              </Card.Header>
              <Card.Body>
                <ApexCharts
                  series={colorRangeTreemapChartData.series}
                  type="treemap"
                  height={350}
                  options={colorRangeTreemapChartData.options}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TreemapChartPage;
