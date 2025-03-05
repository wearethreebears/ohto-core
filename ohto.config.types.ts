interface IOhtoAlertsConfig {
  timerLength: number;
}

interface IOhtoClientConfig {
  baseUrl?: string;
}

interface IOhtoAppConfig {
  url: string;
}

export interface IOhtoConfig {
  alerts: IOhtoAlertsConfig;
  client: IOhtoClientConfig;
  app: IOhtoAppConfig;
  locale: string;
  currency: string;
  timezone: string;
}
