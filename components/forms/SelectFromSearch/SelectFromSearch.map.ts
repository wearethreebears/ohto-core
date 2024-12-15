import type { ISearchFromSelectCustomTokens } from "./SelectFromSearch.types";
import { CUSTOM_CLASS_TOKEN_MAP as SELECT_CUSTOM_CLASS_TOKEN_MAP } from "../Select/Select.map";

export const CUSTOM_CLASS_TOKEN_MAP: Record<
  keyof ISearchFromSelectCustomTokens,
  string
> = {
  ...SELECT_CUSTOM_CLASS_TOKEN_MAP,
  saveNewRight: "right-[--saveNewRight]",
  saveNewTop: "top-[--saveNewTop]",
  saveNewTranslateY: "translate-y-[--saveNewTranslateY]",
};
