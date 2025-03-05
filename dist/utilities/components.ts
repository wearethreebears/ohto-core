import type { IBreakpointProp } from "@ohto/types/components.types";

export const getDynamicClassListFromProp = (
  classString: string,
  defaultValue: string | number,
  prop: string | number | IBreakpointProp<string | number>
) => {
  const breakpointClassList: string[] = [];
  if (["string", "number"].includes(typeof prop)) {
    breakpointClassList.push(`${classString}${prop}`);
  }
  if (typeof prop === "object") {
    Object.entries(prop).forEach(([key, value]) => {
      key = key === "default" ? "" : `${key}:`;
      breakpointClassList.push(`${key}${classString}${value}`);
    });

    if (!prop.default) {
      breakpointClassList.push(`${classString}${defaultValue}`);
    }
  }

  return breakpointClassList;
};
