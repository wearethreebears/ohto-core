import type {
  ICreateEditProductFormData,
  IVariant,
} from "@ohto/core/types/products.types";
import type { IProductResource } from "@ohto/client/types/products/index.types";
import type { IFileResource } from "@ohto/client/types/folders/files.types";
import { EFileType } from "@ohto/client/types/folders/files.types";
import { DEFAULT_VARIANT_UNIQUE_ID } from "@ohto/core/constants/products/productVariants";
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

export const getFeaturedImage = (product: IProductResource): IFileResource => {
  return product.mediaFiles?.find(({ file }) => file.type === EFileType.IMAGE)
    ?.file;
};
