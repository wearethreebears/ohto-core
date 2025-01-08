<template>
  <Group data-component="CheckboxGroups">
    <Fieldset :title="title">
      <CheckboxGroup
        v-for="checkboxGroup in checkboxGroups"
        :key="checkboxGroup.id"
        :title="checkboxGroup.title"
        :checkboxes="checkboxGroup.checkboxes"
        :design="design"
        @update:values="onUpdate($event, checkboxGroup.id)"
      />
    </Fieldset>
  </Group>
</template>

<script setup lang="ts">
import CheckboxGroup from "../CheckboxGroup/CheckboxGroup.vue";
import Fieldset from "../Fieldset/Fieldset.vue";
import Group from "../Group/Group.vue";
import type {
  ICheckboxGroupsProps,
  TCheckboxGroupCollection,
} from "./CheckboxGroups.types";
import { watch, reactive, onMounted } from "vue";

const props = defineProps<ICheckboxGroupsProps>();

const emit = defineEmits(["update:values"]);

// TODO: set group value on load
const groupValues: TCheckboxGroupCollection = reactive({});

onMounted(() => {
  props.checkboxGroups
    .filter(({ checkboxes }) => !!checkboxes)
    .forEach(({ id, checkboxes }) => {
      onUpdate(
        checkboxes
          ?.filter(({ checked }) => !!checked)
          ?.map(({ value }) => value) || [],
        id
      );
    });
});

const onUpdate = (checkboxValues: (string | number)[], id: number) => {
  groupValues[id] = checkboxValues;
};

watch(groupValues, () => {
  const mergedValues: (number | string)[] = [];
  Object.values(groupValues).forEach((group) => {
    mergedValues.push(...group);
  });

  // console.log("MERGED", mergedValues);

  emit("update:values", mergedValues);
});
</script>
