import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      backgroundImage: {
        "maze-pattern": "url('/assets/navbar/maze.png')",
        "event-pattern": "url('/assets/events/backgroundImg.png')",
        "event-pattern2": "url('/assets/events/backgroundImg2.png')",
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
        rocket: ["rocket", "sans-serif"],
      },
      boxShadow: {
        "custom-white": "5.31px 5.31px 0px 0px #FFFFFF",
        "text-shadow": "2.89px 2.89px 0px 0px #FFFFFF",
        "custom-black": "5.7px 5.7px 0px 0px #000000 ",
      },
      screens: {
        xs: "450px",
        xL: "1360px",
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
        fourK: "2000px",
      },
      keyframes: {
        spinSlow:{
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
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
        spinSlow: "spinSlow 5s linear infinite",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
} satisfies Config;
