import styled from "styled-components";
import { theme } from "../../styles/theme";
import { styleConfigRules } from "@/features/tagline/constants";

export const StyledChip = styled.div<{ selected?: boolean }>`
  line-height: 1.4;
  cursor: pointer;
  user-select: none;
  ${styleConfigRules.variants.variant1}
  ${styleConfigRules.sizes.M}
  ${styleConfigRules.radiuses.r8}
  font-weight: ${theme.fontWeights.medium};

  color: ${theme.colors.white};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 250px;
  transition:
    background-color 0.2s,
    color 0.2s;
`;
