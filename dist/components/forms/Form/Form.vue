<template>
  <form v-bind="props" class="w-full">
    <slot />
  </form>
</template>
<script setup lang="ts">
import type { IFormProps } from "./Form.types";

const props = withDefaults(defineProps<IFormProps>(), {
  method: "post",
});
</script>
