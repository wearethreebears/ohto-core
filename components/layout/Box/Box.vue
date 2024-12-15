<template>
  <div
    data-component="Box"
    :class="[tokenClass, designTokenClasses, 'rounded-lg border border-solid']"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useComponentDesignTokens } from "@ohto/core/composables/useComponentDesignTokens";
import { STATIC_TOKENS } from "./Box.tokens";
import { useTokenClass } from "@ohto/core/composables";

const { tokenClass } = useTokenClass("Box");
const { designTokenClasses } = useComponentDesignTokens(tokenClass, {
  ...STATIC_TOKENS,
});
</script>
