import React from "react";

interface SeparatorProps {
  thickness?: number;     // line thickness
  color?: string;         // line color
  margin?: string;        // space around separator
  orientation?: "horizontal" | "vertical"; // direction
  length?: string;       // width or height
}

const Separator: React.FC<SeparatorProps> = ({
  thickness = 1,
  color = "#e0e0e0",
  margin = "12px 0",
  orientation = "horizontal",
  length = "100%",
}) => {
  const isHorizontal = orientation === "horizontal";

  const style: React.CSSProperties = {
    backgroundColor: color,
    margin,
    width: isHorizontal ? length : thickness,
    height: isHorizontal ? thickness : length,
    flexShrink: 0,
  };

  return <div style={style} />;
};

export default Separator;
