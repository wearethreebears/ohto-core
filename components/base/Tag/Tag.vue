<template>
  <div
    data-component="Tag"
    data-slot="root"
    :class="[
      tokenClass,
      designTokenClasses,
      'flex h-fit w-fit justify-center items-center rounded-lg border',
    ]"
  >
    <Control tag="span" theme="INHERIT"><slot /></Control>
    <Icon
      v-if="canRemove"
      icon="CROSS"
      type="button"
      class="cursor-pointer transform translate-x-1/4"
      @click="deleteTag"
    />
  </div>
</template>

<script setup lang="ts">
import { useComponentDesignTokens } from "@ohto/core/composables/useComponentDesignTokens";
import type { ITagProps } from "./Tag.types";
import { Control, Icon } from "@ohto/core/components/base";
import { SIZE_TOKENS, THEME_TOKENS } from "./Tag.tokens";
import { useTokenClass } from "@ohto/core/composables";

const props = withDefaults(defineProps<ITagProps>(), {
  canRemove: false,
  size: "DEFAULT",
  theme: "DEFAULT",
});

const emit = defineEmits(["delete:tag"]);

const deleteTag = () => emit("delete:tag", props.id);

const { tokenClass } = useTokenClass("Tag", [props.theme, props.size]);
const { designTokenClasses } = useComponentDesignTokens(tokenClass, {
  ...SIZE_TOKENS[props.size],
  ...THEME_TOKENS[props.theme],
});
</script>
