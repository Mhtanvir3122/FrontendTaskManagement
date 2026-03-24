import { ApexOptions } from "apexcharts";

export interface TaskOverviewCard {
  id: number;
  day: string;
  date: string;
  borderColor: string;
  bgColor: string;
  badgeColor: string;
  textColor: string;
  providedTime: string;
  workingTime: string;
  badgeValue: string;
}

export interface ProjectTask {
  id: number;
  title: string;
  icon: string;
  iconBg: string;
}

// Task overview cards data
export const taskOverviewCards: TaskOverviewCard[] = [
  {
    id: 1,
    day: "Mon",
    date: "20",
    borderColor: "primary",
    bgColor: "primary",
    badgeColor: "primary",
    textColor: "primary",
    providedTime: "6 Day's",
    workingTime: "60M",
    badgeValue: "80",
  },
  {
    id: 2,
    day: "Fri",
    date: "22",
    borderColor: "success",
    bgColor: "success",
    badgeColor: "success",
    textColor: "success",
    providedTime: "8 Day's",
    workingTime: "40M",
    badgeValue: "152",
  },
  {
    id: 3,
    day: "Wed",
    date: "25",
    borderColor: "danger",
    bgColor: "danger",
    badgeColor: "danger",
    textColor: "danger",
    providedTime: "3 Week",
    workingTime: "80H",
    badgeValue: "200",
  },
];

// Project tasks data
export const projectTasksLeft: ProjectTask[] = [
  {
    id: 1,
    title: "New Task Assigned",
    icon: "/images/icons/language/logo1.png",
    iconBg: "danger-200",
  },
  {
    id: 2,
    title: "Database Migration",
    icon: "/images/icons/language/logo5.png",
    iconBg: "success-200",
  },
  {
    id: 3,
    title: "New Task Assigned",
    icon: "/images/icons/language/logo6.png",
    iconBg: "info-200",
  },
];

export const projectTasksRight: ProjectTask[] = [
  {
    id: 4,
    title: "API Development Phase",
    icon: "/images/icons/language/logo4.png",
    iconBg: "primary-200",
  },
  {
    id: 5,
    title: "UI/UX Design Update",
    icon: "/images/icons/language/logo3.png",
    iconBg: "danger-200",
  },
  {
    id: 6,
    title: "New Task Assigned",
    icon: "/images/icons/language/logo2.png",
    iconBg: "info-200",
  },
];

// Task overview chart options
export const taskOverviewOptions = (color: string): ApexOptions => ({
  series: [
    {
      name: "Tasks",
      data: [18.5, 19.2, 20, 19.5, 21, 20.8, 19.9],
    },
  ],
  chart: {
    type: "line",
    height: 40,
    width: 100,
    offsetY: 0,
    offsetX: 0,
    toolbar: { show: false },
    sparkline: { enabled: true },
  },
  stroke: {
    width: 2,
    curve: "smooth",
  },
  dataLabels: { enabled: false },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      colorStops: [
        { offset: 0, color: `rgba(var(--${color}),.4)`, opacity: 1 },
        { offset: 100, color: `rgba(var(--${color}),.1)`, opacity: 1 },
      ],
    },
  },
  colors: [`rgba(var(--${color}))`],
  yaxis: { show: false },
  grid: { show: false },
  tooltip: { enabled: false },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 40,
          width: 60,
        },
      },
    },
  ],
});
