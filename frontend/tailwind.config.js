/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light': {
          'bg': '#E5E5E5',
          'shadowLight': '#FBFBFB',
          'shadowDark': '#B0B0B1',
          'text': '#FBFBFB',
        },
        'dark': {
          'bg': '#141414',
          'shadowLight': '#171717',
          'shadowDark': '#111111',
          'text': '#141414',
        },
      },
      boxShadow: {
        'custom-light': '3px 3px 5px #B0B0B1, -3px -3px 5px #FBFBFB',
        'custom-light-inset': 'inset 2px 2px 3px #B0B0B1, inset -2px -2px 3px #FBFBFB',
        'custom-light-lg': '3px 3px 7px #B0B0B1, -3px -3px 7px #FBFBFB',
  
        'custom-dark': '3px 3px 5px #111111, -3px -3px 5px #171717',
        'custom-dark-inset': 'inset 2px 2px 3px #111111, inset -2px -2px 3px #171717',
        'custom-dark-lg': '3px 3px 7px #111111, -3px -3px 7px #171717',
      },
    }
  },
  plugins: [],
  darkMode: 'class',
}