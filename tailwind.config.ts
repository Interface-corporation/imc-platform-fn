import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    // Borders
    "border-primary",
    "border-secondary",
    "border-creditCard",
    "border-mtnMomo",
    "border-logoBlue",

    // Backgrounds with opacity
    "bg-primary/10",
    "bg-secondary/10",
    "bg-creditCard/10",
    "bg-mtnMomo/10",
    "bg-logoBlue/10",

    // Text colors
    "text-primary",
    "text-secondary",
    "text-creditCard",
    "text-mtnMomo",
    "text-logoBlue",

    // Foregrounds (if used)
    "text-primary-foreground",
    "text-secondary-foreground",
    "text-creditCard-foreground",
    "text-mtnMomo-foreground",
    "text-logoBlue-foreground",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E3A5F",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#25AAE1",
          foreground: "#ffffff",
        },
        creditCard: {
          DEFAULT: "#D37B00",
          foreground: "#ffffff",
        },
        mtnMomo: {
          DEFAULT: "#ffcc08",
          foreground: "#ffffff",
        },
        logoBlue: {
          DEFAULT: "#ffcc08",
          foreground: "#ffffff",
        },
      },
    
      animation: {
        fadeIn: "fadeIn 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
