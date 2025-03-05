import type { IDefaultTokens } from "~/DesignTokens.types";
import type { TIcon } from "@ohto/core/dist/components/base/Icon/Icon.types";

export type TPaginationControlDirection = "PREVIOUS" | "NEXT";
export type TPaginationControlState = "DEFAULT" | "DISABLED";

export interface IPaginationControlProps {
  direction: TPaginationControlDirection;
  to?: string;
}

interface IPaginationControlLink {
  icon: TIcon;
  a11yText: string;
}

export type TPaginationControlLinkMap = Record<
  TPaginationControlDirection,
  IPaginationControlLink
>;

export type TPaginationControlComponentMap = Record<
  TPaginationControlState,
  Component | "div"
>;

export type TPaginationControlStateTokens = Pick<
  IDefaultTokens,
  "typographyColor" | "hover__typographyColor" | "cursor"
>;
