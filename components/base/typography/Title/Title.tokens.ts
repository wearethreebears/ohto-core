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
};

export const THEME_TOKENS: Record<TTitleTheme, TTitleColorTokens> = {
  DEFAULT: {
    typographyColor: $system.colors.brand.$black,
  },
};
