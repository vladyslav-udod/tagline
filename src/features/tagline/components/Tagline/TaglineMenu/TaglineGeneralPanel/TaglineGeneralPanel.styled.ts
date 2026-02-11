import styled from "styled-components";
import { theme } from "@/shared/styles/theme";

export const StyledTaglinePanelBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px 0;
  max-height: 26rem;
  overflow-y: auto;
  gap: ${theme.spacing.sm} 0;
`;

export const StyledAddNewItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  padding: ${theme.spacing.sm};
  color: rgba(255, 255, 255, 0.45);
  cursor: pointer;
  height: 40px;
  min-height: 40px;
  border-radius: ${theme.borderRadius};
  margin: 0 14px;

  svg {
    margin-left: 4px;
  }

  &:hover {
    background: ${theme.colors.hover};
  }
`;
