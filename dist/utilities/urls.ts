export const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export const slugifyString = (string: string) => {
  return string
    .normalize("NFKD") // split accented characters into their base characters and diacritical marks
    .replace(/[\u0300-\u036f]/g, "") // remove all the accents, which happen to be all in the \u03xx UNICODE block.
    .replaceAll("-", " ") // replace hyphens with spaces, they'll be returned where necessary later
    .trim() // trim leading or trailing whitespace
    .toLowerCase() // convert to lowercase
    .replace(/[^a-z0-9 -]/g, "") // remove non-alphanumeric characters
    .replace(/\s+/g, "-") // replace spaces with hyphens
    .replace(/-+/g, "-"); // remove consecutive hyphens
};
