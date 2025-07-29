<template>
  <component
    data-component="PaginationControl"
    data-slot="root"
    :is="COMPONENT_MAP[state]"
    :to="props.to"
    :aria-label="ICON_MAP[props.direction].icon"
    :class="[tokenClass, designTokenClasses]"
  >
    <Icon :icon="ICON_MAP[props.direction].icon" size="SMALL" />
  </component>
</template>

<script setup lang="ts">
import { ICON_MAP, COMPONENT_MAP } from "./PaginationControl.map";
import { STATE } from "./PaginationControl.tokens";
import { Icon } from "@ohto/core/components/base";
import type {
  IPaginationControlProps,
  TPaginationControlState,
} from "./PaginationControl.types";
import { useComponentDesignTokens } from "@ohto/core/composables/useComponentDesignTokens";
import { useTokenClass } from "@ohto/core/composables";
import { computed } from "vue";

const state = computed(
  (): TPaginationControlState => (!props.to ? "DISABLED" : "DEFAULT")
);

const props = withDefaults(defineProps<IPaginationControlProps>(), {});

const { tokenClass } = useTokenClass("PaginationControl");
const { designTokenClasses } = useComponentDesignTokens(tokenClass, {
  ...STATE[state.value],
});
</script>
