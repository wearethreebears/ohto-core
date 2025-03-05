<template>
  <component
    :is="COMPONENT_MAP[props.component]"
    :class="[
      tokenClass,
      designTokenClasses,
      'justify-center items-center w-fit flex transition-colors ease-in-out duration-300 rounded-lg',
    ]"
    :data-testid="testId"
  >
    <slot />
  </component>
</template>
<script setup lang="ts">
import type { IButtonElementProps } from "../Button.types";
import { COMPONENT_MAP } from "../Button.map";

import { THEME_TOKENS, STATIC_TOKENS } from "./ButtonMicro.tokens";
import { useComponentDesignTokens } from "@ohto/core/dist/composables/useComponentDesignTokens";
import { useTokenClass } from "@ohto/core/dist/composables";

const props = withDefaults(defineProps<IButtonElementProps>(), {
  theme: "DEFAULT",
});

const { tokenClass } = useTokenClass("ButtonMicro", [props.theme]);
const { designTokenClasses } = useComponentDesignTokens(tokenClass, {
  ...STATIC_TOKENS,
  ...THEME_TOKENS[props.theme],
});
</script>
