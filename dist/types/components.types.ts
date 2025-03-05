export interface IBreakpointProp<T> {
  default?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
  "2xl"?: T;
}

export interface withTestId {
  testId?: string;
}
