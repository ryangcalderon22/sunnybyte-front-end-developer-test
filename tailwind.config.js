/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./src/**/*",
    './public/**/*.{html,js}',
  ],
  theme: {
    colors: {
      gray: {
        800: '#303030',
      },
    },
    textColor: {
      white: "#FFF",
      black: "#000",
      'brand-primary': '#7b6c63',
      gray: {
        300: '#c2c2c2',
        400: '#949494',
        500: '#5b5b5b',
        700: '#363636',
        900: '#212121',
      }
    },
    backgroundColor: {
      'button': '#24201e',
      'brand-primary': '#7b6c63',
      'gray-dark': '#1c1c1c',
      gray: {
        100: '#f5f5f5',
        800: '#303030',
        900: '#222'
      },
      'transparent': 'transparent'
    },
    borderColor: {
      white: "#FFF",
      'brand-nav-active': '#7b6c63',
      gray: {
        900: '#212121',
      },
    },
    extend: {
      spacing: {
        '1/2': '50%',
        '40': '40%',
        '2/3': '66.66667%',
        '1/3': '33.33333%',
      },
      screens: {
        'xs': '576px'
      },
    },
    ringColor: {
      'brand-primary': '#7b6c63',
    }
  },
  plugins: [],
}
