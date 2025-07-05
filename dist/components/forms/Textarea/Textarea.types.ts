import type { IDefaultTokens, TPercent, TRem } from "~/DesignTokens.types";
import type { TIcon } from "@ohto/core/components/base/Icon/Icon.types";

export type TTextareaAutoComplete = "on" | "off" | string;

export interface ITextareaProps {
  id: string;
  label: string;
  hideLabel?: boolean;
  placeholder?: string;
  name: string;
  error?: string;
  value?: string;
  class?: any;
  autocomplete?: TTextareaAutoComplete;
  testId?: string;
  icon?: TIcon;
  required?: boolean;
}

export interface ITextareaCustomTokens {
  textareaWidth: TPercent;
  textareaHeight: TRem;
}

export type TTextareaStaticTokens = Pick<
  IDefaultTokens & ITextareaCustomTokens,
  | "paddingY"
  | "paddingX"
  | "typographyColor"
  | "placeholder__typographyColor"
  | "textareaWidth"
  | "textareaHeight"
>;
