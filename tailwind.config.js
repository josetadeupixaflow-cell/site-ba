/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#7B2CBF',
        secondary: '#9D4EDD',
        accent: '#C77DFF',
      },
      boxShadow: {
        soft: '0 20px 50px -16px rgba(123, 44, 191, 0.25)',
      },
    },
  },
  plugins: [],
};
