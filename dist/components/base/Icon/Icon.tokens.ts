import type { TIconSize, TIconSizeTokens } from "./Icon.types";

export const SIZE_TOKENS: Record<TIconSize, TIconSizeTokens> = {
  DEFAULT: {
    width: "20px",
    height: "20px",
  },
  SMALL: {
    width: "32px",
    height: "32px",
  },
  MEDIUM: {
    width: "44px",
    height: "44px",
  },
  FIT: {
    width: "fit-content",
    height: "fit-content",
  },
};
