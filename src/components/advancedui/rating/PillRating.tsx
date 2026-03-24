import React, { useState } from "react";

interface PillRatingProps {
  options?: string[];
  initial?: string;
  onChange?: (value: string) => void;
}

const PillRating: React.FC<PillRatingProps> = ({
                                                 options = ["A", "B", "C", "D", "E", "F"],
                                                 initial = "A",
                                                 onChange,
                                               }) => {
  const [selected, setSelected] = useState<string>(initial);
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);

  const handleClick = (value: string) => {
    setSelected(value);
    if (onChange) onChange(value);
  };

  const isActive = (option: string) =>
    !hoveredOption && options.indexOf(option) <= options.indexOf(selected);

  const isHoverActive = (option: string) =>
    hoveredOption && options.indexOf(option) <= options.indexOf(hoveredOption);

  return (
    <>
      <style>{`
        .pill-container {
          display: flex;
          background-color: #fefbe5;
          border-radius: 10px;
          overflow: hidden;
          width: fit-content;
          margin: auto;
        }

        .pill-option {
          padding: 8px 16px;
          font-size: 14px;
          font-weight: 600;
          color: #d5c842;
          background-color: transparent;
          cursor: pointer;
          user-select: none;
          transition: all 0.2s ease;
        }

        .pill-option.active {
          background-color: #f9c123;
          color: #fff;
        }

        .pill-option.hover-active {
          background-color: #f9c123;
          color: #fff;
        }
      `}</style>

      <div className="pill-container">
        {options.map((option) => (
          <div
            key={option}
            className={`pill-option ${
              isActive(option)
                ? "active"
                : isHoverActive(option)
                  ? "hover-active"
                  : ""
            }`}
            onClick={() => handleClick(option)}
            onMouseEnter={() => setHoveredOption(option)}
            onMouseLeave={() => setHoveredOption(null)}
          >
            {option}
          </div>
        ))}
      </div>
    </>
  );
};

export default PillRating;