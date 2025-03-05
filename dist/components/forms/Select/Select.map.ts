import type { ISelectCustomTokens } from "./Select.types";

export const CUSTOM_CLASS_TOKEN_MAP: Record<keyof ISelectCustomTokens, string> =
  {
    inputWidth: "w-[--inputWidth]",
    inputHeight: "h-[--inputHeight]",
    inputNullTypographyColor: "text-[--inputNullTypographyColor]",
    inputTypographyColor: "text-[--inputTypographyColor]",
    iconTop: "top-[--iconTop]",
    iconRight: "right-[--iconRight]",
    optionsPanelBorderColor: "border-[--optionsPanelBorderColor]",
    optionsPanelBackgroundColor: "bg-[--optionsPanelBackgroundColor]",
    optionCursor: "cursor-[--optionCursor]",
    optionTypographyColor: "text-[--optionTypographyColor]",
    odd__optionBackgroundColor: "odd:bg-[--odd__optionBackgroundColor]",
    even__optionBackgroundColor: "even:bg-[--even__optionBackgroundColor]",
    focus__optionButtonBackgroundColor:
      "focus:bg-[--focus__optionButtonBackgroundColor]",
    focus__optionButtonTypographyColor:
      "focus:text-[--focus__optionButtonTypographyColor]",
    optionButtonPaddingX: "p-[--optionButtonPaddingX]",
    optionButtonPaddingY: "p-[--optionButtonPaddingY]",
  };
