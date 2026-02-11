import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledIconButton = styled.button<{ size: "sm" | "md" | "lg" }>`
  width: ${(props) =>
    props.size === "sm" ? "1.5rem" : props.size === "lg" ? "2.5rem" : "2rem"};
  height: ${(props) =>
    props.size === "sm" ? "1.5rem" : props.size === "lg" ? "2.5rem" : "2rem"};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-radius: ${theme.borderRadius};
  border: none;
  color: ${theme.colors.white};

  &:hover {
    background-color: ${theme.colors.hover};
  }
`;
