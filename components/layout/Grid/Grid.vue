<template>
  <component
    :is="tag"
    data-component="Grid"
    data-slot="root"
    class="grid grid-cols-12 w-full gap-4"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import type { IGridProps } from "./Grid.types";
withDefaults(defineProps<IGridProps>(), {
  tag: "div",
});
</script>
