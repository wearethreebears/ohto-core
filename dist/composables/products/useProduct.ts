import type { IProductResource } from "@ohto/client/types/products/index.types";
import { EAPI } from "@ohto/client/invoke";
import { PATH_DEFAULT_FILE } from "@ohto/client/files";
import { computed } from "vue";
import { useNuxtApp } from "#app";

export default function useProduct(product: IProductResource | null) {
  const { $ohtoConfig } = useNuxtApp();

  const fromPrice = computed<number | undefined>(() => {
    let price: number | undefined;

    product?.variants?.forEach((variant) => {
      if (!price || (variant.price && variant.price < price)) {
        price = variant.price;
      }
    });

    return price;
  });

  const getProductImage = (slug: string | undefined = undefined) =>
    slug
      ? `${$ohtoConfig.client.baseUrl}${EAPI.DEFAULT}${PATH_DEFAULT_FILE}/${slug}`
      : undefined;

  return {
    fromPrice,
    getProductImage,
  };
}
