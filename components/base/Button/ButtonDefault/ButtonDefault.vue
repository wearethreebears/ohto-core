<template>
  <component
    :is="COMPONENT_MAP[props.component]"
    :class="[
      tokenClass,
      designTokenClasses,
      'justify-center items-center w-full flex transition-colors ease-in-out duration-300 rounded-lg disabled:bg-slate-300 disabled:text-slate-500 disabled:cursor-not-allowed',
    ]"
    :data-testid="testId"
  >
    <slot />
  </component>
</template>
<script setup lang="ts">
import type { IButtonElementProps } from "../Button.types";
import { COMPONENT_MAP } from "../Button.map";

import { THEME_TOKENS, STATIC_TOKENS } from "./ButtonDefault.tokens";
import { useComponentDesignTokens } from "@ohto/core/dist/composables/useComponentDesignTokens";
import { useTokenClass } from "@ohto/core/composables";

const props = withDefaults(defineProps<IButtonElementProps>(), {
  theme: "DEFAULT",
});

const { tokenClass } = useTokenClass("ButtonDefault", [props.theme]);
const { designTokenClasses } = useComponentDesignTokens(tokenClass, {
  ...STATIC_TOKENS,
  ...THEME_TOKENS[props.theme],
});
</script>
