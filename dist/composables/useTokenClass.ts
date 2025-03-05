import { useUniqueClassName } from "./useUniqueClassName";

interface IUseTokenClass {
  tokenClass: string;
}

export const useTokenClass = (
  component: string,
  variantValues?: string[]
): IUseTokenClass => {
  const tokenClass = useUniqueClassName(component, variantValues || []);
  return {
    tokenClass,
  };
};
