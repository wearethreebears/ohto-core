import { $system } from "~/DesignTokens.config";
import type { TModalStaticTokens } from "./Modal.types";

export const STATIC_TOKENS: TModalStaticTokens = {
  padding: $system.spacing.$default,
  backdrop__backgroundColor: $system.colors.brand.$black,
  backdrop__backgroundOpacity: $system.opacity.$80,
  backgroundColor: $system.colors.brand.$white,
  width: "768px",
};
