<template>
  <div data-component="CheckboxCheck" data-slot="root" class="flex">
    <slot />
    <div class="group relative inline-flex items-center">
      <span class="sr-only">{{ props.label }}</span>
      <Icon icon="CIRCLE" class="peer-checked:group-[]:hidden mr-2" />
      <Icon
        icon="TICK_FILLED"
        class="hidden peer-checked:group-[]:block mr-2"
      />
    </div>
    <slot name="label" />
  </div>
</template>

<script setup lang="ts">
import { useTokenClass } from "@ohto/core/composables";
import type { ICheckboxToggleProps } from "./CheckboxCheck.types";
import { useComponentDesignTokens } from "@ohto/core/composables/useComponentDesignTokens";
import { STATIC_TOKENS } from "./CheckboxCheck.tokens";
import { CUSTOM_CLASS_TOKEN_MAP } from "./CheckboxCheck.map";
import { Icon } from "../../../base";

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
