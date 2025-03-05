import { $system } from "~/DesignTokens.config";
import type {
  TTagSize,
  TTagSizeTokens,
  TTagTheme,
  TTagThemeTokens,
} from "./Tag.types";

export const THEME_TOKENS: Record<TTagTheme, TTagThemeTokens> = {
  DEFAULT: {
    backgroundColor: $system.colors.brand.$green,
    typographyColor: $system.colors.brand.$white,
    borderColor: $system.colors.brand.$greenDark,
  },
  SECONDARY: {
    backgroundColor: $system.colors.shade.$200,
    typographyColor: $system.colors.shade.$600,
    borderColor: $system.colors.shade.$300,
  },
};

export const SIZE_TOKENS: Record<TTagSize, TTagSizeTokens> = {
  DEFAULT: {
    paddingX: $system.spacing.$default,
    paddingY: $system.spacing.$small,
  },
  MICRO: {
    paddingX: $system.spacing.$small,
    paddingY: $system.spacing.$extraSmall,
  },
};
