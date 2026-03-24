import React from "react";
import { Badge, Card, ListGroup } from "react-bootstrap";

import {
  IconCircleCheck,
  IconClipboardCheck,
  IconClock,
  IconMessageCircle,
} from "@tabler/icons-react";

type TimelineItem = {
  variant: "primary" | "secondary" | "success" | "info" | "warning";
  icon: React.ReactElement;
  heading: string;
  timestamp: string;
  body: string;
  tags?: string[];
};

const timelineItems: TimelineItem[] = [
  {
    variant: "primary",
    icon: <IconCircleCheck size={20} />,
    heading: "Task finished",
    timestamp: "10 Min ago",
    body: "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog.",
  },
  {
    variant: "secondary",
    icon: <IconClock size={20} />,
    heading: "Task Overdue",
    timestamp: "50 Min ago",
    body: "Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz.",
    tags: ["Design", "HTML"],
  },
  {
    variant: "success",
    icon: <IconClipboardCheck size={20} />,
    heading: "New Task",
    timestamp: "10 hours ago",
    body: "Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim.",
  },
  {
    variant: "info",
    icon: <IconMessageCircle size={20} />,
    heading: "New Comment",
    timestamp: "Yesterday",
    body: "Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex.",
  },
  {
    variant: "warning",
    icon: <IconMessageCircle size={20} />,
    heading: "New Task",
    timestamp: "10 hours ago",
    body: "Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim.",
  },
];

const TimeLine1: React.FC = () => {
  return (
    <Card className="equal-card">
      <Card.Body>
        <ListGroup as="ul" className="app-timeline-box">
          {timelineItems.map((item, index) => (
            <ListGroup.Item as="li" key={index} className="timeline-section">
              {/* Icon Circle */}
              <div className="timeline-icon">
                <span
                  className={`text-light-${item.variant} h-35 w-35 d-flex-center b-r-50`}
                >
                  {item.icon}
                </span>
              </div>

              {/* Timeline Content */}
              <div
                className={`timeline-content bg-light-${item.variant} b-1-${item.variant} rounded`}
              >
                <div className="d-flex justify-content-between align-items-center timeline-flex">
                  <h6 className={`mt-2 text-${item.variant}`}>
                    {item.heading}
                  </h6>
                  <span className="text-dark">{item.timestamp}</span>
                </div>

                <p className="mt-2 text-dark">
                  {item.body}{" "}
                  <a className="text-primary" href="#">
                    [more info]
                  </a>
                </p>

                {item.tags && (
                  <div className="mt-1">
                    {item.tags.map((tag) => (
                      <Badge
                        key={tag}
                        bg="primary-900"
                        className="me-1 text-capitalize"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default TimeLine1;
