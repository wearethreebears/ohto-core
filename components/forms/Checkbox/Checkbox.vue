<template>
  <Label
    data-component="Checkbox"
    :label="label"
    :name="name"
    :hide-label="hideLabel"
  >
    <component :is="DESIGN_MAP[props.design]" v-bind="props">
      <input
        type="checkbox"
        ref="checkbox"
        :id="name"
        :name="name"
        :value="value"
        :checked="checked"
        @change="onChange"
        class="peer appearance-none absolute focus:ring-0"
        :disabled="disabled"
      />
    </component>
  </Label>
</template>

<script setup lang="ts">
import Label from "../Label/Label.vue";
import { DESIGN_MAP } from "./Checkbox.map";
import type { ICheckboxProps } from "./Checkbox.types";
import { ref } from "vue";

const props = withDefaults(defineProps<ICheckboxProps>(), {
  design: "DEFAULT",
  checked: false,
  disabled: false,
  hideLabel: false,
});

const checkbox = ref<HTMLInputElement>();
const emit = defineEmits(["update:checked", "delete:error"]);

const onChange = () => {
  emit("delete:error");
  emit("update:checked", (checkbox.value as HTMLInputElement)?.checked);
};
</script>
