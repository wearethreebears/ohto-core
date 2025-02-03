import type {
  TSubtitleColorTokens,
  TSubtitleSizeTokens,
  TSubtitleSize,
  TSubtitleTheme,
} from "./Subtitle.types";
import { $system } from "~/DesignTokens.config";

export const SIZE_TOKENS: Record<TSubtitleSize, TSubtitleSizeTokens> = {
  DEFAULT: {
    typographySize: "1.25rem",
  },
  SMALL: {
    typographySize: "1rem",
  },
};

export const THEME_TOKENS: Record<TSubtitleTheme, TSubtitleColorTokens> = {
  DEFAULT: {
    typographyColor: $system.colors.brand.$black,
  },
  SECONDARY: {
    typographyColor: $system.colors.brand.$white,
  },
  TERTIARY: {
    typographyColor: $system.colors.shade.$500,
  },
};
