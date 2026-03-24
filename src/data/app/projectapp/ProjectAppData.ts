export interface Project {
  id: number;
  title: string;
  subtitle: string;
  logo: string;
  startDate: string;
  endDate: string;
  price: string;
  description: string;
  status: string;
  progress: number;
  progressColor: string;
  members: number;
  avatars: string[];
  moreMembers: number;
  category: "designing" | "development" | "all";
}

export const projectsAppData: Project[] = [
  {
    id: 1,
    title: "Web Designing",
    subtitle: "Admin",
    logo: "/images/icons/language/logo1.png",
    startDate: "2024-09-24",
    endDate: "2024-12-05",
    price: "$10k",
    description:
      "I am a keen, hardworking, reliable and excellent timekeeper...",
    status: "Progress",
    progress: 50,
    progressColor: "primary",
    members: 20,
    avatars: [
      "/images/avatar/4.png",
      "/images/avatar/1.png",
      "/images/avatar/2.png",
      "/images/avatar/3.png",
    ],
    moreMembers: 5,
    category: "designing",
  },
  {
    id: 2,
    title: "Designing",
    subtitle: "Prototyping",
    logo: "/images/icons/language/logo2.png",
    startDate: "2024-02-03",
    endDate: "2024-04-05",
    price: "$280",
    description:
      "I am a keen, hardworking, reliable and excellent timekeeper...",
    status: "Completed",
    progress: 100,
    progressColor: "success",
    members: 10,
    avatars: ["/images/avatar/4.png", "/images/avatar/1.png"],
    moreMembers: 5,
    category: "designing",
  },
  {
    id: 3,
    title: "Designing",
    subtitle: "Dashboard",
    logo: "/images/icons/language/logo3.png",
    startDate: "2024-10-10",
    endDate: "2024-02-16",
    price: "$100k",
    description:
      "I am a keen, hard working, reliable and excellent time keeper...",
    status: "New",
    progress: 0,
    progressColor: "danger",
    members: 25,
    avatars: [
      "/images/avatar/4.png",
      "/images/avatar/1.png",
      "/images/avatar/5.png",
    ],
    moreMembers: 10,
    category: "designing",
  },
  {
    id: 4,
    title: "Web Development",
    subtitle: "Weather Application",
    logo: "/images/icons/language/logo4.png",
    startDate: "2024-06-16",
    endDate: "2024-01-01",
    price: "$400k",
    description:
      "I am a keen, hard working, reliable and excellent time keeper...",
    status: "Progress",
    progress: 40,
    progressColor: "primary",
    members: 34,
    avatars: [
      "/images/avatar/4.png",
      "/images/avatar/1.png",
      "/images/avatar/5.png",
    ],
    moreMembers: 10,
    category: "development",
  },
  {
    id: 5,
    title: "Vue.js Development",
    subtitle: "Application Designing",
    logo: "/images/icons/language/logo5.png",
    startDate: "2024-06-16",
    endDate: "2024-01-01",
    price: "$200k",
    description:
      "I am a keen, hard working, reliable and excellent time keeper...",
    status: "Progress",
    progress: 50,
    progressColor: "primary",
    members: 15,
    avatars: [
      "/images/avatar/4.png",
      "/images/avatar/1.png",
      "/images/avatar/5.png",
    ],
    moreMembers: 10,
    category: "development",
  },
  {
    id: 6,
    title: "Designing",
    subtitle: "Logo Designing",
    logo: "/images/icons/language/logo6.png",
    startDate: "2024-07-16",
    endDate: "2024-09-26",
    price: "$400",
    description:
      "I am a keen, hard working, reliable and excellent time keeper...",
    status: "Progress",
    progress: 75,
    progressColor: "success",
    members: 5,
    avatars: [
      "/images/avatar/4.png",
      "/images/avatar/1.png",
      "/images/avatar/5.png",
    ],
    moreMembers: 2,
    category: "designing",
  },
];
