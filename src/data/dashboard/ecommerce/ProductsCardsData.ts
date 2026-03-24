export interface ProductImage {
  id: number;
  src: string;
  alt: string;
  rounded?: boolean;
  ribbon?: string;
}

export interface TagOption {
  id: number;
  label: string;
  checked: boolean;
}

// Product images data
export const productImages: ProductImage[] = [
  {
    id: 1,
    src: "/images/dashboard/ecommerce-dashboard/product/product-01.jpg",
    alt: "Product 1",
  },
  {
    id: 2,
    src: "/images/dashboard/ecommerce-dashboard/product/product-02.jpg",
    alt: "Product 2",
    ribbon: "Latest",
  },
  {
    id: 3,
    src: "/images/dashboard/ecommerce-dashboard/product/product-03.jpg",
    alt: "Product 3",
  },
  {
    id: 4,
    src: "/images/dashboard/ecommerce-dashboard/product/product-04.jpg",
    alt: "Product 4",
  },
  {
    id: 5,
    src: "/images/dashboard/ecommerce-dashboard/product/product-05.jpg",
    alt: "Product 5",
  },
  {
    id: 6,
    src: "/images/dashboard/ecommerce-dashboard/product/product-06.jpg",
    alt: "Product 6",
    rounded: true,
  },
];

// Tag options data
export const tagOptions: TagOption[] = [
  { id: 1, label: "New Arrivals", checked: true },
  { id: 2, label: "Best Sellers", checked: false },
  { id: 3, label: "Trending", checked: true },
  { id: 4, label: "Exclusive", checked: false },
  { id: 5, label: "On Sale", checked: true },
  { id: 6, label: "Free Shipping", checked: false },
];

export const revenueChartOptions = {
  series: [
    {
      type: "line",
      name: "This week",
      data: [1200, 1900, 3000, 2800, 3500, 4100, 4500],
    },
    {
      type: "area",
      name: "Last week",
      data: [1500, 1700, 2600, 2900, 3100, 3800, 4000],
    },
  ],
  options: {
    chart: {
      fontFamily: '"Rubik", serif',
      toolbar: { show: false },
    },
    colors: ["rgba(var(--primary),1)", "rgba(var(--danger),1)"],
    stroke: {
      curve: "smooth",
      width: 3,
    },
    fill: {
      type: ["solid", "gradient"],
      colors: ["#e14e5a"],
      gradient: {
        shadeIntensity: 0,
        opacityFrom: 0.8,
        opacityTo: 0.6,
        stops: [0, 90, 100],
      },
    },
    xaxis: {
      categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      labels: {
        style: {
          colors: "rgba(var(--dark),.8)",
          fontSize: "14px",
          fontWeight: 500,
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "rgba(var(--dark),.8)",
          fontSize: "14px",
        },
      },
    },
    grid: {
      borderColor: "rgba(var(--secondary),.4)",
      padding: {
        top: -20,
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
    },
    tooltip: {
      enabled: true,
      y: {
        formatter: function (value: number) {
          return "$" + value;
        },
      },
      x: {
        show: false,
      },
      style: {
        fontSize: "16px",
        fontFamily: '"Rubik", serif',
      },
    },
  } as ApexCharts.ApexOptions,
};
