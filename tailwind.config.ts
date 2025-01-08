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
        "neue-haas": ['"Neue Haas Grotesk"', "sans-serif"],
        oxygen: ["Oxygen", "sans-serif"],
        tusker: ['"Tusker Grotesk"', "sans-serif"],
        tusker2: ["Tusker", "sans-serif"],
      },
      screens: {
        "4k": "3840px",
        laptop: "1200px",
        mobile: "340px",
        tablet: "750px",
        ipadpro: "1000px",
        xs: { min: "20px", max: "300px" },
        s: { min: "300px", max: "500px" },
        m: { min: "500px", max: "640px" },
        l: { min: "640px", max: "1000px" },
      },
    },
  },
  plugins: [],
} satisfies Config;
