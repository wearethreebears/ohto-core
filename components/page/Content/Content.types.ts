import type { IDefaultTokens, TPercent, TPx } from "~/DesignTokens.types";

export type TContentWidth = "DEFAULT" | "MEDIUM";

export interface IContentProps {
  title?: string;
  width?: TContentWidth;
  tokenClass?: string;
}

export interface IContentCustomTokens {
  width: TPercent | TPx;
  asideWidth: TPx;
}

export type TContentWidthTokens = Pick<
  IDefaultTokens & IContentCustomTokens,
  "width"
>;

export type TContentStaticTokens = Pick<
  IDefaultTokens & IContentCustomTokens,
  "asideWidth"
>;
