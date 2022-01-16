module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          100: '#87a8f5',
          200: '#7399f3',
          300: '#5f8bf2',
          400: '#4b7cf0',
          500: '#386eef',
          600: '#3263d7',
          700: '#2c58bf',
          800: '#274da7',
          900: '#21428f',
        },
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
