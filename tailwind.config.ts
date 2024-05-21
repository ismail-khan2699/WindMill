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
        onHover: '#22A6B7',
        btncolor: '#f47b4b',
        bgcolor:'#33658A',
        bgdarkcolor:'rgb(25,50,68)',
        bgmain:'rgb(29,59,80)'

      },
    },
  },
  plugins: [],
};
export default config;
