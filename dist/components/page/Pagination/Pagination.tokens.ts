import type {
  TPaginationPageStateTokens,
  TPaginationPageState,
} from "./Pagination.types";

import { $system } from "~/DesignTokens.config";

export const STATE_TOKENS: Record<
  TPaginationPageState,
  TPaginationPageStateTokens
> = {
  DEFAULT: {
    typographyColor: $system.colors.brand.$black,
    backgroundColor: $system.colors.brand.$white,
    borderColor: $system.colors.shade.$500,
    hover__typographyColor: $system.colors.brand.$black,
    hover__backgroundColor: $system.colors.shade.$300,
  },
  ACTIVE: {
    typographyColor: $system.colors.brand.$white,
    backgroundColor: $system.colors.brand.$green,
    borderColor: $system.colors.brand.$green,
    hover__typographyColor: $system.colors.brand.$white,
    hover__backgroundColor: $system.colors.brand.$greenLight,
  },
};
