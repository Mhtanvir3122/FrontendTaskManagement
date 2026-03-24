import { getLocalStorageItem } from "@/_helper";
import { ApexOptions } from "apexcharts";

const basicRadarChartData = {
  series: [
    {
      name: "Series 1",
      data: [80, 50, 30, 40, 100, 20],
    },
  ],
  options: {
    chart: {
      fontFamily: 'Rubik", serif',
      height: 350,
      type: "radar",
    },
    colors: [getLocalStorageItem("color-primary", "#0F626A")],
    xaxis: {
      categories: ["January", "February", "March", "April", "May", "June"],
    },
  } as ApexOptions,
};
const multiSeriesRadarChartData = {
  series: [
    {
      name: "Series 1",
      data: [80, 50, 30, 40, 100, 20],
    },
    {
      name: "Series 2",
      data: [20, 30, 40, 80, 20, 80],
    },
    {
      name: "Series 3",
      data: [44, 76, 78, 13, 43, 10],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "radar",
      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1,
      },
    },
    stroke: {
      width: 2,
    },
    fill: {
      opacity: 0.1,
    },
    markers: {
      size: 0,
    },
    xaxis: {
      categories: ["2011", "2012", "2013", "2014", "2015", "2016"],
    },
    colors: [
      getLocalStorageItem("color-secondary", "#817D8D"),
      "#0AB964",
      "#4196FA",
    ],
  } as ApexOptions,
};

const polygonRadarChartData = {
  series: [
    {
      name: "Series 1",
      data: [20, 100, 40, 30, 50, 80, 33],
    },
  ],
  options: {
    chart: {
      fontFamily: 'Rubik", serif',
      height: 350,
      type: "radar",
    },
    dataLabels: {
      enabled: true,
    },
    plotOptions: {
      radar: {
        size: 140,
        polygons: {
          strokeColors: "#e9e9e9",
        },
      },
    },
    colors: ["#F9C123"],
    markers: {
      size: 4,
      colors: ["#fff"],
      strokeColors: "#eaea4f",
      strokeWidth: 2,
    },
    tooltip: {
      y: {
        formatter: function (val: number): string {
          return val.toString();
        },
      },
    },
    xaxis: {
      categories: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
    },
    yaxis: {
      tickAmount: 7,
      labels: {
        formatter: function (val: number, i: number): string {
          return i % 2 === 0 ? val.toString() : "";
        },
      },
    },
  } as ApexOptions,
};
export {
  basicRadarChartData,
  multiSeriesRadarChartData,
  polygonRadarChartData,
};
