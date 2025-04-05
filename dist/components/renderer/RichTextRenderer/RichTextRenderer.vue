<template>
  <div v-html="renderedContent" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { IRichTextRenderer } from "./RichTextRenderer.types";
import { renderRichTextHTML } from "./RichTextRenderer.utils";

const props = withDefaults(defineProps<IRichTextRenderer>(), {});

const renderedContent = computed(() => {
  if (!props.json || !props.json.content) return "";

  return renderRichTextHTML(props.json);
});
</script>
