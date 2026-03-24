import { memo } from "react";
import { IColors } from "../interface/common.interface";

type IButtonProps = {
  color?: IColors;
  variant?: "fill" | "outline" | "light" | null;
  type?: "submit" | "button" | "reset";
  isDisabled?: boolean;
  className?: string;
  onClick?: (() => void) | void;
  hoverTitle?: string;
  iconName: string;
  iconColor?: IColors;
  iconSize?: number;
  iconVariant?: "outlined" | "filled" | "round" | "sharp" | "two-tone";
  rounded?: "circle" | "pill" | false;
};

const IconButton = memo(
  ({
    color,
    variant = "light",
    type = "button",
    isDisabled,
    className,
    onClick,
    hoverTitle,
    iconName,
    iconColor,
    iconSize = 20,
    iconVariant,
    rounded = "circle",
  }: IButtonProps) => {
    iconColor = !color && !iconColor ? "dark" : iconColor;
    color = isDisabled ? "dark" : color;
    variant = variant === "fill" ? null : variant;
    return (
      <button
        type={type}
        className={`btn btn-sm btn${variant ? "-" + variant : ""}${color ? "-" + color : ""} ${
          className || ""
        } px-3 py-1 ${rounded ? " rounded-" + rounded : ""}`}
        disabled={isDisabled}
        onClick={!!onClick && !isDisabled ? onClick : undefined}
      >
        {/* <Icon
          icon={iconName}
          className="pt-2"
          hoverTitle={hoverTitle || ""}
          size={iconSize}
          variants={iconVariant}
          color={iconColor}
        /> */}
      </button>
    );
  }
);

export default IconButton;
