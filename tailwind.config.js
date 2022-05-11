module.exports = {
  content: [
    "./dist/*.html",
    "./dist/js/*.js"
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px'
    },
    container: {
      center: true
    },
    extend: {
      spacing: {
        0.25: '1px',
        0.5: '2px',
        0.75: '3px',
        3.5: '14px',
        7.5: '30px',
        8.5: '34px'
      },
      fontFamily: {
        'big-shoulders-display': "'Big Shoulders Display', cursive",
        'nunito': "'Nunito', sans-serif"
      },
      fontSize: {
        '11': '11px',
        '40': '40px'
      },
      lineHeight: {
        12: '48px'
      },
      colors: {
        '333333': '#333333',
        'd8d8d8': '#d8d8d8',
        'e64d47': '#e64d47',
        '55a85a': '#55a85a',
        'dadada': '#dadada'
      },
      height: {
        0.5: '2px',
        10.5: '42px'
      },
      width: {
        10.5: '42px',
        136.25: '545px'
      },
      boxShadow: {
        'account-shadow': '10px 10px 20px rgba(0, 0, 0, 0.1)',
        'menu-shadow': '-3px 0px 15px 0px #000000'
      },
      borderRadius: {
        '7': '7px'
      },
      flexBasis: {
        47.5: '190px',
        75.5: '302px',
        79.5: '318px',
        102.5: '410px'
      },
      maxWidth: {
        296.5: '1186px'
      }
    },
  },
  plugins: [
    require('tailwindcss-debug-screens'),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '668px'
          },
          '@screen md': {
            maxWidth: '796px'
          },
          '@screen lg': {
            maxWidth: '1052px'
          },
          '@screen xl': {
            maxWidth: '1198px'
          },
          '@screen 2xl': {
            maxWidth: '1198px'
          }
        }
      })
    }
  ],
}