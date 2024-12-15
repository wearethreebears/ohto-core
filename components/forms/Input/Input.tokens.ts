import { $system } from "~/DesignTokens.config";
import type { TInputStaticTokens } from "./Input.types";

export const STATIC_TOKENS: TInputStaticTokens = {
  inputWidth: "100%",
  inputHeight: "2.5rem",
  paddingY: $system.spacing.$small,
  paddingX: $system.spacing.$small,
  typographyColor: $system.colors.shade.$700,
  placeholder__typographyColor: $system.colors.shade.$400,
};
