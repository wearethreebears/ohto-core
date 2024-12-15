import type {
  IDefaultTokens,
  TPercent,
  TSystemSpacing,
} from "~/DesignTokens.types";
import type {
  TSelectStaticTokens,
  ISelectCustomTokens,
} from "../Select/Select.types";

export interface ISearchSelectItem {
  id: number;
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
  value: ISearchSelectItem[];
  items: ISearchSelectItem[];
  maxItems?: number;
  validateBeforeSearch?: RegExp;
  canSave?: boolean;
}

export interface ISearchFromSelectCustomTokens extends ISelectCustomTokens {
  saveNewTop: TSystemSpacing;
  saveNewRight: TSystemSpacing;
  saveNewTranslateY: TPercent;
}

export type TSelectFromSearchStaticTokens = Pick<
  IDefaultTokens & ISearchFromSelectCustomTokens,
  "saveNewTop" | "saveNewRight" | "saveNewTranslateY"
> &
  TSelectStaticTokens;
