<template>
  <Group data-component="CheckboxGroup">
    <Fieldset :title="title">
      <div class="flex flex-wrap space-x-2">
        <Checkbox
          v-for="checkbox in checkboxes"
          :key="checkbox.name"
          :design="design"
          :label="checkbox.label"
          :name="checkbox.name"
          :value="checkbox.value"
          :checked="checkbox.checked"
          @update:checked="onUpdate(checkbox.value)"
        />
      </div>
    </Fieldset>
  </Group>
</template>

<script setup lang="ts">
import Checkbox from "../Checkbox/Checkbox.vue";
import Fieldset from "../Fieldset/Fieldset.vue";
import Group from "../Group/Group.vue";
import type { ICheckboxGroupProps } from "./CheckboxGroup.types";
import { ref, watch } from "vue";

const props = withDefaults(defineProps<ICheckboxGroupProps>(), {
  design: "DEFAULT",
});

const emit = defineEmits(["update:values"]);

const groupValues = ref<(number | string)[]>(
  props.checkboxes
    ?.filter(({ checked }) => !!checked)
    ?.map(({ value }) => value) || []
);

const onUpdate = (checkboxValue: number | string) => {
  // console.log(checkboxValue);
  const updatedValues = groupValues.value.find(
    (mappedValue) => mappedValue === checkboxValue
  )
    ? groupValues.value.filter((mappedValue) => mappedValue !== checkboxValue)
    : [...groupValues.value, checkboxValue];

  groupValues.value = updatedValues;
};

watch(groupValues, () => {
  emit("update:values", groupValues);
});
</script>
