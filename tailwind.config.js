module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      keyframes: {
        opacity: {
          '0%': {opacity: '0'},
          '50%': {opacity: '1'},
          '100%': {opacity: '0'},
        },
      },
    },
  },
  plugins: [],
};
