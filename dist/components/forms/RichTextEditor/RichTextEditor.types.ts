import type { TIcon } from "@ohto/core/dist/components/base/Icon/Icon.types";
import type { IDefaultTokens, TPercent, TRem } from "~/DesignTokens.types";

export interface IRichTextEditorProps {
  id: string;
  label: string;
  hideLabel?: boolean;
  placeholder?: string;
  name: string;
  error?: string;
  value?: string;
  class?: any;
  testId?: string;
  icon?: TIcon;
  required?: boolean;
}

export interface IRichTextCustomTokens {
  textareaWidth: TPercent;
  textareaHeight: TRem;
}

export type TRichTextStaticTokens = Pick<
  IDefaultTokens & IRichTextCustomTokens,
  | "typographyColor"
  | "placeholder__typographyColor"
  | "textareaWidth"
  | "textareaHeight"
>;
