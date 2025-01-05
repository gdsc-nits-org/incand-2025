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
        "neue-haas-grotesk": ['"Neue Haas Grotesk Display Pro"', "sans-serif"],
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        ahsing: ["Ahsing", "sans-serif"],
        bricolage: ['"Bricolage Grotesque"', "sans-serif"],
      },
      boxShadow: {
        "custom-white": "5.31px 5.31px 0px 0px #FFFFFF",
        tusker: ['"Tusker Grotesk"', "sans-serif"],
        oxygen: ['"Oxygen"', "sans-serif"],
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
