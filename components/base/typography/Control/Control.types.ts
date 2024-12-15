import type { IDefaultTokens } from "~/DesignTokens.types";
import type { TComponentTheme } from "~/types/components/themes";

export type TControlTheme = TComponentTheme<"DEFAULT" | "INHERIT">;

export type TControlTag = "span" | "strong";

export type TControlSize = "DEFAULT";

export interface IControlProps {
  tag?: TControlTag;
  size?: TControlSize;
  theme?: TControlTheme;
}

export type TControlSizeTokens = Pick<IDefaultTokens, "typographySize">;
export type TControlColorTokens = Pick<IDefaultTokens, "typographyColor">;
