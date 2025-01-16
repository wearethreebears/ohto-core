import { ohtoConfig } from "@ohtoConfig";

export const transformNumberToCurrency = (
  number: number | undefined
): string => {
  return new Intl.NumberFormat(ohtoConfig.locale, {
    style: "currency",
    currency: ohtoConfig.currency,
  }).format(number / 100 || 0);
};
