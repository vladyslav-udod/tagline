import { makeAutoObservable } from "mobx";
import type {
  ActiveTaglineMenu,
  StyleConfig,
  TagItem,
} from "@/features/tagline";
import {
  defaultTaglineStyleConfig,
  TaglineMenuOptions,
} from "@/features/tagline/constants";

const mockTags: TagItem[] = [
  { label: "Marketing", link: "https://example.com/tag1" },
  { label: "Design", link: "https://example.com/tag2" },
  { label: "Development", link: "https://example.com/tag3" },
  { label: "Front", link: "https://example.com/tag4" },
  { label: "AI Engineering ", link: "https://example.com/tag5" },
];

export class TaglineUiStore {
  tags: TagItem[] = mockTags;
  activeTag: TagItem | null = null;
  activeMenu: ActiveTaglineMenu = null;
  styleConfig: StyleConfig = defaultTaglineStyleConfig;

  constructor() {
    makeAutoObservable(this);
  }

  addTag(tag: TagItem) {
    if (tag.label.trim() === "") {
      return;
    }
    this.tags.push(tag);
    this.activeMenu = TaglineMenuOptions.EditTag;
    this.activeTag = tag;
  }

  setTags(tags: TagItem[]) {
    this.tags = tags;
  }

  checkTagExists(label: string) {
    return this.tags.some((tag) => tag.label === label);
  }

  editTag(label: string, updatedTag: TagItem) {
    const index = this.tags.findIndex((tag) => tag.label === label);
    if (index !== -1) {
      this.activeTag = updatedTag;
      this.tags[index] = updatedTag;
    }
  }

  removeTag(label: string) {
    this.tags = this.tags.filter((tag) => tag.label !== label);
  }

  setActiveTag(tag: TagItem | null) {
    this.activeTag = tag;
  }

  openMenu(menu: ActiveTaglineMenu) {
    if (menu !== "editTag") {
      if (menu === "addNewTag") {
        this.activeTag = { label: "", link: "" };
      } else {
        this.activeTag = null;
      }
    }
    this.activeMenu = menu;
  }

  closeMenu() {
    this.activeMenu = null;
    this.activeTag = null;
  }

  isMenuOpen(id: ActiveTaglineMenu) {
    return this.activeMenu !== null && this.activeMenu === id;
  }

  updateStyleConfig(config: Partial<typeof defaultTaglineStyleConfig>) {
    this.styleConfig = { ...this.styleConfig, ...config };
  }

  checkIfStyleActive(prop: keyof StyleConfig, value: string) {
    return this.styleConfig[prop] === value;
  }
}

export const taglineUiStore = new TaglineUiStore();
