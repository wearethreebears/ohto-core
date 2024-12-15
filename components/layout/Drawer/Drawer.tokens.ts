import type {
  TDrawerEnterFromTokens,
  TDrawerEnterFrom,
  TDrawerStaticTokens,
} from "./Drawer.types";

import { $system } from "~/DesignTokens.config";

export const STATIC_TOKENS: TDrawerStaticTokens = {
  closeButton__right: $system.spacing.$default,
  closeButton__top: $system.spacing.$default,
};

export const ENTER_FROM_TOKENS: Record<
  TDrawerEnterFrom,
  TDrawerEnterFromTokens
> = {
  DEFAULT: {
    top: $system.spacing.$0,
    bottom: $system.spacing.$0,
    left: $system.spacing.$unset,
    right: $system.spacing.$0,
    translateY: 0,
    translateX: "100%",
    open__translateY: 0,
    open__translateX: 0,
  },
  LEFT: {
    top: $system.spacing.$0,
    bottom: $system.spacing.$0,
    left: $system.spacing.$0,
    right: $system.spacing.$unset,
    translateY: 0,
    translateX: "-100%",
    open__translateY: 0,
    open__translateX: 0,
  },
  TOP: {
    top: $system.spacing.$0,
    bottom: $system.spacing.$unset,
    left: $system.spacing.$0,
    right: $system.spacing.$0,
    translateY: "-100%",
    translateX: 0,
    open__translateY: 0,
    open__translateX: 0,
  },
  BOTTOM: {
    top: $system.spacing.$unset,
    bottom: $system.spacing.$0,
    left: $system.spacing.$0,
    right: $system.spacing.$0,
    translateY: "100%",
    translateX: 0,
    open__translateY: 0,
    open__translateX: 0,
  },
};
