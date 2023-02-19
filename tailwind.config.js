/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/ui/**/*.{js,ts,jsx,tsx}", "./src/index.html"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        pressstart2p: ['PressStart2P', 'sans-serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--gradient-color-stops))',
      },
    },
  },
  plugins: [],
}
