import type { TButtonDisplayMap, TButtonComponentMap } from "./Button.types";
import { defineAsyncComponent } from "vue";

export const DISPLAY_MAP: TButtonDisplayMap = {
  DEFAULT: defineAsyncComponent(
    () => import("./ButtonDefault/ButtonDefault.vue")
  ),
  MICRO: defineAsyncComponent(() => import("./ButtonMicro/ButtonMicro.vue")),
  SECONDARY: defineAsyncComponent(
    () => import("./ButtonSecondary/ButtonSecondary.vue")
  ),
};

export const COMPONENT_MAP: TButtonComponentMap = {
  DEFAULT: defineAsyncComponent(() => import("./core/ButtonButton.vue")),
  LINK: defineAsyncComponent(() => import("./core/ButtonLink.vue")),
};
