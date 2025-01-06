import type { IDefaultTokens } from "~/DesignTokens.types";

export type TPaginationPageState = "DEFAULT" | "ACTIVE";

export interface IPaginationProps {
  pageCount?: number;
  linkCount?: number;
}
export type TPaginationPageStateTokens = Pick<
  IDefaultTokens,
  | "typographyColor"
  | "backgroundColor"
  | "borderColor"
  | "hover__typographyColor"
  | "hover__backgroundColor"
>;
