import { $system } from "~/DesignTokens.config";
import type {
  TButtonStaticTokens,
  TButtonThemeTokens,
} from "./ButtonSecondary.types";
import type { TButtonTheme } from "../Button.types";

export const THEME_TOKENS: Record<TButtonTheme, TButtonThemeTokens> = {
  DEFAULT: {
    backgroundColor: $system.colors.brand.$white,
    typographyColor: $system.colors.brand.$green,
    borderColor: $system.colors.brand.$green,
    hover__backgroundColor: $system.colors.brand.$white,
    hover__typographyColor: $system.colors.brand.$green,
  },
  SECONDARY: {
    backgroundColor: $system.colors.brand.$white,
    typographyColor: $system.colors.brand.$white,
    borderColor: $system.colors.brand.$white,
    hover__backgroundColor: $system.colors.brand.$white,
    hover__typographyColor: $system.colors.brand.$green,
  },
};

export const STATIC_TOKENS: TButtonStaticTokens = {
  paddingX: $system.spacing.$default,
  paddingY: $system.spacing.$small,
  disabled__backgroundColor: $system.colors.brand.$white,
  disabled__typographyColor: $system.colors.brand.$black,
};
