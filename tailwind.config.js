const withAnimations = require('animated-tailwindcss');

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
  darkMode: 'media',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    'node_modules/preline/dist/*.js',
  ],
  plugins: [require('preline/plugin')],
};
