import type { TIcon } from "@ohto/core/dist/components/base/Icon/Icon.types";

export interface IRichTextEditorControlProps {
  label: string;
  icon: TIcon;
  state: TRichTextEditorControlState;
}

export type TRichTextEditorControlState = "DISABLED" | "ACTIVE" | "INACTIVE";
