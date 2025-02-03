import { $system } from "~/DesignTokens.config";
import type {
  TButtonStaticTokens,
  TButtonThemeTokens,
} from "./ButtonSecondary.types";
import type { TButtonTheme } from "../Button.types";

export const THEME_TOKENS: Record<TButtonTheme, TButtonThemeTokens> = {
  DEFAULT: {
    borderColor: $system.colors.brand.$black,
    backgroundColor: $system.colors.brand.$black,
    typographyColor: $system.colors.brand.$white,
    hover__backgroundColor: $system.colors.$inherit,
    hover__typographyColor: $system.colors.brand.$black,
  },
  SECONDARY: {
    borderColor: $system.colors.brand.$white,
    backgroundColor: $system.colors.brand.$white,
    typographyColor: $system.colors.brand.$black,
    hover__backgroundColor: $system.colors.$inherit,
    hover__typographyColor: $system.colors.brand.$white,
  },
};

export const STATIC_TOKENS: TButtonStaticTokens = {
  paddingX: $system.spacing.$default,
  paddingY: $system.spacing.$small,
  disabled__backgroundColor: $system.colors.brand.$white,
  disabled__typographyColor: $system.colors.brand.$black,
};
