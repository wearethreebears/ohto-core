import type {
  TContentWidthTokens,
  TContentWidth,
  TContentStaticTokens,
} from "./Content.types";

export const STATIC_TOKENS: TContentStaticTokens = {
  asideWidth: "200px",
};

export const WIDTH_TOKENS: Record<TContentWidth, TContentWidthTokens> = {
  DEFAULT: {
    width: "100%",
  },
  MEDIUM: {
    width: "700px",
  },
};
