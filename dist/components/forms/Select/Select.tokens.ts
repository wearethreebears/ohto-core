import { $system } from "~/DesignTokens.config";
import type { TSelectStaticTokens } from "./Select.types";

export const STATIC_TOKENS: TSelectStaticTokens = {
  cursor: "pointer",
  inputWidth: "100%",
  inputHeight: "2.5rem",
  backgroundColor: $system.colors.shade.$0,
  paddingY: $system.spacing.$small,
  paddingLeft: $system.spacing.$small,
  paddingRight: $system.spacing.$large,
  typographyColor: $system.colors.shade.$700,
  placeholder__typographyColor: $system.colors.shade.$400,
  inputNullTypographyColor: $system.colors.shade.$400,
  inputTypographyColor: $system.colors.shade.$700,
  iconRight: $system.spacing.$small,
  iconTop: $system.spacing.$half,
  optionsPanelBorderColor: $system.borders.colors.$secondary,
  optionsPanelBackgroundColor: $system.colors.shade.$0,
  optionCursor: $system.pointers.$default,
  optionTypographyColor: $system.colors.brand.$black,
  odd__optionBackgroundColor: $system.colors.shade.$100,
  even__optionBackgroundColor: $system.colors.shade.$0,
  optionButtonPaddingX: $system.spacing.$small,
  optionButtonPaddingY: $system.spacing.$small,
  focus__optionButtonBackgroundColor: $system.colors.brand.$green,
  focus__optionButtonTypographyColor: $system.colors.brand.$white,
};
