import type { ICheckboxToggleCustomTokens } from "./CheckboxToggle.types";

export const CUSTOM_CLASS_TOKEN_MAP: Record<
  keyof ICheckboxToggleCustomTokens,
  string
> = {
  height: "h-[--height]",
  width: "w-[--width]",
  peerChecked__group__backgroundColor:
    "peer-checked:group-[]:bg-[--peerChecked__group__backgroundColor]",
  hover__peerChecked__group__backgroundColor:
    "hover:peer-checked:group-[]:bg-[--hover__peerChecked__group__backgroundColor]",
};
