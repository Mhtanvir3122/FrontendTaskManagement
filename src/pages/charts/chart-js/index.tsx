import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Bar, Doughnut, Line, Pie, PolarArea, Radar } from "react-chartjs-2";

import { DoughnutData } from "@/data/charts/chart-js/DoughnutData.ts";
import { LineChartData } from "@/data/charts/chart-js/LineChartData.ts";
import { MultiSeriesPie } from "@/data/charts/chart-js/MultiSeriesPie.ts";
import { PieData } from "@/data/charts/chart-js/PieData.ts";
import { PolarAreaData } from "@/data/charts/chart-js/PolarAreaData.ts";
import {
  ProgressiveLineData,
  ProgressiveLineOptions,
} from "@/data/charts/chart-js/ProgressiveLineData.ts";
import { RadarSkipPoints } from "@/data/charts/chart-js/RadarSkipPoints.ts";
import { SteppedLineCharts } from "@/data/charts/chart-js/SteppedLineCharts.ts";
import { barBorderRadiusData } from "@/data/charts/chart-js/barBorderRadiusData.ts";
import { verticalBarChart } from "@/data/charts/chart-js/verticalBarChart.ts";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  RadialLinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { ChartPieSlice } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Filler,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  RadialLinearScale
);

const ChartPage: React.FC = () => {
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Chart js"
          title="Chart"
          path={["Chart Js"]}
          Icon={ChartPieSlice}
        />
        <Row>
          <Row className=" chart-js-chart">
            <Col lg="6">
              <Card>
                <Card.Header>
                  <h5>Bar Chart Border Radius</h5>
                </Card.Header>
                <Card.Body>
                  <Bar
                    data={barBorderRadiusData}
                    options={barBorderRadiusData.options}
                  />
                </Card.Body>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <Card.Header>
                  <h5>Vertical Bar Chart</h5>
                </Card.Header>
                <Card.Body>
                  <Bar
                    data={verticalBarChart}
                    options={verticalBarChart.options}
                  />
                </Card.Body>
              </Card>
            </Col>
            <Col xl={6}>
              <Card>
                <Card.Header>
                  <h5>Multi Series Pie</h5>
                </Card.Header>
                <Card.Body>
                  <div className="d-flex justify-content-center h-400">
                    <Pie
                      data={MultiSeriesPie}
                      options={MultiSeriesPie.options}
                    />
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <Card.Header>
                  <h5>Radar Skip Points</h5>
                </Card.Header>
                <Card.Body>
                  <div className="d-flex justify-content-center h-400">
                    <Radar
                      data={RadarSkipPoints}
                      options={RadarSkipPoints.options}
                    />
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <Card.Header>
                  <h5>Doughnut</h5>
                </Card.Header>
                <Card.Body>
                  <div className="d-flex justify-content-center h-400">
                    <Doughnut data={DoughnutData} />
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <Card.Header>
                  <h5>Polar Area</h5>
                </Card.Header>
                <Card.Body>
                  <div className="d-flex justify-content-center h-400">
                    <PolarArea data={PolarAreaData} />
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <Card.Header>
                  <h5>Pie</h5>
                </Card.Header>
                <Card.Body>
                  <div className="d-flex justify-content-center h-400">
                    <Pie data={PieData} />
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xl={6}>
              <div className="card equal-card">
                <Card.Header>
                  <h5>Progressive Line</h5>
                </Card.Header>
                <Card.Body>
                  <Line
                    data={ProgressiveLineData}
                    options={ProgressiveLineOptions}
                  />
                </Card.Body>
              </div>
            </Col>
            <Col lg="6">
              <Card>
                <Card.Header>
                  <h5>Line Chart</h5>
                </Card.Header>
                <Card.Body>
                  <Line data={LineChartData} options={LineChartData.options} />
                </Card.Body>
              </Card>
            </Col>
            <Col lg="6">
              <Card>
                <Card.Header>
                  <h5>Stepped Line Charts</h5>
                </Card.Header>
                <Card.Body>
                  <Line
                    data={SteppedLineCharts}
                    options={SteppedLineCharts.options}
                  />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default ChartPage;
