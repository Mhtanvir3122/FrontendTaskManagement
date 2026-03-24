import React, { useState } from "react";

interface RatingBarProps {
  max?: number;
  initial?: number;
  onChange?: (value: number) => void;
}

const RatingBar: React.FC<RatingBarProps> = ({ max = 10, initial = 1, onChange }) => {
  const [rating, setRating] = useState<number>(initial);
  const [hovered, setHovered] = useState<number | null>(null);

  const handleClick = (value: number) => {
    setRating(value);
    if (onChange) onChange(value);
  };

  // Display hovered value if hovering, else the saved rating
  const displayValue = hovered !== null ? hovered : rating;

  return (
    <>
      <style>
        {`
          .rating-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
          }

          .rating-bars {
            display: flex;
            gap: 6px;
          }

          .bar {
            display: inline-block;
            width: 12px;
            height: 28px;
            border-radius: 8px;
            background-color: #f7f5dd;
            cursor: pointer;
            transition: background-color 0.2s ease;
            flex-shrink: 0;
          }

          .bar.active {
            background-color: #f9c123;
          }

          .rating-value {
            font-size: 16px;
            color: #f9c123;
            font-weight: 500;
            width: 20px;
            text-align: center;
          }
        `}
      </style>

      <div className="rating-wrapper">
        <div className="rating-bars">
          {Array.from({ length: max }, (_, i) => {
            const index = i + 1;
            const isActive = hovered !== null ? index <= hovered : index <= rating;

            return (
              <span
                key={index}
                className={`bar ${isActive ? "active" : ""}`}
                onClick={() => handleClick(index)}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              />
            );
          })}
        </div>
        <span className="rating-value">{displayValue}</span>
      </div>
    </>
  );
};

export default RatingBar;
