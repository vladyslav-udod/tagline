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
    color: rgba(255, 255, 255, 0.45);
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
  border-radius: 4px;
  height: 100%;
  padding: 0 ${theme.spacing.sm};
  cursor: pointer;

  p {
    width: calc(100% - ${theme.spacing.lg});
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .remove-btn {
    position: absolute;
    right: ${theme.spacing.md};
    color: ${theme.colors.white};
  }

  &: hover {
    background: ${theme.colors.background};
  }
`;
