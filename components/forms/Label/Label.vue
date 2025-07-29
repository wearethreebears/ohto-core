<template>
  <label data-component="Label" data-slot="root" :for="props.id || props.name">
    <Control :class="hideLabel && 'sr-only'">{{ label }}</Control>
    <span v-if="props.required" class="text-red-500"> *</span>
    <slot />
  </label>
</template>

<script setup lang="ts">
import type { ILabelProps } from "./Label.types";
import { Control } from "@ohto/core/components/base";
const props = withDefaults(defineProps<ILabelProps>(), {
  hideLabel: false,
  required: false,
});
</script>
