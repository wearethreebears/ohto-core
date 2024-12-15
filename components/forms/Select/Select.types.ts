import type {
  IDefaultTokens,
  TPercent,
  TRem,
  TSystemColor,
  TSystemPointer,
  TSystemSpacing,
} from "~/DesignTokens.types";

export interface ISelectItem {
  id: number | string;
  title: string;
  slug?: string;
}

export interface ISelectFromSearch {
  id: string;
  label: string;
  hideLabel?: boolean;
  placeholder?: string;
  name: string;
  error?: string;
  value?: ISelectItem | ISelectItem[];
  items: ISelectItem[];
  maxItems?: number;
}
export interface ISelectCustomTokens {
  inputWidth: TPercent;
  inputHeight: TRem;
  inputNullTypographyColor: TSystemColor;
  inputTypographyColor: TSystemColor;
  iconTop: TSystemSpacing;
  iconRight: TSystemSpacing;
  optionsPanelBorderColor: TSystemColor;
  optionsPanelBackgroundColor: TSystemColor;
  optionCursor: TSystemPointer;
  optionTypographyColor: TSystemColor;
  odd__optionBackgroundColor: TSystemColor;
  even__optionBackgroundColor: TSystemColor;
  focus__optionButtonBackgroundColor: TSystemColor;
  focus__optionButtonTypographyColor: TSystemColor;
  optionButtonPaddingX: TSystemSpacing;
  optionButtonPaddingY: TSystemSpacing;
}

export type TSelectStaticTokens = Pick<
  IDefaultTokens & ISelectCustomTokens,
  | "cursor"
  | "backgroundColor"
  | "paddingY"
  | "paddingLeft"
  | "paddingRight"
  | "typographyColor"
  | "placeholder__typographyColor"
  | "inputWidth"
  | "inputHeight"
  | "inputNullTypographyColor"
  | "inputTypographyColor"
  | "iconRight"
  | "iconTop"
  | "optionsPanelBorderColor"
  | "optionsPanelBackgroundColor"
  | "optionCursor"
  | "optionTypographyColor"
  | "odd__optionBackgroundColor"
  | "even__optionBackgroundColor"
  | "focus__optionButtonBackgroundColor"
  | "focus__optionButtonTypographyColor"
  | "optionButtonPaddingX"
  | "optionButtonPaddingY"
>;
