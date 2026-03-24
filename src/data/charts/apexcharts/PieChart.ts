import { getLocalStorageItem } from "@/_helper";
import { ApexOptions } from "apexcharts";

const simplePieChartData = {
  series: [44, 55, 13, 43, 22],
  options: {
    chart: {
      fontFamily: 'Rubik", serif',
      height: 340,
      type: "pie",
    },
    tooltip: {
      x: {
        show: false,
      },
      style: {
        fontSize: "16px",
      },
    },
    colors: [
      getLocalStorageItem("color-primary", "#0F626A"),
      getLocalStorageItem("color-secondary", "#817D8D"),
      "#0AB964",
      "#4196FA",
      "#F9C123",
    ],
    labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
    legend: {
      position: "bottom",
    },
    responsive: [
      {
        breakpoint: 1366,
        options: {
          chart: {
            height: 250,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
  } as ApexOptions,
};
const simpleDonutChartData = {
  series: [44, 55, 41, 17, 15],
  options: {
    chart: {
      type: "donut",
      height: 340,
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      colors: [
        getLocalStorageItem("color-primary", "#0F626A"),
        getLocalStorageItem("color-secondary", "#817D8D"),
        "#0AB964",
        "#4196FA",
        "#F9C123",
        "#E14E5A",
        "#28232D",
        "#48443D",
      ],
    },
    fill: {
      colors: [
        getLocalStorageItem("color-primary", "#0F626A"),
        getLocalStorageItem("color-secondary", "#817D8D"),
        "#0AB964",
        "#4196FA",
        "#F9C123",
        "#E14E5A",
        "#28232D",
        "#48443D",
      ],
    },
    labels: ["Device 1", "Device 2", "Device 3", "Device 4"],
    colors: [
      getLocalStorageItem("color-primary", "#0F626A"),
      getLocalStorageItem("color-secondary", "#817D8D"),
      "#0AB964",
      "#4196FA",
      "#F9C123",
      "#E14E5A",
      "#28232D",
      "#48443D",
    ],
    responsive: [
      {
        breakpoint: 1366,
        options: {
          chart: {
            height: 240,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
    legend: {
      position: "bottom",
      offsetY: 0,
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
const gradientDonutChartData = {
  series: [44, 55, 41, 17],
  options: {
    chart: {
      fontFamily: 'Rubik", serif',
      height: 340,
      type: "donut",
    },
    colors: ["#0F626A", "#817D8D", "#0AB964", "#4196FA", "#F9C123"],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
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
const patternedDonutChartData = {
  series: [44, 55, 41, 17, 15],
  options: {
    chart: {
      fontFamily: 'Rubik", serif',
      height: 380,
      type: "donut",
      dropShadow: {
        enabled: true,
        color: "#111",
        top: -1,
        left: 3,
        blur: 3,
        opacity: 0.2,
      },
    },
    stroke: {
      width: 0,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            total: {
              showAlways: true,
              show: true,
            },
          },
        },
      },
    },
    labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],
    dataLabels: {
      dropShadow: {
        enabled: true,
        blur: 3,
        opacity: 0.8,
      },
    },
    fill: {
      type: "pattern",
      opacity: 1,
      pattern: {
        style: [
          "verticalLines",
          "squares",
          "horizontalLines",
          "circles",
          "slantedLines",
        ],
      },
    },
    states: {
      hover: {
        filter: {
          type: "none",
        },
      },
    },
    theme: {
      palette: "palette2",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  } as ApexOptions,
};
const imageFillPieChartData = {
  series: [44, 33, 54, 45],
  options: {
    chart: {
      height: 340,
      type: "pie",
    },
    colors: ["#0AB964", "#4196FA", "#F9C123", "#E14E5A"],
    fill: {
      type: "image",
      opacity: 0.85,
      image: {
        src: [
          "/images/blog-app/03.jpg",
          "/images/blog-app/03.jpg",
          "/images/blog-app/03.jpg",
          "/images/blog-app/03.jpg",
        ],
        width: 25,
        height: 25,
      },
    },
    stroke: {
      width: 4,
    },
    dataLabels: {
      enabled: true,
      style: {
        colors: ["#111"],
      },
      background: {
        enabled: true,
        foreColor: "#fff",
        borderWidth: 0,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  } as ApexOptions,
};

export {
  simplePieChartData,
  simpleDonutChartData,
  gradientDonutChartData,
  patternedDonutChartData,
  imageFillPieChartData,
};
