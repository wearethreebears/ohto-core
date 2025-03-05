import type { IResponseErrors } from "@ohto/client/types/response.types";
import { ref } from "vue";

export type IErrors = Record<string, string>;

interface IUseErrors {
  errors: Ref<IErrors | {}>;
  getErrorsFromResponse(errors: IResponseErrors): IErrors;
  getError(key: string): string | undefined;
  deleteError(key: string): void;
}

export default function useErrors(flowErrors?: IErrors): IUseErrors {
  const errors = ref<IErrors>(flowErrors || {});

  const getErrorsFromResponse = (errors: IResponseErrors): IErrors => {
    const errorList: Record<string, string> = {};
    Object.keys(errors).forEach((key) => {
      errorList[key] = errors[key][0];
    });
    return errorList;
  };

  const getError = (key: string): string | undefined => {
    return errors.value?.[key];
  };

  const deleteError = (key: string): void => {
    delete errors.value[key];
  };

  return {
    errors,
    getErrorsFromResponse,
    getError,
    deleteError,
  };
}
