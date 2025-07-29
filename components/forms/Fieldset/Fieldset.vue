<template>
  <fieldset data-component="Fieldset" data-slot="root" class="flex flex-col">
    <legend>
      <Control tag="span">{{ title }}</Control>
    </legend>
    <div>
      <slot />
    </div>
  </fieldset>
</template>

<script setup lang="ts">
import { Control } from "@ohto/core/components/base";
import type { IFieldsetProps } from "./Fieldset.types";

defineProps<IFieldsetProps>();
</script>
