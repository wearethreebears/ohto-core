import { $system } from "~/DesignTokens.config";
import type { TAlertsStaticTokens } from "./Alerts.types";

export const STATIC_TOKENS: TAlertsStaticTokens = {
  width: "300px",
  right: $system.spacing.$default,
  bottom: $system.spacing.$default,
  spaceY: $system.spacing.$default,
};
