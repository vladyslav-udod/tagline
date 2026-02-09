import React from "react";
import { StyledChip } from "./Chip.styled";

export interface ChipProps {
  label: string;
  selected?: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  className?: string;
}

export const Chip: React.FC<ChipProps> = ({
  label,
  selected = false,
  onClick,
  className,
}) => {
  return (
    <StyledChip
      selected={selected}
      onClick={onClick}
      className={className}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.title = el.getBoundingClientRect().width >= 250 ? label : "";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.title = "";
      }}
    >
      {label}
    </StyledChip>
  );
};
