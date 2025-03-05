<template>
  <div>
    <template v-if="$slots.button">
      <button
        :popovertarget="id"
        popovertargetaction="show"
        type="button"
        @click="emit('on:open')"
      >
        <slot name="button" /></button
    ></template>
    <Button
      v-else
      :popovertarget="id"
      popovertargetaction="show"
      type="button"
      @click="emit('on:open')"
      >Toggle the popover</Button
    >

    <div
      :id="id"
      popover
      :class="[
        tokenClass,
        designTokenClasses,
        customDesignTokenClasses,
        'rounded-lg relative max-h-[90vh]',
      ]"
      @click="emit('on:close')"
    >
      <IconButton
        icon="CROSS"
        class="absolute top-0 right-0"
        :popovertarget="id"
        popovertargetaction="hide"
        size="SMALL"
        type="button"
      />
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
import type { IModalProps } from "./Modal.types";
import { Button, IconButton } from "@ohto/core/components/base";
import { STATIC_TOKENS } from "./Modal.tokens";
import { CUSTOM_CLASS_TOKEN_MAP } from "./Modal.map";
import { useComponentDesignTokens } from "@ohto/core/dist/composables/useComponentDesignTokens";
import { useTokenClass } from "@ohto/core/composables";

const id = "testId";
const props = withDefaults(defineProps<IModalProps>(), {});

const emit = defineEmits<{
  (event: "on:open"): void;
  (event: "on:close"): void;
}>();

const { tokenClass } = useTokenClass("Modal");
const { designTokenClasses, customDesignTokenClasses } =
  useComponentDesignTokens(
    tokenClass,
    { ...STATIC_TOKENS },
    CUSTOM_CLASS_TOKEN_MAP
  );
</script>
