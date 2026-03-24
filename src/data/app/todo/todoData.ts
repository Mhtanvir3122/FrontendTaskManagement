export interface TodoItem {
  id: number;
  task: string;
  priority: "High" | "Medium" | "Low";
  assign: string;
  date: string;
  notes: string;
  completed: boolean;
}

export const initialTodos: TodoItem[] = [
  {
    id: 1,
    task: "Design the homepage layout",
    priority: "High",
    assign: "Alex",
    date: "2021-03-19",
    notes: "Revamp homepage design",
    completed: false,
  },
  {
    id: 2,
    task: "Set up a meeting with the development team",
    priority: "High",
    assign: "Maria",
    date: "2020-01-19",
    notes: "Gather all invoices",
    completed: false,
  },
  {
    id: 3,
    task: "Create marketing strategy for Q2",
    priority: "Medium",
    assign: "John",
    date: "2021-04-10",
    notes: "Focus on social media",
    completed: true,
  },
  {
    id: 4,
    task: "Fix bugs reported by QA",
    priority: "High",
    assign: "Nina",
    date: "2021-03-25",
    notes: "Check login and dashboard issues",
    completed: false,
  },
  {
    id: 5,
    task: "Update user onboarding flow",
    priority: "Low",
    assign: "Leo",
    date: "2021-03-30",
    notes: "Simplify registration process",
    completed: false,
  },
  {
    id: 6,
    task: "Conduct customer satisfaction survey",
    priority: "Medium",
    assign: "Ava",
    date: "2021-04-05",
    notes: "Use Typeform for the survey",
    completed: false,
  },
  {
    id: 7,
    task: "Optimize images on product pages",
    priority: "Low",
    assign: "Sophia",
    date: "2021-03-22",
    notes: "Reduce image sizes to under 200KB",
    completed: false,
  },
  {
    id: 8,
    task: "Prepare financial report Q1",
    priority: "High",
    assign: "David",
    date: "2021-04-01",
    notes: "Include new revenue streams",
    completed: true,
  },
  {
    id: 9,
    task: "Develop mobile app prototype",
    priority: "Medium",
    assign: "Emma",
    date: "2021-04-15",
    notes: "Focus on user experience",
    completed: false,
  },
  {
    id: 10,
    task: "Conduct performance testing",
    priority: "High",
    assign: "Oliver",
    date: "2021-04-20",
    notes: "Ensure scalability for 10k users",
    completed: false,
  },
];
