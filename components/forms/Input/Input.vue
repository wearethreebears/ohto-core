<template>
  <Group :class="[tokenClass, { 'sr-only': type === 'hidden' }]">
    <Label
      :id="id"
      :label="label"
      :name="name"
      :hideLabel="hideLabel"
      class="mb-1"
    />
    <div class="relative">
      <div class="relative">
        <input
          :type="type"
          :id="id"
          :name="name"
          :value="value"
          :autocomplete="autocomplete"
          :placeholder="placeholder"
          :class="[
            props.class,
            designTokenClasses,
            customDesignTokenClasses,
            'block rounded-md border',
          ]"
          @input="onInput($event)"
          ref="input"
          :data-testid="testId"
          v-bind="$attrs"
        />
        <Icon
          v-if="props.icon"
          :icon="props.icon"
          class="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400"
        />
        <slot />
      </div>
      <slot name="after" />
    </div>
    <Error v-if="error">{{ error }}</Error>
  </Group>
</template>
<script setup lang="ts">
import { STATIC_TOKENS } from "./Input.tokens";
import Error from "../Error/Error.vue";
import Group from "../Group/Group.vue";
import Label from "../Label/Label.vue";
import type { IInputProps } from "./Input.types";
import { Icon } from "@ohto/core/components/base";
import { useComponentDesignTokens } from "@ohto/core/composables/useComponentDesignTokens";
import { CUSTOM_CLASS_TOKEN_MAP } from "./Input.map";
import { useTokenClass } from "@ohto/core/composables";
import { ref } from "vue";

const props = withDefaults(defineProps<IInputProps>(), {
  type: "text",
  hideLabel: false,
});

const emit = defineEmits(["update:value", "delete:error"]);

const input = ref<HTMLInputElement>();

const onInput = (event: Event) => {
  emit("update:value", (event.target as HTMLInputElement).value);
  emit("delete:error");
};

const { tokenClass } = useTokenClass("Input", [props.type]);

const { designTokenClasses, customDesignTokenClasses } =
  useComponentDesignTokens(
    tokenClass,
    { ...STATIC_TOKENS },
    CUSTOM_CLASS_TOKEN_MAP
  );

defineExpose({
  input,
  onInput,
});
</script>
