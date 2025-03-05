export type TDisplay = "DEFAULT" | "FIT" | "COVER";

export interface IImageProps {
  id?: number;
  src?: string;
  width?: number;
  height?: number;
  alt?: string;
  display?: TDisplay;
}
