export type TFormMethod = "get" | "post";
export type TFormEncode = "multipart/form-data";

export interface IFormProps {
  method?: TFormMethod;
  action?: string;
  encode?: TFormEncode;
}
