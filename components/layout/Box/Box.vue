<template>
  <div
    data-component="Box"
    :class="[tokenClass, designTokenClasses, 'rounded-lg border border-solid']"
  >
    <Subtitle v-if="props.title">{{ props.title }}</Subtitle>
    <div v-show="props.state === 'OPEN'">
      <slot />
    </div>
    <div v-show="props.state !== 'OPEN'">
      <slot name="collapsed" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useComponentDesignTokens } from "@ohto/core/dist/composables/useComponentDesignTokens";
import { STATIC_TOKENS } from "./Box.tokens";
import { useTokenClass } from "@ohto/core/dist/composables";
import { IBoxProps } from "./Box.types";
import { Subtitle } from "@ohto/core/dist/components/base";

const props = withDefaults(defineProps<IBoxProps>(), {
  canToggleState: false,
  state: "OPEN",
});

const { tokenClass } = useTokenClass("Box");
const { designTokenClasses } = useComponentDesignTokens(tokenClass, {
  ...STATIC_TOKENS,
});
</script>
