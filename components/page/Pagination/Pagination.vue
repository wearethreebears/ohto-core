<template>
  <Container data-component="Pagination" class="flex justify-center">
    <nav class="justify-center items-center" label="Pagination">
      <ol class="flex">
        <li class="flex justify-center items-center">
          <PaginationControl :to="getPreviousPath()" direction="PREVIOUS" />
        </li>
        <li
          v-for="pageNumber in pageNumbers"
          class="opacity-100 hover:opacity-80 ease-in-out transition-opacity"
        >
          <PaginationNumber
            :to="getPagePath(pageNumber)"
            :page-number="pageNumber"
            :active-page="Number(currentPage)"
          />
        </li>
        <li class="flex justify-center items-center">
          <PaginationControl :to="getNextPath()" direction="NEXT" />
        </li>
      </ol>
    </nav>
  </Container>
</template>

<script setup lang="ts">
import type { IPaginationProps } from "./Pagination.types";
import { Container } from "@ohto/core/components/layout";
import type { TPaginationPageState } from "./Pagination.types";
import PaginationControl from "./PaginationControl/PaginationControl.vue";
import { arrayFromRange } from "@ohto/core/utilities/arrays";
import PaginationNumber from "./PaginationNumber/PaginationNumber.vue";
import { computed, watch } from "vue";
import { useRouter } from "vue-router";
import { ohtoConfig } from "../../../../ohto.config.ts";

const props = withDefaults(defineProps<IPaginationProps>(), {
  linkCount: 9,
  pageCount: 1,
});

const emit = defineEmits<{
  (event: "on:change-page", pageNumber: string): void;
}>();

const router = useRouter();

const currentPage = computed(
  (): string => (router.currentRoute.value.query.page as string) || "1"
);

const pageNumbers = computed((): number[] => {
  if (props.pageCount <= props.linkCount)
    return arrayFromRange(1, props.pageCount);
  const adjustedLinkCount = props.linkCount - 2;
  const adjustedLinkCountBeginningEnd = props.linkCount - 1;

  if (+currentPage.value <= adjustedLinkCountBeginningEnd) {
    return [
      ...arrayFromRange(1, adjustedLinkCountBeginningEnd),
      props.pageCount,
    ];
  }

  if (+currentPage.value > props.pageCount - adjustedLinkCountBeginningEnd) {
    return [
      1,
      ...arrayFromRange(props.pageCount - adjustedLinkCount, props.pageCount),
    ];
  }

  const linkSplit = Math.round(adjustedLinkCount / 2);
  let start = +currentPage.value - linkSplit;
  let end = +currentPage.value + linkSplit;
  let middle: number[] = [];

  arrayFromRange(start, end).forEach((pageNumber: number) =>
    middle.push(pageNumber)
  );

  return [1, ...middle.slice(0, adjustedLinkCount), props.pageCount];
});

const getPagePath = (page: number): string => {
  const path = new URL(router.currentRoute.value.fullPath, ohtoConfig.app.url);
  const params = path.searchParams;
  params.set("page", `${page}`);
  path.search = params.toString();
  const origin = path.origin;
  return path.toString().replace(origin, "");
  return "";
};

const getPreviousPath = (): string => {
  if (+currentPage.value <= 1) return "";
  return getPagePath(+currentPage.value - 1);
};
const getNextPath = (): string => {
  if (+currentPage.value >= props.pageCount) return "";
  return getPagePath(+currentPage.value + 1);
};

watch(
  () => currentPage.value,
  (newPage) => {
    emit("on:change-page", newPage);
  }
);
</script>
