import type { IDefaultTokens } from "~/DesignTokens.types";
import type { TComponentTheme } from "~/types/components/themes";

export type TSubtitleTheme = TComponentTheme<
  "DEFAULT" | "SECONDARY" | "TERTIARY"
>;

export type TSubtitleTag = "h2" | "h3" | "h4" | "h5" | "h6" | "span";

export type TSubtitleSize = "DEFAULT" | "SMALL";

export interface ISubtitleProps {
  tag?: TSubtitleTag;
  size?: TSubtitleSize;
  theme?: TSubtitleTheme;
}

export type TSubtitleSizeTokens = Pick<IDefaultTokens, "typographySize">;
export type TSubtitleColorTokens = Pick<IDefaultTokens, "typographyColor">;
