<template>
  <NuxtLayout>
    <RichTextEditor
      id="description"
      label="Description"
      name="description"
      @on:update="json = $event"
    />

    <RichTextRenderer :json />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { RichTextEditor } from "./components/forms";
import RichTextRenderer from "./components/renderer/RichTextRenderer/RichTextRenderer.vue";

const json = ref();
</script>
