import { getLocalStorageItem } from "@/_helper";
import { ApexOptions } from "apexcharts";

const basicColumnChartConfig = {
  series: [
    {
      name: "Net Profit",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Revenue",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
    {
      name: "Free Cash Flow",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    },
  ],
  options: {
    chart: {
      type: "bar",
      height: 450,
      fontFamily: 'Rubik", serif',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
      },
    },
    colors: [
      getLocalStorageItem("color-primary", "#0f626a"),
      getLocalStorageItem("color-secondary", "#626262"),
      "#e14e5a",
    ],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
      labels: {
        style: {
          fontSize: "14px",
          fontWeight: 500,
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: "14px",
          fontWeight: 500,
        },
      },
    },
    fill: {
      opacity: 1,
    },
    grid: {
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
      y: {
        formatter: function (val: number) {
          return `$ ${val} thousands`;
        },
      },
      style: {
        fontSize: "16px",
      },
    },
  } as ApexOptions,
};

const dumbbellChartConfig = {
  series: [
    {
      name: "Inflation",
      data: [
        { x: "2008", y: [2800, 4500] },
        { x: "2009", y: [3200, 4100] },
        { x: "2010", y: [2950, 7800] },
        { x: "2011", y: [3000, 4600] },
        { x: "2012", y: [3500, 4100] },
        { x: "2013", y: [4500, 6500] },
        { x: "2014", y: [4100, 5600] },
      ],
    },
  ],
  options: {
    chart: {
      fontFamily: 'Rubik", serif',
    },
    plotOptions: {
      bar: {
        isDumbbell: true,
        columnWidth: 25,
        dumbbellColors: [["#000000", "#000000"]],
      },
    },
    legend: {
      show: true,
      showForSingleSeries: true,
      position: "top",
      horizontalAlign: "right",
      customLegendItems: ["Product A", "Product B"],
    },
    colors: ["#e14e5a", "#f9c123"],
    fill: {
      type: "gradient",
      gradient: {
        type: "vertical",
        gradientToColors: ["#f9c123"],
        inverseColors: true,
        stops: [0, 100],
      },
    },
    grid: {
      show: true,
      borderColor: "rgba(var(--dark),.2)",
      strokeDashArray: 2,
      xaxis: {
        lines: { show: true },
      },
      yaxis: {
        lines: { show: false },
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
      tickPlacement: "on",
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
      x: { show: false },
      style: { fontSize: "16px" },
    },
  } as ApexOptions,
};

const columnChartWithFruitsConfig = {
  series: [
    {
      name: "Servings",
      data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35],
    },
  ],
  options: {
    chart: {
      type: "bar",
      height: 450,
      fontFamily: 'Rubik", serif',
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        columnWidth: "50%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 0,
    },
    colors: ["#4196fa"],
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal",
        shadeIntensity: 0.25,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 0.85,
        opacityTo: 0.85,
        stops: [50, 0, 100],
      },
    },
    xaxis: {
      categories: [
        "Apples",
        "Oranges",
        "Strawberries",
        "Pineapples",
        "Mangoes",
        "Bananas",
        "Blackberries",
        "Pears",
        "Watermelons",
        "Cherries",
        "Pomegranates",
        "Tangerines",
        "Papayas",
      ],
      tickPlacement: "on",
      labels: {
        rotate: -45,
        rotateAlways: true,
        style: {
          fontSize: "14px",
          fontWeight: 500,
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: "14px",
          fontWeight: 500,
        },
      },
    },
    grid: {
      borderColor: "rgba(var(--dark),.2)",
      strokeDashArray: 2,
      row: {
        colors: ["#fff", "#f2f2f2"],
      },
      xaxis: { lines: { show: false } },
      yaxis: { lines: { show: true } },
    },
    tooltip: {
      x: { show: false },
      style: { fontSize: "16px" },
    },
  } as ApexOptions,
};

const columnChartWithMarkersConfig = {
  series: [
    {
      name: "Actual",
      data: [
        {
          x: "2011",
          y: 1292,
          goals: [
            {
              name: "Expected",
              value: 1400,
              strokeHeight: 5,
              strokeColor: "#f9c123",
            },
          ],
        },
        {
          x: "2012",
          y: 4432,
          goals: [
            {
              name: "Expected",
              value: 5400,
              strokeHeight: 5,
              strokeColor: "#f9c123",
            },
          ],
        },
        {
          x: "2013",
          y: 5423,
          goals: [
            {
              name: "Expected",
              value: 5200,
              strokeHeight: 5,
              strokeColor: "#f9c123",
            },
          ],
        },
        {
          x: "2014",
          y: 6653,
          goals: [
            {
              name: "Expected",
              value: 6500,
              strokeHeight: 5,
              strokeColor: "#f9c123",
            },
          ],
        },
        {
          x: "2015",
          y: 8133,
          goals: [
            {
              name: "Expected",
              value: 6600,
              strokeHeight: 13,
              strokeColor: "#f9c123",
            },
          ],
        },
        {
          x: "2016",
          y: 7132,
          goals: [
            {
              name: "Expected",
              value: 7500,
              strokeHeight: 5,
              strokeColor: "#f9c123",
            },
          ],
        },
        {
          x: "2017",
          y: 7332,
          goals: [
            {
              name: "Expected",
              value: 8700,
              strokeHeight: 5,
              strokeColor: "#f9c123",
            },
          ],
        },
        {
          x: "2018",
          y: 6553,
          goals: [
            {
              name: "Expected",
              value: 7300,
              strokeHeight: 2,
              strokeDashArray: 2,
              strokeColor: "#f9c123",
            },
          ],
        },
      ],
    },
  ],
  options: {
    chart: {
      type: "bar",
      height: 450,
      fontFamily: 'Rubik", serif',
    },
    plotOptions: {
      bar: {
        columnWidth: "60%",
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 0,
    },
    colors: ["#eaea4f"],
    legend: {
      show: true,
      showForSingleSeries: true,
      customLegendItems: ["Actual", "Expected"],
      markers: {
        fillColors: ["#eaea4f", "#f9c123"],
      },
    },
    xaxis: {
      labels: {
        style: {
          fontSize: "14px",
          fontWeight: 500,
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          fontSize: "14px",
          fontWeight: 500,
        },
      },
    },
    grid: {
      borderColor: "rgba(var(--dark),.2)",
      strokeDashArray: 2,
      xaxis: { lines: { show: false } },
      yaxis: { lines: { show: true } },
    },
    tooltip: {
      x: { show: false },
      style: { fontSize: "16px" },
    },
  } as ApexOptions,
};
export {
  basicColumnChartConfig,
  dumbbellChartConfig,
  columnChartWithFruitsConfig,
  columnChartWithMarkersConfig,
};
