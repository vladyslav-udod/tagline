import styled from "styled-components";
import { theme } from "@/shared/styles/theme";

export const StyledPanelTaglineItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 ${theme.spacing.sm} 0 ${theme.spacing.md};
  width: 100%;
  height: 40px;
  min-height: 40px;

  .drag-icon {
    position: absolute;
    cursor: grab;
    left: 0;
    color: ${theme.colors.extraLight};
    display: none;
  }

  &:hover > svg {
    display: block;
  }
`;

export const StyledPanelTaglineItemText = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: ${theme.borderRadius};
  height: 100%;
  padding: 0 0 0 12px;
  cursor: pointer;
  &:hover .remove-btn {
    display: flex;
  }

  p {
    width: calc(100% - ${theme.spacing.lg});
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 1.4rem;
  }

  .remove-btn {
    position: absolute;
    right: 12px;
    color: ${theme.colors.iconButton};
    display: none;

    &: hover {
      background: ${theme.colors.doubleHover};
    }
  }

  &: hover {
    background: ${theme.colors.hover};
  }
`;
