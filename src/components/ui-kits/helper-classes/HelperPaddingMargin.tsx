import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const paddingSizes = [
  { class: "pa-2", label: "Padding-2" },
  { class: "pa-4", label: "Padding-4" },
  { class: "pa-8", label: "Padding-8" },
  { class: "pa-10", label: "Padding-10" },
  { class: "pa-14", label: "Padding-14" },
  { class: "pa-16", label: "Padding-16" },
];
const paddingList = Array.from({ length: 40 }, (_, i) => ({
  class: `pa-${i + 1}`,
  label: `pa-${i + 1}`,
}));

const sidePaddingList = [
  { type: "Top", prefix: "pa-t" },
  { type: "Start", prefix: "pa-s" },
  { type: "End", prefix: "pa-e" },
  { type: "Bottom", prefix: "pa-b" },
].map((side) => ({
  type: side.type,
  items: [4, 8, 10, 14, 18, 20, 24, 28, 30, 34, 38, 40].map((size) => ({
    class: `${side.prefix}-${size}`,
    label: `${side.type} ${size}`,
  })),
}));

const marginSizes = [
  { class: "mg-40", label: "Margin-40" },
  { class: "mg-34", label: "Margin-34" },
  { class: "mg-30", label: "Margin-30" },
  { class: "mg-28", label: "Margin-28" },
  { class: "mg-24", label: "Margin-24" },
  { class: "mg-20", label: "Margin-20" },
  { class: "mg-14", label: "Margin-14" },
  { class: "mg-10", label: "Margin-10" },
  { class: "mg-4", label: "Margin-4" },
];

const marginList = Array.from({ length: 40 }, (_, i) => ({
  class: `mg-${i + 1}`,
  label: `mg-${i + 1}`,
}));

const sideMarginList = ["t", "s", "e", "b"].map((side) => ({
  type: side.toUpperCase(),
  items: [4, 8, 10, 14, 18, 20, 24, 28, 30, 34, 38, 40].map((size) => ({
    class: `mg-${side}-${size}`,
    label: `mg-${side.toUpperCase()}-${size}`,
  })),
}));
export const widthHeightData = [
  { width: 200, height: 200 },
  { width: 150, height: 150 },
  { width: 110, height: 110 },
  { width: 90, height: 90 },
  { width: 80, height: 80 },
  { width: 60, height: 60 },
  { width: 50, height: 50 },
];

const HelperPaddingMargin: React.FC = () => {
  return (
    <>
      <Col xs={12}>
        <Card>
          <Card.Header>
            <h5 className="f-w-600">Padding</h5>
            <div className="text-muted mt-2 f-s-15 ">
              Using{" "}
              <a href="#" className="text-decoration-underline text-dark">
                pa-*
              </a>{" "}
              class for Padding
            </div>
          </Card.Header>
          <Card.Body>
            <div className="text-center">
              <Row>
                {paddingSizes.map((pad, index) => (
                  <div className="col" key={index}>
                    <p className={`border ${pad.class} b-r-22`}>{pad.label}</p>
                  </div>
                ))}
              </Row>
            </div>
            <div className="app-divider-v">
              <h6>Padding List</h6>
            </div>
            <Row>
              {Array(4)
                .fill(0)
                .map((_, colIndex) => (
                  <div className="col-md-6 col-xl-3" key={colIndex}>
                    {paddingList
                      .slice(colIndex * 10, colIndex * 10 + 10)
                      .map((pad, i) => (
                        <p key={i}>- {pad.label}</p>
                      ))}
                  </div>
                ))}
            </Row>
          </Card.Body>
        </Card>
      </Col>

      <Col xs={12}>
        <Card>
          <Card.Header>
            <h5 className="f-w-600">Side Padding</h5>
            <div className="text-muted mt-2 f-s-15 ">
              Using{" "}
              <a href="#" className="text-decoration-underline text-dark">
                pd-t-*/pd-s-*/pd-e-*/pd-b-*
              </a>{" "}
              class for Padding
            </div>
          </Card.Header>
          <Card.Body>
            <Row>
              {sidePaddingList.map((side, index) => (
                <div className="col" key={index}>
                  <p
                    className={`border ${side.items[side.items.length - 1].class} b-r-22`}
                  >
                    {side.items[side.items.length - 1].label}
                  </p>
                </div>
              ))}
            </Row>
            <div className="app-divider-v">
              <h6>Side Padding List</h6>
            </div>
            <Row>
              {sidePaddingList.map((side, index) => (
                <Col md={6} xl={3} key={index}>
                  <p>- padding {side.type.toLowerCase()}</p>
                  {side.items.map((item, i) => (
                    <p key={i}>- {item.class}</p>
                  ))}
                </Col>
              ))}
            </Row>
          </Card.Body>
        </Card>
      </Col>

      <Col xs={12}>
        <Card>
          <Card.Header>
            <h5 className="f-w-600">Margin</h5>
            <div className="text-muted mt-2 f-s-15 ">
              Using{" "}
              <a href="#" className="text-decoration-underline text-dark">
                mg-*
              </a>{" "}
              class for Margin
            </div>
          </Card.Header>
          <Card.Body>
            <Row>
              {marginSizes.map((margin, index) => (
                <div className="col-auto mb-2" key={index}>
                  <div className="border b-r-22">
                    <div className={`${margin.class} txt-bg-primary`}>
                      {margin.label}
                    </div>
                  </div>
                </div>
              ))}
            </Row>
            <div className="app-divider-v">
              <h6>Margin List</h6>
            </div>
            <Row>
              {Array(4)
                .fill(0)
                .map((_, colIndex) => (
                  <div className="col-md-6 col-xl-3" key={colIndex}>
                    {marginList
                      .slice(colIndex * 10, colIndex * 10 + 10)
                      .map((margin, i) => (
                        <p key={i}>- {margin.label}</p>
                      ))}
                  </div>
                ))}
            </Row>
          </Card.Body>
        </Card>
      </Col>

      <Col xs={12}>
        <Card>
          <Card.Header>
            <h5 className="f-w-600">Side Margin</h5>
            <div className="text-muted mt-2 f-s-15 ">
              Using{" "}
              <a href="#" className="text-decoration-underline text-dark">
                mg-t-*/mg-s-*/mg-e-*/mg-b-*
              </a>{" "}
              class for Margin
            </div>
          </Card.Header>
          <Card.Body>
            <Row>
              {sideMarginList.map((side, index) => (
                <div className="col mg-2 border b-r-22" key={index}>
                  <div className={side.items[side.items.length - 1].class}>
                    <p>{side.items[side.items.length - 1].label}</p>
                  </div>
                </div>
              ))}
            </Row>
            <div className="app-divider-v">
              <h6>Side Margin List</h6>
            </div>
            <Row>
              {sideMarginList.map((side, index) => (
                <Col md={6} xl={3} key={index}>
                  <p>- Margin {side.type.toLowerCase()}</p>
                  {side.items.map((item, i) => (
                    <p key={i}>- {item.class}</p>
                  ))}
                </Col>
              ))}
            </Row>
          </Card.Body>
        </Card>
      </Col>
      <Col xs={12}>
        <Card>
          <Card.Header>
            <h5 className="f-w-600">Width and Height</h5>
            <div className="text-muted mt-2 f-s-15 ">
              using{" "}
              <a href="#" className="text-decoration-underline text-dark">
                w-*/h-*
              </a>{" "}
              class for size
            </div>
          </Card.Header>
          <Card.Body>
            <div className="d-flex justify-content-between flex-wrap">
              {widthHeightData.map(({ width, height }, index) => (
                <div
                  key={index}
                  className={`w-${width} h-${height} b-2-secondary d-flex-center mb-2 b-r-22`}
                >
                  {width}*{height}
                </div>
              ))}
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default HelperPaddingMargin;
