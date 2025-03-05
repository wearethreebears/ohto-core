<template>
  <component
    :is="tag"
    :class="[tokenClass, designTokenClasses, 'font-bold font-sans']"
    ><slot
  /></component>
</template>
<script setup lang="ts">
import type { ITitleProps } from "./Title.types";
import { useComponentDesignTokens } from "@ohto/core/composables/useComponentDesignTokens";
import { THEME_TOKENS, SIZE_TOKENS } from "./Title.tokens";
import { useTokenClass } from "@ohto/core/composables";

const props = withDefaults(defineProps<ITitleProps>(), {
  tag: "h1",
  size: "DEFAULT",
  theme: "DEFAULT",
});

const { tokenClass } = useTokenClass("Title", [props.theme, props.size]);
const { designTokenClasses } = useComponentDesignTokens(tokenClass, {
  ...THEME_TOKENS[props.theme],
  ...SIZE_TOKENS[props.size],
});
</script>
