import { observer } from "mobx-react-lite";
import {
  ArrowLeftIcon,
  CloseIcon,
  DragHorizontalIcon,
  StylesIcon,
} from "@/assets/icons";
import { IconButton } from "@/shared/components/IconButton/IconButton";
import { taglineUiStore } from "@/srores/ui/taglineUiStore";
import { TaglineMenuOptions } from "../../../constants";
import {
  StyledBtnPlaceholder,
  StyledTaglineMenu,
  StyledTaglineMenuFooter,
  StyledTaglineMenuHeader,
} from "./TaglineMenu.styled";
import { TaglineGeneralPanel } from "./TaglineGeneralPanel";
import { TaglineElementPanel } from "./TaglineElementPanel";
import { TaglineStylePanel } from "./TaglineStylePanel/TaglineStylePanel";

const panelTitleMap = {
  [TaglineMenuOptions.General]: "Tagline",
  [TaglineMenuOptions.Style]: "Styles",
  [TaglineMenuOptions.EditTag]: "Item",
  [TaglineMenuOptions.AddNewTag]: "New Item",
} as const;

export const TaglineMenu: React.FC = observer(() => {
  const isGeneralMenuOpen = taglineUiStore.isMenuOpen(
    TaglineMenuOptions.General,
  );
  const isStyleMenuOpen = taglineUiStore.isMenuOpen(TaglineMenuOptions.Style);
  const isTagMenuOpen =
    taglineUiStore.isMenuOpen(TaglineMenuOptions.EditTag) ||
    taglineUiStore.isMenuOpen(TaglineMenuOptions.AddNewTag);

  const backButton = !isGeneralMenuOpen ? (
    <IconButton
      icon={<ArrowLeftIcon />}
      title="Back"
      onClick={() => taglineUiStore.openMenu(TaglineMenuOptions.General)}
    />
  ) : (
    <StyledBtnPlaceholder />
  );

  if (!taglineUiStore.activeMenu) {
    return null;
  }

  return (
    <StyledTaglineMenu>
      <StyledTaglineMenuHeader>
        <DragHorizontalIcon className="drag-x-icon" />
        {backButton}
        <h5>{panelTitleMap[taglineUiStore.activeMenu]}</h5>
        <IconButton
          icon={<CloseIcon />}
          title="Close"
          onClick={() => taglineUiStore.closeMenu()}
        />
      </StyledTaglineMenuHeader>

      {isGeneralMenuOpen && <TaglineGeneralPanel />}
      {isStyleMenuOpen && <TaglineStylePanel />}
      {isTagMenuOpen && <TaglineElementPanel />}

      {isGeneralMenuOpen && (
        <StyledTaglineMenuFooter
          onClick={() => taglineUiStore.openMenu(TaglineMenuOptions.Style)}
        >
          <StylesIcon />
          <p>Styles</p>
          <ArrowLeftIcon className="arrow-right-icon" />
        </StyledTaglineMenuFooter>
      )}
    </StyledTaglineMenu>
  );
});
