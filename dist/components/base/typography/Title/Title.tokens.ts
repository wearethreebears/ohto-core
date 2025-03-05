import { $system } from "~/DesignTokens.config";

import type {
  TTitleColorTokens,
  TTitleSizeTokens,
  TTitleSize,
  TTitleTheme,
} from "./Title.types";

export const SIZE_TOKENS: Record<TTitleSize, TTitleSizeTokens> = {
  DEFAULT: {
    typographySize: "1.75rem",
  },
  SMALL: {
    typographySize: "1.25rem",
  },
  MEDIUM: {
    typographySize: "2.25rem",
  },
  LARGE: {
    typographySize: "2.75rem",
  },
  EXTRA_LARGE: {
    typographySize: "3.5rem",
  },
};

export const THEME_TOKENS: Record<TTitleTheme, TTitleColorTokens> = {
  DEFAULT: {
    typographyColor: $system.colors.brand.$black,
  },
  SECONDARY: {
    typographyColor: $system.colors.brand.$white,
  },
};
