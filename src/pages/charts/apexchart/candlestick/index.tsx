import React from "react";
import ApexCharts from "react-apexcharts";
import { Card, Col, Container, Row } from "react-bootstrap";

import { basicCandlestickChartData } from "@/data/charts/apexcharts/CandleStick.ts";
import { ChartPieSlice } from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

const CandlestickChartPage: React.FC = () => {
  return (
    <div>
      <Container fluid>
        <Breadcrumbs
          mainTitle="Candlestick"
          title="Chart"
          path={["Apexcharts", "Candlestick"]}
          Icon={ChartPieSlice}
        />
        <Row>
          <Col xs="12">
            <Card>
              <Card.Header>
                <h5>Basic Candlestick Chart</h5>
              </Card.Header>
              <Card.Body>
                <ApexCharts
                  series={basicCandlestickChartData.series}
                  options={basicCandlestickChartData.options}
                  type="candlestick"
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

export default CandlestickChartPage;
