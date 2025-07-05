<template>
  <NuxtLink
    :to="props.to"
    :class="[
      tokenClass,
      'w-11 h-11 flex justify-center items-center outline-none',
    ]"
    :aria-label="`Go to page ${props.pageNumber}`"
    :aria-current="props.activePage === props.pageNumber"
  >
    <div
      :class="[
        designTokenClasses,
        'w-8 h-8 flex justify-center items-center border border-solid rounded-lg transition-colors ease-in-out duration-300',
      ]"
    >
      <Control tag="span" theme="INHERIT">{{ props.pageNumber }}</Control>
    </div>
  </NuxtLink>
</template>

<script lang="ts" setup>
import { useComponentDesignTokens } from "@ohto/core/composables/useComponentDesignTokens";
import { STATE_TOKENS } from "../Pagination.tokens";
import type { IPaginationNumber } from "./PaginationNumber.types";
import type { TPaginationPageState } from "../Pagination.types";
import { Control } from "@ohto/core/components/base";
import { useTokenClass } from "@ohto/core/composables";
import { computed } from "vue";

const props = withDefaults(defineProps<IPaginationNumber>(), {});

const pageState = computed<TPaginationPageState>(() =>
  props.activePage === props.pageNumber ? "ACTIVE" : "DEFAULT"
);

const { tokenClass } = useTokenClass("PaginationNumber");
const { designTokenClasses } = useComponentDesignTokens(tokenClass, {
  ...STATE_TOKENS[pageState.value],
});
</script>
