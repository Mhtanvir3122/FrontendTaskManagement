import { getLocalStorageItem } from "@/_helper";
import { ApexOptions } from "apexcharts";

interface DataLabelFormatterParams {
  value: number;
  seriesIndex: number;
  dataPointIndex: number;
  w: {
    globals: {
      labels: string[];
    };
  };
}

const basicTreemapData = {
  series: [
    {
      data: [
        { x: "New Delhi", y: 218 },
        { x: "Kolkata", y: 149 },
        { x: "Mumbai", y: 184 },
        { x: "Ahmedabad", y: 55 },
        { x: "Bangaluru", y: 84 },
        { x: "Pune", y: 31 },
        { x: "Chennai", y: 70 },
        { x: "Jaipur", y: 30 },
        { x: "Surat", y: 44 },
        { x: "Hyderabad", y: 68 },
        { x: "Lucknow", y: 28 },
        { x: "Indore", y: 19 },
        { x: "Kanpur", y: 29 },
      ],
    },
  ],
  options: {
    chart: {
      fontFamily: 'Rubik", serif',
      height: 350,
      type: "treemap",
    },
    colors: [getLocalStorageItem("color-primary", "#0F626A")],
    legend: {
      show: false,
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
const multiDimensionalTreemapData = {
  series: [
    {
      name: "Desktops",
      data: [
        { x: "ABC", y: 10 },
        { x: "DEF", y: 60 },
        { x: "XYZ", y: 41 },
      ],
    },
    {
      name: "Mobile",
      data: [
        { x: "ABCD", y: 10 },
        { x: "DEFG", y: 20 },
        { x: "WXYZ", y: 51 },
        { x: "PQR", y: 30 },
        { x: "MNO", y: 20 },
        { x: "CDE", y: 30 },
      ],
    },
  ],
  options: {
    chart: {
      fontFamily: 'Rubik", serif',
      height: 350,
      type: "treemap",
    },
    legend: {
      show: false,
    },
    colors: [getLocalStorageItem("color-secondary", "#817D8D"), "#0AB964"],
    title: {
      text: "",
      align: "center",
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
const distributedTreemapChartData = {
  series: [
    {
      data: [
        { x: "New Delhi", y: 218 },
        { x: "Kolkata", y: 149 },
        { x: "Mumbai", y: 184 },
        { x: "Ahmedabad", y: 55 },
        { x: "Bengaluru", y: 84 },
        { x: "Pune", y: 31 },
        { x: "Chennai", y: 70 },
        { x: "Jaipur", y: 30 },
        { x: "Surat", y: 44 },
        { x: "Hyderabad", y: 68 },
        { x: "Lucknow", y: 28 },
        { x: "Indore", y: 19 },
        { x: "Kanpur", y: 29 },
      ],
    },
  ],
  options: {
    chart: {
      fontFamily: 'Rubik", serif',
      height: 350,
      type: "treemap",
    },
    legend: {
      show: false,
    },
    title: {
      text: "",
      align: "center",
    },
    colors: [
      getLocalStorageItem("color-primary", "#0F626A"),
      getLocalStorageItem("color-secondary", "#817D8D"),
      "#0AB964",
      "#4196FA",
      "#F9C123",
      "#E14E5A",
      "#28232D",
      "#282632",
    ],
    plotOptions: {
      treemap: {
        distributed: true,
        enableShades: false,
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
const colorRangeTreemapChartData = {
  series: [
    {
      data: [
        { x: "INTC", y: 1.2 },
        { x: "GS", y: 0.4 },
        { x: "CVX", y: -1.4 },
        { x: "GE", y: 2.7 },
        { x: "CAT", y: -0.3 },
        { x: "RTX", y: 5.1 },
        { x: "CSCO", y: -2.3 },
        { x: "JNJ", y: 2.1 },
        { x: "PG", y: 0.3 },
        { x: "TRV", y: 0.12 },
        { x: "MMM", y: -2.31 },
        { x: "NKE", y: 3.98 },
        { x: "IYT", y: 1.67 },
      ],
    },
  ],
  options: {
    chart: {
      fontFamily: 'Rubik", serif',
      height: 350,
      type: "treemap",
    },
    legend: {
      show: false,
    },
    title: {
      text: "",
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: "12px",
      },
      formatter: function (text: string, op: DataLabelFormatterParams) {
        return [text, op.value];
      },
      offsetY: -4,
    },
    plotOptions: {
      treemap: {
        enableShades: true,
        shadeIntensity: 0.5,
        reverseNegativeShade: true,
        colorScale: {
          ranges: [
            {
              from: -6,
              to: 0,
              color: "#282632",
            },
            {
              from: 0.001,
              to: 6,
              color: getLocalStorageItem("color-primary", "#0F626A"),
            },
          ],
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
  basicTreemapData,
  multiDimensionalTreemapData,
  distributedTreemapChartData,
  colorRangeTreemapChartData,
};
