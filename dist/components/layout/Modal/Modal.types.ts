import type {
  IDefaultTokens,
  TPx,
  TSystemColor,
  TSystemOpacity,
} from "~/DesignTokens.types";

export interface IModalProps {
  title?: string;
}

export interface IModalCustomTokens {
  backdrop__backgroundColor: TSystemColor;
  backdrop__backgroundOpacity: TSystemOpacity;
  width: TPx;
}

export type TModalStaticTokens = Pick<
  IDefaultTokens & IModalCustomTokens,
  | "backdrop__backgroundColor"
  | "backdrop__backgroundOpacity"
  | "backgroundColor"
  | "padding"
  | "width"
>;
