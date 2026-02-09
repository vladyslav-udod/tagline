import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledLabel = styled.label<{ $isError?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 3rem;
  border: 1px solid
    ${({ $isError }) => ($isError ? theme.colors.error : theme.colors.border)};
  border-radius: ${theme.borderRadius};
  padding: 0 12px;
  background-color: ${theme.colors.background};

  span {
    font-size: 10px;
    color: rgba(255, 255, 255, 0.65);
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
`;
