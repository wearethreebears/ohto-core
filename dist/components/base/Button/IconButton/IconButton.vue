<template>
  <button
    class="min-w-11 min-h-11 flex justify-center items-center cursor-pointer"
    type="button"
    :aria-label="props.label"
  >
    <Icon :icon="props.icon" :size="props.size" />
  </button>
</template>
<script setup lang="ts">
import type { IIconButtonProps } from "./IconButton.types";
import { Icon } from "@ohto/core/components/base";

const props = withDefaults(defineProps<IIconButtonProps>(), {});
</script>
