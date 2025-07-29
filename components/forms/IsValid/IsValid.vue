<template>
  <Icon data-component="IsValid" data-slot="root" :icon="props.isValid ? 'TICK' : 'CROSS'" />
</template>

<script setup lang="ts">
import Icon from "../../base/Icon/Icon.vue";
import type { IIconIsValidProps } from "./IsValid.types";
const props = withDefaults(defineProps<IIconIsValidProps>(), {});
</script>
