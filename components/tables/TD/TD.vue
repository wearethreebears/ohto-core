<template>
  <td :class="[tokenClass, designTokenClasses, 'whitespace-nowrap']">
    <slot />
  </td>
</template>

<script setup lang="ts">
import { STATIC_TOKENS } from "./TD.tokens";
import { useTokenClass } from "@ohto/core/composables";
import { useComponentDesignTokens } from "@ohto/core/composables/useComponentDesignTokens";

const { tokenClass } = useTokenClass("TD");
const { designTokenClasses } = useComponentDesignTokens(tokenClass, {
  ...STATIC_TOKENS,
});
</script>
