import React from "react";

export interface Candidate {
  id: string;
  name: string;
  role: string;
  points: number;
  avatar: string;
  bgColor: string;
  checked: boolean;
}

export const candidatesData: Candidate[] = [
  {
    id: "1",
    name: "Savannah Nguyen",
    role: "Project Manager",
    points: 350,
    avatar: "/images/avatar/3.png",
    bgColor: "bg-danger-600",
    checked: false,
  },
  {
    id: "2",
    name: "Bette Hagenes",
    role: "Web Designer",
    points: 320,
    avatar: "/images/avatar/1.png",
    bgColor: "bg-info-600",
    checked: true,
  },
  {
    id: "3",
    name: "Esther Howard",
    role: "Software Engineer",
    points: 280,
    avatar: "/images/avatar/2.png",
    bgColor: "bg-warning-600",
    checked: false,
  },
];

export interface Client {
  id: string;
  name: string;
  points: string;
  avatar: string;
  bgColor: string;
}

export const clientsData: Client[] = [
  {
    id: "1",
    name: "rayyan-colin",
    points: "1240 points",
    avatar: "/images/avatar/6.png",
    bgColor: "bg-success-500",
  },
  {
    id: "2",
    name: "rayyan-colin",
    points: "1240 points",
    avatar: "/images/avatar/2.png",
    bgColor: "bg-warning-500",
  },
];

export interface Notification {
  id: string;
  title: string;
  time: string;
  avatar: string | React.ReactNode;
  bgColor: string;
  isInitials?: boolean;
}

export const projectNotificationsData: Notification[] = [
  {
    id: "1",
    title: "New project created",
    time: "2 min ago",
    avatar: "/images/avatar/5.png",
    bgColor: "bg-primary-500",
  },
  {
    id: "2",
    title: "Server maintenance scheduled",
    time: "1 hour ago",
    avatar: "/images/avatar/4.png",
    bgColor: "bg-secondary-500",
  },
  {
    id: "3",
    title: "New comment on your post",
    time: "3 hours ago",
    avatar: "JD",
    bgColor: "bg-danger-500",
    isInitials: true,
  },
];
