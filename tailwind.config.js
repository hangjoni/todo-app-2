/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'todo-primary': '#00668A',
        'todo-secondary': '#004E71'
      }
    },
    fontFamily: {
      Roboto: ['Roboto, sans-serif']
    },
    container: {
      padding: '2px',
      center: true,
      maxWidth: '100%',
      width: '100%'
    }
  },
  plugins: []
}
