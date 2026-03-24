import React, { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { StackIcon } from "@phosphor-icons/react";
import Muuri from "muuri";
import {
  ChartLineUp,
  ChatText,
  CheckCircle,
  CheckSquareOffset,
  Eye,
  List,
  ListBullets,
} from "phosphor-react";

import Breadcrumbs from "@/components/breadcrumb/Breadcrumb.tsx";

interface Task {
  id: string;
  title: string;
  dueDate: string;
  comments: number;
  progress: string;
  image?: string;
}

interface Column {
  id: string;
  title: string;
  icon: React.ReactNode | string;
  items: Task[];
}

const KanbanBoardCard: React.FC = () => {
  const boardRef = useRef<HTMLDivElement>(null);
  const columnRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const columnGridsRef = useRef<Muuri[]>([]);
  const boardGridRef = useRef<Muuri | null>(null);

  const columns: Column[] = [
    {
      id: "1",
      title: "To Do",
      icon: <ListBullets size={18} weight="bold" />,
      items: [
        {
          id: "1",
          title: "Create homepage wireframe.",
          dueDate: "Nov 22",
          comments: 2,
          progress: "1/2",
          image: undefined,
        },
        {
          id: "2",
          title: "Draft new article content.",
          dueDate: "Dec 19",
          comments: 2,
          progress: "1/2",
          image: "/images/profile-app/07.jpg",
        },
        {
          id: "3",
          title: "Analyze client comments.",
          dueDate: "Sep 28",
          comments: 2,
          progress: "1/2",
          image: undefined,
        },
      ],
    },
    {
      id: "2",
      title: "IN PROGRESS",
      icon: <ChartLineUp size={18} weight="bold" />,
      items: [
        {
          id: "4",
          title: "Prepare email marketing.",
          dueDate: "Jul 10",
          comments: 2,
          progress: "1/2",
          image: "/images/profile-app/10.jpg",
        },
      ],
    },
    {
      id: "3",
      title: "REVIEW",
      icon: <Eye size={18} weight="bold" />,
      items: [
        {
          id: "5",
          title: "Revise product listings.",
          dueDate: "Mar 27",
          comments: 2,
          progress: "1/2",
          image: undefined,
        },
        {
          id: "6",
          title: "Create initial app mockup.",
          dueDate: "Apr 09",
          comments: 2,
          progress: "1/2",
          image: undefined,
        },
      ],
    },
    {
      id: "4",
      title: "DONE",
      icon: <CheckSquareOffset size={18} weight="bold" />,
      items: [
        {
          id: "7",
          title: "Compile financial data.",
          dueDate: "Jul 24",
          comments: 2,
          progress: "1/2",
          image: "/images/profile-app/05.jpg",
        },
      ],
    },
    {
      id: "5",
      title: "TESTED",
      icon: <CheckCircle size={18} weight="bold" />,
      items: [
        {
          id: "8",
          title: "Gather market insights.",
          dueDate: "Oct 04",
          comments: 2,
          progress: "1/2",
          image: "/images/profile-app/09.jpg",
        },
        {
          id: "9",
          title: "Improve page load times.",
          dueDate: "Aug 23",
          comments: 2,
          progress: "1/2",
          image: undefined,
        },
      ],
    },
  ];

  useEffect(() => {
    const initKanban = () => {
      columnGridsRef.current = Object.values(columnRefs.current)
        .filter((col): col is HTMLDivElement => !!col)
        .map((col) =>
          new Muuri(col, {
          items: ".board-item",
          layoutDuration: 400,
          layoutEasing: "ease",
          dragEnabled: true,
          dragSort: () => columnGridsRef.current,
          dragContainer: document.body,
          dragRelease: { duration: 400, easing: "ease" },
        })
          .on("dragStart", (item) => {
            const element = item.getElement();
            if (element) {
              element.style.width = `${item.getWidth()}px`;
              element.style.height = `${item.getHeight()}px`;
            }
          })
          .on("dragReleaseEnd", (item) => {
            const element = item.getElement();
            if (element) {
              element.style.width = "";
              element.style.height = "";
            }
            columnGridsRef.current.forEach((grid) => grid.refreshItems());
          })
          .on("layoutStart", () => {
              boardGridRef.current?.refreshItems().layout();
            })
        );

      // Initialize board grid
      if (boardRef.current) {
        boardGridRef.current = new Muuri(boardRef.current, {
          layout: {
            horizontal: true,
          },
          layoutDuration: 400,
          layoutEasing: "ease",
          dragEnabled: true,
          dragContainer: document.body,
          dragRelease: {
            duration: 400,
            easing: "ease",
          },
          dragStartPredicate: (
            _item: Muuri.Item,
            event: Muuri.DraggerEvent
          ) => {
            const target = event.target as HTMLElement;
            return !!target.closest(".board-column-header");
          },
        });
      }
    };

    // Initialize after a small delay to ensure DOM is ready
    const timer = setTimeout(initKanban, 100);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      columnGridsRef.current.forEach((grid) => grid.destroy());
      boardGridRef.current?.destroy();
    };
  }, []);

  return (
    <Container fluid>
      <Breadcrumbs
        mainTitle="Kanban Board"
        title="Apps"
        path={["Kanban Board"]}
        Icon={StackIcon}
      />
      <Row>
        <Col sm="12">
          <div className="kanban-board-container app-scroll">
            <div className="board" ref={boardRef}>
              {columns.map((column) => (
                <div key={column.id} className="board-column app-scroll">
                  <div className="board-column-header">
                    <span className="me-2">{column.icon}</span>
                    {column.title}
                  </div>
                  <div className="board-column-content-wrapper">
                    <div className="board-column-content"
                      ref={(el) => {columnRefs.current[column.id] = el}}
                    >
                      {column.items.map((task) => (
                        <div key={task.id} className="board-item">
                          <div
                            className={`board-item-content ${task.image ? "p-0" : ""}`}
                          >
                            {task.image && (
                              <div className="board-images">
                                <img
                                  alt="img"
                                  className="img-fluid"
                                  src={task.image}
                                />
                              </div>
                            )}
                            <div className={task.image ? "p-3" : ""}>
                              <h6 className="mb-0">{task.title}</h6>
                              <div className="board-footer d-flex align-items-center gap-2">
                                <span className="badge bg-light-danger f-s-14">
                                  <i className="ph-bold ph-clock-afternoon" />
                                  {task.dueDate}
                                </span>
                                <List
                                  size={16}
                                  weight="bold"
                                  className="me-2 text-muted"
                                />
                                <span className="f-s-14 me-2 d-flex align-items-center">
                                  <ChatText
                                    size={16}
                                    weight="bold"
                                    className="me-1"
                                  />
                                  {task.comments}
                                </span>
                                <span className="badge bg-light-primary f-s-14">
                                  <i className="ph-bold ph-check-square-offset" />
                                  {task.progress}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default KanbanBoardCard;
