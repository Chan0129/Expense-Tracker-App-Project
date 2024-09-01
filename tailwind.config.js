/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    container: {
      center: true, // Center the container by default
      padding: '1rem', // Optional: Add some padding to the container
    },
    extend: {
      screens: {
        sm: '375px',
        md: '768px',
        lg: '1440px',
      },
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
      colors: {
        'custom-green': '#0EBB69', // Add custom green color
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
};
