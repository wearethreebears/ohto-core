import type {
  TControlColorTokens,
  TControlSize,
  TControlTheme,
  TControlSizeTokens,
} from "./Control.types";

import { $system } from "~/DesignTokens.config";

export const SIZE_TOKENS: Record<TControlSize, TControlSizeTokens> = {
  DEFAULT: {
    typographySize: "0.75rem",
  },
};

export const THEME_TOKENS: Record<TControlTheme, TControlColorTokens> = {
  DEFAULT: {
    typographyColor: $system.colors.shade.$700,
  },
  INHERIT: {
    typographyColor: $system.colors.$inherit,
  },
};
