import type { IDefaultTokens, TFitContent, TPx } from "~/DesignTokens.types";

export type TIcon =
  | "ACCOUNT"
  | "ASSETS"
  | "ATTRIBUTES"
  | "ATTRIBUTE_TYPES"
  | "BRANDS"
  | "CART"
  | "CHEVRON_DOWN"
  | "CHEVRON_LEFT"
  | "CHEVRON_RIGHT"
  | "CHEVRON_UP"
  | "CIRCLE"
  | "CROSS"
  | "CUSTOMERS"
  | "DISCOUNTS"
  | "EDIT"
  | "EYE"
  | "FILTERS"
  | "FOLDER_CLOSED"
  | "FOLDER_PLUS"
  | "HERETIC_LOGO"
  | "MENU"
  | "MINUS"
  | "ORDERS"
  | "PRODUCTS"
  | "PLUS"
  | "PROFILE"
  | "SEARCH"
  | "TICK"
  | "TICK_FILLED"
  | "TRASH"
  | "UPLOAD"
  | "WARNING";

export type TIconMap = Record<TIcon, Component>;

export type TIconSize = "DEFAULT" | "SMALL" | "MEDIUM" | "FIT";

export interface IIconProps {
  icon: TIcon;
  size?: TIconSize;
}

export interface IIconCustomTokens {
  height: TPx | TFitContent;
  width: TPx | TFitContent;
}

export type TIconSizeTokens = Pick<
  IDefaultTokens & IIconCustomTokens,
  "height" | "width"
>;
