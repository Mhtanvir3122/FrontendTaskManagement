export const audienceChartOptions = {
  series: [22, 48, 16, 11],
  options: {
    chart: {
      height: 200,
      type: "donut",
    },
    plotOptions: {
      pie: {
        startAngle: 10,

        donut: {
          size: "80%",
          dataLabels: {
            enabled: false,
          },
        },
      },
    },
    labels: ["18 - 24 years", "25 - 40 years", "40 - 55 years", "55+ years"],
    colors: [
      "rgba(var(--primary),1)",
      "rgba(var(--primary),.8)",
      "rgba(var(--primary),.6)",
      "rgba(var(--primary),.4)",
    ],
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 180,
          },
        },
      },
    ],
  } as ApexCharts.ApexOptions,
};

export const updates = [
  {
    img: "/images/dashboard/ecommerce-dashboard/01.png",
    text: "Improve workflow efficiency with expert tips & tools!",
  },
  {
    img: "/images/dashboard/ecommerce-dashboard/01.png",
    text: "Track your budget, earnings, and expenses in real time.",
  },
  {
    img: "/images/dashboard/ecommerce-dashboard/01.png",
    text: "Boost productivity with smart project strategies! 🚀",
  },
];

export const profitOverviewOptions = {
  series: [
    {
      name: "Website Blog",
      type: "column",
      data: [20, 25, 30, 35, 40, 50, 60],
    },
    {
      name: "Social Media",
      type: "line",
      data: [25, 25, 50, 25, 40],
      stroke: {
        curve: "smooth",
        width: 2,
      },
    },
  ],
  options: {
    chart: {
      height: 180,
      type: "line",
    },
    colors: ["rgba(var(--white),1)", "rgba(var(--white),1)"],
    stroke: {
      curve: "smooth",
      width: [0, 2],
    },

    plotOptions: {
      bar: {
        columnWidth: "2px",
        distributed: true,
        // borderRadius: 8,
      },
    },
    yaxis: {
      show: false,
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
    xaxis: {
      show: true,
      categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      labels: {
        show: true,
        style: {
          colors: "#fff",
          fontSize: "12px",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
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
      enabled: false,
    },
    legend: {
      show: false,
    },
  } as ApexCharts.ApexOptions,
};
