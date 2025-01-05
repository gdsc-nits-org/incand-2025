import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        "maze-pattern": "url('/assets/navbar/maze.png')",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        'neue-haas': ['"Neue Haas Grotesk"', 'sans-serif'],
        oxygen: ['Oxygen', 'sans-serif'],
        tusker: ['"Tusker Grotesk"', "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
