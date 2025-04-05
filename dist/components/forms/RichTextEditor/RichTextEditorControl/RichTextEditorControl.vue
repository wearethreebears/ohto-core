<template>
  <button
    class="h-11 w-11 flex justify-center items-center"
    @click="emit('on:click')"
  >
    <div
      class="rounded-md border border-solid p-1"
      :class="RICH_TEXT_EDITOR_CONTROL_STATE_CLASS_MAP[props.state]"
    >
      <Icon :icon />
      <span class="sr-only">{{ props.label }}</span>
    </div>
  </button>
</template>

<script setup lang="ts">
import Icon from "../../../base/Icon/Icon.vue";
import type { IRichTextEditorControlProps } from "./RichTextEditorControl.types";
import { RICH_TEXT_EDITOR_CONTROL_STATE_CLASS_MAP } from "./RichTextEditorControl.map";

const props = withDefaults(defineProps<IRichTextEditorControlProps>(), {});

const emit = defineEmits<{
  (event: "on:click"): void;
}>();
</script>
