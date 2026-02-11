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
  padding: 0 11px 0 8px;
  border-bottom: 1px solid ${theme.colors.border};

  svg {
    color: ${theme.colors.iconButton};
  }

  .drag-x-icon {
    position: absolute;
    left: calc(50% - ${theme.spacing.sm});
    top: 0;
    color: ##383839;
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
  padding: 0 14px;
  gap: 14px;
  cursor: pointer;
  border-top: 1px solid ${theme.colors.border};

  p {
    font-weight: ${theme.fontWeights.medium};
  }

  .arrow-right-icon {
    position: absolute;
    right: 14px;
    color: ${theme.colors.iconButton};
    transform: rotate(180deg);
  }
`;
