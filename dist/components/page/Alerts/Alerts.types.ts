import type { IDefaultTokens, TPx, TSystemSpacing } from "~/DesignTokens.types";
import type { TIcon } from "@ohto/core/dist/components/base/Icon/Icon.types";

export interface IAlertCard {
  title: string;
  classList: string;
  icon: TIcon;
}

export interface IAlertsCustomTokens {
  width: TPx;
  spaceY: TSystemSpacing;
}

export type TAlertsStaticTokens = Pick<
  IDefaultTokens & IAlertsCustomTokens,
  "right" | "bottom" | "spaceY" | "width"
>;
