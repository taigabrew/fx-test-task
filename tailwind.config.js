const { fontFamily, spacing } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.vue', './index.html'],
  darkMode: 'class',
  theme: {
    textIndent: (theme, { negative }) => ({
      ...spacing,
      ...negative(spacing),
    }),
    truncate: {
      lines: {
        2: '2',
        3: '3',
        5: '5',
        8: '8',
      },
    },
    pseudo: {
      before: 'before',
      after: 'after',
      'not-first': 'not(:first-child)',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: '#000',
      white: '#fff',

      gray: colors.slate,
      teal: colors.teal,

      lime: colors.lime,
      rose: colors.rose,
      pink: colors.pink,
      fuchsia: colors.fuchsia,
      purple: colors.purple,
      violet: colors.violet,
      indigo: colors.indigo,
      sky: colors.sky,
      cyan: colors.cyan,
      amber: colors.amber,
      emerald: colors.emerald,

      red: colors.red,
      green: colors.green,
      yellow: colors.amber,
      orange: colors.orange,
      blue: colors.blue,
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      spacing: {
        13: '3.25rem',
      },
      boxShadow: {
        shade: '0 3px 10px rgba(0,0,0,.03), 0 1px 3px rgba(0,0,0,.02)',
        shade2: '0 3px 10px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.07)',
      },
      padding: {
        'ar-8/9': '112.5%',
        'ar-8/10': '125%',
      },
      margin: {
        0.5: spacing['0.5'],
        '7p': '7%',
      },
      screens: {
        // ...screens,
        '3xl': '1896px',
        print: { raw: 'print' },
      },
      fontFamily: {
        sans: ['Inter', 'IBM Plex Sans', ...fontFamily.sans],
      },
      maxHeight: {
        '90p': '90%',
        '3/4-screen': '75vh',
        ...spacing,
        xs: '20rem',
        xl: '36rem',
      },
      minHeight: {
        ...spacing,
        13: '3.25rem',
        xs: '20rem',
        sm: '24rem',
        '1/3': '33.333%',
        '1/2': '50%',
      },
      maxWidth: {
        ...spacing,
        '90p': '90%',
        '6xl': '72rem',
      },
      minWidth: {
        ...spacing,
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '48rem',
        '3xl': '64rem',
      },
      ringWidth: {
        3: '3px',
      },
      height: {
        '5px': '5px',
        36: '9rem',
        '70vh': '70vh',
      },
      width: {
        '5px': '5px',
        '62vw': '61.8vw',
        '90vw': '90vw',
        content: 'max-content',
      },
      inset: {
        13: '3.25rem',
        '1/2': '50%',
        full: '100%',
      },
      transitionProperty: {
        bg: 'background-color',
        text: 'color',
        cheap: 'opacity, transform',
      },
      transitionDuration: {
        250: '250ms',
        325: '325ms',
        500: '500ms',
      },
      transitionTimingFunction: {
        'in-sine': 'cubic-bezier(0.47, 0, 0.745, 0.715)',
        'in-out-sine': 'cubic-bezier(0.45, 0.05, 0.55, 0.95)',
        'out-sine': 'cubic-bezier(0.39, 0.575, 0.565, 1)',
        'out-cubic': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        'out-quart': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
        'in-out-quart': 'cubic-bezier(0.77, 0, 0.175, 1)',
      },
      zIndex: {
        '-1': -1,

        // leaflet 😐
        2000: 2000,
      },
      fill: {
        none: 'none',
      },
      strokeWidth: {
        '1/4': '0.25',
        '1/2': '0.5',
        '3/2': '1.5',
        '5/2': '2.5',
      },
    },
  },
}
