import type {
  ICreateEditProductFormData,
  IVariant,
} from "@ohto/types/products.types";
import { DEFAULT_VARIANT_UNIQUE_ID } from "@ohto/constants/products/productVariants";
import { slugRegex } from "./urls";

export const getUniqueVariantId = (attributeIds?: number[]): string =>
  !!attributeIds?.length
    ? attributeIds.sort().join("-")
    : DEFAULT_VARIANT_UNIQUE_ID;

export const getVariantAttributeIds = (variant: IVariant): number[] =>
  variant?.attributes.map(({ id }) => id);

export const isValidProductTitle = (title: string) => !!title.trim().length;

export const isValidProductSlug = (slug: string) =>
  !!slug.trim().length && slug.match(slugRegex);

export const isValidActiveProduct = (
  producTRequestData: ICreateEditProductFormData
): boolean => {
  return (
    (isValidProductTitle(producTRequestData.title) &&
      isValidProductSlug(producTRequestData.slug) &&
      !!producTRequestData.productVariants.length) ||
    false
  );
};
