import { observer } from "mobx-react-lite";
import {
  StyledStyleSection,
  StyledTaglineStylePanel,
} from "./TaglineStylePanel.styled";
import { AlignCenterIcon, AlignLeftIcon, AlignRightIcon } from "@/assets/icons";
import { theme } from "@/shared/styles/theme";
import { taglineUiStore } from "@/srores/ui/taglineUiStore";
import type { TaglineStyleKeyOptions } from "../../../../models/tagline";
import { radiuses, sizes, styleVariants } from "../../../../constants";
import { IconButton } from "@/shared/components/IconButton/IconButton";

const alignButtons = [
  {
    value: "left",
    icon: <AlignLeftIcon fill={theme.colors.white} />,
    title: "align left",
  },
  {
    value: "center",
    icon: <AlignCenterIcon fill={theme.colors.white} />,
    title: "align center",
  },
  {
    value: "right",
    icon: <AlignRightIcon fill={theme.colors.white} />,
    title: "align right",
  },
] as const;

export const TaglineStylePanel: React.FC = observer(() => {
  const onStyleChange = (prop: TaglineStyleKeyOptions, value: string) => {
    if (taglineUiStore.checkIfStyleActive(prop, value)) {
      return;
    }

    taglineUiStore.updateStyleConfig({ [prop]: value });
    console.log("PUT http://api/tagline", { [prop]: value });
  };

  return (
    <StyledTaglineStylePanel>
      <StyledStyleSection>
        <h5>Style</h5>
        <div className="style-blocks">
          {styleVariants.map((variant) => (
            <div
              key={variant}
              className={`style-block --${variant.replace("variant", "variant-")}`}
              onClick={() => onStyleChange("variant", variant)}
            >
              Aa
            </div>
          ))}
        </div>
      </StyledStyleSection>

      <StyledStyleSection>
        <h5>Size</h5>
        <div className="style-blocks">
          {sizes.map((size) => (
            <div
              key={size}
              className={`config-block ${taglineUiStore.styleConfig.size === size ? "--active" : ""}`}
              onClick={() => onStyleChange("size", size)}
            >
              {size.toUpperCase()}
            </div>
          ))}
        </div>
      </StyledStyleSection>

      <StyledStyleSection>
        <h5>Radius</h5>
        <div className="style-blocks">
          {radiuses.map((radius) => (
            <div
              key={radius}
              className={`config-block ${taglineUiStore.styleConfig.radius === radius ? "--active" : ""}`}
              onClick={() => onStyleChange("radius", radius)}
            >
              {radius.replace("r", "")}
            </div>
          ))}
        </div>
      </StyledStyleSection>

      <StyledStyleSection $noBorder>
        <div className="align-blocks">
          {alignButtons.map(({ value, icon, title }) => (
            <IconButton
              key={value}
              onClick={() => onStyleChange("align", value)}
              className={
                taglineUiStore.styleConfig.align === value
                  ? "active-btn"
                  : undefined
              }
              icon={icon}
              title={title}
            />
          ))}
        </div>
      </StyledStyleSection>
    </StyledTaglineStylePanel>
  );
});
