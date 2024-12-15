const BASE_COLORS = {
  $inherit: "inherit",
  shade: {
    $0: "#ffffff",
    $100: "#f1f5f9",
    $200: "#e2e8f0",
    $300: "#cbd5e1",
    $400: "#94a3b8",
    $500: "#64748b",
    $600: "#475569",
    $700: "#334155",
    $800: "#1e293b",
    $900: "#0f172a",
    $1000: "#020617",
  },
  green: {
    $100: "#e8f5e9",
    $200: "#c8e6c9",
    $300: "#a5d6a7",
    $400: "#81c784",
    $500: "#66bb6a",
    $600: "#4caf50",
    $700: "#43a047",
    $800: "#388e3c",
    $900: "#2e7d32",
    $1000: "#1b5e20",
  },
  orange: {
    $500: "#ea580c",
  },
  red: {
    $500: "#dc2626",
  },
} as const;

export const $system = {
  colors: {
    ...BASE_COLORS,
    brand: {
      $greenLight: BASE_COLORS.green.$200,
      $green: BASE_COLORS.green.$700,
      $greenDark: BASE_COLORS.green.$800,
      $white: BASE_COLORS.shade.$100,
      $black: BASE_COLORS.shade.$800,
    },
    alerts: {
      $success: BASE_COLORS.green.$500,
      $error: BASE_COLORS.red.$500,
      $warning: BASE_COLORS.orange.$500,
    },
  },
  typography: {
    font: {
      $default: "ui-sans-serif, system-ui, sans-serif",
    },
  },
  borders: {
    colors: {
      $default: BASE_COLORS.shade.$100,
      $secondary: BASE_COLORS.shade.$300,
      $tertiary: BASE_COLORS.shade.$500,
    },
  },
  pointers: {
    $pointer: "pointer",
    $notAllowed: "not-allowed",
    $default: "default",
  },
  spacing: {
    $0: "0",
    $unset: "unset",
    $extraSmall: "0.25rem",
    $small: "0.5rem",
    $default: "1rem",
    $large: "2.5rem",
    $half: "50%",
  },
  opacity: {
    $0: "0",
    $10: ".1",
    $20: ".2",
    $30: ".3",
    $40: ".4",
    $50: ".5",
    $60: ".6",
    $70: ".7",
    $80: ".8",
    $90: ".9",
    $100: "1",
  },
} as const;
