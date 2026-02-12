import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledLabel = styled.label<{ $isError?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 47px;
  border: 1px solid
    ${({ $isError }) => ($isError ? theme.colors.error : theme.colors.border)};
  border-radius: ${theme.borderRadius};
  padding: 4px 12px 6px 12px;
  background-color: ${theme.colors.inputBackground};
  font-weight: ${theme.fontWeights.medium};

  span {
    font-size: 12px;
    color: rgba(255, 255, 255, 0.65);
    line-height: 16px;
    font-weight: ${theme.fontWeights.medium};
    font-family: ${theme.fonts.primary};
  }
`;

export const StyledInput = styled.input`
  display: flex;
  align-items: flex-start;
  color: ${theme.colors.white};
  background-color: transparent;
  border: none;
  outline: none;
  height: 24px;
  line-height: 16px;
  font-family: ${theme.fonts.primary};
  font-weight: ${theme.fontWeights.medium};
`;
