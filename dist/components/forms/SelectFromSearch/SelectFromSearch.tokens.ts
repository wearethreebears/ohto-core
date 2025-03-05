import { $system } from "~/DesignTokens.config";
import type { TSelectFromSearchStaticTokens } from "./SelectFromSearch.types";
import { STATIC_TOKENS as SELECT_STATIC_TOKENS } from "../Select/Select.tokens";

export const STATIC_TOKENS: TSelectFromSearchStaticTokens = {
  ...SELECT_STATIC_TOKENS,
  saveNewTop: $system.spacing.$half,
  saveNewRight: $system.spacing.$extraSmall,
  saveNewTranslateY: "-50%",
};
