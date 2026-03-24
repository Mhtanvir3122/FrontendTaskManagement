import React, { useState } from "react";

interface TextRatingProps {
  options?: string[];
  initial?: number;
  onChange?: (value: number) => void;
}

const ReversedRating: React.FC<TextRatingProps> = ({
  options = [
    "Strongly Disagree",
    "Disagree",
    "Neither Agree nor Disagree",
    "Agree",
    "Strongly Agree",
  ],
  initial = 2,
  onChange,
}) => {
  const [selected, setSelected] = useState<number>(initial);
  const [hovered, setHovered] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setSelected(index);
    onChange?.(index);
  };

  const getLabel = () => {
    if (hovered !== null) return options[hovered];
    return options[selected];
  };

  return (
    <div className="rating-wrapper">
      <style>{`
        .rating-wrapper {
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: sans-serif;
        }

        .rating-boxes {
          display: flex;
          flex-direction: row;
          gap: 6px;
        }

        .rating-pill {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          background-color: #f7f5dd;
          border: 2px solid transparent;
          transition: border-color 0.2s, background-color 0.2s;
          cursor: pointer;
        }

        .rating-pill.filled {
          background-color: #f9c123;
        }

        .rating-label {
          width: 220px;
          min-height: 28px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          font-size: 16px;
          font-weight: 500;
          color: #f9c123;
          white-space: nowrap;
        }
      `}</style>

      <div className="rating-boxes">
        {[0, 1, 2, 3, 4].map((index) => {
          const reversedIndex = 4 - index;
          const activeIndex = hovered !== null ? hovered : selected;
          const isFilled = reversedIndex <= activeIndex;

          return (
            <div
              key={index}
              className={`rating-pill ${isFilled ? "filled" : ""}`}
              onClick={() => handleClick(reversedIndex)}
              onMouseEnter={() => setHovered(reversedIndex)}
              onMouseLeave={() => setHovered(null)}
            ></div>
          );
        })}
      </div>

      <div className="rating-label">{getLabel()}</div>
    </div>
  );
};

export default ReversedRating;
