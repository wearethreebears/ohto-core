<template>
  <component
    :is="tag"
    :class="[tokenClass, designTokenClasses, 'font-medium font-sans']"
    ><slot
  /></component>
</template>
<script setup lang="ts">
import { useComponentDesignTokens } from "@ohto/core/dist/composables/useComponentDesignTokens";
import { useTokenClass } from "@ohto/core/composables";
import type { IControlProps } from "./Control.types";
import { SIZE_TOKENS, THEME_TOKENS } from "./Control.tokens";

const props = withDefaults(defineProps<IControlProps>(), {
  tag: "span",
  size: "DEFAULT",
  theme: "DEFAULT",
});

const { tokenClass } = useTokenClass("Control", [props.theme, props.size]);
const { designTokenClasses } = useComponentDesignTokens(tokenClass, {
  ...SIZE_TOKENS[props.size],
  ...THEME_TOKENS[props.theme],
});
</script>
