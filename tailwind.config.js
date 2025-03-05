import { borderUtils } from "./tailwind/plugins/borders.utils";

module.exports = {
  content: ["./DesignTokens.map.ts", './node_modules/@ohto/core/**/*.{vue,js,ts,jsx,tsx}',],
  safelist: [
    {
      pattern: /col-span-(1|2|3|4|5|6|7|8|9|10|11|12)/,
      variants: ['sm', 'md', 'lg', 'xl', '2xl']
    },
    {
      pattern: /col-start-(1|2|3|4|5|6|7|8|9|10|11|12)/,
      variants: ['sm', 'md', 'lg', 'xl', '2xl']
    },
  ],
  theme: {
    fontFamily: {
      sans: ["Lexend", "serif"]
    }
  },
  plugins: [
    function (addUtilities) {
      borderUtils(addUtilities)
    },
  ],

}
