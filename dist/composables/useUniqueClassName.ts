export const useUniqueClassName = (
  component: string,
  variantValues: string[]
): string => {
  return `${component}_${variantValues.join("_")}`;
};
