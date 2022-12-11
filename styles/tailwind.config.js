const autoprefixer = require('autoprefixer');

module.exports = {
  important: true,
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  content: ["_site/**/**/*.html"],
  darkMode: 'class',
  theme: { },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}