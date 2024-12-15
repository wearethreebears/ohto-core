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
};

export const THEME_TOKENS: Record<TBodyTheme, TBodyColorTokens> = {
  DEFAULT: {
    typographyColor: $system.colors.brand.$black,
  },
  INHERIT: {
    typographyColor: $system.colors.$inherit,
  },
};
