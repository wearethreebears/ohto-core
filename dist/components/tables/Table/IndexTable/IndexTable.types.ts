import type { RouteLocationRaw } from "vue-router";

export enum ECellDisplay {
  TEXT,
  TAG,
  STATUS,
  TOGGLE,
  LINK,
}

interface IIndexTableCell {
  value: string | number | boolean;
  display: ECellDisplay;
}

export interface IIndexTableRow {
  id: string | number;
  link: RouteLocationRaw;
  cells: IIndexTableCell[];
}

export interface IIndexTableProps {
  headers: string[];
  rows: IIndexTableRow[];
  pageCount?: number;
  canDelete?: boolean;
  paginate?: boolean;
}
