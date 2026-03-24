import { getLocalStorageItem } from "@/_helper";
import { ApexOptions } from "apexcharts";

// Basic Box & Whisker Chart Data
const basicBoxWhiskerChartData = {
  series: [
    {
      type: "boxPlot",
      data: [
        { x: "Jan 2015", y: [54, 66, 69, 75, 88] },
        { x: "Jan 2016", y: [43, 65, 69, 76, 81] },
        { x: "Jan 2017", y: [31, 39, 45, 51, 59] },
        { x: "Jan 2018", y: [39, 46, 55, 65, 71] },
        { x: "Jan 2019", y: [29, 31, 35, 39, 44] },
        { x: "Jan 2020", y: [41, 49, 58, 61, 67] },
        { x: "Jan 2021", y: [54, 59, 66, 71, 88] },
      ],
    },
  ],
  options: {
    chart: {
      fontFamily: '"Rubik", serif',
      type: "boxPlot",
      height: 350,
    },
    title: {
      text: "",
      align: "left",
    },
    plotOptions: {
      boxPlot: {
        colors: {
          upper: getLocalStorageItem("color-primary", "#0F626A") || "#0F626A",
          lower: getLocalStorageItem("color-secondary", "#817D8D") || "#817D8D",
        },
      },
    },
    xaxis: {
      labels: {
        style: {
          colors: [],
          fontSize: "14px",
          fontWeight: 500,
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: [],
          fontSize: "14px",
          fontWeight: 500,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "rgba(var(--dark),.2)",
      strokeDashArray: 2,
      xaxis: {
        lines: { show: false },
      },
      yaxis: {
        lines: { show: true },
      },
    },
    tooltip: {
      x: { show: false },
      style: {
        fontSize: "16px",
      },
    },
  } as ApexOptions,
};

// Ad Type Labels by Year
const adTypes: Record<number, string> = {
  2017: "Display Ads",
  2018: "Email Ads",
  2019: "Social Media Ads",
  2020: "Video Ads",
  2021: "Native Ads",
};

// BoxPlot with Scatter Chart Data
const boxPlotWithScatterData = {
  series: [
    {
      name: "box",
      type: "boxPlot",
      data: [
        { x: new Date("2017-01-01").getTime(), y: [54, 66, 69, 75, 88] },
        { x: new Date("2018-01-01").getTime(), y: [43, 65, 69, 76, 81] },
        { x: new Date("2019-01-01").getTime(), y: [31, 39, 45, 51, 59] },
        { x: new Date("2020-01-01").getTime(), y: [39, 46, 55, 65, 71] },
        { x: new Date("2021-01-01").getTime(), y: [29, 31, 35, 39, 44] },
      ],
    },
    {
      name: "outliers",
      type: "scatter",
      data: [
        { x: new Date("2017-01-01").getTime(), y: 32 },
        { x: new Date("2018-01-01").getTime(), y: 25 },
        { x: new Date("2019-01-01").getTime(), y: 64 },
        { x: new Date("2020-01-01").getTime(), y: 27 },
        { x: new Date("2021-01-01").getTime(), y: 15 },
      ],
    },
  ],
  options: {
    chart: {
      fontFamily: 'Rubik", serif',
      type: "boxPlot",
      height: 350,
    },
    title: {
      text: "",
      align: "left",
    },
    xaxis: {
      type: "datetime",
      tooltip: {
        formatter: function (val: string) {
          const year = new Date(val).getFullYear();
          return `${year} - ${adTypes[year] || "Unknown"}`;
        },
      },
      labels: {
        style: {
          colors: [],
          fontSize: "14px",
          fontWeight: 500,
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: [],
          fontSize: "14px",
          fontWeight: 500,
        },
      },
    },
    plotOptions: {
      boxPlot: {
        colors: {
          upper: "#0AB964",
          lower: "#E14E5A",
        },
      },
    },
    grid: {
      show: true,
      borderColor: "rgba(var(--dark),.2)",
      strokeDashArray: 2,
      xaxis: {
        lines: { show: false },
      },
      yaxis: {
        lines: { show: true },
      },
    },
    tooltip: {
      shared: false,
      intersect: true,
      x: { show: false },
      style: {
        fontSize: "16px",
      },
    },
  } as ApexOptions,
};

export { basicBoxWhiskerChartData, boxPlotWithScatterData };
