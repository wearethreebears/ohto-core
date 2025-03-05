import { NuxtLink } from "#components";

import type {
  TPaginationControlLinkMap,
  TPaginationControlComponentMap,
} from "./PaginationControl.types";
import { language } from "~/language.config";

export const ICON_MAP: TPaginationControlLinkMap = {
  PREVIOUS: {
    icon: "CHEVRON_LEFT",
    a11yText: language.pagination.directions.previous.allyText,
  },
  NEXT: {
    icon: "CHEVRON_RIGHT",
    a11yText: language.pagination.directions.next.allyText,
  },
};

export const COMPONENT_MAP: TPaginationControlComponentMap = {
  DEFAULT: NuxtLink,
  DISABLED: "div",
};
