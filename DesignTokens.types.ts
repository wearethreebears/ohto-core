import { $system } from "./DesignTokens.config";

// Utility to simplify type extraction
type TSystemValues<T> = T[keyof T];

export type TRem = `${number}rem`;
export type TPx = `${number}px`;
export type TFitContent = "fit-content";
export type TPercent = `${number}%`;
export type TZero = 0;

// Types extracted dynamically
export type TSystemColor =
  | (typeof $system)["colors"]["$inherit"]
  | TSystemValues<(typeof $system)["colors"]["shade"]>
  | TSystemValues<(typeof $system)["colors"]["green"]>
  | TSystemValues<(typeof $system)["colors"]["orange"]>
  | TSystemValues<(typeof $system)["colors"]["red"]>;

type TSystemTypographySize = TRem;

type TSystemTypographyFont = TSystemValues<
  (typeof $system)["typography"]["font"]
>;

export type TSystemPointer = TSystemValues<(typeof $system)["pointers"]>;

export type TSystemSpacing = TSystemValues<(typeof $system)["spacing"]>;

export type TSystemOpacity = TSystemValues<(typeof $system)["opacity"]>;

// Define a mapping of keys to their specific types
export interface IDefaultTokenMapping {
  backgroundColor: TSystemColor;
  borderColor: TSystemColor;
  margin: TSystemSpacing;
  marginX: TSystemSpacing;
  marginY: TSystemSpacing;
  marginTop: TSystemSpacing;
  marginRight: TSystemSpacing;
  marginBottom: TSystemSpacing;
  marginLeft: TSystemSpacing;
  padding: TSystemSpacing;
  paddingX: TSystemSpacing;
  paddingY: TSystemSpacing;
  paddingTop: TSystemSpacing;
  paddingRight: TSystemSpacing;
  paddingBottom: TSystemSpacing;
  paddingLeft: TSystemSpacing;
  ringColor: TSystemColor;
  typographyColor: TSystemColor;
  typographyFont: TSystemTypographyFont;
  cursor: TSystemPointer;
  bottom: TSystemSpacing;
  left: TSystemSpacing;
  right: TSystemSpacing;
  top: TSystemSpacing;
  typographySize: TSystemTypographySize;
}

// Generate tokens with state prefixes
type StateKeys = "" | "hover__" | "disabled__" | "focus__" | "placeholder__";

type GenerateTokens<TMapping> = {
  [Key in keyof TMapping as `${StateKeys}${Key & string}`]: TMapping[Key];
};

// Generate the final default tokens type
export type IDefaultTokens = GenerateTokens<IDefaultTokenMapping>;

export type TStaticTokens = Pick<IDefaultTokens, "focus__ringColor">;
