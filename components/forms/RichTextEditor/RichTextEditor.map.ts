import type { IRichTextCustomTokens } from "./RichTextEditor.types";

export const CUSTOM_CLASS_TOKEN_MAP: Record<
  keyof IRichTextCustomTokens,
  string
> = {
  textareaWidth: "w-[--inputWidth]",
  textareaHeight: "h-[--inputHeight]",
};
