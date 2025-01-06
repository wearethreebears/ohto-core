import {
  useDesignTokens as useCoreDesignTokens,
  type IUseDesignTokens as IUseCoreDesignTokens,
} from "./index";
import { DEFAULT_CLASS_TOKEN_MAP } from "../DesignTokens.map";

interface IUseDesignTokens extends IUseCoreDesignTokens {
  tokenClass: string;
  customDesignTokens?: string;
  customDesignTokenClasses?: string;
}

export const useComponentDesignTokens = <Tokens extends Record<string, any>>(
  tokenClass: string,
  tokenMap: Tokens,
  customClassMap: Record<string, string> | undefined = undefined
): IUseDesignTokens => {
  const { designTokens } = useCoreDesignTokens(
    tokenMap,
    DEFAULT_CLASS_TOKEN_MAP
  );

  const styles: string[] = [];

  let customProperties = {};

  if (customClassMap) {
    const {
      designTokens: customDesignTokens,
      designTokenClasses: customDesignTokenClasses,
    } = useCoreDesignTokens(tokenMap, customClassMap);

    customProperties = {
      customDesignTokens,
      customDesignTokenClasses,
    };
    styles.push(customDesignTokens);
  } else {
    styles.push(designTokens);
  }

  // useHead({
  //   style: [
  //     {
  //       id: tokenClass,
  //       innerHTML: `.${tokenClass} { ${styles.join()} }`,
  //     },
  //   ],
  // });

  return {
    tokenClass,
    ...customProperties,
    ...useCoreDesignTokens(tokenMap, DEFAULT_CLASS_TOKEN_MAP),
  };
};
