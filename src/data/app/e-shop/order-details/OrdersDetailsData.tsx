import {
  IconAward,
  IconCalendarMonth, IconChecks,
  IconCreditCard,
  IconDeviceMobile,
  IconFileInvoice,
  IconMail, IconPackage, IconShoppingCart,
  IconTruckDelivery,
} from "@tabler/icons-react";


export  const ordersCardData =[
  {
    id: 1,
    productName: "Men's Sports Shoes",
    productImage: "/images/ecommerce/11.jpg",
    color: "White",
    size: "Small",
    status: "CANCELLED",
    price: "$452.00",
    orderDate: "5 Apr,2024 6:05 PM",
    quantity: 3,
    rating: 2,
  },
    {
      id: 2,
      productName: "Watch",
      productImage: "/images/ecommerce/18.jpg",
      color: "Black",
      size: "XL",
      status: "DELIVERED",
      price: "$988.00",
      orderDate: "5 Sep,2024 5:11 PM",
      quantity: 2,
      rating: 2,
    },
    {
      id: 3,
      productName: "T-shirt",
      productImage: "/images/ecommerce/19.jpg",
      color: "Green",
      size: "Medium",
      status: "PICKUPS",
      price: "$452.00",
      orderDate: "15 Oct,2024 1:51 PM",
      quantity: 3,
      rating: 3,
    },
    {
      id: 4,
      productName: "Shoes for Men",
      productImage: "/images/ecommerce/28.jpg",
      color: "Black",
      size: "Small",
      status: "DELIVERED",
      price: "$400.00",
      orderDate: "19 Oct,2024 6:55 PM",
      quantity: 1,
      rating: 3,
    },
  ]

export const cardData = [
  {
    title: "Order Details (#12311)",
    items: [
      {
        icon: <IconCalendarMonth size={18} />,
        label: "Date",
        value: "01/1/2024",
      },
      {
        icon: <IconCreditCard size={18} />,
        label: "Payment",
        value: "Online",
      },
      {
        icon: <IconTruckDelivery size={18} />,
        label: "Shipping",
        value: "Fast Shipping",
      },
    ],
  },
  {
    title: "Customer Details",
    items: [
      {
        icon: <IconFileInvoice size={18} />,
        label: "Customer",
        value: "Chris Coyier",
      },
      {
        icon: <IconMail size={18} />,
        label: "Email",
        value: "dam@1234.com",
      },
      {
        icon: <IconDeviceMobile size={18} />,
        label: "Contact",
        value: "+1 111 134 111",
      },
    ],
  },
  {
    title: "Documents",
    items: [
      {
        icon: <IconFileInvoice size={18} />,
        label: "Invoice",
        value: "#ABC-101011",
      },
      {
        icon: <IconTruckDelivery size={18} />,
        label: "Shipping",
        value: "#AD-01009099",
      },
      {
        icon: <IconAward size={18} />,
        label: "Reward Points",
        value: "100",
      },
    ],
  },
];


export const orderTimelineData = [
  {
    icon: <IconShoppingCart size={18} />,
    iconClass: "text-light-primary",
    contentClass: "bg-light-primary b-1-primary",
    title: "Order Placed",
    titleClass: "text-primary",
    time: "20 Min ago",
    timeBadge: true,
    timeClass: "text-bg-primary",
    description: "An order has been placed.",
    date: "Wed, 15 Dec 2024 - 05:34PM",
    badges: [],
  },
  {
    icon: <IconChecks size={18} />,
    iconClass: "text-light-secondary",
    contentClass: "bg-light-secondary b-1-secondary",
    title: "Packed",
    titleClass: "text-secondary",
    time: "50 Min ago",
    timeBadge: false,
    timeClass: "color-light",
    description: "Your Item has been picked up by courier partner",
    date: "Thu, 20 Dec 2024 - 6:48AM",
    badges: ["Design", "HTML"],
  },
  {
    icon: <IconTruckDelivery size={18} />,
    iconClass: "text-light-success",
    contentClass: "bg-light-success b-1-success",
    title: "Shipping",
    titleClass: "text-success",
    time: "1 hours ago",
    timeBadge: true,
    timeClass: "text-bg-success",
    description: "Your Item has been picked up by courier partner",
    date: "Thu, 20 Dec 2024 - 5:48AM",
    badges: [],
  },
  {
    icon: <IconPackage size={18} />,
    iconClass: "text-light-info",
    contentClass: "bg-light-info b-1-info",
    title: "Delivered",
    titleClass: "text-info",
    time: "Nov 10, 14:00",
    timeBadge: true,
    timeClass: "text-bg-dark",
    description: "",
    date: "Mon, 26 Dec 2024 - 5:00AM",
    badges: [],
  },
];