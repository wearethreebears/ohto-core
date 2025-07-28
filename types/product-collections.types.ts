import type { TProductCollection } from "@ohto/client/types/products/index.types";

export interface ICreateEditProductCollectionFormData {
  id?: number;
  title: string;
  slug: string;
  products?: TProductCollection;
}
