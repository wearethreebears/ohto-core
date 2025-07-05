<template>
  <div class="relative" :style="wrapperStyle">
    <picture>
      <img
        :class="[
          IMAGE_DISPLAY_MAP[props.display],
          'w-full h-full absolute top-0 left-0',
        ]"
        :src
        :width
        :height
        loading="lazy"
        :alt
      />
    </picture>
  </div>
</template>

<script setup lang="ts">
import { type IImageProps } from "./Image.types";
import { IMAGE_DISPLAY_MAP } from "./Image.map";
import { computed } from "vue";

const props = withDefaults(defineProps<IImageProps>(), {
  display: "DEFAULT",
});

const getGCD = (width: number, height: number): number => {
  return width % height ? getGCD(height, width % height) : height;
};
const ratio = (width: number, height: number): string => {
  const gcd: number = getGCD(width, height);
  return `${width / gcd}/${height / gcd}`;
};

const wrapperStyle = computed<string | undefined>(() => {
  if (props.display !== "DEFAULT") return `height: 100%; width: 100%`;
  return `aspect-ratio: ${ratio(props.width, props.height)}`;
});
</script>
