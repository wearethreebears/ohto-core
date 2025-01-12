<template>
  <div class="flex flex-col flex-1">
    <Table>
      <template v-slot:head>
        <TR>
          <TH>Reference</TH>
          <TH v-for="header in props.headers">{{ header }}</TH>
          <TH></TH>
          <TH></TH>
        </TR>
      </template>
      <template v-slot:body>
        <TR v-for="row in props.rows">
          <TD width="44">
            <Tag size="MICRO" theme="SECONDARY">#{{ row.id }}</Tag>
          </TD>
          <TD v-for="cell in row.cells">
            <NuxtLink
              v-if="cell.display === ECellDisplay.LINK"
              :to="row.link"
              class="text-md"
              ><Body tag="span">{{ cell.value }}</Body></NuxtLink
            >
            <Tag
              v-else-if="cell.display === ECellDisplay.TAG"
              size="MICRO"
              theme="SECONDARY"
              >{{ cell.value }}</Tag
            >
            <Tag
              v-else-if="cell.display === ECellDisplay.STATUS"
              size="MICRO"
              :theme="cell.value === 'PUBLISHED' ? 'DEFAULT' : 'SECONDARY'"
              >{{ cell.value }}</Tag
            >
            <Body v-else tag="span">{{ cell.value }}</Body>
          </TD>
          <TD width="44">
            <NuxtLink :to="row.link" class="flex justify-center"
              ><Icon icon="EDIT"
            /></NuxtLink>
          </TD>
          <TD width="44">
            <div class="flex justify-center">
              <IconButton icon="TRASH" @click="onDelete(+row.id)" />
            </div>
          </TD>
        </TR>
      </template>
    </Table>
    <Pagination :page-count />
  </div>
</template>

<script setup lang="ts">
import { ECellDisplay } from "./IndexTable.types";
import type { IIndexTableProps } from "./IndexTable.types";
import { Tag, Icon, IconButton, Body } from "@ohto/core/components/base";
import { Table, TR, TD, TH } from "@ohto/core/components/tables";
import { Pagination } from "@ohto/core/components/page";

const props = withDefaults(defineProps<IIndexTableProps>(), {
  pageCount: 1,
});

const emit = defineEmits<{
  (event: "on:delete", id: number): void;
  (event: "on:change-page", pageNumber: string): void;
}>();

const onDelete = (id: number) => emit("on:delete", id);
</script>
