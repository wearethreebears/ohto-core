import { $system } from "~/DesignTokens.config";
import type { TCheckboxToggleStaticTokens } from "./CheckboxToggle.types";

export const STATIC_TOKENS: TCheckboxToggleStaticTokens = {
  cursor: $system.pointers.$pointer,
  height: "18px",
  width: "18px",
  backgroundColor: $system.colors.shade.$200,
  hover__backgroundColor: $system.colors.brand.$black,
  peerChecked__group__backgroundColor: $system.colors.brand.$black,
  peerChecked__group__borderColor: $system.colors.brand.$black,
};
