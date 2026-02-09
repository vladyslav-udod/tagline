import styled from "styled-components";
import { theme } from "@/shared/styles/theme";

export const StyledTaglineMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
`;

export const StyledTaglineMenuHeader = styled.div`
  height: 56px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${theme.spacing.sm};
  border-bottom: 1px solid ${theme.colors.border};

  .drag-x-icon {
    position: absolute;
    left: calc(50% - ${theme.spacing.sm});
    top: 0;
    cursor: grab;
  }
`;

export const StyledBtnPlaceholder = styled.div`
  width: ${theme.spacing.xl};
`;

export const StyledTaglineMenuFooter = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  height: 48px;
  padding: 0 ${theme.spacing.md};
  gap: ${theme.spacing.sm};
  cursor: pointer;
  border-top: 1px solid ${theme.colors.border};

  &: hover {
    background: ${theme.colors.background};
  }

  .arrow-right-icon {
    position: absolute;
    right: ${theme.spacing.sm};
    color: ${theme.colors.white};
    transform: rotate(180deg);
  }
`;
