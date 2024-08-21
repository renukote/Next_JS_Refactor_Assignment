import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-slider":
          "linear-gradient(90deg, rgba(89,62,91,1) 9%, rgba(25,178,113,1) 62%)",
      },
      keyframes: {
        scrollLeft: {
          "0%": { transform: "translateX(+100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        scrollLeft: "scrollLeft 20s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
