/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    fontFamily: 'Gill Sans',
    container: {
      center: true
    },
    extend: {
      colors: {
        'primary': 'rgb(59,130,246)',
        'secondary': 'rgb(253,186,116)', 
        'default': 'rgb(0, 102, 255)',
        'green': '#1DB954',
        'dark': '#262626',
        'light': '#f0f5f5',
        'lightest': '#B3B3B3', 
        'darkest': '#0e0b0b',
        'yellow': '#F9ED69',
        'orange': '#F08A5D',
        'maroon': '#B83B5E',
        'purple': '#6A2C70',
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin'),
    require('daisyui'),
    // require('flowbite/plugin'),
  ],
}