import { $system } from "~/DesignTokens.config";
import type {
  TAlertCardStaticTokens,
  TAlertCardTypeTokens,
} from "./AlertCard.types";

export const STATIC_TOKENS: TAlertCardStaticTokens = {
  spaceX: $system.spacing.$default,
  padding: $system.spacing.$default,
  typographyColor: $system.colors.brand.$white,
};

export const TYPE_TOKENS: Record<TAlertType, TAlertCardTypeTokens> = {
  SUCCESS: {
    backgroundColor: $system.colors.alerts.$success,
  },
  WARNING: {
    backgroundColor: $system.colors.alerts.$warning,
  },
  ERROR: {
    backgroundColor: $system.colors.alerts.$error,
  },
};
