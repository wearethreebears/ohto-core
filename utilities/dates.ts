import { ohtoConfig } from "../../../../ohto.config.ts";

export const transformDateStringToDateLong = (
  dateString: string,
  options: {
    withDate?: boolean;
  }
): string => {
  const date = new Date(dateString);
  return transformDateStringToDate(date, {
    dateStyle: "full",
    timeStyle: options.withDate ? "medium" : undefined,
  });
};

const transformDateStringToDate = (
  dateString: Date,
  options: Intl.DateTimeFormatOptions
): string => {
  return new Intl.DateTimeFormat("en-GB", {
    timeStyle: options.timeStyle,
    dateStyle: options.dateStyle,
    timeZone: ohtoConfig.timezone,
  }).format(dateString);
};
