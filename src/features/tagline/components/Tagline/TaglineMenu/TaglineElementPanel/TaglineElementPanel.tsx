import { observer } from "mobx-react-lite";
import { useCallback, useEffect, useState } from "react";
import { TaglineMenuOptions } from "../../../../constants";
import { taglineUiStore } from "@/srores/ui/taglineUiStore";
import { InputField } from "@/shared/components/InputField";
import { StyledTaglineElementPanel } from "./TaglineElementPanel.styled";
import { useDebounce } from "@/hooks/useDebounce";

export const TaglineElementPanel: React.FC = observer(() => {
  const [label, setLabel] = useState(taglineUiStore.activeTag?.label || "");
  const [link, setLink] = useState(taglineUiStore.activeTag?.link || "");
  const [isError, setIsError] = useState(false);

  const onSave = useDebounce(
    useCallback(() => {
      const labelTrimmed = label.trim();
      const linkTrimmed = link.trim();
      const updatedTag = { label: labelTrimmed, link: linkTrimmed };
      const isEdit = taglineUiStore.isMenuOpen(TaglineMenuOptions.EditTag);

      if (
        (labelTrimmed === "" && isEdit) ||
        (taglineUiStore.checkTagExists(labelTrimmed) &&
          labelTrimmed !== taglineUiStore.activeTag?.label)
      ) {
        setIsError(true);
        return;
      } else if (isError) {
        setIsError(false);
      }

      if (
        labelTrimmed === taglineUiStore.activeTag?.label &&
        linkTrimmed === taglineUiStore.activeTag?.link
      ) {
        return;
      }

      if (isEdit) {
        taglineUiStore.editTag(taglineUiStore.activeTag!.label, updatedTag);
        console.log("PUT http://api/tagline", updatedTag);
      } else {
        taglineUiStore.addTag(updatedTag);
        console.log("POST http://api/tagline", updatedTag);
      }
    }, [isError, label, link]),
  );

  useEffect(() => {
    onSave();
  }, [onSave]);

  return (
    <StyledTaglineElementPanel>
      <InputField
        label="Label"
        value={label}
        setValue={setLabel}
        isError={isError}
        maxLength={50}
      />
      <InputField
        label="Link"
        value={link}
        setValue={setLink}
        maxLength={200}
      />
    </StyledTaglineElementPanel>
  );
});
