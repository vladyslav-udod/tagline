import { TaglineUiStore } from "./ui/taglineUiStore";

export class RootStore {
  taglineUiStore = new TaglineUiStore();
}

export const rootStore = new RootStore();
