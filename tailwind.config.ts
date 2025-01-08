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
        mobile2:"400px",
        mobile3:"500px",
        tablet: "750px",
        tablet2:"900px",
        ipadpro: "1000px",
      },
      screens: {
        "4k": "3840px",
        laptop: "1200px",
        mobile: "340px",
        tablet: "750px",
        ipadpro: "1000px",
      },
    },
  },
  plugins: [],
} satisfies Config;
