<template>
  <div
    data-component="Group"
    data-slot="root"
    :class="[tokenClass, designTokenClasses, 'flex flex-col']"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useComponentDesignTokens } from "@ohto/core/composables/useComponentDesignTokens";
import { STATIC_TOKENS } from "./Group.tokens";
import { useTokenClass } from "@ohto/core/composables";

const { tokenClass } = useTokenClass("Group");
const { designTokenClasses } = useComponentDesignTokens(tokenClass, {
  ...STATIC_TOKENS,
});
</script>
