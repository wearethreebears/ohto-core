<template>
  <th
    data-component="TH"
    data-slot="root"
    scope="col"
    :class="[tokenClass, designTokenClasses, 'text-left']"
  >
    <Control tag="span">
      <slot />
    </Control>
  </th>
</template>

<script setup lang="ts">
import { STATIC_TOKENS } from "./TH.tokens";
import { Control } from "@ohto/core/components/base";
import { useTokenClass } from "@ohto/core/composables";
import { useComponentDesignTokens } from "@ohto/core/composables/useComponentDesignTokens";

const { tokenClass } = useTokenClass("TH");
const { designTokenClasses } = useComponentDesignTokens(tokenClass, {
  ...STATIC_TOKENS,
});
</script>
