import type {
  TBodyColorTokens,
  TBodySizeTokens,
  TBodySize,
  TBodyTheme,
} from "./Body.types";

import { $system } from "~/DesignTokens.config";

export const SIZE_TOKENS: Record<TBodySize, TBodySizeTokens> = {
  DEFAULT: {
    typographySize: "0.875rem",
  },
  SMALL: {
    typographySize: "0.75rem",
  },
};

export const THEME_TOKENS: Record<TBodyTheme, TBodyColorTokens> = {
  DEFAULT: {
    typographyColor: $system.colors.brand.$black,
  },
  SECONDARY: {
    typographyColor: $system.colors.brand.$white,
  },
  TERTIARY: {
    typographyColor: $system.colors.shade.$500,
  },
  INHERIT: {
    typographyColor: $system.colors.$inherit,
  },
};
