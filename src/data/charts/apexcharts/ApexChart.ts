import { ApexOptions } from "apexcharts";

const timeSpentData: ApexOptions = {
  series: [
    {
      name: "Spent Time",
      type: "column",
      data: [35, 45, 32, 40, 35, 38, 40],
    },
    {
      name: "Total Time",
      type: "line",
      data: [30, 25, 36, 30, 40, 35],
    },
  ],
  chart: {
    height: 280,
    type: "line",
    stacked: false,
  },
  annotations: {
    points: [
      {
        x: "S",
        y: 35,
        marker: {
          size: 5,
          strokeColor: "rgba(var(--warning),1)",
          strokeWidth: 4,
          cssClass: "marker-warning",
        },
      },
    ],
  },
  stroke: {
    width: [0, 2, 5],
    curve: "smooth",
  },
  plotOptions: {
    bar: {
      columnWidth: "26",
    },
  },
  legend: {
    show: false,
  },
  colors: ["rgba(var(--warning),1)"],
  fill: {
    type: ["gradient", "solid"],
    opacity: [0.8, 0.1],
    gradient: {
      inverseColors: false,
      shade: "light",
      type: "vertical",
      opacityFrom: 0.1,
      opacityTo: 0.1,
      colorStops: [
        {
          offset: 0,
          color: "rgba(var(--primary),.1)",
          opacity: 1,
        },
        {
          offset: 50,
          color: "rgba(var(--primary),.1)",
          opacity: 1,
        },
        {
          offset: 100,
          color: "rgba(var(--primary),.1)",
          opacity: 1,
        },
      ],
    },
  },
  markers: {
    size: 0,
  },
  xaxis: {
    type: "category",
    categories: ["M", "T", "W", "T", "F", "S", "S"],
    tooltip: {
      enabled: false,
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  grid: {
    show: false,
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  tooltip: {
    x: {
      show: false,
    },
    style: {
      fontSize: "16px",
      fontFamily: '"Outfit", sans-serif',
    },
  },
  // responsive: [{
  //   breakpoint: 1440,
  //   options: {
  //     chart: {
  //       height: 200
  //     },
  //   }
  // }]
};

const ApiRequestData: ApexOptions = {
  series: [
    {
      name: "",
      data: [
        19.0, 20, 19.8, 19, 19.67, 19.45, 20.99, 30.45, 19.45, 19.09, 19.8,
        19.6, 20, 20.89, 21.4, 19.09, 20.8, 23.78, 25.0, 20, 19.65, 25, 24.89,
        23, 19.0, 19.56, 20.36, 22.9, 24.9, 19.78,
      ],
    },
  ],
  chart: {
    type: "area",
    height: 350,
    offsetY: 0,
    offsetX: 0,
    toolbar: {
      show: false,
    },
  },
  stroke: {
    width: 2,
    curve: "smooth",
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      colorStops: [
        {
          offset: 0,
          color: "rgba(var(--info),.4)",
          opacity: 1,
        },
        {
          offset: 50,
          color: "rgba(var(--info),.4)",
          opacity: 1,
        },
        {
          offset: 100,
          color: "rgba(var(--info),.1)",
          opacity: 1,
        },
      ],
    },
  },
  legend: {
    show: false,
  },
  colors: ["rgba(var(--info))"],
  xaxis: {
    tooltip: {
      enabled: false,
    },
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  tooltip: {
    x: {
      show: false,
    },
    style: {
      fontSize: "16px",
      fontFamily: '"Outfit", sans-serif',
    },
  },
  responsive: [
    {
      breakpoint: 1660,
      options: {
        chart: {
          height: 365,
        },
      },
    },
  ],
};

export { timeSpentData, ApiRequestData };
