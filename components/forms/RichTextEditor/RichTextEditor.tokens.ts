import { $system } from "~/DesignTokens.config";
import type { TRichTextStaticTokens } from "./RichTextEditor.types";

export const STATIC_TOKENS: TRichTextStaticTokens = {
  textareaWidth: "100%",
  textareaHeight: "2.5rem",
  typographyColor: $system.colors.shade.$700,
  placeholder__typographyColor: $system.colors.shade.$400,
};
