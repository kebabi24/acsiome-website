/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'neutralSilver': "#F5F7FA",
        'neutralDGrey': "#4D4D4D",
        'brandPrimary': "#2951D5",
        'brandSecondary': "red",
        'neutralSilver': "#F5F7FA",
        'gray900': "#717171",
        'textPrimary': "#0596FF",
        'bgGreen': "#2B2B2B",
        'bgWhite': "white",
        'bgBlack': "black",
        'blackBlack': "#26262C",
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

