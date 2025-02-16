import type { IDefaultTokens } from "~/DesignTokens.types";
import type { TComponentTheme } from "~/types/components/themes";

export type TBodyTheme = TComponentTheme<
  "DEFAULT" | "SECONDARY" | "TERTIARY" | "INHERIT"
>;

export type TBodyTag =
  | "abbr"
  | "address"
  | "blockquote"
  | "cite"
  | "del"
  | "div"
  | "ins"
  | "mark"
  | "p"
  | "q"
  | "span"
  | "sub"
  | "sup"
  | "strong";

export type TBodySize = "DEFAULT" | "SMALL";

export interface IBodyProps {
  tag?: TBodyTag;
  size?: TBodySize;
  theme?: TBodyTheme;
}

export type TBodySizeTokens = Pick<IDefaultTokens, "typographySize">;
export type TBodyColorTokens = Pick<IDefaultTokens, "typographyColor">;
