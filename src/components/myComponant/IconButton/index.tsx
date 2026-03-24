import { IColors } from "@/components/myComponent/interface/common.interface";
import { memo, MouseEventHandler } from "react";
import Icon from "../Icon";

type IButtonProps = {
  color?: IColors;
  variant?: "fill" | "outline" | "light";
  type?: "submit" | "button" | "reset";
  isDisabled?: boolean;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  hoverTitle?: string;
  iconName: string;
  iconColor?: IColors;
  iconSize?: number;
  iconVariant?: "outlined" | "filled" | "round" | "sharp" | "two-tone";
  rounded?: "circle" | "pill" | false;
};

const IconButton = memo((props: IButtonProps) => {
  const {
    color,
    variant = "light",
    type = "button",
    isDisabled = false,
    className = "",
    onClick,
    hoverTitle = "",
    iconName,
    iconColor,
    iconSize = 20,
    iconVariant,
    rounded = "circle",
  } = props;

  const finalIconColor = !color && !iconColor ? "dark" : iconColor;
  const finalColor = isDisabled ? "dark" : color;
  const finalVariant = variant === "fill" ? "" : variant;

  // Tailwind/Bootstrap style compatible className array
  const btnClasses = [
    "btn",
    "btn-sm",
    "d-flex",
    "align-items-center",
    "justify-content-center",
    finalVariant ? `btn-${finalVariant}-${finalColor}` : `btn-${finalColor}`,
    className,
    rounded ? `rounded-${rounded}` : "",
    "p-2", // ensures icon is centered with padding
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={btnClasses}
      disabled={isDisabled}
      onClick={onClick && !isDisabled ? onClick : undefined}
      title={hoverTitle}
    >
      <Icon
        icon={iconName}
        size={iconSize}
        variants={iconVariant}
        color={finalIconColor}
      />
    </button>
  );
});

export default IconButton;
