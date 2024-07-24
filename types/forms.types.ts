export interface IFormField {
  label: string;
  hideLabel?: boolean;
  placeholder?: string;
  name: string;
  error?: string;
}

export type TFieldWithId<T> = T & {
  id: string;
};
