<template>
  <component
    :is="DISPLAY_MAP[props.display]"
    :component="$attrs.href ? 'LINK' : 'DEFAULT'"
    v-bind="props"
  >
    <slot />
  </component>
</template>
<script setup lang="ts">
import type { IButtonProps } from "./Button.types";
import { DISPLAY_MAP } from "./Button.map";

const props = withDefaults(defineProps<IButtonProps>(), {
  theme: "DEFAULT",
  display: "DEFAULT",
});
</script>
