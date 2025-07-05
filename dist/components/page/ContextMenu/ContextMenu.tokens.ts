import type { TClassMap } from "~/types/components/classes";

import { variableMap } from "@ohto/core/utilities/classes";
import type {
  TDrawerPropsEnterFrom,
  TDrawerState,
} from "@ohto/core/components/layout/Drawer/Drawer.types";

export const ENTER_FROM_VARIABLE_MAP: TClassMap<TDrawerPropsEnterFrom> = {
  DEFAULT: variableMap(`
    "[--top:0]
    [--bottom:0]
    [--left:unset]
    [--right:0]
    "[--translate-y:0]
    [--translate-x:100%]
    [--open-translate-y:0]
    [--open-translate-x:0]
    `),
  LEFT: variableMap(`
    [--top:0]
    [--bottom:0]
    [--left:0]
    [--right:unset]
    [--translate-y:0]
    [--translate-x:-100%]
    [--open-translate-y:0]
    [--open-translate-x:0]
    `),
  TOP: variableMap(`
    [--top:0]
    [--bottom:unset]
    [--left:0]
    [--right:0]
    [--translate-y:-100%]
    [--translate-x:0]
    [--open-translate-y:0]
    [--open-translate-x:0]
  `),
  BOTTOM: variableMap(`
    [--top:unset]
    [--bottom:0]
    [--left:0]
    [--right:0]
    [--translate-y:100%]
    [--translate-x:0]
    [--open-translate-y:0]
    [--open-translate-x:0]
  `),
};

export const STATE_CLASS_MAP: TClassMap<TDrawerState> = {
  DEFAULT: variableMap(`
    translate-y-[--translate-y]
    translate-x-[--translate-x]
  `),
  OPEN: variableMap(`
    translate-y-[--open-translate-y]
    translate-x-[--open-translate-x] shadow-lg
  `),
};
