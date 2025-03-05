<template>
  <div class="block">
    <slot />
    <div class="group relative inline-flex items-center">
      <span class="sr-only">{{ props.label }}</span>
      <div
        :class="[
          tokenClass,
          designTokenClasses,
          customDesignTokenClasses,
          `border rounded-full relative after:block after:absolute after:rounded-full transition-colors ease-in-out duration-300 after:transition-transform after:ease-in-out after:duration-300`,
        ]"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTokenClass } from "@ohto/core/composables";
import type { ICheckboxToggleProps } from "./CheckboxToggle.types";
import { useComponentDesignTokens } from "@ohto/core/dist/composables/useComponentDesignTokens";
import { STATIC_TOKENS } from "./CheckboxToggle.tokens";
import { CUSTOM_CLASS_TOKEN_MAP } from "./CheckboxToggle.map";

const props = withDefaults(defineProps<ICheckboxToggleProps>(), {});

const { tokenClass } = useTokenClass("CheckboxToggle");
const { designTokenClasses, customDesignTokenClasses } =
  useComponentDesignTokens(
    tokenClass,
    {
      ...STATIC_TOKENS,
    },
    CUSTOM_CLASS_TOKEN_MAP
  );
</script>
