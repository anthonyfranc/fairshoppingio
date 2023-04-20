export default {
  theme: {
    extend: {
      screens: {
        xs: {
          min: '0px',
          max: '640px',
        },
        sxl: {
          min: '1536px',
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
  content: [
    // other files...
    './node_modules/flowbite.{js,ts}',
  ],
  //this enables dark mode based on device setting
  darkMode: 'media',
};
