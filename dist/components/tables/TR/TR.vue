<template>
  <tr :class="[tokenClass, designTokenClasses, 'border-b']">
    <slot />
  </tr>
</template>

<script setup lang="ts">
import { STATIC_TOKENS } from "./TR.tokens";
import { useTokenClass } from "@ohto/core/dist/composables";
import { useComponentDesignTokens } from "@ohto/core/dist/composables/useComponentDesignTokens";

const { tokenClass } = useTokenClass("TR");
const { designTokenClasses } = useComponentDesignTokens(tokenClass, {
  ...STATIC_TOKENS,
});
</script>
