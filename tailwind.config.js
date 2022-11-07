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
      animation: {
        scroll: 'scroll 1.8s infinite',
      },
      keyframes: {
        scroll: {
          '0%': {
            opacity: 0,
          },
          '10%': {
            opacity: 1,
            transform: 'translateY(0%)',
          },
          '100%': {
            opacity: 0,
            transform: 'translateY(50%)',
          },
        },
      },
    },
  },
  plugins: [],
};
