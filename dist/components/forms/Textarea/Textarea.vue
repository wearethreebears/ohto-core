<template>
  <Group :class="[tokenClass]">
    <Label
      :id="id"
      :label="label"
      :name="name"
      :hideLabel="hideLabel"
      :required
      class="mb-1"
    />
    <div class="relative">
      <div class="relative">
        <textarea
          :id="id"
          :name="name"
          :value="value"
          :autocomplete="autocomplete"
          :placeholder="placeholder"
          :class="[
            props.class,
            designTokenClasses,
            customDesignTokenClasses,
            'block rounded-md border w-full min-h-[150px]',
          ]"
          @input="onTextarea($event)"
          ref="input"
          :data-testid="testId"
          v-bind="$attrs"
          :required="props.required"
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
import { STATIC_TOKENS } from "./Textarea.tokens";
import Error from "../Error/Error.vue";
import Group from "../Group/Group.vue";
import Label from "../Label/Label.vue";
import type { ITextareaProps } from "./Textarea.types";
import { Icon } from "@ohto/core/dist/components/base";
import { useComponentDesignTokens } from "@ohto/core/dist/composables/useComponentDesignTokens";
import { CUSTOM_CLASS_TOKEN_MAP } from "./Textarea.map";
import { useTokenClass } from "@ohto/core/dist/composables";
import { ref } from "vue";

const props = withDefaults(defineProps<ITextareaProps>(), {
  hideLabel: false,
  required: false,
});

const emit = defineEmits(["update:value", "delete:error"]);

const input = ref<HTMLTextAreaElement>();

const onTextarea = (event: Event) => {
  emit("update:value", (event.target as HTMLTextAreaElement).value);
  emit("delete:error");
};

const { tokenClass } = useTokenClass("Textarea");

const { designTokenClasses, customDesignTokenClasses } =
  useComponentDesignTokens(
    tokenClass,
    { ...STATIC_TOKENS },
    CUSTOM_CLASS_TOKEN_MAP
  );

defineExpose({
  input,
  onTextarea,
});
</script>
