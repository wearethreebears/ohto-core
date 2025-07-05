import type { TIcon } from "@ohto/core/components/base/Icon/Icon.types";
import type { IDefaultTokens, TPercent, TRem } from "~/DesignTokens.types";
import type { JSONContent } from "@tiptap/vue-3";

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
  defaultContent?: JSONContent;
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
