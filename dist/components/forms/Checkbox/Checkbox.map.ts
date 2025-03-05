import type { TCheckboxDesignMap } from "./Checkbox.types";
import { defineAsyncComponent } from "vue";

export const DESIGN_MAP: TCheckboxDesignMap = {
  DEFAULT: defineAsyncComponent(
    () => import("./CheckboxToggle/CheckboxToggle.vue")
  ),
  TOGGLE: defineAsyncComponent(
    () => import("./CheckboxToggle/CheckboxToggle.vue")
  ),
  CHECK: defineAsyncComponent(
    () => import("./CheckboxCheck/CheckboxCheck.vue")
  ),
};
