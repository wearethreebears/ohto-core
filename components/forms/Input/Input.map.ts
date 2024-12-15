import type { IInputCustomTokens } from "./Input.types";

export const CUSTOM_CLASS_TOKEN_MAP: Record<keyof IInputCustomTokens, string> =
  {
    inputWidth: "w-[--inputWidth]",
    inputHeight: "h-[--inputHeight]",
  };
