import type { IDefaultTokens } from "~/DesignTokens.types";
import type { TComponentTheme } from "~/types/components/themes";

export type TTitleTheme = TComponentTheme<"DEFAULT">;

export type TTitleTag = "h1";

export type TTitleSize = "DEFAULT" | "SMALL";

export interface ITitleProps {
  tag?: TTitleTag;
  size?: TTitleSize;
  theme?: TTitleTheme;
}

export type TTitleSizeTokens = Pick<IDefaultTokens, "typographySize">;
export type TTitleColorTokens = Pick<IDefaultTokens, "typographyColor">;
