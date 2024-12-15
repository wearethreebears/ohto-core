import type {
  IDefaultTokens,
  TPercent,
  TRem,
  TZero,
} from "@ohto/core/DesignTokens.types";
import { TSystemSpacing } from "@ohto/core/DesignTokens.types";

export type TDrawerEnterFrom = "DEFAULT" | "LEFT" | "TOP" | "BOTTOM";
export type TDrawerState = "DEFAULT" | "OPEN";

export interface IDrawerProps {
  title: string;
  enterFrom?: TDrawerEnterFrom;
  state?: TDrawerState;
}

export interface IDrawerCustomTokens {
  closeButton__top: TSystemSpacing;
  closeButton__right: TSystemSpacing;
}

export interface IDrawerEnterFromCustomTokens {
  translateY: TPercent | TZero;
  translateX: TPercent | TZero;
  open__translateY: TPercent | TZero;
  open__translateX: TPercent | TZero;
}

export type TDrawerEnterFromTokens = Pick<
  IDefaultTokens & IDrawerEnterFromCustomTokens,
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "translateY"
  | "translateX"
  | "open__translateY"
  | "open__translateX"
>;

export type TDrawerStaticTokens = Pick<
  IDefaultTokens & IDrawerCustomTokens,
  "closeButton__top" | "closeButton__right"
>;
