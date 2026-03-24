import React, { useState } from "react";

interface BarRatingProps {
  max?: number;
  initial?: number;
  onChange?: (value: number) => void;
  barColor?: string;
}

const HorizontalRating: React.FC<BarRatingProps> = ({
  max = 10,
  initial = 1,
  onChange,
  barColor = "#f9c123",
}) => {
  const [rating, setRating] = useState<number>(initial);
  const [hovered, setHovered] = useState<number | null>(null);

  const handleClick = (value: number) => {
    setRating(value);
    if (onChange) onChange(value);
  };

  return (
    <>
      <style>
        {`
          .hr-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4px;
            user-select: none;
          }

          .hr-bar-stack {
            display: flex;
            flex-direction: column-reverse;
            gap: 4px;
            cursor: pointer;
          }

          .hr-bar {
            width: 100px;
            height: 6px;
            background-color: #fef3d3;
            border-radius: 2px;
            transition: background-color 0.2s ease;
          }

          .hr-bar.filled {
            background-color: ${barColor};
          }

          .hr-value {
            margin-top: 8px;
            font-weight: bold;
            color: ${barColor};
          }
        `}
      </style>

      <div className="hr-wrapper">
        <div className="hr-bar-stack">
          {Array.from({ length: max }, (_, i) => {
            const index = i + 1;
            const isHovered = hovered !== null ? index <= hovered : false;
            const isFilled = index <= rating;
            const shouldFill = isHovered || isFilled;

            return (
              <div
                key={index}
                className={`hr-bar ${shouldFill ? "filled" : ""}`}
                onClick={() => handleClick(index)}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              />
            );
          })}
        </div>
        <div className="hr-value">{rating}</div>
      </div>
    </>
  );
};

export default HorizontalRating;
