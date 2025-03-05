import { $system } from "~/DesignTokens.config";
import type { TBoxStaticTokens } from "./Box.types";

export const STATIC_TOKENS: TBoxStaticTokens = {
  padding: $system.spacing.$default,
  borderColor: $system.colors.shade.$300,
};
