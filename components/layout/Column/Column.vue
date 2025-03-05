<template>
  <component :is="tag" data-component="Column" :class="computedClassNames">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { getDynamicClassListFromProp } from "@ohto/core/dist/utilities/components";
import type { IColumnProps } from "./Column.types";

const props = withDefaults(defineProps<IColumnProps>(), {
  tag: "div",
  spans: 12,
  starts: "auto",
});

const computedClassNames = [
  getDynamicClassListFromProp("col-span-", 12, props.spans),
  getDynamicClassListFromProp("col-start-", 1, props.starts),
];
</script>
