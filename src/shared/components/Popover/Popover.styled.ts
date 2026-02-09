import styled from "styled-components";
import { theme } from "../../styles/theme";

export const ContainerStyled = styled.div`
  position: relative;
  display: inline-block;
`;

const marginWidth = "calc(100% + 2rem)";

export const PopoverContentStyled = styled.div<{
  open: boolean;
  $placement: string;
}>`
  position: absolute;
  ${({ $placement }) =>
    $placement === "bottom" && `top: ${marginWidth}; left: 0;`}
  ${({ $placement }) =>
    $placement === "top" && `bottom: ${marginWidth}; left: 0;`}
  ${({ $placement }) =>
    $placement === "left" && `right: ${marginWidth}; top: 0;`}
  ${({ $placement }) =>
    $placement === "right" && `left: ${marginWidth}; top: 0;`}
  background: ${theme.colors.secondary};
  border-radius: ${theme.borderRadius};
  box-shadow: ${theme.shadows.popover};
  z-index: 100;
  width: 17.5rem;
  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  pointer-events: ${({ open }) => (open ? "auto" : "none")};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(4px)")};
  transition:
    opacity 0.2s ease,
    transform 0.2s ease,
    visibility 0.2s ease;
`;
