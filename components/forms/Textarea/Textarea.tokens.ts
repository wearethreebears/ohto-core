import { $system } from "~/DesignTokens.config";
import type { TTextareaStaticTokens } from "./Textarea.types";

export const STATIC_TOKENS: TTextareaStaticTokens = {
  textareaWidth: "100%",
  textareaHeight: "2.5rem",
  paddingY: $system.spacing.$small,
  paddingX: $system.spacing.$small,
  typographyColor: $system.colors.shade.$700,
  placeholder__typographyColor: $system.colors.shade.$400,
};
