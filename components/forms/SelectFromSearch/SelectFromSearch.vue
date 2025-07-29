<template>
  <div
    data-component="SelectFromSearch"
    data-slot="root"
    :class="[tokenClass, 'relative']"
  >
    <Input
      v-if="isItemLimitMet"
      v-bind="props"
      type="search"
      v-model:value="search"
      @keydown.down="onInputKeyDown"
      @update:value="isSearchResponseComplete = false"
      autocomplete="off"
      ref="formInput"
      icon="SEARCH"
    >
      <template v-if="canSaveValue">
        <Button
          display="MICRO"
          type="button"
          @click="onSaveSearchValue"
          :class="[
            CUSTOM_CLASS_TOKEN_MAP.saveNewRight,
            CUSTOM_CLASS_TOKEN_MAP.saveNewTop,
            CUSTOM_CLASS_TOKEN_MAP.saveNewTranslateY,
            'absolute',
          ]"
          >Save</Button
        >
      </template>
      <div
        v-show="showOptions && !!items.length"
        ref="optionsPanel"
        :class="[
          CUSTOM_CLASS_TOKEN_MAP.optionsPanelBorderColor,
          CUSTOM_CLASS_TOKEN_MAP.optionsPanelBorderColor,
          'absolute box-border border z-10 max-h-60 w-full mt-1 overflow-auto rounded-md shadow-lg',
        ]"
        :aria-hidden="!showOptions"
      >
        <ul class="border rounded-b-lg">
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
      <template #after>
        <slot name="selected" :value="props.value" :deleteItem="deleteItem">
          <ul class="flex mt-2" v-show="!!value.length">
            <li v-for="tag in value" :key="tag.id">
              <Tag
                :id="tag.id"
                canRemove
                @delete:tag="deleteItem"
                size="MICRO"
                theme="SECONDARY"
              >
                {{ tag.title }}
              </Tag>
            </li>
          </ul>
        </slot>
      </template>
    </Input>
    <div v-else>Limit reached</div>
  </div>
</template>

<script setup lang="ts">
import { watchDebounced, onClickOutside } from "@vueuse/core";
import useSelect from "@ohto/core/composables/forms/useSelect";
import { slugifyString } from "@ohto/core/utilities/urls";
import { Input } from "@ohto/core/components/forms";
import { Button, Tag } from "@ohto/core/components/base";
import type {
  ISearchSelectItem,
  ISelectFromSearch,
} from "./SelectFromSearch.types";
import { useTokenClass } from "@ohto/core/composables";
import { useComponentDesignTokens } from "@ohto/core/composables/useComponentDesignTokens";
import { STATIC_TOKENS } from "./SelectFromSearch.tokens";
import { CUSTOM_CLASS_TOKEN_MAP } from "./SelectFromSearch.map";
import { computed, ref, watch } from "vue";

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

const search = ref("");
const isSearchResponseComplete = ref(false);

const props = defineProps<ISelectFromSearch>();
const emit = defineEmits(["update:search", "update:value", "on:save"]);

const selectItem = (selectItem: ISearchSelectItem) => {
  if (props.value.find((item) => item.id === selectItem.id)) return;
  emit("update:value", [...props.value, selectItem]);
  emit("update:search", "");
  search.value = "";
  showOptions.value = false;
};

const passesValidation = computed<boolean>(() => {
  if (
    !props.validateBeforeSearch ||
    search.value.match(props.validateBeforeSearch)
  ) {
    return true;
  }
  return false;
});

const canSaveValue = computed<boolean>(
  () =>
    !!search.value &&
    isSearchResponseComplete.value &&
    props.canSave &&
    !props.items.find((item) => item.slug === slugifyString(search.value))
);

const deleteItem = (id: number) => {
  emit(
    "update:value",
    props.value.filter((item) => item.id !== id)
  );
};

const onSaveSearchValue = () => {
  emit("on:save", search.value);
};

const isItemLimitMet = computed<boolean>(
  () => !props.maxItems || props.value.length < props.maxItems
);

watch([search, props.items], () => {
  if (search.value.length && !!props.items) {
    showOptions.value = true;
  }
});

watch(props.value, () => (search.value = ""));

watch(
  () => props.items,
  () => (isSearchResponseComplete.value = true)
);

watchDebounced(
  search,
  () => {
    if (passesValidation.value) {
      emit("update:search", search.value);
    }
  },
  { debounce: 500, maxWait: 1000 }
);

onClickOutside(optionsPanel, () => (showOptions.value = false));

const { tokenClass } = useTokenClass("SelectFromSearch");

useComponentDesignTokens(tokenClass, {
  ...STATIC_TOKENS,
});
</script>
