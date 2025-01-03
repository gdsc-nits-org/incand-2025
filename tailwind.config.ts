import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        'neue-haas': ['"Neue Haas Grotesk"', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
