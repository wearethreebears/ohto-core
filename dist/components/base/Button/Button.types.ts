export type TButtonDisplay = "DEFAULT" | "MICRO" | "SECONDARY";
export type TButtonTheme = "DEFAULT" | "SECONDARY";
export type TButtonComponent = "DEFAULT" | "LINK";

export type TButtonDisplayMap = Record<TButtonDisplay, Component>;
export type TButtonComponentMap = Record<TButtonComponent, Component>;

export interface IButtonProps {
  action?: () => void;
  theme?: TButtonTheme;
  display?: TButtonDisplay;
  testId?: string;
}

export interface IButtonElementProps extends IButtonProps {
  component: TButtonComponent;
}
