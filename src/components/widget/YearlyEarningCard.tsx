import Chart from "react-apexcharts";
import { Card, Form } from "react-bootstrap";

import { audienceChartOptions } from "@/data/dashboard/project-dashboard/ProjectOverviewData.ts";

interface YearlyEarningCardProps {
  chartHeight?: number;
}

const YearlyEarningCard = ({ chartHeight = 180 }: YearlyEarningCardProps) => {
  return (
    <Card>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <h6 className="mb-0 txt-ellipsis-1">Yearly Earning</h6>
          <Form className="ms-2">
            <Form.Select
              aria-label="Default select example"
              className="custom-form-select"
            >
              <option value="0">Jan</option>
              <option value="1">Feb</option>
              <option value="2">Mar</option>
              <option value="3">...</option>
              <option value="4">Dec</option>
            </Form.Select>
          </Form>
        </div>

        <Chart
          options={audienceChartOptions.options}
          series={audienceChartOptions.series}
          type="donut"
          height={chartHeight}
        />

        <ul className="list-unstyled">
          <li className="py-1 d-flex align-items-center justify-content-between">
            <p className="mb-0 txt-ellipsis-1">
              <i className="ti ti-circle-filled text-primary f-s-10 me-1"></i>{" "}
              19-20 years
            </p>
            <p className="text-secondary txt-ellipsis-1 mb-0 flex-grow-1 mx-2">
              {" "}
              ------------------------{" "}
            </p>
            <span>68%</span>
          </li>
          <li className="py-1 d-flex align-items-center justify-content-between">
            <p className="mb-0 txt-ellipsis-1">
              <i className="ti ti-circle-filled text-primary-800 f-s-10 me-1"></i>{" "}
              20-21 years
            </p>
            <p className="text-secondary txt-ellipsis-1 mb-0 flex-grow-1 mx-2">
              {" "}
              ------------------------{" "}
            </p>
            <span>58%</span>
          </li>
          <li className="py-1 d-flex align-items-center justify-content-between">
            <p className="mb-0 txt-ellipsis-1">
              <i className="ti ti-circle-filled text-primary-600 f-s-10 me-1"></i>{" "}
              21-22 years
            </p>
            <p className="text-secondary txt-ellipsis-1 mb-0 flex-grow-1 mx-2">
              {" "}
              ------------------------{" "}
            </p>
            <span>78%</span>
          </li>
          <li className="py-1 d-flex align-items-center justify-content-between">
            <p className="mb-0 txt-ellipsis-1">
              <i className="ti ti-circle-filled text-primary-400 f-s-10 me-1"></i>{" "}
              22-23 years
            </p>
            <p className="text-secondary txt-ellipsis-1 mb-0 flex-grow-1 mx-2">
              {" "}
              -----------------------{" "}
            </p>
            <span>88%</span>
          </li>
        </ul>
      </Card.Body>
    </Card>
  );
};

export default YearlyEarningCard;
