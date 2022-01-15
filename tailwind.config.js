module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#386eef',
        secondary: '#4b5563',
      },
      screens: {
        tablet: '640px',

        laptop: '1024px',

        desktop: '1280px',
      },
    },
  },
  plugins: [],
}
