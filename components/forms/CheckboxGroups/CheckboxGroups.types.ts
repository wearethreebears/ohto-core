import type { TCheckboxDesign } from "../Checkbox/Checkbox.types";
import type { ICheckboxGroup } from "../CheckboxGroup/CheckboxGroup.types";

export interface ICheckboxGroupsProps {
  title: string;
  design?: TCheckboxDesign;
  checkboxGroups: ICheckboxGroup[];
}

export type TCheckboxGroupCollection = Record<number, (number | string)[]>;
