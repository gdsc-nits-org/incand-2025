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
        neue: ["Neue"],
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        ahsing: ["Ahsing", "sans-serif"],
        bricolage: ["bricolage-grotesque", "sans-serif"],
        tusker: ["TuskerGrotesk", "sans-serif"],
        oxygen: ["Oxygen", "sans-serif"],
      },
      boxShadow: {
        "custom-white": "5.31px 5.31px 0px 0px #FFFFFF",
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
