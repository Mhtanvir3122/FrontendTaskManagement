import { getLocalStorageItem, hexToRGB } from "../../../_helper/index";

export const LineChartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Dataset #1",
      backgroundColor: hexToRGB(
        getLocalStorageItem("color-primary", "#0F626A"),
        0.2
      ),
      borderColor: hexToRGB(getLocalStorageItem("color-primary", "#0F626A"), 1),
      data: [-20, 54, -20, -5, 56, -55, 40],
    },
    {
      label: "Dataset #2",
      backgroundColor: "rgba( 225, 78, 90,0.2)",
      borderColor: "rgba( 225, 78, 90,1)",
      data: [90, 59, -10, 81, -56, 10, -40],
    },
  ],
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
};
