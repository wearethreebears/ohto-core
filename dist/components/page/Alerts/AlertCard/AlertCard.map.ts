import { language } from "~/language.config";
import type {
  IAlertCardConfig,
  IAlertCardCustomTokens,
} from "./AlertCard.types";

export const ALERT_CARD_CONFIG_MAP: Record<TAlertType, IAlertCardConfig> = {
  SUCCESS: {
    title: language.alerts.titles.success,
    icon: "TICK",
  },
  ERROR: {
    title: language.alerts.titles.error,
    icon: "CROSS",
  },
  WARNING: {
    title: language.alerts.titles.warning,
    icon: "WARNING",
  },
};

export const CUSTOM_CLASS_TOKEN_MAP: Record<
  keyof IAlertCardCustomTokens,
  string
> = {
  spaceX: "space-y-[--spaceY]",
};
