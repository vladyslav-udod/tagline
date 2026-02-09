import type { TaglineMenuOptions } from "../constants";

export interface TagItem {
  label: string;
  link: string;
}

export type ActiveTaglineMenu =
  | (typeof TaglineMenuOptions)[keyof typeof TaglineMenuOptions]
  | null;

export type TaglineStyleOptions =
  | "variant1"
  | "variant2"
  | "variant3"
  | "variant4";
export type TaglineSizeOptions = "XL" | "L" | "M" | "S" | "XS";
export type TaglineRadiusOptions = "r0" | "r4" | "r8" | "r12" | "r100";
export type TaglineAlignOptions = "left" | "center" | "right";

export interface StyleConfig {
  variant: TaglineStyleOptions;
  size: TaglineSizeOptions;
  radius: TaglineRadiusOptions;
  align: TaglineAlignOptions;
}

export type TaglineStyleKeyOptions = keyof StyleConfig;
