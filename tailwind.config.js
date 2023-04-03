export default {
  theme: {
    extend: {
      screens: {
        xs: {
          min: '0px',
          max: '475px',
        },
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('flowbite')],
};
