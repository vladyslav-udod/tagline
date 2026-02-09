import styled from "styled-components";
import { theme } from "@/shared/styles/theme";

export const StyledTaglinePanelBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px 0;
  max-height: 26rem;
  overflow-y: auto;
`;

export const StyledAddNewItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.sm} ${theme.spacing.sm} ${theme.spacing.sm}
    ${theme.spacing.lg};
  color: rgba(255, 255, 255, 0.45);
  cursor: pointer;
  width: 100%;
  height: 40px;
  min-height: 40px;
  margin-top: ${theme.spacing.xs};

  &:hover {
    color: ${theme.colors.white};
  }
`;
