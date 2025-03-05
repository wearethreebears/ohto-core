<template>
  <component :is="tag" :class="[tokenClass, designTokenClasses, 'font-sans']"
    ><slot
  /></component>
</template>
<script setup lang="ts">
import { useComponentDesignTokens } from "@ohto/core/dist/composables/useComponentDesignTokens";
import type { ISubtitleProps } from "./Subtitle.types";
import { THEME_TOKENS, SIZE_TOKENS } from "./Subtitle.tokens";
import { useTokenClass } from "@ohto/core/composables";

const props = withDefaults(defineProps<ISubtitleProps>(), {
  tag: "h2",
  size: "DEFAULT",
  theme: "DEFAULT",
});

const { tokenClass } = useTokenClass("Subtitle", [props.theme, props.size]);
const { designTokenClasses } = useComponentDesignTokens(tokenClass, {
  ...THEME_TOKENS[props.theme],
  ...SIZE_TOKENS[props.size],
});
</script>
./Subtitle.tokens
