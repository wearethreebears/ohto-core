export const ACCEPTED_FILE_UPLOAD_TYPE_MAP: Record<string, string> = {
  IMAGE: "image/*",
  VIDEO: "video/*",
  DOCUMENT: ".zip, .pdf, .docx",
};

export type TAcceptedFileType =
  | "ALL"
  | keyof typeof ACCEPTED_FILE_UPLOAD_TYPE_MAP;
