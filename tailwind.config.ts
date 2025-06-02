import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'red-black-center': 'linear-gradient(to right, #0a0a0a 0%, #f56565 50%, #0a0a0a 100%)',
      },
      skew: {
        '20': '20deg',
      }
    },
  },
  plugins: [],
};
export default config;
