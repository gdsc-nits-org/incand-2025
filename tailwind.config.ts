import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        "maze-pattern": "url('/assets/navbar/maze.png')",
        "evnet-pattern": "url('/assets/events/backgroundImg.png')",
      },
      fontFamily: {
        neue: ["Neue"],
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        ahsing: ["Ahsing", "sans-serif"],
        bricolage: ["bricolage-grotesque", "sans-serif"],
        tusker: ["Tusker Grotesk"],
        oxygen: ["Oxygen", "sans-serif"],
        tusker2: ["Tusker", "sans-serif"],
        DMSerif: ["DM Serif Display", "serif"],
      },
      boxShadow: {
        "custom-white": "5.31px 5.31px 0px 0px #FFFFFF",
        "text-shadow": "2.89px 2.89px 0px 0px #FFFFFF",
      },
      screens: {
        xs: "450px",
        xL: "1350px",
        "4k": "3840px",
        laptop: "1200px",
        mobile: "300px",
        mobile1: "375px",
        mobile2: "400px",
        mobile3: "500px",
        tablet: "750px",
        tablet2: "900px",
        ipadpro: "1000px",
        ipadair: "1180px",
      },
      keyframes: {
        grow: {
          "0%": { transform: "scale(0)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        screw: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(0)", opacity: "0" },
        },
      },
      animation: {
        grow: "grow 0.4s ease-out",
        screw: "screw 0.4s ease-in",
      },
    },
  },
  plugins: [],
} satisfies Config;
