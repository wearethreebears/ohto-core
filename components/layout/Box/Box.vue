<template>
  <div
    data-component="Box"
    :class="[tokenClass, designTokenClasses, 'rounded-lg border border-solid']"
  >
    <slot v-if="props.state === 'OPEN'" />
    <slot v-else name="collapsed" />
  </div>
</template>

<script setup lang="ts">
import { useComponentDesignTokens } from "@ohto/core/composables/useComponentDesignTokens";
import { STATIC_TOKENS } from "./Box.tokens";
import { useTokenClass } from "@ohto/core/composables";
import { IBoxProps } from "./Box.types";

const props = withDefaults(defineProps<IBoxProps>(), {
  canToggleState: false,
  state: "OPEN",
});

const { tokenClass } = useTokenClass("Box");
const { designTokenClasses } = useComponentDesignTokens(tokenClass, {
  ...STATIC_TOKENS,
});
</script>
