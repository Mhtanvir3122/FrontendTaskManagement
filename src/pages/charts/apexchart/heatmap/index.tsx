import React from "react";
import ApexCharts from "react-apexcharts";
import { Card, Col, Container, Row } from "react-bootstrap";

import {
  heatMapColorRangeData,
  heatMapMultipleSeriesData,
  heatMapRangeShadesData,
  heatMapSingleSeriesData,
} from "@/data/charts/apexcharts/HeatMapChart.ts";
import { ChartPieSlice } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const HeatmapChartPage: React.FC = () => {
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Heatmap"
          title="Chart"
          path={["Apexcharts", "Heatmap"]}
          Icon={ChartPieSlice}
        />
        <Row>
          <Col xl="6">
            <Card className="equal-card">
              <Card.Header>
                <h5> Basic Heatmap – Single Series </h5>
              </Card.Header>
              <Card.Body>
                <ApexCharts
                  series={heatMapSingleSeriesData.series}
                  options={heatMapSingleSeriesData.options}
                  type="heatmap"
                  height={350}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col xl="6">
            <Card>
              <Card.Header>
                <h5> Heatmap – Multiple Series </h5>
              </Card.Header>
              <Card.Body>
                <ApexCharts
                  type="heatmap"
                  height={450}
                  series={heatMapMultipleSeriesData.series}
                  options={heatMapMultipleSeriesData.options}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col xl="6">
            <Card>
              <Card.Header>
                <h5> Heatmap – Color Range</h5>
              </Card.Header>
              <Card.Body>
                <ApexCharts
                  type="heatmap"
                  height={350}
                  series={heatMapColorRangeData.series}
                  options={heatMapColorRangeData.options}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col xl="6">
            <Card>
              <Card.Header>
                <h5> Heatmap – Range without Shades</h5>
              </Card.Header>
              <Card.Body>
                <ApexCharts
                  type="heatmap"
                  height={350}
                  series={heatMapRangeShadesData.series}
                  options={heatMapRangeShadesData.options}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeatmapChartPage;
