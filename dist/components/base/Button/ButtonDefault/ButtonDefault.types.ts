import type { IDefaultTokens } from "~/DesignTokens.types";

export type TButtonStaticTokens = Pick<
  IDefaultTokens,
  | "disabled__backgroundColor"
  | "disabled__typographyColor"
  | "paddingX"
  | "paddingY"
>;

export type TButtonThemeTokens = Pick<
  IDefaultTokens,
  | "backgroundColor"
  | "typographyColor"
  | "hover__backgroundColor"
  | "hover__typographyColor"
>;
