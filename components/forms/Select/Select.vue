<template>
  <Group>
    <Label :id="id" :label="label" :name="name" :hideLabel="hideLabel" />
    <div :class="[tokenClass, 'relative']">
      <button
        type="button"
        ref="formInput"
        @click="showOptions = true"
        :class="[
          designTokenClasses,
          CUSTOM_CLASS_TOKEN_MAP.inputHeight,
          CUSTOM_CLASS_TOKEN_MAP.inputWidth,
          'text-left rounded-md shadow-sm outline-none border',
          !value
            ? CUSTOM_CLASS_TOKEN_MAP.inputNullTypographyColor
            : CUSTOM_CLASS_TOKEN_MAP.inputTypographyColor,
        ]"
        @keydown.down="onInputKeyDown($event)"
      >
        <template v-if="Array.isArray(value) && !!value.length">
          {{ value.map(({ title }) => title).join(", ") }}
        </template>
        <template v-if="!Array.isArray(value) && !!value?.title">
          {{ value.title }}
        </template>
        <template v-else-if="!!placeholder">
          {{ placeholder }}
        </template>
        <template v-else>
          {{ label }}
        </template>
        <Icon
          icon="CHEVRON_DOWN"
          :class="[
            CUSTOM_CLASS_TOKEN_MAP.iconRight,
            CUSTOM_CLASS_TOKEN_MAP.iconTop,
            'absolute transform -translate-y-1/2',
          ]"
        />
      </button>
      <div
        v-show="showOptions"
        ref="optionsPanel"
        :class="[
          CUSTOM_CLASS_TOKEN_MAP.optionsPanelBorderColor,
          CUSTOM_CLASS_TOKEN_MAP.optionsPanelBorderColor,
          'absolute box-border border z-10 mt-1 max-h-60 w-full overflow-auto rounded-md  shadow-lg',
        ]"
        :aria-hidden="!showOptions"
      >
        <ul class="flex flex-col">
          <li
            v-for="(item, index) in items"
            :class="[
              CUSTOM_CLASS_TOKEN_MAP.odd__optionBackgroundColor,
              CUSTOM_CLASS_TOKEN_MAP.even__optionBackgroundColor,
              CUSTOM_CLASS_TOKEN_MAP.optionTypographyColor,
              CUSTOM_CLASS_TOKEN_MAP.optionCursor,
              'group relative select-none',
            ]"
          >
            <button
              type="button"
              :key="item.id"
              :data-id="item.id"
              tabindex="-1"
              @blur="removeTabIndex(index)"
              @click="selectItem(item)"
              @keydown.up="onOptionKeyUp($event, index)"
              @keydown.down="onOptionKeyDown($event, index)"
              ref="options"
              :class="[
                CUSTOM_CLASS_TOKEN_MAP.optionButtonPaddingX,
                CUSTOM_CLASS_TOKEN_MAP.optionButtonPaddingY,
                CUSTOM_CLASS_TOKEN_MAP.focus__optionButtonBackgroundColor,
                CUSTOM_CLASS_TOKEN_MAP.focus__optionButtonTypographyColor,
                'text-left block h-full w-full outline-none focus:ring-0',
              ]"
            >
              {{ item.title }}
            </button>
          </li>
        </ul>
      </div>
    </div>
    <Error v-if="error">{{ error }}</Error>
  </Group>
</template>

<script setup lang="ts">
import { onClickOutside } from "@vueuse/core";
import { computed } from "vue";
import useSelect from "@ohto/core/composables/forms/useSelect";
import Group from "../Group/Group.vue";
import Label from "../Label/Label.vue";
import Error from "../Error/Error.vue";
import type { ISelectItem, ISelectFromSearch } from "./Select.types";
import { Icon } from "@ohto/core/components/base";
import { useTokenClass } from "@ohto/core/composables";
import { useComponentDesignTokens } from "@ohto/core/composables/useComponentDesignTokens";
import { STATIC_TOKENS } from "./Select.tokens";
import { CUSTOM_CLASS_TOKEN_MAP } from "./Select.map";

const {
  showOptions,
  formInput,
  optionsPanel,
  options,
  removeTabIndex,
  onOptionKeyUp,
  onOptionKeyDown,
  onInputKeyDown,
} = useSelect();

const props = withDefaults(defineProps<ISelectFromSearch>(), {
  maxItems: 1,
});
const emit = defineEmits(["update:value"]);

const selectItem = (selectItem: ISelectItem) => {
  if (Array.isArray(props.value)) {
    if (props.value.find(({ id }) => id === selectItem.id)) return;
    emit("update:value", [...props.value, selectItem]);
  } else {
    if (props.value?.id === selectItem.id) return;
    emit("update:value", selectItem);
  }
  showOptions.value = false;
};
const deleteItem = (deleteId: number) => {
  if (Array.isArray(props.value)) {
    emit(
      "update:value",
      props.value.filter(({ id }) => id !== deleteId)
    );
  } else {
    if (props.value?.id === deleteId) return;
    emit("update:value", undefined);
  }
};

const isItemLimitMet = computed<boolean>(
  () =>
    !props.maxItems ||
    (Array.isArray(props.value) && props.value.length < props.maxItems) ||
    (!Array.isArray(props.value) && !!props.value)
);

onClickOutside(optionsPanel, () => (showOptions.value = false));

const { tokenClass } = useTokenClass("Input");

const { designTokenClasses } = useComponentDesignTokens(
  tokenClass,
  {
    ...STATIC_TOKENS,
  },
  CUSTOM_CLASS_TOKEN_MAP
);
</script>
