/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#171a1d',
        'custom-neutral': '#a3a3a3',
        'custom-cyan': '#50bec2',
      },
      fontFamily: {
        sans: ['Nunito', 'ui-sans-serif', 'sans-serif'],
        saira: ['Saira', 'ui-sans-serif', 'sans-serif'],
        nunito: ['Nunito', 'ui-sans-serif', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 15px #fff5',
      },
    },
  },
  plugins: [],
};
