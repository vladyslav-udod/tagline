import React from "react";
import type { TagItem } from "../../models/tagline";
import { Chip } from "@/shared/components/Chip";
import { Popover } from "@/shared/components/Popover";
import { StyledTagline } from "./Tagline.styled";
import { TaglineMenu } from "./TaglineMenu/TaglineMenu";
import { taglineUiStore } from "@/srores/ui/taglineUiStore";
import { TaglineMenuOptions } from "../../constants";
import { observer } from "mobx-react-lite";

interface TaglineProps {
  tags: TagItem[];
}

export const Tagline: React.FC<TaglineProps> = observer(({ tags }) => {
  const handleOpen = () => taglineUiStore.openMenu(TaglineMenuOptions.General);

  const tagsContent = (
    <StyledTagline $styleConfig={taglineUiStore.styleConfig}>
      {tags.length ? (
        tags.map((tag) => (
          <Chip key={tag.label} label={tag.label} className="chip" />
        ))
      ) : (
        <p className="empty-info">No tags available. Click to add one.</p>
      )}
    </StyledTagline>
  );

  return (
    <Popover
      trigger={tagsContent}
      placement="right"
      open={taglineUiStore.activeMenu !== null}
      onOpen={handleOpen}
      onClose={() => taglineUiStore.closeMenu()}
    >
      <TaglineMenu />
    </Popover>
  );
});
