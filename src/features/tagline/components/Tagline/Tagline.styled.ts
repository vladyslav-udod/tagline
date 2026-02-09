import styled from "styled-components";
import { theme } from "@/shared/styles/theme";
import type { StyleConfig } from "../../models/tagline";
import { styleConfigRules } from "../../constants";

export const StyledTagline = styled.ul<{ $styleConfig: StyleConfig }>`
  width: 40rem;
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
  padding: 3rem 2rem;
  cursor: pointer;
  ${({ $styleConfig }) => `${styleConfigRules.alignments[$styleConfig.align]}`}
  border: 1px dashed transparent;

  &:hover {
    border-color: rgba(255, 255, 255, 0.1);
  }

  .chip {
    ${({ $styleConfig }) =>
      `${styleConfigRules.variants[$styleConfig.variant]}`}
    ${({ $styleConfig }) => `${styleConfigRules.sizes[$styleConfig.size]}`}
    ${({ $styleConfig }) => `${styleConfigRules.radiuses[$styleConfig.radius]}`}
  }

  .empty-info {
    width: 100%;
    text-align: center;
    color: rgba(255, 255, 255, 0.45);
  }
`;
