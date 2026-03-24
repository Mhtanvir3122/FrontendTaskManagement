import React from "react";

import { CertificateIcon } from "@phosphor-icons/react";
import { CurrencyCircleDollar, UserCirclePlus, XCircle } from "phosphor-react";

export interface StatCard {
  id: number;
  value: string;
  title: string;
  badgeText: string;
  icon: React.ReactElement;
  bgColor: string;
  textColor: string;
  badgeBg: string;
}

export const statCards: StatCard[] = [
  {
    id: 1,
    value: "1.2M",
    title: "Total Sales",
    badgeText: "View Report",
    icon: <CurrencyCircleDollar size={24} />,
    bgColor: "primary",
    textColor: "primary",
    badgeBg: "light-primary",
  },
  {
    id: 2,
    value: "125",
    title: "Canceled Orders",
    badgeText: "Refunded",
    icon: <XCircle size={24} />,
    bgColor: "danger",
    textColor: "danger",
    badgeBg: "light-danger",
  },
  {
    id: 3,
    value: "95%",
    title: "Top Product",
    badgeText: "watch X200",
    icon: <CertificateIcon size={24} />,
    bgColor: "warning",
    textColor: "warning",
    badgeBg: "light-dark",
  },
  {
    id: 4,
    value: "8.5k",
    title: "New Customers",
    badgeText: "Active",
    icon: <UserCirclePlus size={24} />,
    bgColor: "success",
    textColor: "success",
    badgeBg: "light-success",
  },
];

export interface TimelineItem {
  id: number;
  title: string;
  date: string;
  time: string;
  icon: string;
  isCompleted: boolean;
  iconBg?: string;
  iconTextColor?: string;
}

export const timelineItems: TimelineItem[] = [
  {
    id: 1,
    title: "Order Placed",
    date: "Feb 14/25",
    time: "10:15 AM",
    icon: "ph-fill ph-shopping-bag-open f-s-18",
    isCompleted: true,
  },
  {
    id: 2,
    title: "Order Confirmed",
    date: "Feb 14/25",
    time: "10:30 AM",
    icon: "ph-fill ph-seal-check f-s-18",
    isCompleted: true,
  },
  {
    id: 3,
    title: "Shipped via Courier",
    date: "Feb 15/25",
    time: "9:00 AM",
    icon: "ph-fill ph-truck f-s-18",
    isCompleted: false,
    iconBg: "bg-light-secondary",
    iconTextColor: "text-dark-400",
  },
  {
    id: 4,
    title: "Delivered",
    date: "Feb 18/25",
    time: "3:45 PM",
    icon: "ph-fill ph-house f-s-18",
    isCompleted: false,
    iconBg: "bg-light-secondary",
    iconTextColor: "text-dark-400",
  },
];

interface Notification {
  id: number;
  type: "header" | "item";
  title?: string;
  subtitle?: string;
  message?: string;
  time?: string;
  icon?: string;
  badgeCount?: number;
  avatarText?: string;
  avatarBg?: string;
  avatarImage?: string;
}

export const notifications: Notification[] = [
  {
    id: 1,
    type: "header",
    title: "Order Notifications List",
    subtitle: "Last 2H Updates",
    icon: "ph ph-bell-ringing f-s-20",
    badgeCount: 4,
  },
  {
    id: 2,
    type: "item",
    message: "New Order Received",
    time: "5 min ago",
    avatarText: "OR",
    avatarBg: "bg-primary",
  },
  {
    id: 3,
    type: "item",
    message: "Order #1024 has been shipped",
    time: "10 min ago",
    avatarImage: "/images/avatar/2.png",
    avatarBg: "bg-success-400",
  },
  {
    id: 4,
    type: "item",
    message: "Order #1022 has been canceled",
    time: "20 min ago",
    avatarImage: "/images/avatar/5.png",
    avatarBg: "bg-danger-400",
  },
  {
    id: 5,
    type: "item",
    message: "Order #1022 has been canceled",
    time: "20 min ago",
    avatarImage: "/images/avatar/5.png",
    avatarBg: "bg-danger-400",
  },
];
