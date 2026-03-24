import React from "react";
import { Card, Col, Row } from "react-bootstrap";

interface GridSection {
  title: string;
  colSize: string;
  rows: { className: string; text: string }[][];
}

const gridSections: GridSection[] = [
  {
    title: "Grid For Column",
    colSize: "xs=12",
    rows: [[6, 6], [7, 5], [8, 4], [9, 3], [10, 2], [11, 1], [12]].map((pair) =>
      pair.map((val) => ({
        className: `col-md-${val}`,
        text: `col-md-${val}`,
      }))
    ),
  },
  {
    title: "Equal-width",
    colSize: "lg=6",
    rows: [
      [1, 2].map(() => ({ className: "col-6", text: "col-md-6" })),
      [1, 2, 3].map(() => ({ className: "col-4", text: "col-md-4" })),
    ],
  },
  {
    title: "Setting one column width",
    colSize: "lg=6",
    rows: [
      [
        { className: "col", text: "col-md-3" },
        { className: "col-6", text: "col-md-6 (wider)" },
        { className: "col", text: "col-md-3" },
      ],
      [
        { className: "col", text: "col" },
        { className: "col-5", text: "col-md-5 (wider)" },
        { className: "col", text: "col" },
      ],
    ],
  },
  {
    title: "Variable width content",
    colSize: "lg=6",
    rows: [
      [
        { className: "col col-lg-4", text: "col-lg-4" },
        { className: "col-md-auto", text: "col-md-auto" },
        { className: "col col-lg-4", text: "col-lg-4" },
      ],
      [
        { className: "col", text: "col" },
        { className: "col-md-auto", text: "col-md-auto" },
        { className: "col col-lg-2", text: "col-lg-2" },
      ],
    ],
  },
  {
    title: "All Breakpoints",
    colSize: "lg=6",
    rows: [
      [1, 2, 3, 4].map(() => ({ className: "col", text: "col" })),
      [
        { className: "col-8", text: "col" },
        { className: "col-4", text: "col-4" },
      ],
    ],
  },
];

const GridExamples: React.FC = () => {
  return (
    <>
      {gridSections.map((section, sectionIndex) => {
        const [sizeKey, sizeVal] = section.colSize.split("=");
        const colProps = { [sizeKey]: parseInt(sizeVal), className: "mb-4" };

        return (
          <Col key={sectionIndex} {...colProps}>
            <Card>
              <Card.Header>
                <h5 className="card-title m-1">{section.title}</h5>
              </Card.Header>
              <Card.Body>
                {section.rows.map((row, rowIndex) => (
                  <Row
                    key={rowIndex}
                    className={`flex-wrap ${rowIndex > 0 ? "mt-3" : ""}`}
                  >
                    {row.map((col, colIndex) => (
                      <div className={col.className} key={colIndex}>
                        <div className="text-center p-2 bg-light-secondary b-r-22 mb-2">
                          {col.text}
                        </div>
                      </div>
                    ))}
                  </Row>
                ))}
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </>
  );
};

export default GridExamples;
