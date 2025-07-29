<template>
  <Group data-component="StripeInput" data-slot="root" :class="[tokenClass]">
    <Label
      :id="id"
      :label="label"
      :name="name"
      :hideLabel="hideLabel"
      class="mb-1"
    />
    <div class="relative">
      <div class="relative">
        <div
          :class="[
            props.class,
            designTokenClasses,
            customDesignTokenClasses,
            'block rounded-md border',
          ]"
          v-bind="$attrs"
        >
          <slot />
        </div>
      </div>
      <slot name="after" />
    </div>
  </Group>
</template>
<script setup lang="ts">
import { STATIC_TOKENS } from "../Input/Input.tokens";
import Group from "../Group/Group.vue";
import Label from "../Label/Label.vue";
import { useComponentDesignTokens } from "@ohto/core/composables/useComponentDesignTokens";
import { CUSTOM_CLASS_TOKEN_MAP } from "../Input/Input.map";
import { useTokenClass } from "@ohto/core/composables";
import { IStripeInputProps } from "./StripeInput.types";

const props = withDefaults(defineProps<IStripeInputProps>(), {
  hideLabel: false,
});

const { tokenClass } = useTokenClass("StripeInput", ["text"]);

const { designTokenClasses, customDesignTokenClasses } =
  useComponentDesignTokens(
    tokenClass,
    { ...STATIC_TOKENS },
    CUSTOM_CLASS_TOKEN_MAP
  );
</script>
