import { $system } from "~/DesignTokens.config";
import type { TErrorStaticTokens } from "./Error.types";

export const STATIC_TOKENS: TErrorStaticTokens = {
  typographyColor: $system.colors.alerts.$error,
};
