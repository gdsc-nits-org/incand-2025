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
        tusker: ['"Tusker Grotesk"', "sans-serif"],
        oxygen: ['"Oxygen"', "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
