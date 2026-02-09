import { theme } from "@/shared/styles/theme";
import type { StyleConfig } from "./models/tagline";

export const TaglineMenuOptions = {
  General: "general",
  Style: "style",
  EditTag: "editTag",
  AddNewTag: "addNewTag",
} as const;

export const styleVariants = [
  "variant1",
  "variant2",
  "variant3",
  "variant4",
] as const;
export const sizes = ["XL", "L", "M", "S", "XS"] as const;
export const radiuses = ["r0", "r4", "r8", "r12", "r100"] as const;

export const defaultTaglineStyleConfig: StyleConfig = {
  variant: "variant1",
  size: "M",
  radius: "r4",
  align: "center",
};

export const styleConfigRules = {
  variants: {
    variant1: `
      background-color: rgba(255, 255, 255, 0.1);
      border: 1px solid transparent;
    `,
    variant2: `
      background-color: rgba(21, 123, 218, 0.2);
      color: rgba(86, 173, 255, 1);
      border: 1px solid transparent;
    `,
    variant3: `
      background-color: ${theme.colors.primary};
      border: 1px solid transparent;
    `,
    variant4: `
      background-color: transparent;
      border: 1px solid rgba(255, 255, 255, 0.25);
    `,
  },
  sizes: {
    XL: `
      font-size: 1.5rem;
      padding: 0.75rem 1.5rem;
    `,
    L: `
      font-size: 1.25rem;
      padding: 0.625rem 1.25rem;
    `,
    M: `
      font-size: 1rem;
      padding: 0.5rem 1rem;
    `,
    S: `
      font-size: 0.875rem;
      padding: 0.375rem 0.75rem;
    `,
    XS: `
      font-size: 0.75rem;
      padding: 0.25rem 0.5rem;
    `,
  },
  radiuses: {
    r0: `
      border-radius: 0;
    `,
    r4: `
      border-radius: 4px;
    `,
    r8: `
      border-radius: 8px;
    `,
    r12: `
      border-radius: 12px;
    `,
    r100: `
      border-radius: 100px;
    `,
  },
  alignments: {
    left: `
      justify-content: flex-start;
    `,
    center: `
      justify-content: center;
    `,
    right: `
      justify-content: flex-end;
    `,
  },
};
