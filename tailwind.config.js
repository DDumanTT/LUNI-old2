/** @type {import('tailwindcss').Config} */
const { toRadixVars } = require("windy-radix-palette/vars");

module.exports = {
  content: ["./src/ui/**/*.{js,ts,jsx,tsx}", "./src/index.html"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        pressstart2p: ['PressStart2P', 'sans-serif']
      },
      colors: {
        primary: toRadixVars('indigo'),
        secondary: toRadixVars('red'),
        neutral: toRadixVars('slate'),
        success: toRadixVars('grass'),
        warning: toRadixVars('yellow'),
        error: toRadixVars('tomato'),
        info: toRadixVars('cyan'),
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require("windy-radix-palette"),
  ],
}
