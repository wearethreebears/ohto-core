import type {
  TPaginationControlState,
  TPaginationControlStateTokens,
} from "./PaginationControl.types";

import { $system } from "~/DesignTokens.config";

export const STATE: Record<
  TPaginationControlState,
  TPaginationControlStateTokens
> = {
  DEFAULT: {
    typographyColor: $system.colors.brand.$greenDark,
    hover__typographyColor: $system.colors.brand.$greenLight,
    cursor: $system.pointers.$pointer,
  },
  DISABLED: {
    typographyColor: $system.colors.shade.$300,
    hover__typographyColor: $system.colors.shade.$300,
    cursor: $system.pointers.$notAllowed,
  },
};
