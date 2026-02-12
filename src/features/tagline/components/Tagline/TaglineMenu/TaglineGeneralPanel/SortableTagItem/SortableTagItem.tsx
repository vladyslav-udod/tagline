import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  StyledPanelTaglineItem,
  StyledPanelTaglineItemText,
} from "./SortableTagItem.styled";
import { CloseIcon, DragIcon } from "@/assets/icons";
import { IconButton } from "@/shared/components/IconButton/IconButton";
import type { TagItem } from "../../../../../models/tagline";

export const SortableTagItem: React.FC<{
  tag: TagItem;
  onClick: (tag: TagItem) => void;
  onRemove: (e: React.MouseEvent<Element>, label: string) => void;
}> = ({ tag, onClick, onRemove }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: tag.label });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <StyledPanelTaglineItem
      ref={setNodeRef}
      style={style}
      onClick={() => onClick(tag)}
      $isDragging={isDragging}
      {...attributes}
    >
      <DragIcon {...listeners} className="drag-icon" />
      <StyledPanelTaglineItemText>
        <p>{tag.label}</p>
        <IconButton
          className="remove-btn"
          icon={<CloseIcon />}
          title="Remove"
          onClick={(e) => onRemove(e, tag.label)}
        />
      </StyledPanelTaglineItemText>
    </StyledPanelTaglineItem>
  );
};
