import { IInputProps } from "../Input/Input.types";

export type IStripeInputProps = Pick<
  IInputProps,
  "label" | "hideLabel" | "name" | "id"
>;
