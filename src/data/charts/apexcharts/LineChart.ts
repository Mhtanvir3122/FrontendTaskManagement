import { getLocalStorageItem } from "@/_helper";
import { ApexOptions } from "apexcharts";

const basicLineChartConfig = {
  series: [
    {
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
  ],
  options: {
    chart: {
      type: "line",
      height: 450,
      zoom: { enabled: false },
      fontFamily: 'Rubik", serif',
    },
    stroke: {
      curve: "smooth",
    },
    colors: [getLocalStorageItem("color-primary", "#0f626a")],
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
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
const gradientLineChartConfig = {
  series: [
    {
      name: "Sales",
      data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
    },
  ],
  options: {
    chart: {
      fontFamily: 'Rubik", serif',
      height: 350,
    },
    forecastDataPoints: {
      count: 7,
    },
    stroke: {
      width: 5,
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: [
        "1/11/2000",
        "2/11/2000",
        "3/11/2000",
        "4/11/2000",
        "5/11/2000",
        "6/11/2000",
        "7/11/2000",
        "8/11/2000",
        "9/11/2000",
        "10/11/2000",
        "11/11/2000",
        "12/11/2000",
        "1/11/2001",
        "2/11/2001",
        "3/11/2001",
        "4/11/2001",
        "5/11/2001",
        "6/11/2001",
      ],
      tickAmount: 10,
      labels: {
        formatter: function (_value, timestamp, opts) {
          return opts.dateFormatter(new Date(timestamp as number), "dd MMM");
        },
        style: {
          colors: [],
          fontSize: "14px",
          fontWeight: 500,
        },
      },
    },
    title: {
      text: "",
      align: "left",
      style: {
        fontSize: "16px",
        color: "#f6c355",
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
    fill: {
      type: "gradient",
      gradient: {
        shade: "#26C450",
        shadeIntensity: 1,
        type: "horizontal",
        opacityFrom: 1,
        opacityTo: 1,
        colorStops: [
          {
            offset: 0,
            color: "rgba(var(--primary),1)",
            opacity: 1,
          },
          {
            offset: 50,
            color: "rgba(var(--success),1)",
            opacity: 1,
          },
          {
            offset: 100,
            color: "rgba(var(--warning),1)",
            opacity: 0.1,
          },
        ],
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
  } as ApexOptions,
};
const dashedLineChartConfig = {
  series: [
    {
      name: "Session Duration",
      data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
    },
    {
      name: "Page Views",
      data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
    },
    {
      name: "Total Visits",
      data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
    },
  ],
  options: {
    chart: {
      fontFamily: 'Rubik", serif',
      height: 350,
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [5, 7, 5],
      curve: "straight",
      dashArray: [0, 8, 5],
    },
    title: {
      text: "",
      align: "left",
    },
    legend: {
      tooltipHoverFormatter: function (val: string, opts: {
        seriesIndex: number;
        dataPointIndex: number;
        w: {
          globals: {
            series: number[][];
          };
        };
      }) {
        return `${val} - ${opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex]}`;
      },
    },
    markers: {
      size: 0,
      hover: {
        sizeOffset: 6,
      },
    },
    colors: [
      "rgba(var(--success),1)",
      "rgba(var(--info),1)",
      "rgba(var(--danger),1)",
    ],
    xaxis: {
      categories: [
        "01 Jan",
        "02 Jan",
        "03 Jan",
        "04 Jan",
        "05 Jan",
        "06 Jan",
        "07 Jan",
        "08 Jan",
        "09 Jan",
        "10 Jan",
        "11 Jan",
        "12 Jan",
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
    tooltip: {
      style: {
        fontSize: "14px",
      },
      y: [
        {
          title: {
            formatter: (val: number) => `${val} (mins)`,
          },
        },
        {
          title: {
            formatter: (val: number) => `${val} per session`,
          },
        },
        {
          title: {
            formatter: (val: number) => `${val}`,
          },
        },
      ],
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
  } as ApexOptions,
};
const steplineChartConfig = {
  series: [
    {
      name: "Sales",
      data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
    },
  ],
  options: {
    chart: {
      fontFamily: 'Rubik", serif',
      height: 350,
      type: "line",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "stepline",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#e14e5a"],
    title: {
      text: "",
      align: "left",
    },
    markers: {
      hover: {
        sizeOffset: 4,
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
  } as ApexOptions,
};

export {
  basicLineChartConfig,
  gradientLineChartConfig,
  dashedLineChartConfig,
  steplineChartConfig,
};
