import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
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
