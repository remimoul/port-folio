/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        satisfy: ['Satisfy', 'sans-serif'],
      },
      gridTemplateColumns: {
        // Définit une nouvelle classe pour 'repeat(auto-fill, minmax(25rem, 1fr))'
        'auto-fill': 'repeat(auto-fill, minmax(25rem, 1fr))',
      },
    },
  },
  plugins: [],
};
