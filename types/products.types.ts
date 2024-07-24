import type { TProductAttributeTypesCollection } from "@ohto/client/types/products/attribute-types.types";
import type { IBrandResource } from "@ohto/client/types/products/brands.types";
import type { IProductVariantResource } from "@ohto/client/types/products/variants.types";
import type { TProductAttributesCollection } from "@ohto/client/types/products/attributes.types";
import type { EProductStatus } from "@ohto/client/types/products/index.types";
import type { ISearchSelectItem } from "~/components/forms/SelectFromSearch.vue";
import type { TFileCollection } from "@ohto/client/types/folders/files.types";
import type {
  IBillingModelResource,
  IBillingModelTypeResource,
} from "@ohto/client/types/billing-model.types";
import type { IBillingPeriodResource } from "@ohto/client/types/billing-periods/billing-periods.types";

export interface IVariant {
  id?: number;
  attributes: TProductAttributesCollection;
  sku?: string;
  price: number;
  stock: number;
  active?: boolean;
  billingModelType?: IBillingModelTypeResource;
  billingModel?: IBillingModelResource;
  billingPeriod?: IBillingPeriodResource;
  stripeId?: string;
}

export type TVariantTableEditableAttribute = Omit<IVariant, "attributes">;
export type TVariantTableEditableAttributeKey =
  keyof TVariantTableEditableAttribute;

export interface ICreateEditProductFormData {
  id?: number;
  title: string;
  slug: string;
  brand?: IBrandResource;
  createdBy: number;
  updatedBy: number;
  status: EProductStatus;
  productAttributeTypes: TProductAttributeTypesCollection;
  productAttributes: TProductAttributesCollection;
  productVariants: TWithUniqueId<IProductVariantResource>[];
  mediaFiles: TFileCollection;
}

export interface IAvailableAttributesByType extends ISearchSelectItem {
  attributes?: TProductAttributesCollection;
}

export interface IWithUniqueIdOptions {
  active?: boolean;
}

export type TWithUniqueId<T extends {}> = Omit<T, "id"> & {
  id?: number;
  uniqueId: string;
  active?: boolean;
};

export type TVariants = Record<string, IVariant>;
