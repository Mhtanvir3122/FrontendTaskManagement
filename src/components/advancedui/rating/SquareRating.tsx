import React, { useState } from "react";

interface SquareRatingProps {
  max?: number;
  initial?: number;
  onChange?: (value: number) => void;
}

const SquareRating: React.FC<SquareRatingProps> = ({ max = 5, initial = 1, onChange }) => {
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
          .square-rating-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 12px;
          }

          .square {
            width: 36px;
            height: 36px;
            border-radius: 4px;
            border: 2px solid #fef3d3;
            background-color: transparent;
            font-weight: 600;
            font-size: 14px;
            color: #fef3d3;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: border-color 0.2s ease, color 0.2s ease;
            box-sizing: border-box;
            padding: 0; /* Add this to remove any default padding */
            line-height: 1; /* Add this to control text vertical alignment */
          }

          .square.active-border {
            border-color: #f9c123;
            color: #f9c123;
          }
        `}
      </style>

      <div className="square-rating-wrapper">
        {Array.from({ length: max }, (_, i) => {
          const index = i + 1;
          const isSelected = index <= rating;
          const isHovered = hovered !== null && index <= hovered;

          const shouldHighlight = isHovered || isSelected;

          return (
            <div
              key={index}
              className={`square ${shouldHighlight ? "active-border" : ""}`}
              onClick={() => handleClick(index)}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              {index}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SquareRating;