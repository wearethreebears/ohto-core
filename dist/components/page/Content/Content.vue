<template>
  <div :class="['w-full flex flex-col', tokenClass]">
    <div class="flex mb-8">
      <div class="flex flex-1 space-x-4">
        <div class="flex-1 justify-center flex items-center">
          <div :class="CUSTOM_CLASS_TOKEN_MAP.width">
            <Title v-if="props.title">{{ title }}</Title>
          </div>
        </div>
        <div :class="[CUSTOM_CLASS_TOKEN_MAP.asideWidth, 'flex items-center']">
          <slot name="cta" />
        </div>
      </div>
    </div>

    <div :class="[tokenClass, 'flex']">
      <div class="flex flex-1 space-x-4">
        <section class="flex-1 justify-center flex">
          <div :class="CUSTOM_CLASS_TOKEN_MAP.width">
            <slot />
          </div>
        </section>
        <Aside v-if="$slots.aside" :class="CUSTOM_CLASS_TOKEN_MAP.asideWidth">
          <slot name="aside" />
        </Aside>
      </div>
      <div v-if="$slots.footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Aside } from "@ohto/core/components/layout";
import { Title } from "@ohto/core/components/base";
import type { IContentProps } from "./Content.types";
import { useComponentDesignTokens } from "@ohto/core/dist/composables/useComponentDesignTokens";
import { STATIC_TOKENS, WIDTH_TOKENS } from "./Content.tokens";
import { CUSTOM_CLASS_TOKEN_MAP } from "./Content.map";
import { useTokenClass } from "@ohto/core/composables";

const props = withDefaults(defineProps<IContentProps>(), {
  width: "DEFAULT",
});

const { tokenClass } = useTokenClass("Content", [props.width]);
useComponentDesignTokens(tokenClass, {
  ...STATIC_TOKENS,
  ...WIDTH_TOKENS[props.width],
});
</script>
