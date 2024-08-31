/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    container: {
      screens: {
        sm: '375px',
        md: '768px',
        lg: '1440px',
      },
    },
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1440px',
    },
    extend: {
      fontFamily: {
        suisse: ['"Suisse Intl"', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};
