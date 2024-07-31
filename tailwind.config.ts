import type { Config } from "tailwindcss";
// const { flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette');
 
type ColorPalette = {
  [key: string]: string | ColorPalette;
};

function flattenColorPalette(colors: ColorPalette): { [key: string]: string } {
  const result: { [key: string]: string } = {};

  function flatten(colors: ColorPalette, prefix = ''): void {
    for (const key in colors) {
      const value = colors[key];
      const newKey = prefix ? `${prefix}-${key}` : key;

      if (typeof value === 'string') {
        result[newKey] = value;
      } else {
        flatten(value, newKey);
      }
    }
  }

  flatten(colors);
  return result;
}




const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode  : "class",
  theme: {
    extend: {
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        spotlight: {
          "0%": {
            opacity: '0',
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: '1',
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [function addVariablesForColors({ addBase, theme }: any) {
    let allColors = flattenColorPalette(theme("colors"));
    let newVars = Object.fromEntries(
      Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
    );
  
    addBase({
      ":root": newVars,
    });
  }],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).

export default config;
