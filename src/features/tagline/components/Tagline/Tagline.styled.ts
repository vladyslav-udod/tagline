import styled from "styled-components";
import { theme } from "@/shared/styles/theme";
import type { StyleConfig } from "../../models/tagline";
import { styleConfigRules } from "../../constants";

export const StyledTagline = styled.ul<{ $styleConfig: StyleConfig }>`
  width: 400px;
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.sm};
  cursor: pointer;
  ${({ $styleConfig }) => `${styleConfigRules.alignments[$styleConfig.align]}`}

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
