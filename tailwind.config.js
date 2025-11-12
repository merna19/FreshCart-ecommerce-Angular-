/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}',
  './node_modules/flowbite/**/*.js'],
  theme: {
    //override default theme here
    extend: {
      //to extend default theme
      colors: {
        main: '#0aad0a',
        nonActive: '#3b3636ff',
        maindark: '#085f08ff'
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

