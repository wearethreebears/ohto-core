import type { IAlertsCustomTokens } from "./Alerts.types";

export const CUSTOM_CLASS_TOKEN_MAP: Record<keyof IAlertsCustomTokens, string> =
  {
    width: "w-[--width]",
    spaceY: "space-y-[--spaceY]",
  };
