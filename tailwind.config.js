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
        1.25: '5px',
        1.5: '6px',
        1.75: '7px',
        2.25: '9px',
        2.75: '11px',
        3.25: '13px',
        3.5: '14px',
        3.75: '15px',
        4.25: '17px',
        4.5: '18px',
        4.75: '19px',
        5.25: '21px',
        5.5: '22px',
        5.75: '23px',
        6.25: '25px',
        6.5: '26px',
        6.75: '27px',
        7.25: '29px',
        7.5: '30px',
        7.75: '31px',
        8.25: '33px',
        8.5: '34px',
        8.75: '35px',
        9.5: '38px',
        9.625: '38.5px',
        9.75: '39px',
        9.875: '39.5px',
        10.25: '41px',
        10.875: '43.5px',
        10.5: '42px',
        11.5: '46px',
        11.75: '47px',
        13.125: '52.5px',
        13.5: '54px',
        15.5: '62px',
        17.75: '71px',
        18: '72px',
        18.25: '73px',
        18.5: '74px',
        19.5: '78px',
        21.75: '87px',
        22.5: '90px',
        23: '92px',
        26.5: '106px',
        28.25: '113px',
        29.75: '119px',
        30.5: '122px',
        39: '156px',
        40.25: '161px',
        42.5: '170px',
        49.75: '199px',
        58.5: '234px',
        59.25: '237px',
        75.5: '302px',
        102: '398px',
        107: '428px',
        155.25: '621px',
        154: '616px',
        162: '648px',
        166.5: '666px',
        184.25: '737px',
        293: '1172px'
      },
      fontFamily: {
        'big-shoulders-display': "'Big Shoulders Display', cursive",
        'nunito': "'Nunito', sans-serif"
      },
      fontSize: {
        '11': '11px',
        '40': '40px',
        '56': '56px',
        '72': '72px'
      },
      lineHeight: {
        12: '48px',
        16: '64px',
        20: '80px'
      },
      colors: {
        '333333': '#333333',
        'd8d8d8': '#d8d8d8',
        'e64d47': '#e64d47',
        '55a85a': '#55a85a',
        'dadada': '#dadada',
        'cc2b25': '#cc2b25',
        'f5f7f5': '#f5f7f5',
        '555555': '#555555'
      },
      height: {
        0.5: '2px',
        10.5: '42px',
        70.25: '281px'
      },
      width: {
        10.5: '42px',
        92.5: '370px',
        136.25: '545px'
      },
      boxShadow: {
        'hero-nav-shadow': '-3px 0px 15px 0px #000',
        'account-shadow': '10px 10px 20px rgba(0, 0, 0, 0.1)',
        'menu-shadow': '-3px 0px 15px 0px #000000',
        'card-shadow': '15px 15px 20px -10px rgba(0,0,0,0.4)',
        'reviews-card-shadow': '20px 20px 40px rgba(0, 0, 0, 0.2)'
      },
      borderRadius: {
        '7': '7px',
        '18': '18px',
        '22': '22px',
        '30': '30px'
      },
      flexBasis: {
        47.5: '190px',
        75.5: '302px',
        79.5: '318px',
        102.5: '410px'
      },
      opacity: {
        29.51: '0.2951',
        50.13: '0.513',
        50.16: '0.516',
        50.3: '0.53'
      },
      maxWidth: {
        56.75: '227px',
        71.5: '286px',
        76.5: '306px',
        79.25: '317px',
        84.5: '338px',
        92.5: '370px',
        101.5: '406px',
        117.5: '470px',
        142.5: '570px'
      },
      minHeight: {
        '369': '369px',
        '607': '607px'
      },
      maxHeight: {
        '295': '295px'
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