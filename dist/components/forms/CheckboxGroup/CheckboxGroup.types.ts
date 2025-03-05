import type { ICheckbox, TCheckboxDesign } from "../Checkbox/Checkbox.types";

export interface ICheckboxGroupProps {
  title: string;
  design?: TCheckboxDesign;
  checkboxes?: ICheckbox[];
}

export interface ICheckboxGroup extends ICheckboxGroupProps {
  id: number;
}
