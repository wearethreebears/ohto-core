import { $system } from "~/DesignTokens.config";
import type {
  TButtonStaticTokens,
  TButtonThemeTokens,
} from "./ButtonMicro.types";
import type { TButtonTheme } from "../Button.types";

export const THEME_TOKENS: Record<TButtonTheme, TButtonThemeTokens> = {
  DEFAULT: {
    backgroundColor: $system.colors.brand.$green,
    typographyColor: $system.colors.brand.$white,
    hover__backgroundColor: $system.colors.brand.$greenDark,
    hover__typographyColor: $system.colors.brand.$white,
  },
  SECONDARY: {
    backgroundColor: $system.colors.brand.$greenLight,
    typographyColor: $system.colors.brand.$greenDark,
    hover__backgroundColor: $system.colors.brand.$green,
    hover__typographyColor: $system.colors.brand.$white,
  },
};

export const STATIC_TOKENS: TButtonStaticTokens = {
  paddingX: $system.spacing.$small,
  paddingY: $system.spacing.$extraSmall,
  disabled__backgroundColor: $system.colors.brand.$white,
  disabled__typographyColor: $system.colors.brand.$black,
  typographySize: "0.75rem",
};
