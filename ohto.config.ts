import type { IOhtoConfig } from "./ohto.config.types";

export const ohtoConfig = (): IOhtoConfig => {
  return {
    alerts: {
      timerLength: 3000, //ms
    },
    client: {
      baseUrl: "http://127.0.0.1:8000",
    },
    app: {
      url: "https://storefront.hereticstore.com",
    },
    locale: "en-GB",
    currency: "GBP",
    timezone: "Europe/London",
  };
};
