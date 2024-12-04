export interface IUseDesignTokens {
  designTokens: string;
  designTokenClasses: string;
}

export const useDesignTokens = <
  Tokens extends Record<string, any>,
  Classes extends Record<string, string>
>(
  tokenMap: Tokens,
  classMap: Classes
): IUseDesignTokens => {
  const designTokens = () => {
    const styles: string[] = [];
    Object.entries(tokenMap).forEach(([key, value]) => {
      const wrappedValue = value.startsWith("--") ? `var(${value})` : value;
      const variableClass = `--${key}: ${wrappedValue};`;
      styles.push(variableClass);
    });

    return styles.join(" ");
  };

  const designTokenClasses = () => {
    const classes: string[] = [];
    const keys = Object.keys(tokenMap);

    keys.forEach((key) => {
      const classString = classMap[key];
      if (classString) {
        classes.push(classString);
      }
    });

    return classes.join(" ");
  };

  return {
    designTokens: designTokens(),
    designTokenClasses: designTokenClasses(),
  };
};
