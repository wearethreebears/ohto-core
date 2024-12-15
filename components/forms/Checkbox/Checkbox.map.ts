import type { TCheckboxDesignMap } from "./Checkbox.types";

export const DESIGN_MAP: TCheckboxDesignMap = {
  DEFAULT: defineAsyncComponent(
    () => import("./CheckboxToggle/CheckboxToggle.vue")
  ),
  TOGGLE: defineAsyncComponent(
    () => import("./CheckboxToggle/CheckboxToggle.vue")
  ),
};
