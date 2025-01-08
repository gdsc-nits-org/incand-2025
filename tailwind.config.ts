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
        tusker: ["Tusker Grotesk"],
        oxygen: ["Oxygen", "sans-serif"],
        tusker2: ["Tusker", "sans-serif"],
      },
      boxShadow: {
        "custom-white": "5.31px 5.31px 0px 0px #FFFFFF",
        "text-shadow": "2.89px 2.89px 0px 0px #FFFFFF",
      },
      screens: {
        "4k": "3840px",
        laptop: "1200px",
        mobile: "340px",
        tablet: "750px",
        ipadpro: "1000px",
        'xs': '450px', // Custom min-width for extra small screens
        'xL': '1350px', // Custom min-width for extra small screens
        'md-height': { 'raw': '(min-height: 600px)' }, // Custom min-height
      },
    },
  },
  plugins: [],
} satisfies Config;
