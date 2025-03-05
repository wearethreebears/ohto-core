<template>
  <component
    :is="COMPONENT_MAP[props.component]"
    :class="[
      tokenClass,
      designTokenClasses,
      'justify-center items-center w-fit flex focus:ring-2 focus:ring-offset-2 transition-colors ease-in-out duration-300 outline-none py-1 px-4 rounded-full border-2 border-solid font-sans text-xs',
    ]"
    :data-testid="testId"
  >
    <slot />
  </component>
</template>
<script setup lang="ts">
import type { IButtonElementProps } from "../Button.types";
import { COMPONENT_MAP } from "../Button.map";

import { THEME_TOKENS, STATIC_TOKENS } from "./ButtonSecondary.tokens";
import { useComponentDesignTokens } from "@ohto/core/dist/composables/useComponentDesignTokens";
import { useTokenClass } from "@ohto/core/dist/composables";

const props = withDefaults(defineProps<IButtonElementProps>(), {
  theme: "DEFAULT",
});

const { tokenClass } = useTokenClass("ButtonSecondary", [props.theme]);
const { designTokenClasses } = useComponentDesignTokens(tokenClass, {
  ...STATIC_TOKENS,
  ...THEME_TOKENS[props.theme],
});
</script>
