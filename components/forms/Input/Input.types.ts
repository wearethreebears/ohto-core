import type { IDefaultTokens, TPercent, TRem } from "~/DesignTokens.types";
import type { TIcon } from "@ohto/core/components/base/Icon/Icon.types";

export type TInputType =
  | "text"
  | "email"
  | "password"
  | "search"
  | "number"
  | "hidden";

export type TInputAutoComplete = "on" | "off" | string;

export interface IInputProps {
  id: string;
  label: string;
  hideLabel?: boolean;
  placeholder?: string;
  name: string;
  error?: string;
  value?: string | number;
  type?: TInputType;
  class?: any;
  autocomplete?: TInputAutoComplete;
  testId?: string;
  icon?: TIcon;
  required?: boolean;
}

export interface IInputCustomTokens {
  inputWidth: TPercent;
  inputHeight: TRem;
}

export type TInputStaticTokens = Pick<
  IDefaultTokens & IInputCustomTokens,
  | "paddingY"
  | "paddingX"
  | "typographyColor"
  | "placeholder__typographyColor"
  | "inputWidth"
  | "inputHeight"
>;
