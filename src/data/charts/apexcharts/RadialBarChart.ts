import { getLocalStorageItem, hexToRGB } from "@/_helper";
import { ApexOptions } from "apexcharts";

const basicRadialBarChartData = {
  series: [70],
  options: {
    chart: {
      fontFamily: 'Rubik", serif',
      height: 350,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: "70%",
        },
      },
    },
    labels: ["Cricket"],
    colors: [getLocalStorageItem("color-primary", "#0f626a")],
    responsive: [
      {
        breakpoint: 567,
        options: {
          chart: {
            height: 250,
          },
        },
      },
    ],
  } as ApexOptions,
};
const multipleRadialBarsChartData = {
  series: [44, 55, 67, 83],
  options: {
    chart: {
      fontFamily: 'Rubik", serif',
      height: 350,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "22px",
          },
          value: {
            fontSize: "16px",
          },
          total: {
            show: true,
            label: "Total",
            formatter: function () {
              return "249";
            },
          },
        },
      },
    },
    labels: ["Apples", "Oranges", "Bananas", "Berries"],
    responsive: [
      {
        breakpoint: 567,
        options: {
          chart: {
            height: 250,
          },
        },
      },
    ],
    colors: [hexToRGB(getLocalStorageItem("color-primary", "#0ab964"), 1)],
  } as ApexOptions,
};

const circleAngleRadialChartData = {
  series: [76, 67, 61, 90],
  options: {
    chart: {
      fontFamily: 'Rubik", serif',
      height: 390,
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: "30%",
          background: "transparent",
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          },
        },
      },
    },
    colors: [
      getLocalStorageItem("color-primary", "#0f626a"),
      "#0ab964",
      getLocalStorageItem("color-secondary", "#626262"),
      "#e14e5a",
    ],
    labels: ["Vimeo", "Messenger", "Facebook", "LinkedIn"],
    legend: {
      show: true,
      floating: true,
      fontSize: "16px",
      position: "left",
      offsetX: 20,
      offsetY: 20,
      labels: {
        useSeriesColors: true,
      },
      markers: {
        size: 0,
      },
      formatter: function (seriesName: string, opts: {
        seriesIndex: number;
        dataPointIndex: number;
        w: {
          globals: {
            series: number[][];
          };
        };
      }) {
        return `${seriesName}:  ${opts.w.globals.series[opts.seriesIndex]}`;
      },
      itemMargin: {
        vertical: 3,
      },
    },
    responsive: [
      {
        breakpoint: 1550,
        options: {
          legend: {
            offsetX: -5,
            offsetY: 15,
          },
        },
      },
      {
        breakpoint: 567,
        options: {
          chart: {
            height: 250,
          },
        },
      },
      {
        breakpoint: 480,
        options: {
          legend: {
            fontSize: "15px",
            offsetX: -30,
            offsetY: -10,
          },
        },
      },
    ],
  } as ApexOptions,
};
const strokedCircularGaugeChartData = {
  series: [67],
  options: {
    chart: {
      fontFamily: 'Rubik", serif',
      offsetY: -10,
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        dataLabels: {
          name: {
            fontSize: "16px",
            color: undefined,
            offsetY: 120,
          },
          value: {
            offsetY: 76,
            fontSize: "22px",
            color: undefined,
            formatter: function (val: number) {
              return val + "%";
            },
          },
        },
      },
    },
    fill: {
      colors: ["#28232d"],
    },
    stroke: {
      dashArray: 4,
    },
    labels: ["Median Ratio"],
  } as ApexOptions,
};
const semiCircularGaugeChartData = {
  series: [76],
  options: {
    chart: {
      height: 410,
      type: "radialBar",
      offsetY: -20,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#e7e7e7",
          strokeWidth: "97%",
          margin: 5,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            offsetY: -2,
            fontSize: "22px",
          },
        },
      },
    },
    grid: {
      padding: {
        top: -10,
      },
    },
    fill: {
      colors: [getLocalStorageItem("color-primary", "#e14e5a")],
    },
    labels: ["Average Results"],
    responsive: [
      {
        breakpoint: 1366,
        options: {
          chart: {
            height: 500,
          },
        },
      },
      {
        breakpoint: 567,
        options: {
          chart: {
            height: 250,
          },
        },
      },
    ],
  } as ApexOptions,
};
const circleChartWithImageData = {
  series: [67],
  options: {
    plotOptions: {
      radialBar: {
        hollow: {
          margin: 15,
          size: "70%",
          image: "/images/icons/clock.png",
          imageWidth: 64,
          imageHeight: 64,
          imageClipped: false,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: true,
            color: "#333",
            offsetY: 70,
            fontSize: "22px",
          },
        },
      },
    },
    fill: {
      type: "image",
      image: {
        src: ["/images/slick/11.jpg"],
      },
    },
    stroke: {
      lineCap: "round",
    },
    labels: ["Volatility"],
    responsive: [
      {
        breakpoint: 567,
        options: {
          chart: {
            height: 250,
          },
        },
      },
    ],
  } as ApexOptions,
};

type RadialChartConfig = {
  label: string;
  series: number[];
  height: number | string;
  width: number | string;
  options: ApexOptions;
  textClass: string;
};

const customSizedRadialBars: RadialChartConfig[] = [
  {
    label: "Primary",
    series: [5],
    height: 350,
    width: 110,
    textClass: "text-primary",
    options: {
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 15,
            size: "70%",
            image: "/images/icons/radial-bar-icon/icon-1.jpg",
            imageWidth: 80,
            imageHeight: 80,
            imageClipped: false,
          },
          dataLabels: {
            show: true,
            name: { show: false },
            value: { show: false },
          },
        },
      },
      stroke: { lineCap: "round" },
      colors: [hexToRGB(getLocalStorageItem("color-primary", "#0f626a"), 1)],
      labels: ["Primary"],
    },
  },
  {
    label: "Secondary",
    series: [67],
    height: 172,
    width: 200,
    textClass: "text-secondary",
    options: {
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 15,
            size: "70%",
            image: "/images/icons/radial-bar-icon/icon-2.png",
            imageWidth: 90,
            imageHeight: 90,
            imageClipped: false,
          },
          dataLabels: {
            show: true,
            name: { show: false },
            value: { show: false },
          },
        },
      },
      stroke: { lineCap: "round" },
      colors: [hexToRGB(getLocalStorageItem("color-secondary", "#626262"), 1)],
      labels: ["Secondary"],
    },
  },
  {
    label: "Success",
    series: [57],
    height: 190,
    width: 200,
    textClass: "text-success",
    options: {
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 15,
            size: "70%",
            image: "/images/icons/radial-bar-icon/icon-3.png",
            imageWidth: 90,
            imageHeight: 90,
            imageClipped: false,
          },
          dataLabels: {
            show: true,
            name: { show: false },
            value: { show: false },
          },
        },
      },
      stroke: { lineCap: "round" },
      colors: ["rgba(var(--success),1)"],
      labels: ["Success"],
    },
  },
  {
    label: "Danger",
    series: [78],
    height: 210,
    width: 200,
    textClass: "text-danger",
    options: {
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 15,
            size: "65%",
            image: "/images/icons/radial-bar-icon/icon-4.png",
            imageWidth: 110,
            imageHeight: 110,
            imageClipped: false,
          },
          dataLabels: {
            show: true,
            name: { show: false },
            value: { show: false },
          },
        },
      },
      stroke: { lineCap: "round" },
      colors: ["rgba(var(--danger),1)"],
      labels: ["Danger"],
    },
  },
  {
    label: "Warning",
    series: [88],
    height: 230,
    width: 200,
    textClass: "text-warning",
    options: {
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 15,
            size: "60%",
            image: "/images/icons/radial-bar-icon/icon-5.png",
            imageWidth: 110,
            imageHeight: 110,
            imageClipped: false,
          },
          dataLabels: {
            show: true,
            name: { show: false },
            value: { show: false },
          },
        },
      },
      stroke: { lineCap: "round" },
      colors: ["rgba(var(--warning),1)"],
      labels: ["Warning"],
    },
  },
  {
    label: "Info",
    series: [95],
    height: 250,
    width: 200,
    textClass: "text-info",
    options: {
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 15,
            size: "55%",
            image: "/images/icons/radial-bar-icon/icon-6.png",
            imageWidth: 110,
            imageHeight: 110,
            imageClipped: false,
          },
          dataLabels: {
            show: true,
            name: { show: false },
            value: { show: false },
          },
        },
      },
      stroke: { lineCap: "round" },
      colors: ["rgba(var(--info),1)"],
      labels: ["Info"],
    },
  },
  {
    label: "Dark",
    series: [100],
    height: 280,
    width: 200,
    textClass: "text-dark",
    options: {
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 15,
            size: "55%",
            image: "/images/icons/radial-bar-icon/icon-8.png",
            imageWidth: 120,
            imageHeight: 120,
            imageClipped: false,
          },
          dataLabels: {
            show: true,
            name: { show: false },
            value: { show: false },
          },
        },
      },
      stroke: { lineCap: "round" },
      colors: ["rgba(var(--dark),1)"],
      labels: ["Dark"],
    },
  },
];
export {
  basicRadialBarChartData,
  multipleRadialBarsChartData,
  circleAngleRadialChartData,
  strokedCircularGaugeChartData,
  semiCircularGaugeChartData,
  circleChartWithImageData,
  customSizedRadialBars,
};
