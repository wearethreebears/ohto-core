import { $system } from "~/DesignTokens.config";
import type { TCheckboxToggleStaticTokens } from "./CheckboxToggle.types";

export const STATIC_TOKENS: TCheckboxToggleStaticTokens = {
  cursor: $system.pointers.$pointer,
  height: "24px",
  width: "42px",
  backgroundColor: $system.colors.shade.$200,
  hover__backgroundColor: $system.colors.shade.$300,
  peerChecked__group__after__translateX: "100%",
  peerChecked__group__after__borderColor: $system.colors.shade.$0,
  after__top: "2px",
  after__left: "2px",
  after__backgroundColor: $system.colors.shade.$0,
  after__borderColor: $system.borders.colors.$secondary,
  after__height: "18px",
  after__width: "18px",
  peerChecked__group__backgroundColor: $system.colors.brand.$green,
  hover__peerChecked__group__backgroundColor: $system.colors.brand.$greenDark,
};
