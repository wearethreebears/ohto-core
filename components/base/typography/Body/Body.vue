<template>
  <component
    :is="tag"
    :class="[tokenClass, designTokenClasses, 'font-sans font-light']"
    ><slot
  /></component>
</template>
<script setup lang="ts">
import { useComponentDesignTokens } from "@ohto/core/composables/useComponentDesignTokens";
import type { IBodyProps } from "./Body.types";
import { SIZE_TOKENS, THEME_TOKENS } from "./Body.tokens";
import { useTokenClass } from "@ohto/core/composables";

const props = withDefaults(defineProps<IBodyProps>(), {
  tag: "p",
  size: "DEFAULT",
  theme: "DEFAULT",
});

const { tokenClass } = useTokenClass("Body", [props.theme, props.size]);
const { designTokenClasses } = useComponentDesignTokens(tokenClass, {
  ...SIZE_TOKENS[props.size],
  ...THEME_TOKENS[props.theme],
});
</script>
./Body.tokens
