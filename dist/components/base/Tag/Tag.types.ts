import type { IDefaultTokens } from "~/DesignTokens.types";
import type { TComponentTheme } from "~/types/components/themes";

export type TTagSize = "DEFAULT" | "MICRO";
export type TTagTheme = TComponentTheme<"DEFAULT" | "SECONDARY">;

export interface ITagProps {
  id?: number;
  canRemove?: boolean;
  size?: TTagSize;
  theme?: TTagTheme;
}

export type TTagThemeTokens = Pick<
  IDefaultTokens,
  "backgroundColor" | "typographyColor" | "borderColor"
>;

export type TTagSizeTokens = Pick<IDefaultTokens, "paddingX" | "paddingY">;
