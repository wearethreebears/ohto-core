<template>
  <div
    data-component="Icon"
    data-slot="root"
    :class="[tokenClass, customDesignTokenClasses]"
  >
    <component :is="ICON_MAP[props.icon]" />
  </div>
</template>

<script setup lang="ts">
import { useComponentDesignTokens } from "@ohto/core/composables/useComponentDesignTokens";
import { ICON_MAP, CUSTOM_CLASS_TOKEN_MAP } from "./Icon.map";
import type { IIconProps } from "./Icon.types";
import { SIZE_TOKENS } from "./Icon.tokens";
import { useTokenClass } from "@ohto/core/composables";

const props = withDefaults(defineProps<IIconProps>(), {
  size: "DEFAULT",
});

const { tokenClass } = useTokenClass("Icon", [props.size]);
const { customDesignTokenClasses } = useComponentDesignTokens(
  tokenClass,
  { ...SIZE_TOKENS[props.size] },
  CUSTOM_CLASS_TOKEN_MAP
);
</script>
