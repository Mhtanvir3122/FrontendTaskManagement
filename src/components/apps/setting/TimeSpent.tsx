import Chart from "react-apexcharts";

import { timeSpentData } from "@/data/charts/apexcharts/ApexChart.ts";

const TimeSpent = () => {
  return (
    <Chart
      options={timeSpentData}
      series={timeSpentData.series}
      type="line"
      height={280}
    />
  );
};

export default TimeSpent;
