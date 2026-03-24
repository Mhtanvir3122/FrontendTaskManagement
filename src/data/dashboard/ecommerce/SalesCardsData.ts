export interface PurchaseItem {
  id: number;
  name: string;
  brand: string;
  price: string;
  image: string;
}

export interface BrandItem {
  id: number;
  name: string;
  category: string;
  rating: string;
  ratingColor: string;
  image: string;
}

// Recent purchases data
export const recentPurchases: PurchaseItem[] = [
  {
    id: 1,
    name: "Headphones",
    brand: "AudioTech",
    price: "$120",
    image: "/images/dashboard/ecommerce-dashboard/product/02.png",
  },
  {
    id: 2,
    name: "Digital Camera",
    brand: "LensPro",
    price: "$350",
    image: "/images/dashboard/ecommerce-dashboard/product/03.png",
  },
  {
    id: 3,
    name: "Smart Watch",
    brand: "TechWear",
    price: "$199",
    image: "/images/dashboard/ecommerce-dashboard/product/01.png",
  },
];

// Top brands data
export const topBrands: BrandItem[] = [
  {
    id: 1,
    name: "Stylique",
    category: "Clothing",
    rating: "96.85%",
    ratingColor: "light-primary",
    image: "/images/dashboard/ecommerce-dashboard/product/04.png",
  },
  {
    id: 2,
    name: "Techspire",
    category: "Electronics",
    rating: "89.42%",
    ratingColor: "light-success",
    image: "/images/dashboard/ecommerce-dashboard/product/06.png",
  },
  {
    id: 3,
    name: "TrekVibe",
    category: "Bag's",
    rating: "74.30%",
    ratingColor: "light-danger",
    image: "/images/dashboard/ecommerce-dashboard/product/07.png",
  },
];

export const earningChartOptions = {
  series: [
    {
      name: "sales",
      type: "bar",
      data: [44, 55, 41, 67, 22, 43, 53, 22, 12, 65],
    },
    {
      name: "order",
      type: "bar",
      data: [-13, -23, -20, -8, -13, -27, -24, -15, -17, -25],
    },
  ],
  options: {
    chart: {
      height: 242,
      type: "bar" as const,
      stacked: true,
      fontFamily: '"Rubik", serif',
      offsetX: 0,
      offsetY: 0,
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["rgba(var(--primary), 0.8)", "rgba(var(--danger), 0.8)"],
    grid: {
      borderColor: "rgba(var(--dark),0.1)",
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
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "20%",
        borderRadius: 2,
        dataLabels: {
          total: {
            enabled: false,
            style: {
              fontSize: "12px",
              fontWeight: 900,
            },
          },
        },
      },
    },
    legend: {
      show: false,
    },
    xaxis: {
      show: false,
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
        "Dec",
      ],
      axisBorder: {
        show: false,
      },
      labels: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      labels: {
        show: false,
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      x: {
        show: false,
      },
      style: {
        fontSize: "16px",
      },
    },
  },
};
