import React, { useEffect, useRef } from "react";
import { Card, Col } from "react-bootstrap";

import Sortable from "sortablejs";

interface NestedItem {
  id: string | number;
  title: string;
  children?: NestedItem[];
  variant?: string;
}

interface Props {
  items: NestedItem[];
  variantMode?: boolean;
}

const NestedSortableList: React.FC<Props> = ({
  items,
  variantMode = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    containerRef.current?.querySelectorAll(".nested-sortable").forEach((el) => {
      new Sortable(el as HTMLElement, {
        group: "nested",
        animation: 150,
        fallbackOnBody: true,
        swapThreshold: 0.65,
        onSort: (e) => {
          const result = Array.from(e.to.children).map((item) =>
            (item as HTMLElement).getAttribute("data-id")
          );
          console.log("Sorted IDs:", result);
        },
      });
    });
  }, []);

  const renderList = (list: NestedItem[]) => (
    <div className="list-group nested-sortable">
      {list.map((item) => {
        const hasChildren = item.children && item.children.length > 0;
        const variantClass = variantMode
          ? `bg-light-${item.variant || "primary"}`
          : "";
        return (
          <div
            key={item.id}
            data-id={item.id}
            className={`list-group-item ${variantClass}`}
          >
            {variantMode && (
              <i
                className={`ph-bold ${
                  hasChildren ? "ph-plus me-3" : "ph-minus me-3"
                }`}
              ></i>
            )}
            {item.title}
            {hasChildren && renderList(item.children!)}
          </div>
        );
      })}
    </div>
  );

  return <div ref={containerRef}>{renderList(items)}</div>;
};

const nestedListData: NestedItem[] = [
  { id: 1, title: "Tital 1" },
  { id: 2, title: "Tital 2" },
  {
    id: 3,
    title: "Tital3",
    children: [
      { id: 4, title: "Tital 4" },
      { id: 5, title: "Tital 5" },
      { id: 6, title: "Tital 6" },
    ],
  },
  { id: 7, title: "Tital 7" },
  { id: 8, title: "Tital 8" },
  {
    id: 10,
    title: "Tital10",
    children: [
      { id: 11, title: "Tital 11" },
      { id: 12, title: "Tital 12" },
    ],
  },
];

// Helper function to assign a random color variant
function getRandomVariant() {
  const variants = [
    "primary",
    "success",
    "secondary",
    "danger",
    "info",
    "warning",
    "dark",
  ];
  return variants[Math.floor(Math.random() * variants.length)];
}

// Main App component
export default function App() {
  return (
    <div className="row">
      <Col xxl={6}>
        <Card>
          <Card.Header>
            <h5>Nestable List</h5>
          </Card.Header>
          <Card.Body>
            <NestedSortableList items={nestedListData} />
          </Card.Body>
        </Card>
      </Col>

      <Col xxl={6}>
        <Card>
          <Card.Header>
            <h5>Colour Variant Nestable List</h5>
          </Card.Header>
          <Card.Body>
            <NestedSortableList
              items={nestedListData.map((item) => ({
                ...item,
                variant: getRandomVariant(),
              }))}
              variantMode
            />
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}
