import React from "react";
import { StyledChip } from "./Chip.styled";

export interface ChipProps {
  label: string;
  selected?: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  className?: string;
}

const MAX_WIDTH = 250;

export const Chip: React.FC<ChipProps> = ({
  label,
  selected = false,
  onClick,
  className,
}) => {
  const onMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    el.title = el.getBoundingClientRect().width >= MAX_WIDTH ? label : "";
  };
  const onMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.title = "";
  };

  return (
    <StyledChip
      selected={selected}
      onClick={onClick}
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {label}
    </StyledChip>
  );
};
