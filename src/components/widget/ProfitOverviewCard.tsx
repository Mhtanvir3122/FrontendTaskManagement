import Chart from "react-apexcharts";
import { Alert, Card, ProgressBar } from "react-bootstrap";

import { profitOverviewOptions } from "@/data/dashboard/project-dashboard/ProjectOverviewData.ts";

const ProfitOverviewCard = () => {
  return (
    <>
      <Card className="bg-primary">
        <Card.Body>
          <div className="d-flex align-items-center justify-content-between">
            <h5 className="text-white">Profit Overview</h5>
          </div>
          <div id="profitOverview"></div>
          <Chart
            options={profitOverviewOptions.options}
            series={profitOverviewOptions.series}
            type="line"
            height={180}
          />
        </Card.Body>
      </Card>
      <Alert variant="primary" dismissible className="project-alert mt-3">
        <div className="d-flex justify-content-between">
          <p className="mb-0 z-1 txt-ellipsis-2">
            🚀 Welcome! Keep track of your projects efficiently.
          </p>
        </div>
        <ProgressBar variant="primary" now={100} className="progress-bar" />
      </Alert>
    </>
  );
};

export default ProfitOverviewCard;
