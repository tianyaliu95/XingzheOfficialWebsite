module.exports = {
  important: true,
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#1F1E1A',
        link: '#456893',
        success: '#B38859',
        gold: '#C19F79',
        error: '#EBD9D9',
        grays: {
          800: '#717279',
          700: '#3A3B3D',
          600: '#45433F',
          500: '#6A6763',
          400: '#A19E9B',
          300: '#D4D2D0',
          200: '#EFEEEC',
          100: '#F8F8F8'
        }
      },
      spacing: {
        0.5: '0.125rem',
        18: '4.5rem'
      },
      fontSize: {
        '3.5xl': '2rem'
      },
      height: {
        72: '18rem',
        80: '20rem',
        88: '22rem',
        96: '32rem'
      },
      opacity: {
        10: '10%',
        66: '66%'
      },
      zIndex: {
        '-10': '-10',
        100: 100
      }
    }
  },
  variants: {
    zIndex: ['hover', 'active']
  },
  plugins: []
}
