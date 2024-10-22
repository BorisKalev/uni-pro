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
        'red-black-center': 'linear-gradient(to right, #171717 0%, #f56565 50%, #171717 100%)',
      },
      skew: {
        '20': '20deg',
      }
    },
  },
  plugins: [],
};
export default config;
