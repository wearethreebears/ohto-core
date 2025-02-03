export type TCheckboxDesign = "DEFAULT" | "TOGGLE" | "CHECK";
export type TCheckboxDesignMap = Record<TCheckboxDesign, Component>;

export interface ICheckbox {
  label: string;
  hideLabel?: boolean;
  placeholder?: string;
  name: string;
  error?: string;
  value: number | string;
  design?: TCheckboxDesign;
  checked?: boolean;
  disabled?: boolean;
}

export interface ICheckboxProps extends ICheckbox {
  design?: TCheckboxDesign;
}
