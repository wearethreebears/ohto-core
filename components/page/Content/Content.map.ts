import type { IContentCustomTokens } from "./Content.types";

export const CUSTOM_CLASS_TOKEN_MAP: Record<
  keyof IContentCustomTokens,
  string
> = {
  width: "w-[--width]",
  asideWidth: "w-[--asideWidth]",
};
