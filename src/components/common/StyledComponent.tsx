import React from "react";

export const sizeVariants = {
  xs: "size-xs",
  sm: "size-sm",
  md: "size-md",
  lg: "size-lg",
  xl: "size-xl",
} as const;

export const cursorVariants = {
  pointer: "cursor-pointer",
  default: "cursor-default",
  notAllowed: "cursor-not-allowed",
} as const;

interface StyledAvatarProps {
  src?: string;
  alt?: string;
  size?: keyof typeof sizeVariants;
  variant?: "image" | "icon" | "text";
  bgColor?: string;
  icon?: React.ReactNode;
  text?: string;
  className?: string;
  onClick?: () => void;
}

export const StyledAvatar: React.FC<StyledAvatarProps> = ({
  src,
  alt,
  size = "md",
  variant = "image",
  bgColor = "primary",
  icon,
  text,
  className = "",
  onClick,
}) => {
  const baseClasses = `avatar rounded-circle bg-${bgColor} d-flex justify-content-center align-items-center ${sizeVariants[size]}`;
  const clickableClass = onClick ? cursorVariants.pointer : "";
  const combinedClasses =
    `${baseClasses} ${clickableClass} ${className}`.trim();

  if (variant === "image" && src) {
    return (
      <div className={combinedClasses} onClick={onClick}>
        <img src={src} alt={alt || "Avatar"} className="img-fluid" />
      </div>
    );
  }

  if (variant === "icon" && icon) {
    return (
      <div className={combinedClasses} onClick={onClick}>
        {icon}
      </div>
    );
  }

  if (variant === "text" && text) {
    return (
      <div className={combinedClasses} onClick={onClick}>
        <span className="avatar-text">{text}</span>
      </div>
    );
  }

  return null;
};
