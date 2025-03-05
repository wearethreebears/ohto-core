<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import api from "@ohto/client";
import { useDesignTokens } from "@ohto/core/dist/composables/useDesignTokens";

const token = useCookie("token");
const authStore = useAuthStore();
const basketStore = useBasketStore();
import { STATIC_TOKENS } from "~/App.tokens";

await api().setToken(token.value || null);

await useAsyncData("auth", async () => await api().sanctum().security().csrf());

await callOnce(authStore.initialiseAuth);
await callOnce(basketStore.initialiseBasket);

const { designTokens } = useDesignTokens(
  {
    ...STATIC_TOKENS,
  },
  {}
);

useHead({
  style: [`:root { ${designTokens}`],
  htmlAttrs: { lang: "en-GB" },
  title: "Official music merchandise | Heretic store | United Kingdom",
  meta: [
    {
      name: "description",
      content:
        "Shop 100% official, licensed music merchandise from top rock, metal, and punk bands. Find exclusive band t-shirts, hoodies and more. Authentic merchandise for music fans!",
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "96x96",
      href: "/favicon-96x96.png",
    },
    { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
  ],
});
</script>
