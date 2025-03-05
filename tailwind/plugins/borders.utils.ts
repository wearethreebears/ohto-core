import type { PluginAPI } from "tailwindcss/types/config";

type BorderStyle = "solid" | "dashed";
type Side = "" | "Top" | "Bottom" | "Left" | "Right";
type DirectionSuffix = "" | "-t" | "-b" | "-l" | "-r";

interface BorderStyleConfig {
  className: string;
  style: BorderStyle;
  width: string;
}

export const borderUtils = ({ addUtilities }: PluginAPI) => {
  const styles: BorderStyleConfig[] = [
    { className: "border", style: "solid", width: "1px" },
    { className: "border-dashed", style: "dashed", width: "2px" },
  ];

  const directions: Record<DirectionSuffix, Side> = {
    "": "", // Default for all sides
    "-t": "Top",
    "-b": "Bottom",
    "-l": "Left",
    "-r": "Right",
  };

  const utilities = styles.reduce<Record<string, Record<string, string>>>(
    (acc, { className, style, width }) => {
      Object.entries(directions).forEach(([suffix, side]) => {
        const key = `.${className}${suffix}`;
        acc[key] = side
          ? { [`border${side}Style`]: style, [`border${side}Width`]: width }
          : { borderStyle: style, borderWidth: width };
      });
      return acc;
    },
    {}
  );

  return addUtilities(utilities);
};
