import type { IModalCustomTokens } from "./Modal.types";

export const CUSTOM_CLASS_TOKEN_MAP: Record<keyof IModalCustomTokens, string> =
  {
    backdrop__backgroundColor: "backdrop:bg-[--backdrop__backgroundColor]",
    backdrop__backgroundOpacity:
      "backdrop:opacity-[--backdrop__backgroundOpacity]",
    width: "w-[--width]",
  };
