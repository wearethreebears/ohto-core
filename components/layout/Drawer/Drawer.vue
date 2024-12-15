<template>
  <Aside
    data-component="Drawer"
    ref="drawer"
    :class="[
      tokenClass,
      designTokenClasses,
      // Don't place all custom classes here, translate is controlled by state
      STATE_CLASS_MAP[props.state],
      'flex flex-col z-50 bg-white p-4 absolute rounded-lg',
      'transition-all ease-in-out duration-300',
    ]"
  >
    <IconButton
      icon="CROSS"
      @click="onClose"
      :class="[
        CUSTOM_CLASS_TOKEN_MAP.closeButton__top,
        CUSTOM_CLASS_TOKEN_MAP.closeButton__right,
        'absolute',
      ]"
    />
    <Subtitle tag="h2" class="mb-4">{{ props.title }}</Subtitle>

    <slot />
  </Aside>
</template>

<script setup lang="ts">
import { Subtitle, IconButton } from "@ohto/core/components/base";
import { Aside } from "@ohto/core/components/layout";
import type { IDrawerProps } from "./Drawer.types";
import { STATE_CLASS_MAP, CUSTOM_CLASS_TOKEN_MAP } from "./Drawer.map";
import { ENTER_FROM_TOKENS, STATIC_TOKENS } from "./Drawer.tokens";
import { useComponentDesignTokens } from "@ohto/core/composables/useComponentDesignTokens";
import { useTokenClass } from "@ohto/core/composables";

const props = withDefaults(defineProps<IDrawerProps>(), {
  state: "DEFAULT",
  enterFrom: "DEFAULT",
});

const emit = defineEmits(["on:close"]);

const onClose = () => emit("on:close");

const { tokenClass } = useTokenClass("Drawer");
const { designTokenClasses } = useComponentDesignTokens(
  tokenClass,
  {
    ...STATIC_TOKENS,
    ...ENTER_FROM_TOKENS[props.enterFrom],
  },
  CUSTOM_CLASS_TOKEN_MAP
);
</script>
