import type { IDefaultTokens, TFitContent, TPx } from "~/DesignTokens.types";

export type TIcon =
  | "ACCOUNT"
  | "ASSETS"
  | "ATTRIBUTES"
  | "ATTRIBUTE_TYPES"
  | "BOLD"
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
  | "HOME"
  | "HERETIC_LOGO"
  | "LINK"
  | "LIST_BULLET"
  | "LIST_NUMBERED"
  | "MENU"
  | "MINUS"
  | "ORDERS"
  | "PRODUCTS"
  | "PRODUCT_COLLECTIONS"
  | "PLUS"
  | "PROFILE"
  | "SEARCH"
  | "TICK"
  | "TICK_FILLED"
  | "TRASH"
  | "UNLINK"
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
