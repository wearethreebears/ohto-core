import type { TBillingModelType } from "@ohto/client/types/billing-models.ts/billing-model.types";

export const DEFAULT_VARIANT_UNIQUE_ID = "0";

export const BILLING_MODEL_TYPE_MAP: Record<TBillingModelType, string> = {
  ONE_OFF: "One off",
  RECURRING: "Recurring",
} as const;
