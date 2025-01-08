<template>
  <div
    ref="contextMenu"
    class="absolute box-border border border-solid border-gray-200 z-10 mt-1 max-h-60 w-fit overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
    :style="`top: ${contextMenuStore?.coordinates?.y}px; left: ${contextMenuStore?.coordinates?.x}px;`"
  >
    <nav>
      <ul class="flex flex-col">
        <li
          v-for="item in contextMenuStore.menu"
          class="odd:bg-slate-50 even:bg-white group relative cursor-default select-none text-gray-900"
        >
          <button
            @click="item.action"
            ref="contextMenuItem"
            class="text-left block h-full w-full py-2 px-3 focus:bg-green-700 focus:text-white outline-none"
          >
            {{ item.title }}
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import type { IContextMenuProps } from "./ContextMenu.types";
import { onClickOutside } from "@vueuse/core";
import { ref, watch } from "vue";

import { useContextMenuStore } from "~/stores/useContextMenuStore";

const contextMenuStore = useContextMenuStore();

const contextMenu = ref<HTMLElement>();
const contextMenuItem = ref<HTMLButtonElement[]>();

const props = withDefaults(defineProps<IContextMenuProps>(), {});

onClickOutside(contextMenu, () => {
  contextMenuStore.updateMenu(undefined);
  contextMenuStore.updateCoordinates(undefined);
});

watch(
  () => contextMenuStore.menu,
  (newMenu) => {
    if (newMenu) {
      contextMenu.value?.setAttribute("tabindex", "0");
      contextMenu.value?.focus();
    }
  }
);
</script>
