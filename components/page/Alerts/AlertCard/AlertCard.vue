<template>
  <li
    :class="[
      tokenClass,
      designTokenClasses,
      customDesignTokenClasses,
      'relative rounded-lg',
    ]"
  >
    <Icon class="flex" :icon="ALERT_CARD_CONFIG_MAP[props.type].icon" />
    <div class="flex flex-col">
      <Control tag="strong" theme="INHERIT">
        {{ props.title || ALERT_CARD_CONFIG_MAP[props.type].title }}
      </Control>
      <Body theme="INHERIT">{{ props.body }}</Body>
    </div>
  </li>
</template>

<script setup lang="ts">
import { Body, Control, Icon } from "@ohto/core/dist/components/base";
import { ALERT_CARD_CONFIG_MAP } from "./AlertCard.map";
import type { IAlertCardProps } from "./AlertCard.types";
import { useComponentDesignTokens } from "@ohto/core/dist/composables/useComponentDesignTokens";
import { CUSTOM_CLASS_TOKEN_MAP } from "./AlertCard.map";
import { STATIC_TOKENS, TYPE_TOKENS } from "./AlertCard.tokens";
import { useTokenClass } from "@ohto/core/dist/composables";

const props = withDefaults(defineProps<IAlertCardProps>(), {});

const { tokenClass } = useTokenClass("AlertCard", [props.type]);
const { designTokenClasses, customDesignTokenClasses } =
  useComponentDesignTokens(
    tokenClass,
    { ...STATIC_TOKENS, ...TYPE_TOKENS[props.type] },
    CUSTOM_CLASS_TOKEN_MAP
  );
</script>
