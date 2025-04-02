import type { TRichTextEditorControlState } from "./RichTextEditorControl.types";

export const RICH_TEXT_EDITOR_CONTROL_STATE_CLASS_MAP: Record<
  TRichTextEditorControlState,
  string
> = {
  DISABLED: "",
  ACTIVE: "bg-slate-200",
  INACTIVE: "",
};
