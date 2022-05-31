const isProduction = process.env.NODE_ENV === "production";

export const darkMode = isProduction ? "media" : "class";
export const content = [
  "./pages/**/*.{js,jsx,ts,tsx,mdx}",
  "./templates/**/*.{js,jsx,ts,tsx,mdx}",
  "./components/**/*.{js,jsx,ts,tsx,mdx}"
];
export const theme = {
  screens: {
    sm: "480px",
    md: "768px",
    lg: "976px",
    xl: "1440px"
  },
  fontFamily: {
    sans: ["Graphik", "sans-serif"],
    serif: ["Merriweather", "serif"]
  },
  extend: {
    colors: {
      highlight: "var(--color-highlight)",
      dark: "var(--color-dark)",
      light: "var(--color-light)",
      black: "#232628",
      "off-white": "#d5d5d0",
      blue: "#75dff2",
      cyan: "#708387",
      green: "#b3e33b",
      magenta: "#ae89fe",
      red: "#fc4384",
      yellow: "#ffa727",
      "bright-black": "#626566",
      "bright-white": "#f9f9f4",
      "bright-blue": "#75dff2",
      "bright-cyan": "#b1c6ca",
      "bright-green": "#c8ed71",
      "bright-magenta": "#ae89fe",
      "bright-red": "#ff7fac",
      "bright-yellow": "#ebdf86"
    },
    spacing: {
      128: "32rem",
      144: "36rem"
    },
    borderRadius: {
      "4xl": "2rem"
    }
  }
};
export const plugins = [];
