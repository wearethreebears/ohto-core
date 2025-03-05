import type {
  IDefaultTokens,
  TPercent,
  TPx,
  TSystemColor,
  TSystemSpacing,
} from "~/DesignTokens.types";

export interface ICheckboxToggleCustomTokens {
  height: TPx;
  width: TPx;
  peerChecked__group__after__translateX: TPercent;
  peerChecked__group__after__borderColor: TSystemColor;
  after__top: TPx;
  after__left: TPx;
  after__backgroundColor: TSystemColor;
  after__borderColor: TSystemColor;
  after__height: TPx;
  after__width: TPx;
  peerChecked__group__backgroundColor: TSystemColor;
  hover__peerChecked__group__backgroundColor: TSystemColor;
}

export type TCheckboxToggleStaticTokens = Pick<
  IDefaultTokens & ICheckboxToggleCustomTokens,
  | "cursor"
  | "backgroundColor"
  | "hover__backgroundColor"
  | "height"
  | "width"
  | "peerChecked__group__after__translateX"
  | "peerChecked__group__after__borderColor"
  | "after__top"
  | "after__left"
  | "after__backgroundColor"
  | "after__borderColor"
  | "after__height"
  | "after__width"
  | "peerChecked__group__backgroundColor"
  | "hover__peerChecked__group__backgroundColor"
>;

export interface ICheckboxToggleProps {
  hideLabel?: boolean;
  label: string;
}
