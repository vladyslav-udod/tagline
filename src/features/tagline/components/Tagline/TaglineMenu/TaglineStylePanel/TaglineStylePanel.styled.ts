import styled from "styled-components";
import { theme } from "@/shared/styles/theme";
import { styleConfigRules } from "../../../../constants";

export const StyledTaglineStylePanel = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledStyleSection = styled.div<{ $noBorder?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
  padding: 12px 14px;
  border-bottom: ${({ $noBorder }) =>
    $noBorder ? "none" : `1px solid ${theme.colors.border}`};

  .style-blocks {
    display: flex;
    gap: ${theme.spacing.sm};
  }

  .style-block {
    height: 37px;
    width: 100%;
    border-radius: ${theme.borderRadius};
    color: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &.--variant-1 {
      ${styleConfigRules.variants.variant1}
    }

    &.--variant-2 {
      ${styleConfigRules.variants.variant2}
    }

    &.--variant-3 {
      ${styleConfigRules.variants.variant3}
    }

    &.--variant-4 {
      ${styleConfigRules.variants.variant4}
    }
  }

  .config-block {
    height: 31px;
    width: 100%;
    border-radius: ${theme.borderRadius};
    color: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: transparent;

    &.--active {
      background-color: #353535;
    }
  }

  .align-blocks {
    display: flex;
    border: none;

    > button {
      width: 100%;
      border-radius: ${theme.borderRadius};
      background-color: initial;

      &.active-btn {
        background-color: #353535;
      }
    }
  }
`;
