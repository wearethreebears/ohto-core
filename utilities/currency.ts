import { ohtoConfig } from "../../../ohto.config.ts";

export const transformNumberToCurrency = (number: number): string => {
  return new Intl.NumberFormat(ohtoConfig.locale, {
    style: "currency",
    currency: ohtoConfig.currency,
  }).format(number);
};
