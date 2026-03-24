import Chart from "react-apexcharts";
import { Card } from "react-bootstrap";

import { revenueChartOptions } from "@/data/dashboard/ecommerce/ProductsCardsData.ts";

const TotalRevenueCard = () => {
  return (
    <Card>
      <Card.Body className="pb-0">
        <div className="mb-2">
          <h4 className="text-primary">
            98.65% <span className="f-s-14 text-dark">Total sale</span>
          </h4>
        </div>
        <div id="revenueChart"></div>
        <Chart
          options={revenueChartOptions.options}
          series={revenueChartOptions.series}
          type="line"
          height={230}
        />
      </Card.Body>
    </Card>
  );
};

export default TotalRevenueCard;
