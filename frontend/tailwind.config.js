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
          'text': '#E8E4E5',
        },
        'dark': {

          // CHERRY
          // 'bg': '#c2000a',
          // 'text': '#141414',

          // RED
          // 'bg': '#c91d1d',
          // 'text': '#141414',

          // DARK GRAY
          'bg': '#353638',
          'text': '#141414',

          // VERY DARK
          // 'bg': '#141414',
          // 'text': '#141414',
        },
      },

      boxShadow: {
        'custom-light': '3px 3px 5px #B0B0B1, -3px -3px 5px #FBFBFB',
        'custom-light-inset': 'inset 2px 2px 3px #B0B0B1, inset -2px -2px 3px #FBFBFB',
        'custom-light-lg': '3px 3px 7px #B0B0B1, -3px -3px 7px #FBFBFB',

        // CHERRY
        // 'custom-dark': '3px 3px 5px #a50009, -3px -3px 5px #df000c',
        // 'custom-dark-inset': 'inset 2px 2px 3px #a50009, inset -2px -2px 3px #df000c',
        // 'custom-dark-lg': '3px 3px 7px #a50009, -3px -3px 7px #df000c',

        // RED
        // 'custom-dark': '3px 3px 5px #ab1919, -3px -3px 5px #e72121',
        // 'custom-dark-inset': 'inset 2px 2px 3px #ab1919, inset -2px -2px 3px #e72121',
        // 'custom-dark-lg': '3px 3px 7px #ab1919, -3px -3px 7px #e72121',

        // DARK GRAY
        'custom-dark': '3px 3px 5px #232325, -3px -3px 5px #43444A',
        'custom-dark-inset': 'inset 2px 2px 3px #232325, inset -2px -2px 3px #43444A',
        'custom-dark-lg': '3px 3px 7px #232325, -3px -3px 7px #43444A',

        // VERY DARK
        // 'custom-dark': '3px 3px 5px #111111, -3px -3px 5px #171717',
        // 'custom-dark-inset': 'inset 2px 2px 3px #111111, inset -2px -2px 3px #171717',
        // 'custom-dark-lg': '3px 3px 7px #111111, -3px -3px 7px #171717',
      },
      
      animation: {
        ping: 'ping 0.3s linear',
      },

      keyframes: {
        ping: {
          '0%': {
            transform: 'scale(1)',
            opacity: 1,
          },
          '100%%': {
            transform: 'scale(12)',
            opacity: 0,
          },
        },
      },
    }
  },
  plugins: [],
  darkMode: 'class',
}