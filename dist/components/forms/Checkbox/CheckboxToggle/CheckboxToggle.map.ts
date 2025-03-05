import type { ICheckboxToggleCustomTokens } from "./CheckboxToggle.types";

export const CUSTOM_CLASS_TOKEN_MAP: Record<
  keyof ICheckboxToggleCustomTokens,
  string
> = {
  height: "h-[--height]",
  width: "w-[--width]",
  peerChecked__group__after__translateX:
    "peer-checked:group-[]:after:translate-x-[--peerChecked__group__after__translateX]",
  peerChecked__group__after__borderColor:
    "peer-checked:group-[]:after:border-[--peerChecked__group__after__borderColor]",
  after__top: "after:top-[--after__top]",
  after__left: "after:left-[--after__left]",
  after__backgroundColor: "after:bg-[--after__backgroundColor]",
  after__borderColor: "after:border-[--after__borderColor]",
  after__height: "after:h-[--after__height]",
  after__width: "after:w-[--after__width]",
  peerChecked__group__backgroundColor:
    "peer-checked:group-[]:bg-[--peerChecked__group__backgroundColor]",
  hover__peerChecked__group__backgroundColor:
    "hover:peer-checked:group-[]:bg-[--hover__peerChecked__group__backgroundColor]",
};
