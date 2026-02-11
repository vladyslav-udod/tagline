import React, { useRef, useEffect, type ReactNode } from "react";
import { ContainerStyled, PopoverContentStyled } from "./Popover.styled";

export interface PopoverProps {
  trigger: ReactNode;
  children: ReactNode;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  placement?: "bottom" | "top" | "left" | "right";
}

export const Popover: React.FC<PopoverProps> = ({
  trigger,
  children,
  open,
  onOpen,
  onClose,
  placement = "right",
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  return (
    <ContainerStyled ref={ref}>
      <div onClick={() => (open ? onClose() : onOpen())}>{trigger}</div>
      <PopoverContentStyled open={open} $placement={placement}>
        {children}
      </PopoverContentStyled>
    </ContainerStyled>
  );
};
