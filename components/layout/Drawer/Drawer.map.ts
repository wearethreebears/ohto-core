import type { TClassMap } from "~/types/components/classes";
import type {
  IDrawerCustomTokens,
  IDrawerEnterFromCustomTokens,
  TDrawerState,
} from "./Drawer.types";

export const STATE_CLASS_MAP: TClassMap<TDrawerState> = {
  DEFAULT: "translate-y-[--translateY] translate-x-[--translateX]",
  OPEN: "translate-y-[--open__translateY] translate-x-[--open__translateX]",
};

export const CUSTOM_CLASS_TOKEN_MAP: Record<
  keyof IDrawerEnterFromCustomTokens & keyof IDrawerCustomTokens,
  string
> = {
  translateY: "translate-y-[--translateY]",
  translateX: "translate-x-[--translateX]",
  open__translateY: "translate-y-[--open__translateY]",
  open__translateX: "translate-y-[--open__translateX]",
  closeButton__right: "right-[--closeButton__right]",
  closeButton__top: "top-[--closeButton__top]",
};
