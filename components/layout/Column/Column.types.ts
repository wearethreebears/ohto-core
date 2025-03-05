import type { IBreakpointProp } from "@ohto/core/dist/types/components.types";

type TColumnIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "auto";
type TColumnTag = "div" | "ul" | "li";
export interface IColumnProps {
  tag?: TColumnTag;
  spans?: TColumnIndex | (object & IBreakpointProp<TColumnIndex>);
  starts?: TColumnIndex | (object & IBreakpointProp<TColumnIndex>);
}
