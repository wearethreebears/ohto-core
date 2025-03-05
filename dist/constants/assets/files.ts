export const ACCEPTED_FILE_UPLOAD_TYPE_MAP: Record<string, string> = {
  IMAGE: "image/*",
  VIDEO: "video/*",
  DOCUMENT: ".zip, .pdf, .docx",
};

export type TAcceptedFileType =
  | "ALL"
  | keyof typeof ACCEPTED_FILE_UPLOAD_TYPE_MAP;

export const ACCEPTED_FILE_STRING: Record<TAcceptedFileType, string> = {
  ALL: "",
  IMAGE: ".webp, .svg, .png, .jpg or .gif",
  VIDEO: ".mp4",
  DOCUMENT: ".zip, .pdf, .docx",
};
