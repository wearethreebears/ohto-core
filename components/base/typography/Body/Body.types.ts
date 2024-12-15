import type { IDefaultTokens } from "~/DesignTokens.types";
import type { TComponentTheme } from "~/types/components/themes";

export type TBodyTheme = TComponentTheme<"DEFAULT" | "INHERIT">;

export type TBodyTag =
  | "abbr"
  | "address"
  | "blockquote"
  | "cite"
  | "del"
  | "ins"
  | "mark"
  | "p"
  | "q"
  | "span"
  | "sub"
  | "sup"
  | "strong";

export type TBodySize = "DEFAULT";

export interface IBodyProps {
  tag?: TBodyTag;
  size?: TBodySize;
  theme?: TBodyTheme;
}

export type TBodySizeTokens = Pick<IDefaultTokens, "typographySize">;
export type TBodyColorTokens = Pick<IDefaultTokens, "typographyColor">;
