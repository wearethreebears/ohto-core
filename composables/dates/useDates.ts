interface IDateOptions {
  withTime?: boolean;
}

interface IUseDates {
  transformDateStringToDateLong: (
    dateString: string,
    options?: IDateOptions
  ) => string;
  transformDateStringToDateShort: (
    dateString: string,
    options?: IDateOptions
  ) => string;
}

export default function useDates(): IUseDates {
  const runtimeConfig = useRuntimeConfig();

  const transformDateStringToDateLong = (
    dateString: string,
    options: IDateOptions = {}
  ): string => {
    const date = new Date(dateString);
    return transformDateStringToDate(date, {
      dateStyle: "full",
      timeStyle: options.withTime ? "short" : undefined,
    });
  };

  const transformDateStringToDateShort = (
    dateString: string,
    options: IDateOptions = {}
  ): string => {
    const date = new Date(dateString);
    return transformDateStringToDate(date, {
      dateStyle: "medium",
      timeStyle: options.withTime ? "short" : undefined,
    });
  };

  const transformDateStringToDate = (
    dateString: Date,
    options: Intl.DateTimeFormatOptions
  ): string => {
    return new Intl.DateTimeFormat("en-GB", {
      timeStyle: options.timeStyle,
      dateStyle: options.dateStyle,
      timeZone: runtimeConfig.public.TIMEZONE,
    }).format(dateString);
  };

  return {
    transformDateStringToDateLong,
    transformDateStringToDateShort,
  };
}
