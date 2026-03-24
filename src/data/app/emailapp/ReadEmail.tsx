import { JSX } from "react";

export type EmailType = {
  from: string;
  to: string;
  cc: string;
  date: string;
  time: string;
  subject: string;
  body: string | JSX.Element;
  files: {
    icon: string;
    title: string;
    details: string;
  }[];
};

export const emailList: EmailType[] = [
  {
    from: "arteam@gmail.com",
    to: "bettehagenes@gmail.com",
    cc: "bettehagenes@gmail.com",
    date: "29 Sep 2024",
    time: "4:00 PM",
    subject: "meeting invitation",
    body: (
      <div>
        <div className="mb-3">
          <h6>Hello! Bette</h6>
        </div>
        <div className="mb-3 text-secondary">
          <p>
            I hope you're doing well. I would like to schedule a one-on-one
            meeting with you to <strong>discussing a new project</strong>. I'll
            send over the agenda in advance.
          </p>
          <p>
            The meeting will be in my office, will you be available one-on-one{" "}
            <strong>10 Oct, 2024 at 10PM?</strong> It's important that we have
            this meeting so that we can continue to work effectively together.
          </p>
        </div>
        <div className="mb-3 text-secondary">
          <p>I hope you can make it!</p>
          <p>Best,</p>
        </div>
        <p className="text-dark fw-bold">AR team</p>
      </div>
    ),
    files: [
      {
        icon: "/images/icons/file-manager-icon/file.png",
        title: "Meeting Paper's",
        details: "1MB",
      },
    ],
  },
  {
    from: "designlead@gmail.com",
    to: "bettehagenes@gmail.com",
    cc: "mark@company.com",
    date: "30 Sep 2024",
    time: "2:30 PM",
    subject: "design updates",
    body: `Please find attached the latest design components and updates. Let me know your thoughts,
and if we should schedule a review session. Thanks!`,
    files: [
      {
        icon: "/images/icons/file-manager-icon/folder.png",
        title: "Figma Assets",
        details: "8 Files",
      },
    ],
  },
];
