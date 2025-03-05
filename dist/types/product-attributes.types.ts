import type { IProductAttributeTypesResource } from "@ohto/client/types/products/attribute-types.types";

export interface ICreateEditProductAttributeFormData {
  id?: number;
  title: string;
  slug: string;
  type?: IProductAttributeTypesResource;
}
