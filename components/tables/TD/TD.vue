<template>
  <td :class="[tokenClass, designTokenClasses, 'whitespace-nowrap']">
    <slot />
  </td>
</template>

<script setup lang="ts">
import { STATIC_TOKENS } from "./TD.tokens";
import { useTokenClass } from "@ohto/core/dist/composables";
import { useComponentDesignTokens } from "@ohto/core/dist/composables/useComponentDesignTokens";

const { tokenClass } = useTokenClass("TD");
const { designTokenClasses } = useComponentDesignTokens(tokenClass, {
  ...STATIC_TOKENS,
});
</script>
