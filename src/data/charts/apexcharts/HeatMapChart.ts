import { generateHeatmapData, getLocalStorageItem } from "@/_helper";
import { ApexOptions } from "apexcharts";

const heatMapSingleSeriesData = {
  series: [
    {
      name: "Metric1",
      data: generateHeatmapData(18, { min: 0, max: 90 }),
    },
    {
      name: "Metric2",
      data: generateHeatmapData(18, { min: 0, max: 90 }),
    },
    {
      name: "Metric3",
      data: generateHeatmapData(18, { min: 0, max: 90 }),
    },
    {
      name: "Metric4",
      data: generateHeatmapData(18, { min: 0, max: 90 }),
    },
    {
      name: "Metric5",
      data: generateHeatmapData(18, { min: 0, max: 90 }),
    },
    {
      name: "Metric6",
      data: generateHeatmapData(18, { min: 0, max: 90 }),
    },
    {
      name: "Metric7",
      data: generateHeatmapData(18, { min: 0, max: 90 }),
    },
    {
      name: "Metric8",
      data: generateHeatmapData(18, { min: 0, max: 90 }),
    },
    {
      name: "Metric9",
      data: generateHeatmapData(18, { min: 0, max: 90 }),
    },
    {
      name: "Metric10",
      data: generateHeatmapData(18, { min: 0, max: 90 }),
    },
    {
      name: "Metric11",
      data: generateHeatmapData(18, { min: 0, max: 90 }),
    },
    {
      name: "Metric12",
      data: generateHeatmapData(18, { min: 0, max: 90 }),
    },
  ],
  options: {
    chart: {
      fontFamily: 'Rubik", serif',
      height: 350,
      type: "heatmap",
    },
    dataLabels: {
      enabled: false,
    },
    colors: [
      getLocalStorageItem("color-primary", "#0F626A"),
      getLocalStorageItem("color-secondary", "#817D8D"),
      "#0AB964",
      "#4196FA",
      "#EAEA4F",
      "#F9C123",
      "#E14E5A",
      "#28232D",
    ],
    title: {
      text: "",
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
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    tooltip: {
      x: {
        show: false,
      },
      style: {
        fontSize: "16px",
      },
    },
  } as ApexOptions,
};

const heatMapMultipleSeriesData = {
  series: [
    { name: "W1", data: generateHeatmapData(8, { min: 0, max: 90 }) },
    { name: "W2", data: generateHeatmapData(8, { min: 0, max: 90 }) },
    { name: "W3", data: generateHeatmapData(8, { min: 0, max: 90 }) },
    { name: "W4", data: generateHeatmapData(8, { min: 0, max: 90 }) },
    { name: "W5", data: generateHeatmapData(8, { min: 0, max: 90 }) },
    { name: "W6", data: generateHeatmapData(8, { min: 0, max: 90 }) },
    { name: "W7", data: generateHeatmapData(8, { min: 0, max: 90 }) },
    { name: "W8", data: generateHeatmapData(8, { min: 0, max: 90 }) },
    { name: "W9", data: generateHeatmapData(8, { min: 0, max: 90 }) },
    { name: "W10", data: generateHeatmapData(8, { min: 0, max: 90 }) },
    { name: "W11", data: generateHeatmapData(8, { min: 0, max: 90 }) },
    { name: "W12", data: generateHeatmapData(8, { min: 0, max: 90 }) },
    { name: "W13", data: generateHeatmapData(8, { min: 0, max: 90 }) },
    { name: "W14", data: generateHeatmapData(8, { min: 0, max: 90 }) },
    { name: "W15", data: generateHeatmapData(8, { min: 0, max: 90 }) },
  ],
  options: {
    chart: {
      fontFamily: 'Rubik", serif',
      height: 450,
      type: "heatmap",
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: "category",
      categories: [
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "01:00",
        "01:30",
      ],
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
    title: {
      text: "",
    },
    grid: {
      padding: {
        right: 20,
      },
    },
    tooltip: {
      x: {
        show: false,
      },
      style: {
        fontSize: "16px",
      },
    },
  } as ApexOptions,
};

const heatMapColorRangeData = {
  series: [
    { name: "Jan", data: generateHeatmapData(20, { min: -30, max: 55 }) },
    { name: "Feb", data: generateHeatmapData(20, { min: -30, max: 55 }) },
    { name: "Mar", data: generateHeatmapData(20, { min: -30, max: 55 }) },
    { name: "Apr", data: generateHeatmapData(20, { min: -30, max: 55 }) },
    { name: "May", data: generateHeatmapData(20, { min: -30, max: 55 }) },
    { name: "Jun", data: generateHeatmapData(20, { min: -30, max: 55 }) },
    { name: "Jul", data: generateHeatmapData(20, { min: -30, max: 55 }) },
    { name: "Aug", data: generateHeatmapData(20, { min: -30, max: 55 }) },
    { name: "Sep", data: generateHeatmapData(20, { min: -30, max: 55 }) },
  ],
  options: {
    chart: {
      fontFamily: 'Rubik", serif',
      height: 350,
      type: "heatmap",
    },
    plotOptions: {
      heatmap: {
        shadeIntensity: 0.5,
        radius: 0,
        useFillColorAsStroke: true,
        colorScale: {
          ranges: [
            {
              from: -30,
              to: 5,
              name: "low",
              color: getLocalStorageItem("color-primary", "#0F626A"),
            },
            {
              from: 6,
              to: 20,
              name: "medium",
              color: getLocalStorageItem("color-secondary", "#817D8D"),
            },
            {
              from: 21,
              to: 45,
              name: "high",
              color: "#0AB964",
            },
            {
              from: 46,
              to: 55,
              name: "extreme",
              color: "#4196FA",
            },
          ],
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 1,
    },
    title: {
      text: "",
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
    tooltip: {
      x: {
        show: false,
      },
      style: {
        fontSize: "16px",
      },
    },
  } as ApexOptions,
};

const heatMapRangeShadesData = {
  series: [
    { name: "Metric1", data: generateHeatmapData(20, { min: 0, max: 90 }) },
    { name: "Metric2", data: generateHeatmapData(20, { min: 0, max: 90 }) },
    { name: "Metric3", data: generateHeatmapData(20, { min: 0, max: 90 }) },
    { name: "Metric4", data: generateHeatmapData(20, { min: 0, max: 90 }) },
    { name: "Metric5", data: generateHeatmapData(20, { min: 0, max: 90 }) },
    { name: "Metric6", data: generateHeatmapData(20, { min: 0, max: 90 }) },
    { name: "Metric7", data: generateHeatmapData(20, { min: 0, max: 90 }) },
    { name: "Metric8", data: generateHeatmapData(20, { min: 0, max: 90 }) },
    { name: "Metric9", data: generateHeatmapData(20, { min: 0, max: 90 }) },
  ],
  options: {
    chart: {
      fontFamily: 'Rubik", serif',
      height: 350,
      type: "heatmap",
    },
    stroke: {
      width: 0,
    },
    plotOptions: {
      heatmap: {
        radius: 30,
        enableShades: false,
        colorScale: {
          ranges: [
            {
              from: 0,
              to: 50,
              color: "#F9C123",
            },
            {
              from: 51,
              to: 100,
              color: "#4196FA",
            },
          ],
        },
      },
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ["#fff"],
      },
    },
    xaxis: {
      type: "category",
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
    tooltip: {
      x: {
        show: false,
      },
      style: {
        fontSize: "16px",
      },
    },
  } as ApexOptions,
};

export {
  heatMapSingleSeriesData,
  heatMapMultipleSeriesData,
  heatMapColorRangeData,
  heatMapRangeShadesData,
};
