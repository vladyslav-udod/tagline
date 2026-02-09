import React from "react";
import { StyledIconButton } from "./IconButton.styled";

export interface IconButtonProps {
  icon: React.ReactNode;
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
  title?: string;
  size?: "sm" | "md" | "lg";
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  className,
  onClick,
  title,
  size = "md",
}) => {
  return (
    <StyledIconButton
      onClick={onClick}
      title={title}
      className={className}
      size={size}
    >
      {icon}
    </StyledIconButton>
  );
};
