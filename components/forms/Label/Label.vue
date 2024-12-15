<template>
  <label data-component="Label" :for="id || name">
    <Control :class="hideLabel && 'sr-only'">{{ label }}</Control>
    <slot />
  </label>
</template>

<script setup lang="ts">
import type { ILabelProps } from "./Label.types";
import { Control } from "@ohto/core/components/base";
withDefaults(defineProps<ILabelProps>(), {
  hideLabel: false,
});
</script>
