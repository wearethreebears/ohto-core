<template>
  <ul
    :class="[
      tokenClass,
      designTokenClasses,
      customDesignTokenClasses,
      'fixed flex flex-col justify-end',
    ]"
  >
    <AlertCard
      v-for="alert in alertStore.alerts"
      :key="alert.key"
      :title="alert.title"
      :body="alert.body"
      :type="alert.type"
    />
  </ul>
</template>

<script setup lang="ts">
import { useComponentDesignTokens } from "@ohto/core/dist/composables/useComponentDesignTokens";
import { useAlertsStore } from "~/stores/useAlertsStore";
import { CUSTOM_CLASS_TOKEN_MAP } from "./Alerts.map";
import { STATIC_TOKENS } from "./Alerts.tokens";
import AlertCard from "./AlertCard/AlertCard.vue";
import { useTokenClass } from "@ohto/core/dist/composables";

const alertStore = useAlertsStore();

const { tokenClass } = useTokenClass("Alerts");
const { designTokenClasses, customDesignTokenClasses } =
  useComponentDesignTokens(
    tokenClass,
    { ...STATIC_TOKENS },
    CUSTOM_CLASS_TOKEN_MAP
  );
</script>
