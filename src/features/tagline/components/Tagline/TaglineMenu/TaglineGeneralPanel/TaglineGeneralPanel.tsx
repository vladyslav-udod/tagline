import { observer } from "mobx-react-lite";
import {
  StyledAddNewItem,
  StyledTaglinePanelBody,
} from "./TaglineGeneralPanel.styled";
import { PlusIcon } from "@/assets/icons";
import { taglineUiStore } from "@/srores/ui/taglineUiStore";
import { TaglineMenuOptions } from "../../../../constants";
import type { TagItem } from "../../../../models/tagline";

import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import { SortableTagItem } from "./SortableTagItem";

export const TaglineGeneralPanel: React.FC = observer(() => {
  const handleTagClick = (tag: TagItem) => {
    taglineUiStore.openMenu(TaglineMenuOptions.EditTag);
    taglineUiStore.setActiveTag(tag);
  };

  const handleTagRemove = (e: React.MouseEvent<Element>, tagLabel: string) => {
    e.stopPropagation();
    taglineUiStore.removeTag(tagLabel);
  };

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) {
      return;
    }
    const oldIndex = taglineUiStore.tags.findIndex(
      (t) => t.label === active.id,
    );
    const newIndex = taglineUiStore.tags.findIndex((t) => t.label === over.id);
    taglineUiStore.setTags(arrayMove(taglineUiStore.tags, oldIndex, newIndex));
    console.log("PUT http://api/tagline/reorder", {
      from: oldIndex,
      to: newIndex,
    });
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      modifiers={[restrictToParentElement]}
    >
      <SortableContext
        items={taglineUiStore.tags.map((t) => t.label)}
        strategy={verticalListSortingStrategy}
      >
        <StyledTaglinePanelBody>
          {taglineUiStore.tags.map((tag) => (
            <SortableTagItem
              key={tag.label}
              tag={tag}
              onClick={handleTagClick}
              onRemove={handleTagRemove}
            />
          ))}

          <StyledAddNewItem
            onClick={() =>
              taglineUiStore.openMenu(TaglineMenuOptions.AddNewTag)
            }
          >
            <PlusIcon />
            <p>Add item</p>
          </StyledAddNewItem>
        </StyledTaglinePanelBody>
      </SortableContext>
    </DndContext>
  );
});
