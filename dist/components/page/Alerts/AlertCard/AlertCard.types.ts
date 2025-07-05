import type { IDefaultTokens, TPx, TSystemSpacing } from "~/DesignTokens.types";
import type { TIcon } from "@ohto/core/components/base/Icon/Icon.types";

export interface IAlertCardProps {
  type: TAlertType;
  title?: string;
  body: string;
  key: string;
}

export interface IAlertCardConfig {
  title: string;
  icon: TIcon;
}

export interface IAlertCardCustomTokens {
  spaceX: TSystemSpacing;
}

export type TAlertCardStaticTokens = Pick<
  IDefaultTokens & IAlertCardCustomTokens,
  "padding" | "spaceX" | "typographyColor"
>;

export type TAlertCardTypeTokens = Pick<IDefaultTokens, "backgroundColor">;
