export type TWithId<T> = T & {
  id: string | number;
};

export type TCRUDCreateEdit = "CREATE" | "EDIT";
