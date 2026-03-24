import React from "react";
import ApexCharts from "react-apexcharts";
import { Card, Col, Container, Row } from "react-bootstrap";

import {
  advanceGroupedRowsChartData,
  advanceTimelineChartData,
  timelineChartData,
} from "@/data/charts/apexcharts/TimelineChart.ts";
import { ChartPieSlice } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const TimelineChartpage: React.FC = () => {
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Timeline & Range Charts"
          title="Chart"
          path={["Apexcharts", "Timeline & Range Charts"]}
          Icon={ChartPieSlice}
        />
        <Row>
          <Col xs="12">
            <Card>
              <Card.Header>
                <h5> Basic Timeline Chart</h5>
              </Card.Header>
              <Card.Body>
                <ApexCharts
                  series={timelineChartData.series}
                  type="rangeBar"
                  height={350}
                  options={timelineChartData.options}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col xs="12">
            <Card>
              <Card.Header>
                <h5>Advanced Timeline (Multiple range)</h5>
              </Card.Header>
              <Card.Body>
                <ApexCharts
                  series={advanceTimelineChartData.series}
                  options={advanceTimelineChartData.options}
                  type="rangeBar"
                  height={450}
                />
              </Card.Body>
            </Card>
          </Col>
          <Col xs="12">
            <Card>
              <Card.Header>
                <h5> Timeline – Grouped Rows</h5>
              </Card.Header>
              <Card.Body>
                <ApexCharts
                  series={advanceGroupedRowsChartData.series}
                  options={advanceGroupedRowsChartData.options}
                  type="rangeBar"
                  height={450}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TimelineChartpage;
