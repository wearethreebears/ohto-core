export const variableMap = <T extends Record<string, any>>(map: T): string => {
  const styles: string[] = [];
  Object.entries(map).forEach(([key, value]) => {
    const wrappedValue = value.startsWith("--") ? `var(${value})` : value;
    const variableClass = `--${key}: ${wrappedValue};`;
    styles.push(variableClass);
  });
  return styles.join(" ");
};
