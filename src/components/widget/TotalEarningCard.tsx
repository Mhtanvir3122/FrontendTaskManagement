import Chart from "react-apexcharts";
import { Card } from "react-bootstrap";

import { earningChartOptions } from "@/data/dashboard/ecommerce/SalesCardsData.ts";

const TotalEarningCard = () => {
  return (
    <Card>
      <Card.Body className="p-0">
        <div className="px-4 py-3">
          <h4 className="text-primary">$65,563.24</h4>
          <p className="mb-0 text-secondary">
            <span className="text-light-danger">38.3%-</span> Last week
          </p>
        </div>
        <div className="earning-chart">
          <Chart
            options={earningChartOptions.options}
            series={earningChartOptions.series}
            type="bar"
            height={242}
          />
        </div>
      </Card.Body>
    </Card>
  );
};

export default TotalEarningCard;
