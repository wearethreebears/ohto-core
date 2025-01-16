import { ohtoConfig } from "@ohtoConfig";

const config = ohtoConfig();

export const transformNumberToCurrency = (
  number: number | undefined
): string => {
  return new Intl.NumberFormat(config.locale, {
    style: "currency",
    currency: config.currency,
  }).format(number / 100 || 0);
};
