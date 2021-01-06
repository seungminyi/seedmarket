module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      left: {
        '-full': '-100%'
      },
      buttom: {
        '-full': '-100%'
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#e22215',
      })
    },
    minWidth: {
      '1/4': '25%',
      '1/2': '50%',
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms'),
  ],
}
