import type { IDefaultTokens } from "~/DesignTokens.types";

export type TBoxStaticTokens = Pick<IDefaultTokens, "borderColor" | "padding">;

export type TBoxState = "OPEN" | "CLOSED";

export interface IBoxProps {
  title?: string;
  canToggleState?: boolean;
  state?: TBoxState;
}
