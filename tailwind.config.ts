import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        'neue-haas-grotesk': ['"Neue Haas Grotesk Display Pro"', 'sans-serif'],
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        ahsing: ['Ahsing', 'sans-serif'],
        bricolage: ['"Bricolage Grotesque"', 'sans-serif'],
      },
      boxShadow: {
        'custom-white': '5.31px 5.31px 0px 0px #FFFFFF',
      },

    },
  },
  plugins: [],
} satisfies Config;
