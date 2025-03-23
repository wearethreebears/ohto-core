import type { ITextareaCustomTokens } from "./Textarea.types";

export const CUSTOM_CLASS_TOKEN_MAP: Record<
  keyof ITextareaCustomTokens,
  string
> = {
  textareaWidth: "w-[--inputWidth]",
  textareaHeight: "h-[--inputHeight]",
};
