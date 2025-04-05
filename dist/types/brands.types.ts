import type { JSONContent } from "@tiptap/vue-3";
export interface ICreateEditBrandFormData {
  id?: number;
  title: string;
  slug: string;
  description?: JSONContent;
}
