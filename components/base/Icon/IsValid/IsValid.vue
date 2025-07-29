<template>
  <Icon
    data-component="IsValid"
    data-slot="root"
    :icon="props.isValid ? 'TICK' : 'CROSS'"
  />
</template>

<script setup lang="ts">
import Icon from "../Icon.vue";
import type { IIconIsValidProps } from "./IconIsValid.types";
const props = withDefaults(defineProps<IIconIsValidProps>(), {});
</script>
